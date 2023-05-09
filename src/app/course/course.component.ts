import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']

})
export class CourseComponent implements OnInit {

  panelOpenState = false;

  course= [
    {'id':1,'name':'100 000 DT','contact':'215451120','description':"Maison FABIO A vendre chez l agence TPS Immobilière Hammamet, une maison de plain pieds, bien située à Bir Bouregba Hammamet. La maison comporte un salon donnant sur une terrasse, deux chambres à coucher, une cuisine, une salle de douche, un jardin, une terrasse et une place de parking. La maison est équipée de chauffage central et des climatiseurs.",'image':'../../assets/house1.png'},
    {'id':2,'name':'250 000 DT','contact':'021512202','description':'On vous propose une villa situé à Hammam Zriba-Zaghouan sur deux étage pour la vente : Typologie pour chaque étage : s+3 Superficie Total : 240 m² Superficie bâtie : 120 m²','image':'../../assets/house2.png'},
    {'id':3,'name':'70 000 DT','contact':'5894551125','description':'L’agence Xpert Immobilier Tunisie vous propose Pour vente une petite Maison Situé Cité Riadh Sousse Avec 2 étage indépendant chaque étage se compose d’un Salon, deux chambres à coucher, cuisine aménager des placards et une Salle de Bain. Superficies : 112 m² terrain Pour plus d’informations contactez l’agence Xpert Immobilier Tunisie','image':'../../assets/house3.png'},
    {'id':4,'name':'99 800 DT','contact':'1614461055','description':'Une Occasion à Ne Pas Rater #La Sté Akariet Sarraj Propose De #Vente #Petite #Maison Style Américain De Superficie 100M² #Kalaa Kebira Réparti Comme Suit: RDC: Salon | Cuisine | Salle De Bain | Cour 1ér étage: Deux Chambres Contact: Pour plus dinfos merci de nous contacter','image':'../../assets/house4.png'}
]

louer=[
  {'id':5,'name':'250 DT/MOIS','contact':'23794928','description':'à louer une apartement a hammamet nord, bir bouragba, contacter wassim khedhira','image':'../../assets/house5.png'},
  {'id':6,'name':'300 DT/MOIS','contact':'46006169','description':'maison à louer de l5él (rchid el guesmi) situé a beja sidi fraj #aaa khoooyaaa','image':'../../assets/house6.png'},
  {'id':7,'name':'300 DT/MOIS','contact':'46006169','description':'maison à louer de l5él (rchid el guesmi) situé a beja sidi fraj #aaa khoooyaaa','image':'../../assets/house7.png'}
]
  constructor(public dialog: MatDialog) {
 }
  openDialog(): void {
    let dialogRef = this.dialog.open(MyDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }




  affiche():void{
    let t: string;
    t='je suis '+this.course;
    alert(t);
    }
ngOnInit() {}
}
