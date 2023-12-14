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
                    <div class="col-xl-12 col-sm-12 col-12 mb-4">
                        <div class="breadcrumb-path ">
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/"><img src="assets/img/dash.png" class="mr-2"
                                            alt="breadcrumb" />Home</a>
                                </li>
                                <li class="breadcrumb-item active"> Employees</li>
                            </ul>
                            <h3>Employees</h3>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 mb-4">
                        <div class="head-link-set">
                            <ul>
                                <li><a href="/employee">All</a></li>
                                <li><a class="active" href="#">Teams</a></li>
                                <li><a href="/employee-office">Offices</a></li>
                            </ul>
                            <a class="btn-add" data-toggle="modal" data-target="#addteam"><i data-feather="plus"></i> Add
                                Person</a>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 ">
                        <div class="card m-0">
                            <div class="card-body pb-0">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="employee-head">
                                                    <h2>Lapangan</h2>
                                                    <ul>
                                                        <li><a class="edit_employee" data-toggle="modal"
                                                                data-target="#edit"><i data-feather="edit"></i></a></li>
                                                        <li><a class="edit_delete" data-toggle="modal"
                                                                data-target="#delete"><i data-feather="trash-2"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="employee-content">
                                                    <div class="employee-image">
                                                        <div class="avatar-group">
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-14.jpg">
                                                            </div>
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-15.jpg">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a class="btn-addmember" data-toggle="modal" data-target="#addteam">Add
                                                        Members</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="employee-head">
                                                    <h2>Human Resource</h2>
                                                    <ul>
                                                        <li><a class="edit_employee" data-toggle="modal"
                                                                data-target="#edit"><i data-feather="edit"></i></a></li>
                                                        <li><a class="edit_delete" data-toggle="modal"
                                                                data-target="#delete"><i data-feather="trash-2"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="employee-content">
                                                    <div class="employee-image">
                                                        <div class="avatar-group">
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-14.jpg">
                                                            </div>
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-15.jpg">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a class="btn-addmember" data-toggle="modal" data-target="#addteam">Add
                                                        Members</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="employee-head">
                                                    <h2>eMinerba</h2>
                                                    <ul>
                                                        <li><a class="edit_employee" data-toggle="modal"
                                                                data-target="#edit"><i data-feather="edit"></i></a></li>
                                                        <li><a class="edit_delete" data-toggle="modal"
                                                                data-target="#delete"><i data-feather="trash-2"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="employee-content">
                                                    <div class="employee-image">
                                                        <div class="avatar-group">
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-14.jpg">
                                                            </div>
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-15.jpg">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a class="btn-addmember" data-toggle="modal" data-target="#addteam">Add
                                                        Members</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="employee-head">
                                                    <h2>IT</h2>
                                                    <ul>
                                                        <li><a class="edit_employee" data-toggle="modal"
                                                                data-target="#edit"><i data-feather="edit"></i></a></li>
                                                        <li><a class="edit_delete" data-toggle="modal"
                                                                data-target="#delete"><i data-feather="trash-2"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="employee-content">
                                                    <div class="employee-image">
                                                        <div class="avatar-group">
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-14.jpg">
                                                            </div>
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-15.jpg">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a class="btn-addmember" data-toggle="modal" data-target="#addteam">Add
                                                        Members</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="employee-head">
                                                    <h2>GIS</h2>
                                                    <ul>
                                                        <li><a class="edit_employee" data-toggle="modal"
                                                                data-target="#edit"><i data-feather="edit"></i></a></li>
                                                        <li><a class="edit_delete"><i data-feather="trash-2"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="employee-content">
                                                    <div class="employee-image">
                                                        <div class="avatar-group">
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-14.jpg">
                                                            </div>
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-15.jpg">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a class="btn-addmember" data-toggle="modal" data-target="#addteam">Add
                                                        Members</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="employee-head">
                                                    <h2>Finance</h2>
                                                    <ul>
                                                        <li><a class="edit_employee" data-toggle="modal"
                                                                data-target="#edit"><i data-feather="edit"></i></a></li>
                                                        <li><a class="edit_delete"><i data-feather="trash-2"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="employee-content">
                                                    <div class="employee-image">
                                                        <div class="avatar-group">
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-14.jpg">
                                                            </div>
                                                            <div class="avatar avatar-xs group_img group_header">
                                                                <img class="avatar-img rounded-circle" alt="User Image"
                                                                    src="assets/img/profiles/avatar-15.jpg">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a class="btn-addmember" data-toggle="modal" data-target="#addteam">Add
                                                        Members</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="customize_popup">
            <div class="modal fade" id="addteam" tabindex="-1" aria-labelledby="staticBackdropLabela" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabela">Create New Team</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class=" col-md-12 p-0">
                                <div class=" form-popup m-0">
                                    <input type="text" placeholder="Name">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Add</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="customize_popup">
            <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="staticBackdropLa" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLa">Edit Employee</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class=" col-md-12 p-0">
                                <div class=" form-popup m-0">
                                    <input type="text" placeholder="Name">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Add</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="customize_popup">
        <div class="modal fade" id="delete" tabindex="-1" aria-labelledby="staticBackdropLabels1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content">
                    <div class="modal-header text-centers border-0">
                        <h5 class="modal-title text-center" id="staticBackdropLabels1">Are You Sure Want to Delete?</h5>
                    </div>
                    <div class="modal-footer text-centers">
                        <button type="button" class="btn btn-primary">Delete</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
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