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
                                <li><a class="active" href="#">Leave Reports</a></li>
                                <li><a href="/payroll-report">Payroll Reports</a></li>
                                <li><a href="/contact-report">Contact Reports</a></li>
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
                                <!-- <div class="col-xl-3 col-sm-6 col-12 ">
                                    <a class="btn btn-save">Apply Filter</a>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="table-responsive">
                                <table class="table  custom-table  no-footer">
                                    <thead>
                                        <tr>
                                            <th>Reviewers</th>
                                            <th>Active </th>
                                            <th>Email</th>
                                            <th>Days <br> Allowed</th>
                                            <th>Days <br> Approved</th>
                                            <th>Sick Days</th>
                                            <th>Work From Home </th>
                                            <th>Days Remaining</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="/profile"><img src="assets/img/profiles/avatar-15.jpg"
                                                            alt="profile" class="img-table"></a>
                                                    <label>Danny Ward</label>
                                                </div>
                                            </td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                            <td>
                                                <label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="096d6867707e687b6d496c71686479656c276a6664">[email&#160;protected]</a>
                                                </label>
                                            </td>
                                            <td><label>12</label></td>
                                            <td><label>2</label></td>
                                            <td><label>0</label></td>
                                            <td><label>1</label></td>
                                            <td><label>10</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="/profile"><img src="assets/img/profiles/avatar-16.jpg"
                                                            alt="profile" class="img-table"></a>
                                                    <label>Linda Craver</label>
                                                </div>
                                            </td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                            <td>
                                                <label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="503c393e3431332231263522103528313d203c357e333f3d">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>12</label></td>
                                            <td><label>3</label></td>
                                            <td><label>1</label></td>
                                            <td><label>1</label></td>
                                            <td><label>8</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="/profile"><img src="assets/img/profiles/avatar-17.jpg"
                                                            alt="profile" class="img-table"></a>
                                                    <label>Jenni Sims</label>
                                                </div>
                                            </td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                            <td>
                                                <label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="49232c2727203a20243a092c31282439252c672a2624">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>12</label></td>
                                            <td><label>10</label></td>
                                            <td><label>0</label></td>
                                            <td><label>1</label></td>
                                            <td><label>5</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="/profile"><img src="assets/img/profiles/avatar-19.jpg"
                                                            alt="profile" class="img-table"></a>
                                                    <label>Maria Cotton</label>
                                                </div>
                                            </td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                            <td>
                                                <label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="fb969a89929a98948f8f9495bb9e839a968b979ed5989496">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>12</label></td>
                                            <td><label>8</label></td>
                                            <td><label>0</label></td>
                                            <td><label>1</label></td>
                                            <td><label>7</label></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="/profile"><img src="assets/img/profiles/avatar-14.jpg"
                                                            alt="profile" class="img-table"></a>
                                                    <label>Johndry</label>
                                                </div>
                                            </td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                            <td>
                                                <label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="bfd5d0d7d1dbcdc6ccdbded3daffdac7ded2cfd3da91dcd0d2">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>12</label></td>
                                            <td><label>5</label></td>
                                            <td><label>0</label></td>
                                            <td><label>1</label></td>
                                            <td><label>10</label></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- <div class="btn-set">
                                <a class="btn btn-dwnd mt-3 mb-3">Download Report</a>
                            </div> -->
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