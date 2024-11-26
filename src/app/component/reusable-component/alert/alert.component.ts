import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgClass],
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnChanges{

  @Input() message: string = '';
  @Input() alertType: string = '';

  alertMode: string = 'Demo'

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
    
  }
}
