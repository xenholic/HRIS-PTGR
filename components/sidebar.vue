<template>
   <div>
      <div class="sidebar" id="sidebar">
         <div class="sidebar-inner slimscroll">
            <div class="sidebar-contents">
               <div id="sidebar-menu" class="sidebar-menu">
                  <div class="mobile-show">
                     <div class="offcanvas-menu">
                        <div class="user-info align-center bg-theme text-center">
                           <span class="lnr lnr-cross  text-white" id="mobile_btn_close">X</span>
                           <a href="javascript:void(0)" class="d-block menu-style text-white">
                              <div class="user-avatar d-inline-block mr-3">
                                 <img src="assets/img/profiles/avatar-18.jpg" alt="user avatar" class="rounded-circle"
                                    width="50">
                              </div>
                           </a>
                        </div>
                     </div>
                     <div class="sidebar-input">
                        <div class="top-nav-search">
                           <form>
                              <input type="text" class="form-control" placeholder="Search here">
                              <button class="btn" type="submit"><i class="fas fa-search"></i></button>
                           </form>
                        </div>
                     </div>
                  </div>
                  <ul>
                     <li class="active">
                        <a href="/"><img src="assets/img/home.svg" alt="sidebar_img"> <span>Dashboard</span></a>
                     </li>
                     <li>
                        <a href="/employee"><img src="assets/img/employee.svg" alt="sidebar_img"><span>
                              Employees</span></a>
                     </li>
                     <li>
                        <a href="/company"><img src="assets/img/company.svg" alt="sidebar_img"> <span> Company</span></a>
                     </li>
                     <li>
                        <a href="/calendar"><img src="assets/img/calendar.svg" alt="sidebar_img">
                           <span>Calendar</span></a>
                     </li>
                     <li>
                        <a href="/leave"><img src="assets/img/leave.svg" alt="sidebar_img"> <span>Leave</span></a>
                     </li>
                     <li>
                        <a href="/review"><img src="assets/img/review.svg" alt="sidebar_img"><span>Review</span></a>
                     </li>
                     <li>
                        <a href="/report"><img src="assets/img/report.svg" alt="sidebar_img"><span>Report</span></a>
                     </li>
                     <li>
                        <a href="/manage"><img src="assets/img/manage.svg" alt="sidebar_img"> <span>Manage</span></a>
                     </li>
                     <li>
                        <a href="/settings"><img src="assets/img/settings.svg"
                              alt="sidebar_img"><span>Settings</span></a>
                     </li>
                     <li>
                        <a href="/profile"><img src="assets/img/profile.svg" alt="sidebar_img">
                           <span>Profile</span></a>
                     </li>
                  </ul>
                  <ul class="logout">
                     <li>
                        <a href="/"><img src="assets/img/logout.svg" alt="sidebar_img"><span>Log out</span></a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {

}
</script>

<style></style>