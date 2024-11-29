import { Component } from '@angular/core';
import { filter, map, Observable, tap} from 'rxjs';

@Component({
  selector: 'app-rx-js',
  standalone: true,
  imports: [],
  templateUrl: './rx-js.component.html',
  styleUrl: './rx-js.component.css'
})
export class RxJsComponent {

  ngOnInit(): void {
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
    pizzaObservable.subscribe(
      (value)=>console.log(value),
      (err)=>console.log(err.message),
      ()=>console.log('I am done eating pizzasa') 
    )
  }

}
