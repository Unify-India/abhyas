import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    canLoad: [AuthGuard],
    children: [
      {
        path: 'exam-list',
        loadComponent: () => import('./components/exam-list/exam-list.component').then((m) => m.ExamListComponent),
      },
      {
        path: 'exam-detail/:id',
        canLoad: [AuthGuard],
        loadComponent: () =>
          import('./components/exam-details/exam-details.component').then((m) => m.ExamDetailsComponent),
      },
      {
        path: 'create-exam',
        canLoad: [AuthGuard],
        loadComponent: () => import('./create-exam/create-exam.page').then((m) => m.CreateExamPage),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamRoutingModule {}
