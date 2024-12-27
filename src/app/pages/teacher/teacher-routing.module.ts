import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'question-management/create-question',
        loadComponent: () =>
          import('./question-management/create-question/create-question.page').then((m) => m.CreateQuestionPage),
      },
      {
        path: 'question-management/question-list',
        loadComponent: () =>
          import('./question-management/question-list/question-list.page').then((m) => m.QuestionListPage),
      },
      {
        path: 'exam-management/create-exam',
        loadComponent: () => import('./exam-management/create-exam/create-exam.page').then((m) => m.CreateExamPage),
      },
      {
        path: 'exam-management/exam-list',
        loadComponent: () => import('./exam-management/exam-list/exam-list.page').then((m) => m.ExamListPage),
      },
      {
        path: 'marketplace/my-listings',
        loadComponent: () => import('./marketplace/my-listings/my-listings.page').then((m) => m.MyListingsPage),
      },
      {
        path: 'marketplace/sales-report',
        loadComponent: () => import('./marketplace/sales-report/sales-report.page').then((m) => m.SalesReportPage),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
