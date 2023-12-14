<template>
    <div>
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
                                <li class="breadcrumb-item active"> Company</li>
                            </ul>
                            <h3>Company </h3>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 ">
                        <div class="row">
                            <div class="col-xl-8 col-sm-12 col-12 d-flex ">
                                <div class="card card-lists flex-fill">
                                    <div class="card-header">
                                        <h2 class="card-titles">PT Greenland Resource</h2>
                                        <a class="edit-link" data-toggle="modal" data-target="#editcompany"> <i
                                                data-feather="edit"></i></a>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-xl-6 col-sm-12 col-12 d-flex ">
                                                <div class="member-registor flex-fill">
                                                    <ul>
                                                        <li>
                                                            <label>Register Number</label>
                                                            <span>FT0070</span>
                                                        </li>
                                                        <li>
                                                            <label>Incorporation Date</label>
                                                            <span>07 May 2000</span>
                                                        </li>
                                                        <li>
                                                            <label>VAT Number</label>
                                                            <span>VT0070</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-sm-12 col-12 d-flex">
                                                <div class="member-address flex-fill">
                                                    <label>Address</label>
                                                    <span>Menara Batavia <br>  <br> 
                                                        INDONESIA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-12 col-sm-12 col-12 ">
                                                <div class="btn-link my-3">
                                                    <a class="btn btn-new" data-toggle="modal" data-target="#addcompany">Add
                                                        Company Information</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-12 col-12 d-flex">
                                <div class="card  flex-fill">
                                    <div class="card-header">
                                        <h2 class="card-titles">PT Greenland Resource</h2>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-xl-12 col-sm-12 col-12 ">
                                                <div class="member-edits">
                                                    <ul>
                                                        <li>
                                                            <label>07448503267</label>
                                                            <a class="edit-link"> <i data-feather="edit"></i></a>
                                                        </li>
                                                        <li>
                                                            <label>eminerba.com</label>
                                                            <a class="edit-link"> <i data-feather="edit"></i></a>
                                                        </li>
                                                        <li>
                                                            <label><a href="#"
                                                                    class="__cf_email__"
                                                                    data-cfemail="f29a80b2949d9187818697919a9c9d9e9d958bdc919d9f">[email&#160;protected]</a></label>
                                                            <a class="edit-link"> <i data-feather="edit"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 ">
                        <div class="card card-lists ">
                            <div class="card-header">
                                <h2 class="card-titles">Daftar Dokumen </h2>
                                <a class="btn btn-head"> Add Document </a>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table  custom-table  no-footer">
                                        <thead>
                                            <tr>
                                                <th>Type</th>
                                                <th>Name</th>
                                                <th>Date</th>
                                                <th>Size</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="table-img">
                                                        <img src="assets/img/pdf.png" alt="pdf" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <label>Dokumen Surat Resign</label>
                                                </td>
                                                <td><label> 05 Januari 2023 </label></td>
                                                <td><label>50 MB</label></td>
                                                <td><label><a class="action_label4" data-toggle="modal"
                                                            data-target="#delete">Delete <i
                                                                data-feather="trash-2"></i></a></label></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="table-img">
                                                        <img src="assets/img/word.png" alt="profile">
                                                    </div>
                                                </td>
                                                <td><label>SOP Perusahaan</label></td>
                                                <td><label> 05 Januari 2020 </label></td>
                                                <td><label> 30MB </label></td>
                                                <td><label><a class="action_label4" data-toggle="modal"
                                                            data-target="#delete">Delete <i
                                                                data-feather="trash-2"></i></a></label></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="table-img">
                                                        <img src="assets/img/pdf.png" alt="pdf" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <label>Ketentuan absensi kehadiran</label>
                                                </td>
                                                <td><label> 05 Januari 2019 </label></td>
                                                <td><label>20 MB</label></td>
                                                <td><label><a class="action_label4" data-toggle="modal"
                                                            data-target="#delete">Delete <i
                                                                data-feather="trash-2"></i></a></label></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 ">
                        <div class="row">
                            <div class="col-xl-6 col-sm-12 col-12 d-flex">
                                <div class="card card-lists flex-fill">
                                    <div class="card-header">
                                        <h2 class="card-titles">PT Greenland Resource<span>Head Office</span></h2>
                                        <a class="edit-link" data-toggle="modal" data-target="#editoffice"> <i
                                                data-feather="edit"></i></a>
                                    </div>
                                    <div class="card-body d-flex align-items-center">
                                        <div class=" member-head employee-image">
                                            <h2>Members</h2>
                                            <div class="avatar-group">
                                                <div class="avatar avatar-xs group_img group_header">
                                                    <img class="avatar-img rounded-circle" alt="User Image"
                                                        src="assets/img/profiles/avatar-10.jpg">
                                                </div>
                                                <div class="avatar avatar-xs group_img group_header">
                                                    <img class="avatar-img rounded-circle" alt="User Image"
                                                        src="assets/img/profiles/avatar-15.jpg">
                                                </div>
                                                <div class="avatar avatar-xs group_img group_header">
                                                    <img class="avatar-img rounded-circle" alt="User Image"
                                                        src="assets/img/profiles/avatar-16.jpg">
                                                </div>
                                                <div class="avatar avatar-xs group_img group_header">
                                                    <img class="avatar-img rounded-circle" alt="User Image"
                                                        src="assets/img/profiles/avatar-17.jpg">
                                                </div>
                                                <div class="avatar avatar-xs group_img group_header">
                                                    <img class="avatar-img rounded-circle" alt="User Image"
                                                        src="assets/img/profiles/avatar-14.jpg">
                                                </div>
                                                <div class="avatar avatar-xs group_img group_header">
                                                    <img class="avatar-img rounded-circle" alt="User Image"
                                                        src="assets/img/profiles/avatar-18.jpg">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-sm-12 col-12  d-flex">
                                <div class="card card-lists flex-fill">
                                    <div class="card-header">
                                        <h2 class="card-title">Overview </h2>
                                        <a class="btn btn-head" href="/manage"> Manage Teams </a>
                                    </div>
                                    <div class="card-body">
                                        <div class="over-view-path">
                                            <ul>
                                                <li>
                                                    <label>Teams</label>
                                                    <span>6</span>
                                                </li>
                                                <li>
                                                    <label>People</label>
                                                    <span>7</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="btn-set pl-0">
                                            <a class="btn btn-apply" href="/employee">People Directory</a>
                                        </div>
                                    </div>
                                </div>
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