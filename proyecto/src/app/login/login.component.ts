import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor( private formBuilder:FormBuilder) { 
    this.buidform()
  }

  ngOnInit(): void {

  }
  private buidform(){
    this.form=this.formBuilder.group({
      usuario:["",[Validators.required]],
      contrasena:["",[Validators.required]],
      
    });
  }
  enviarSesion(){
    if(this.form.valid){
      console.log("form correcto");
    }else{
      console.log("Form incorrecto");
      
    }
  }

}
