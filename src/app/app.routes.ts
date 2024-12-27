import { Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/core/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/admin/admin-routing.module').then((m) => m.AdminRoutingModule),
  },
  {
    path: 'teacher',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/teacher/teacher-routing.module').then((m) => m.TeacherRoutingModule),
  },
  {
    path: 'student',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/student/student-routing.module').then((m) => m.StudentRoutingModule),
  },
  {
    path: 'school',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/school/school-routing.module').then((m) => m.SchoolRoutingModule),
  },
  {
    path: 'exam',
    canLoad: [AuthGuard],
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
  {
    path: 'plans',
    loadComponent: () => import('./pages/core/plans/plans.page').then((m) => m.PlansPage),
  },
  {
    path: 'feedback',
    loadComponent: () => import('./pages/core/feedback/feedback.page').then((m) => m.FeedbackPage),
  },
  { path: '**', redirectTo: '/not-found' },
];
