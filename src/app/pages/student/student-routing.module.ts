import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'exam-list',
        loadComponent: () => import('./exam-list/exam-list.page').then((m) => m.ExamListPage),
      },
      {
        path: 'exam-details',
        loadComponent: () => import('./exam-details/exam-details.page').then((m) => m.ExamDetailsPage),
      },
      {
        path: 'marketplace/browse-questions',
        loadComponent: () =>
          import('./marketplace/browse-questions/browse-questions.page').then((m) => m.BrowseQuestionsPage),
      },
      {
        path: 'marketplace/my-purchases',
        loadComponent: () => import('./marketplace/my-purchases/my-purchases.page').then((m) => m.MyPurchasesPage),
      },
      {
        path: 'school-search',
        loadComponent: () => import('./school-search/school-search.page').then((m) => m.SchoolSearchPage),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
