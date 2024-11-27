import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal('Amit')
  lastName = signal('Chauhan')

  courseName = 'JAVA';

  id = signal<number>(123456);

  fullName = computed(() => this.firstName() + " " + this.lastName())

  cityList = signal(['Ahmedabad','Gandhinagar','Kalol','Mahesana'])

  studentObj = signal({
    name: 'Amit',
    city: 'kalol'
  })

  constructor(){
    const fName = this.firstName();
    setTimeout(() => {
      // this.firstName.set('Dot Net')
      this.courseName = 'Angular'
    },5000);
  }

  changeName(){
    this.firstName.set("Sachin")
  }


  changeLastName(){
    this.lastName.set("Tendulkar")

  }

  addCity(){
    this.cityList.set([...this.cityList(),'Surat'])
  }

  changeStuCity(){
    this.studentObj.set({...this.studentObj(),city:'Surat'})
  }

}
