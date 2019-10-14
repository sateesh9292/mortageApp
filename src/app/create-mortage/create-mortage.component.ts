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
    EmpType: new FormControl(''),
    deposit: new FormControl(''),
    loanAmt: new FormControl('')
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.mortageForm.value);
  }
}
