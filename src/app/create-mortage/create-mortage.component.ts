import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-mortage',
  templateUrl: './create-mortage.component.html',
  styleUrls: ['./create-mortage.component.scss']
})
export class CreateMortageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mortageForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    EmpType: new FormControl(''),
    deposit: new FormControl(''),
    loanAmt: new FormControl(''),
    company: new FormControl(''),
    salary: new FormControl(''),
    tprop: new FormControl(''),
    pName: new FormControl(''),
    pNumber: new FormControl(''),
    pValue: new FormControl(''),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.mortageForm.value);
  }
  next(event) {
    console.log(event);
  }
}
