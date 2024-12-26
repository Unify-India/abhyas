export class MenuData {
  public static defaultAppPages = [
    { title: 'Dashboard', url: 'dashboard', icon: 'grid' },
    { title: 'Plans', url: 'plans', icon: 'list' },
    { title: 'Feedback', url: 'feedback', icon: 'star' },
    { title: 'Login', url: 'login', icon: 'log-in' },
  ];

  public static adminAppPages = [
    { title: 'Dashboard', url: 'admin/dashboard', icon: 'home' },
    { title: 'School Management', url: 'admin/school-management/school-list', icon: 'school' },
    { title: 'User Management', url: 'admin/user-management/user-list', icon: 'people' },
    { title: 'Performance Report', url: 'admin/reports/performance-report', icon: 'stats-chart' },
    { title: 'Activity Report', url: 'admin/reports/activity-report', icon: 'stats-chart' },
  ];

  public static teacherAppPages = [
    { title: 'Dashboard', url: 'teacher/dashboard', icon: 'home' },
    { title: 'Create Question', url: 'teacher/question-management/create-question', icon: 'create' },
    { title: 'Question List', url: 'teacher/question-management/question-list', icon: 'list' },
    { title: 'Create Exam', url: 'teacher/exam-management/create-exam', icon: 'create' },
    { title: 'Exam List', url: 'teacher/exam-management/exam-list', icon: 'list' },
    { title: 'My Listings', url: 'teacher/marketplace/my-listings', icon: 'list' },
    { title: 'Sales Report', url: 'teacher/marketplace/sales-report', icon: 'stats-chart' },
  ];

  public static studentAppPages = [
    { title: 'Dashboard', url: 'student/dashboard', icon: 'home' },
    { title: 'Exam List', url: 'student/exam-list', icon: 'list' },
    { title: 'Browse Questions', url: 'student/marketplace/browse-questions', icon: 'search' },
    { title: 'My Purchases', url: 'student/marketplace/my-purchases', icon: 'cart' },
    { title: 'School Search', url: 'student/school-search', icon: 'school' },
  ];

  public static schoolAppPages = [
    { title: 'Profile', url: 'school/profile', icon: 'person' },
    { title: 'Join Requests', url: 'school/requests/join-requests', icon: 'people' },
  ];
}
