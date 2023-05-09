import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
nom:string;
prenom:string;
cin:string;
age:number;
email:string;
password:string;
genre:[string];

  constructor() {
    this.nom='';
    this.age=0;
    this.email='';
    this.cin="";
    this.prenom='';
    this.password='';
    this.genre=["homme"||"famme"];


  }

}
