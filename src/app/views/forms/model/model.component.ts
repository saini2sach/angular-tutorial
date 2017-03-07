import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

   username = new FormControl('',[
     Validators.required,
     Validators.minLength(4)
   ]
   )
  password = new FormControl('',[
    Validators.minLength(6)
    ])

  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor(private builder: FormBuilder) { }
  ngOnInit() {
  }
  login() {
    console.log(this.loginForm.value);
  
  }
}