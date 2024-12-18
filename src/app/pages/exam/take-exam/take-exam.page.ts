import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-take-exam',
  templateUrl: './take-exam.page.html',
  styleUrls: ['./take-exam.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class TakeExamPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
