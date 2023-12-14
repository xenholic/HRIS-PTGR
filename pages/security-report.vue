<template>
    <div class="div">
        <div>
            <Topbar />
        </div>
        <div class="">
            <Sidebar />
        </div>
        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-xl-12 col-sm-12 col-12 ">
                        <div class="breadcrumb-path mb-4">
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/pages"><img src="assets/img/dash.png" class="mr-2"
                                            alt="breadcrumb">Home</a>
                                </li>
                                <li class="breadcrumb-item active"> Reports</li>
                            </ul>
                            <h3>Reports </h3>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 mb-4">
                        <div class="head-link-set">
                            <ul>
                                <li><a href="/report">Team Reports</a></li>
                                <li><a href="/leave-report">Leave Reports</a></li>
                                <li><a href="/payroll-report">Payroll Reports</a></li>
                                <li><a href="/contact-report">Contact Reports</a></li>
                                <li><a href="/email-report">Email Reports</a></li>
                                <li><a class="active" href="#">Security Reports</a></li>
                                <li><a href="/wfh-report">W F H Reports</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 mb-4">
                        <div class="form-set">
                            <div class="row">
                                <div class="col-xl-3 col-sm-6 col-12 ">
                                    <div class="form-group">
                                        <input type="text" placeholder="start Date">
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" placeholder="From">
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12 ">
                                    <div class="form-group">
                                        <input type="text" placeholder="To">
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-6 col-12 ">
                                    <a class="btn btn-save">Apply Filter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 ">
                        <div class="card">
                            <div class="table-responsive">
                                <table class="table  custom-table no-footer">
                                    <thead>
                                        <tr>
                                            <th>Team Member </th>
                                            <th>Email</th>
                                            <th>Job Title</th>
                                            <th>Team Name</th>
                                            <th>Office</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="/profile">
                                                        <img src="assets/img/profiles/avatar-15.jpg" alt="profile"
                                                            class="img-table">
                                                    </a>
                                                    <label>Danny Ward</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="9bfffaf5e2ecfae9ffdbfee3faf6ebf7feb5f8f4f6">[email&#160;protected]</a>
                                                </label></td>
                                            <td><label>Design Team Lead </label></td>
                                            <td><label class="action_label2">Design</label></td>
                                            <td><label>Focus Technology</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="/profile">
                                                        <img src="assets/img/profiles/avatar-16.jpg" alt="profile"
                                                            class="img-table">
                                                    </a>
                                                    <label>Linda Craver</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="cda1a4a3a9acaebfacbba8bf8da8b5aca0bda1a8e3aea2a0">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>IOS Team Lead</label></td>
                                            <td><label class="action_label2">IOS</label></td>
                                            <td><label>Focus Technology</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="/profile">
                                                        <img src="assets/img/profiles/avatar-17.jpg" alt="profile"
                                                            class="img-table">
                                                    </a>
                                                    <label>Jenni Sims</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="9af0fff4f4f3e9f3f7e9daffe2fbf7eaf6ffb4f9f5f7">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>Android Team Lead</label></td>
                                            <td><label class="action_label2">Android</label></td>
                                            <td><label>Focus Technology</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="/profile">
                                                        <img src="assets/img/profiles/avatar-14.jpg" alt="profile"
                                                            class="img-table">
                                                    </a>
                                                    <label>Maria Cottons</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="84e9e5f6ede5e7ebf0f0ebeac4e1fce5e9f4e8e1aae7ebe9">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>PHP Team Lead</label></td>
                                            <td><label class="action_label2">PHP</label></td>
                                            <td><label>Focus Technology</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="/profile">
                                                        <img src="assets/img/profiles/avatar-18.jpg" alt="profile"
                                                            class="img-table">
                                                    </a>
                                                    <label>John Gibbs</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="0c66636462687e757f686d60694c69746d617c6069226f6361">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>Business Team Lead</label></td>
                                            <td><label class="action_label2">Business</label></td>
                                            <td><label>Focus Technology</label></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="btn-set">
                                <a class="btn btn-dwnd mt-3 mb-3">Download Report</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style></style>