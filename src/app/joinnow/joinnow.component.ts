
import { Component, OnInit } from '@angular/core';
import {NgForm}from '@angular/forms';
import { ClientService } from './../services/client.service';

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {
msgErreur:string;
  constructor(public clientservice:ClientService) {
    this.msgErreur="";
   }

   verifier(f:NgForm):void{
     const e = f.value['email'];
     const p = f.value['password'];
     if(e ==this.clientservice.email && p ==this.clientservice.password)
     {

       alert("Connexion autorisé");
       this.msgErreur="";
       window.open("/course");


     }
     else {
     this.msgErreur="login et ou password incorrect "
     }
   }
  ngOnInit(): void {
  }
}

