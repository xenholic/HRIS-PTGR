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
                                <li><a href="/email-report">Email Reports</a></li>
                                <li><a href="/security-report">Security Reports</a></li>
                                <li><a class="active" href="#">W F H Reports</a></li>
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
                                            <th>Working From Home (This Year)</th>
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
                                                        data-cfemail="f397929d8a84928197b3968b929e839f96dd909c9e">[email&#160;protected]</a>
                                                </label></td>
                                            <td><label>5</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-16.jpg" alt="profile"
                                                        class="img-table"><label>Linda Craver</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="9cf0f5f2f8fdffeefdeaf9eedcf9e4fdf1ecf0f9b2fff3f1">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>3</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-17.jpg" alt="profile"
                                                        class="img-table"><label>Jenni Sims</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="97fdf2f9f9fee4fefae4d7f2eff6fae7fbf2b9f4f8fa">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>4</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-14.jpg" alt="profile"
                                                        class="img-table"><label>Maria Cottons </label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="acc1cddec5cdcfc3d8d8c3c2ecc9d4cdc1dcc0c982cfc3c1">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>6</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-18.jpg" alt="profile"
                                                        class="img-table"><label>John Gibbs </label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="e2888d8a8c86909b9186838e87a2879a838f928e87cc818d8f">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>7</label></td>
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