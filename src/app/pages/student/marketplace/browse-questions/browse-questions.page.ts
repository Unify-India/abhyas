import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-browse-questions',
  templateUrl: './browse-questions.page.html',
  styleUrls: ['./browse-questions.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class BrowseQuestionsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
