import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
})
export class LifecycleEventComponent implements OnInit {

  firstName: string;

  constructor(){
    console.log("constructor");
    this.firstName = "";
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("ngOnChanges");
    
  }

  ngDoCheck(): void{
    console.log("ngDoCheck");
    
  }

  ngAfterContentInit(): void{
    console.log("ngAfterContentInit");
    
  }

  ngAfterContentChecked(): void{
    console.log("ngAfterContentChecked");
    
  }

  ngAfterViewInit(): void{
    console.log("ngAfterViewInit");
    
  }

  ngAfterViewChecked(): void{
    console.log("ngAfterViewChecked");
    
  }

  afterNextRender(): void{
    console.log("afterNextRender");
    
  }

  afterRender(): void{
    console.log("afterRender");
    
  }

  ngOnDestroy(): void{
    console.log("ngOnDestroy");
    
  }
}
