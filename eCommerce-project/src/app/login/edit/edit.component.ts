import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      cities: this.formBuilder.array([])
    });
  }
  
  get cities() {
    return this.formGroup.get('cities') as FormArray;
  }
  addAddress() {
    this.cities.push
  }
  removeCity(){
    this.cities.clear
  }
  onCancel(){
    this.onCancel;
  }
}
