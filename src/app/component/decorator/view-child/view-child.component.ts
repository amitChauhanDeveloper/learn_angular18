import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../../reusable-component/alert/alert.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
})
export class ViewChildComponent implements AfterViewInit{

  @ViewChild('txt') textBox?: ElementRef
  @ViewChild(AlertComponent) alertComp?: AlertComponent


  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    const alertMode = this.alertComp?.alertMode;
  }

}
