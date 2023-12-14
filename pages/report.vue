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
                                <li><a class="active" href="#">Team Reports</a></li>
                                <li><a href="/leave-report">Leave Reports</a></li>
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
                                <div class="col-xl-3 col-sm-6 col-12 ">
                                    <a class="btn btn-save">Apply Filter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 mb-4">
                        <div class="head-link-set">
                            <ul>
                                <li><a class="active" href="#">Offical Reports</a></li>
                                <li><a href="/personal-report">Personal Reports</a></li>
                            </ul>
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
                                            <th>Employment</th>
                                            <th>Email</th>
                                            <th>Job Title </th>
                                            <th>Line Manager </th>
                                            <th>Team Name </th>
                                            <th>Start Date </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html"><img src="assets/img/profiles/avatar-10.jpg"
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
                                                <label>Permanent</label>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="1276737c6b6573607652776a737f627e773c717d7f">[email&#160;protected]</a>
                                                </label></td>
                                            <td><label>Team Lead</label></td>
                                            <td><label>Richard Wilson </label></td>
                                            <td><label>Designing</label></td>
                                            <td>
                                                <label>Designing</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html"><img src="assets/img/profiles/avatar-17.jpg"
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
                                                <label>Permanent</label>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="167a7f78727775647760736456736e777b667a733875797b">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>Team Lead</label></td>
                                            <td><label>Richard Wilson </label></td>
                                            <td><label>Designing</label></td>
                                            <td>
                                                <label>Designing</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html"><img src="assets/img/profiles/avatar-19.jpg"
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
                                                <label>Permanent</label>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="18727d7676716b71756b587d60797568747d367b7775">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>Team Lead</label></td>
                                            <td><label>Richard Wilson </label></td>
                                            <td><label>Designing</label></td>
                                            <td>
                                                <label>Designing</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html"><img src="assets/img/profiles/avatar-14.jpg"
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
                                                <label>Permanent</label>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="bad7dbc8d3dbd9d5ceced5d4fadfc2dbd7cad6df94d9d5d7">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>Team Lead</label></td>
                                            <td><label>Richard Wilson </label></td>
                                            <td><label>Designing</label></td>
                                            <td>
                                                <label>Designing</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="table-img">
                                                    <a href="profile.html"><img src="assets/img/profiles/avatar-18.jpg"
                                                            alt="profile" class="img-table"></a>
                                                    <label>John Gibbs</label>
                                                </div>
                                            </td>
                                            <td class="tab-select">
                                                <select class="select">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </td>
                                            <td>
                                                <label>Permanent</label>
                                            </td>
                                            <td><label><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                        data-cfemail="3c56535452584e454f585d50597c59445d514c5059125f5351">[email&#160;protected]</a></label>
                                            </td>
                                            <td><label>Team Lead</label></td>
                                            <td><label>Richard Wilson </label></td>
                                            <td><label>Designing</label></td>
                                            <td>
                                                <label>Designing</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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