import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from './na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
})
export class PipeComponent {

  firstName: string = "this is Demo session";

  currentDate: Date = new Date();

  currentTime : Observable<Date> = new Observable<Date>;

  student: any = {
    name:'amit',
    city:'kalol',
    empId: 348,
    state: ''

  }

  constructor(){
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }

}
