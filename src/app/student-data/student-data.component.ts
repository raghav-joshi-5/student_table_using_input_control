import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../model/std_data';
import { student } from '../const/std_data';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss'],
})
export class StudentDataComponent implements OnInit {
  stdArr: Array<Istd> = student;
  generateUuid() {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;

        return value.toString(16);
      }
    );
  }

  @ViewChild('name') name!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('address') address!: ElementRef;
  @ViewChild('grade') grade!: ElementRef;
  @ViewChild('age') age!: ElementRef;

  onStdAdd() {
    let stdObj: Istd = {
      id: this.generateUuid(),
      name: this.name.nativeElement.value,
      lname: this.lname.nativeElement.value,
      contact: this.contact.nativeElement.value,
      email: this.email.nativeElement.value,
      address: this.address.nativeElement.value,
      grade: this.grade.nativeElement.value,
      age: this.age.nativeElement.value,
    };

    console.log(stdObj);
    this.stdArr.push(stdObj);
    this.name.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.contact.nativeElement.value = '';
    this.email.nativeElement.value = '';
    this.address.nativeElement.value = '';
    this.grade.nativeElement.value = '';
    this.age.nativeElement.value = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
