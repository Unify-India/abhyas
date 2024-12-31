import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonButtons,
  AlertController,
} from '@ionic/angular/standalone';
import { AuthService } from '../../../../auth/service/auth.service';
import { SchoolService } from '../../../../services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.page.html',
  styleUrls: ['./school-list.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    CommonModule,
    FormsModule,
  ],
})
export class SchoolListPage implements OnInit {
  isAdmin: boolean = false;
  schools: any[] = [];

  constructor(
    private authService: AuthService,
    private schoolService: SchoolService,
    private alertController: AlertController,
  ) {}

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser?.role === 'Admin';
    this.loadSchools();
  }

  loadSchools() {
    this.schools = this.schoolService.getSchools();
  }

  async createSchool() {
    const alert = await this.alertController.create({
      header: 'Create School',
      inputs: [
        { name: 'name', type: 'text', placeholder: 'School Name' },
        { name: 'logo', type: 'text', placeholder: 'Logo URL' },
        { name: 'address', type: 'text', placeholder: 'Address' },
        { name: 'contact', type: 'text', placeholder: 'Contact' },
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Create',
          handler: (data) => {
            const newSchool = {
              id: (Math.random() * 100000).toString(),
              name: data.name,
              logo: data.logo,
              address: data.address,
              contact: data.contact,
            };
            this.schoolService.createSchool(newSchool);
            this.loadSchools();
          },
        },
      ],
    });

    await alert.present();
  }

  async editSchool(schoolId: string) {
    const school = this.schools.find((s) => s.id === schoolId);
    const alert = await this.alertController.create({
      header: 'Edit School',
      inputs: [
        { name: 'name', type: 'text', placeholder: 'School Name', value: school.name },
        { name: 'logo', type: 'text', placeholder: 'Logo URL', value: school.logo },
        { name: 'address', type: 'text', placeholder: 'Address', value: school.address },
        { name: 'contact', type: 'text', placeholder: 'Contact', value: school.contact },
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Save',
          handler: (data) => {
            const updatedSchool = {
              name: data.name,
              logo: data.logo,
              address: data.address,
              contact: data.contact,
            };
            this.schoolService.editSchool(schoolId, updatedSchool);
            this.loadSchools();
          },
        },
      ],
    });

    await alert.present();
  }
}
