import { Component, OnInit } from '@angular/core';
import { ClientService } from './../services/client.service';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor(public clientservice: ClientService) { }

  ngOnInit(): void {
  }

}
