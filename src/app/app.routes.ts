import { Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth/auth.guard';
// Import your AuthGuard

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', // Redirect to login initially
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard], // Protect the dashboard route
    loadComponent: () => import('./pages/core/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin-routing.module').then((m) => m.AdminRoutingModule),
  },
  {
    path: 'teacher',
    loadChildren: () => import('./pages/teacher/teacher-routing.module').then((m) => m.TeacherRoutingModule),
  },
  {
    path: 'student',
    loadChildren: () => import('./pages/student/student-routing.module').then((m) => m.StudentRoutingModule),
  },
  {
    path: 'school',
    loadChildren: () => import('./pages/school/school-routing.module').then((m) => m.SchoolRoutingModule),
  },
  {
    path: 'exam',
    loadChildren: () => import('./pages/exam/exam-routing.module').then((m) => m.ExamRoutingModule),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./pages/core/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
  {
    path: 'server-error',
    loadComponent: () => import('./pages/core/server-error/server-error.page').then((m) => m.ServerErrorPage),
  },
  { path: '**', redirectTo: '/not-found' }, // Wildcard route for 404
];
