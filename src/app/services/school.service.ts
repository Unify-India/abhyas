import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private schools: any[] = [];

  constructor() {
    this.loadSchoolsFromLocalStorage();
  }

  private loadSchoolsFromLocalStorage() {
    const schools = localStorage.getItem('schools');
    if (schools) {
      this.schools = JSON.parse(schools);
    }
  }

  private saveSchoolsToLocalStorage() {
    localStorage.setItem('schools', JSON.stringify(this.schools));
  }

  getSchools() {
    return this.schools;
  }

  createSchool(school: any) {
    this.schools.push(school);
    this.saveSchoolsToLocalStorage();
  }

  editSchool(schoolId: string, updatedSchool: any) {
    const index = this.schools.findIndex((school) => school.id === schoolId);
    if (index !== -1) {
      this.schools[index] = { ...this.schools[index], ...updatedSchool };
      this.saveSchoolsToLocalStorage();
    }
  }
}
