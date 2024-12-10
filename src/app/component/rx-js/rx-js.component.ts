import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { catchError, debounce, debounceTime, delay, filter, fromEvent, map, Observable, of, shareReplay, Subject, Subscription, switchMap, tap} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rx-js',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rx-js.component.html',
  styleUrl: './rx-js.component.css'
})
export class RxJsComponent implements OnDestroy {
  
  @ViewChild('search',{static:true}) search?: ElementRef<HTMLInputElement>

  gitHubUsers:any = [];
  typeAheadSub?: Subscription;

  ngOnInit(): void {

    //TypeAhead
    const searchObs = fromEvent(this.search!.nativeElement,'input')
        .pipe(
          debounceTime(1000),
          filter((e:any)=> e.target.value != ""),
          switchMap((e: any) => {
            return ajax(`https://api.github.com/search/users?q=${e.target.value}`)
          }),
          map((ajaxResponse:any)=>ajaxResponse.response.items)
        )
  
    this.typeAheadSub = searchObs.subscribe((value:any)=>{
      // console.log(value)
      this.gitHubUsers = value
    })

    //observable -> who emits the data
   const pizzaObservable =  new Observable<{name:string,veg:boolean,size:string}>((subscriber) => {
    console.log('inside Observable');
    
      subscriber.next({name: 'Farm House',veg: true, size: 'small'})
      // subscriber.next({name: 'Margherita',veg: true, size: 'large'})
      // subscriber.next({name: 'Barbecue chicken',veg: false, size: 'medium'})
      subscriber.complete()
    }).pipe(
      tap((pizza)=>{
        console.log('inside pipe');
        
        //side effects
        // if (pizza.size == 'large') {
        //   throw new Error('large size pizzasa are not available ')
          
        // }
      }),
      filter((pizza)=> pizza.veg == true),
      map((pizza)=>pizza.name),
      shareReplay()
    )

    // subscriber/observer -> who consumes the emited data
  //   pizzaObservable.subscribe(
  //     (value)=>console.log(value),
  //     (err)=>console.log(err.message),
  //     ()=>console.log('I am done eating pizzasa') 
  //   )

  //   pizzaObservable.subscribe(
  //     (value)=>console.log(value),
  //     (err)=>console.log(err.message),
  //     ()=>console.log('I am done eating pizzasa') 
  //   )

    const subject = new Subject<number>();

    subject.subscribe((value)=>{
      // console.log('subscribe 1',value);
    })

    subject.subscribe((value)=>{
      // console.log('subscribe 2',value);
    })

    subject.next(1)
    subject.next(2)
  }

  ngOnDestroy(){
    if (this.typeAheadSub) {
      // console.log(this.typeAheadSub);
      this.typeAheadSub.unsubscribe();
    } 
  }

  // Redirect to user's GitHub profile
  goToProfile(login: string): void {
    window.open(`https://github.com/${login}`, '_blank');  // Opens GitHub profile in a new tab
  }

  imageView(imageUrl: string):void{
    window.open(imageUrl, '_blank');
  }
  

}
