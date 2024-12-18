import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-activity-report',
  templateUrl: './activity-report.page.html',
  styleUrls: ['./activity-report.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class ActivityReportPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
