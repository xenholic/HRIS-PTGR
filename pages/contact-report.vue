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
                                <li><a class="active" href="#">Contact Reports</a></li>
                                <li><a href="/email-report">Email Reports</a></li>
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
                                <table class="table  custom-table no-footer">
                                    <thead>
                                        <tr>
                                            <th>Team Member </th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Secondary Phone Number</th>
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
                                                        data-cfemail="365257584f4157445276534e575b465a531855595b">[email&#160;protected]</a>
                                                </label></td>
                                            <td><label>9876543215</label></td>
                                            <td><label>9876543512</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-16.jpg" alt="profile"
                                                        class="img-table"><label>Linda Craver</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="0e6267606a6f6d7c6f786b7c4e6b766f637e626b206d6163">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>7896543213</label></td>
                                            <td><label>7896543321</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-17.jpg" alt="profile"
                                                        class="img-table"><label>Jenni Sims</label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="29434c4747405a40445a694c51484459454c074a4644">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>8976453211</label></td>
                                            <td><label>8976453299</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-14.jpg" alt="profile"
                                                        class="img-table"><label>Maria Cottons </label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="711c10031810121e05051e1f311409101c011d145f121e1c">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>7689234519</label></td>
                                            <td><label>7689235419</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <img src="assets/img/profiles/avatar-18.jpg" alt="profile"
                                                        class="img-table"><label>John Gibbs </label>
                                                </div>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="89e3e6e1e7edfbf0faede8e5ecc9ecf1e8e4f9e5eca7eae6e4">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>7836271912</label></td>
                                            <td><label>7836271192</label></td>
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