import { CompteComponent } from './../compte/compte.component';
import { Component, OnInit } from '@angular/core';
import {NgForm}from '@angular/forms';
import { ClientService } from './../services/client.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
msg:string;
  constructor(public clientservice:ClientService) {
  this.msg="";
  }


signin(f:NgForm):void{
  const age=parseInt(f.value['age']);
  const email=f.value['email'];
  const nom=f.value['nom'];
  const prenom=f.value['prenom'];
  const password=f.value['password'];
  const cin=f.value['cin'];



 if(age>20 && age<90 && email!=="" && password!=""&& nom!=="" &&prenom!=""&& (cin.charAt(0)==1|| cin.charAt(0)==0)  )
 {
  this.clientservice.nom=nom;
  this.clientservice.age=age;
  this.clientservice.email=email;
   this.clientservice.prenom=prenom;
  this.clientservice.password=password;
  this.clientservice.cin=cin;


  alert("Inscription réussite!");
  this.msg="";
  window.open("/course");

}
else

  this.msg="erreur";


}

 ngOnInit(): void {
  }
}
