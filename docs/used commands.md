ionic generate module pages/teacher --routing=true
ionic generate module pages/student --routing=true
ionic generate module pages/school --routing=true
ionic generate module pages/exam --routing=true

ionic generate page pages/admin/dashboard
ionic generate page pages/admin/school-management/school-list
ionic generate page pages/admin/school-management/school-details
ionic generate page pages/admin/user-management/user-list
ionic generate page pages/admin/user-management/user-details
ionic generate page pages/admin/reports/performance-report
ionic generate page pages/admin/reports/activity-report

ionic generate page pages/teacher/dashboard
ionic generate page pages/teacher/question-management/create-question
ionic generate page pages/teacher/question-management/question-list
ionic generate page pages/teacher/exam-management/create-exam
ionic generate page pages/teacher/exam-management/exam-list
ionic generate page pages/teacher/marketplace/my-listings
ionic generate page pages/teacher/marketplace/sales-report

ionic generate page pages/student/dashboard
ionic generate page pages/student/exam-list
ionic generate page pages/student/exam-details
ionic generate page pages/student/marketplace/browse-questions
ionic generate page pages/student/marketplace/my-purchases
ionic generate page pages/student/school-search

ionic generate page pages/school/profile
ionic generate page pages/school/requests/join-requests

ionic generate page pages/exam/create-exam
ionic generate page pages/exam/take-exam
ionic generate page pages/exam/exam-results
