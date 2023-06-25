import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
 constructor(private router: Router){}

 navigate() {
  this.router.navigate(['/edit'])
 }
}
