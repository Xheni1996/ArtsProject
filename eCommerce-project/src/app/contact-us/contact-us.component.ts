import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm!: FormGroup;
  validationForm: FormGroup<{ name: FormControl<null>; email: FormControl<null>; subject: FormControl<null>; message: FormControl<null>; }>;
  constructor() { 
    this.validationForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  get name(): AbstractControl {
    return this.validationForm.get('name')!;
  }

  get email(): AbstractControl {
    return this.validationForm.get('email')!;
  }

  get subject(): AbstractControl {
    return this.validationForm.get('subject')!;
  }

  get message(): AbstractControl {
    return this.validationForm.get('message')!;
  }

  submitForm() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log(formData);
    } else {

    }
  }
}

