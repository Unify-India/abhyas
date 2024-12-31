export interface School {
  schoolId: string;
  name: string;
  adminId: string;
  teachers: { [teacherId: string]: boolean };
  students: { [studentId: string]: boolean };
}
