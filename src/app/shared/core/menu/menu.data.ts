export class MenuData {
  public static defaultAppPages = [
    { title: "Dashboard", url: "dashboard", icon: "grid" },
    { title: "Hostels / PG", url: "hostel", icon: "home" },
    { title: "Mess", url: "mess", icon: "restaurant" },
    { title: "Raise Ticket", url: "tickets", icon: "warning" },
    { title: "Plans", url: "plans", icon: "list" },
    { title: "Payment History", url: "payment-history", icon: "cash" },
    { title: "Feedback", url: "feedback", icon: "star" },
    { title: "Profile", url: "profile", icon: "person" },
    { title: "Login", url: "login", icon: "log-in" },
  ];

  private static adminAppPages = [
    { title: "Home", url: "dashboard", icon: "home" },
    { title: "Admin Dashboard", url: "admin/admin-dashboard", icon: "person" },
    { title: "Manage Mess", url: "admin/manage-mess", icon: "restaurant" },
    { title: "Manage Users", url: "admin/manage-users", icon: "people" },
    { title: "Manage Offers", url: "admin/manage-offers", icon: "pricetag" },
    { title: "Manage Options", url: "admin/manage-options", icon: "options" },
    { title: "Form Setup", url: "admin/form-setup", icon: "document" },
    { title: "Manage Guideline", url: "admin/manage-guideline", icon: "book" },
    { title: "Manage Help", url: "admin/manage-help", icon: "help-circle" },
    { title: "Pricing Setup", url: "admin/pricing-setup", icon: "pricetags" },
    {
      title: "Manage Notice",
      url: "admin/manage-notice",
      icon: "notifications",
    },
  ];
  private static managerAppPages = [
    { title: "Home", url: "dashboard", icon: "home" },
    { title: "Mess Dashboard", url: "manager/dashboard", icon: "restaurant" },
    { title: "Menu Setup", url: "manager/menu", icon: "book" },
    { title: "Inventory", url: "manager/inventory", icon: "cube" },
    { title: "Customer", url: "manager/customer", icon: "people" },
    { title: "Mess Profile", url: "manager/profile", icon: "person" },
    { title: "Contacts", url: "manager/contact", icon: "call" },
    { title: "Staff", url: "manager/staff", icon: "people" },
    { title: "Feedbacks", url: "manager/feedback", icon: "clipboard" },
    { title: "FAQ", url: "manager/faq", icon: "help-circle" },
    { title: "Setup", url: "manager/setup", icon: "settings" },
  ];

  private loggedInPages = [
    { title: "Dashboard", url: "/dashboard", icon: "grid" },
    { title: "Raise Ticket", url: "/tickets", icon: "warning" },
    { title: "Payment", url: "/payment", icon: "cash" },
    { title: "Feedback", url: "/feedback", icon: "star" },
    { title: "Profile", url: "/profile", icon: "person" },
    { title: "Logout", url: "/logout", icon: "log-out" },
  ];
}
