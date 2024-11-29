import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { catchError, debounce, debounceTime, delay, filter, fromEvent, map, Observable, of, Subscription, switchMap, tap} from 'rxjs';
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
              // return ajax(`http://192.168.7.94:8080/api/products/${e.target.value}`)
          }),
          map((ajaxResponse:any)=>ajaxResponse.response.items)
        )
  
    this.typeAheadSub = searchObs.subscribe((value:any)=>{
      // console.log(value)
      this.gitHubUsers = value
    })

    //observable -> who emits the data
   const pizzaObservable =  new Observable((subscriber) => {
      subscriber.next({name: 'Farm House',veg: true, size: 'small'})
      subscriber.next({name: 'Margherita',veg: true, size: 'large'})
      subscriber.next({name: 'Barbecue chicken',veg: false, size: 'medium'})
      subscriber.complete()
    }).pipe(
      tap((pizza:any)=>{
        //side effects
        // if (pizza.size == 'large') {
        //   throw new Error('large size pizzasa are not available ')
          
        // }
      }),
      filter((pizza:any)=> pizza.veg == true),
      map((pizza:any)=>pizza.name)
    )

    //subscriber/observer -> who consumes the emited data
    // pizzaObservable.subscribe(
    //   (value)=>console.log(value),
    //   (err)=>console.log(err.message),
    //   ()=>console.log('I am done eating pizzasa') 
    // )
  }

  ngOnDestroy(){
    if (this.typeAheadSub) {
      console.log(this.typeAheadSub);
      this.typeAheadSub.unsubscribe();
    } 
  }

}
