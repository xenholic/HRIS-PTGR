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
                                <li class="breadcrumb-item"><a href="/"><img src="assets/img/dash.png" class="mr-2"
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
                                <li><a class="active" href="#">Email Reports</a></li>
                                <li><a href="/security-report">Security Reports</a></li>
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
                                <table class="table  custom-table  no-footer">
                                    <thead>
                                        <tr>
                                            <th>Team Member </th>
                                            <th>Email</th>
                                            <th>Personal Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-15.jpg" alt="profile"
                                                        class="img-table"><label>Danny Ward</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="563237382f2137243216332e373b263a337835393b">[email&#160;protected]</a>
                                                </label></td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="3a5e5b54434d5b485e7a5f425b574a565f14595557">[email&#160;protected]</a>
                                                </label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-16.jpg" alt="profile"
                                                        class="img-table"><label>Linda Craver</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="3e5257505a5f5d4c5f485b4c7e5b465f534e525b105d5153">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="8ee2e7e0eaefedfceff8ebfcceebf6efe3fee2eba0ede1e3">[email&#160;protected]</a></label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-17.jpg" alt="profile"
                                                        class="img-table"><label>Jenni Sims</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="1f757a7171766c76726c5f7a677e726f737a317c7072">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="f399969d9d9a809a9e80b3968b929e839f96dd909c9e">[email&#160;protected]</a></label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-14.jpg" alt="profile"
                                                        class="img-table"><label>Maria Cottons </label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="d8b5b9aab1b9bbb7acacb7b698bda0b9b5a8b4bdf6bbb7b5">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="7815190a11191b170c0c1716381d00191508141d561b1715">[email&#160;protected]</a></label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-18.jpg" alt="profile"
                                                        class="img-table"><label>John Gibbs </label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="28424740464c5a515b4c49444d684d50494558444d064b4745">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="b6dcd9ded8d2c4cfc5d2d7dad3f6d3ced7dbc6dad398d5d9db">[email&#160;protected]</a></label>
                                        </td>
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
</div></template>

<script>
export default {

}
</script>

<style></style>