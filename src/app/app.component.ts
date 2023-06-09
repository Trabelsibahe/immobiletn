import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
title = "Immobile"
    openDialog(): void {
      let dialogRef = this.dialog.open(MyDialogComponent, {
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
  }
}
