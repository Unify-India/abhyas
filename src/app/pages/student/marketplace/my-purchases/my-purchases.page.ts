import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.page.html',
  styleUrls: ['./my-purchases.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class MyPurchasesPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
