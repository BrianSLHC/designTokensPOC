import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'shv-form-field',
  templateUrl: './shv-form-field.component.html',
  styleUrls: ['./shv-form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  constructor() { }

  setDisabled(){
    console.log('disabled');
  }

  setReadOnly(){
    console.log('readonly');
  }
  setReadWrite() {
    console.log('readwrite');
  }

  ngOnInit(): void {
  }

}
