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
                                <li class="breadcrumb-item active"> Profile</li>
                            </ul>
                            <h3>Profile </h3>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 mb-4">
                        <div class="head-link-set">
                            <ul>
                                <li><a href="/profile">Employement</a></li>
                                <li><a class="active" href="#">Detail</a></li>
                                <li><a href="/profile-document">Document</a></li>
                                <li><a href="/profile-payroll">Payroll</a></li>
                                <li><a href="/profile-timeoff">Timeoff</a></li>
                                <li><a href="/profile-review">Reviews</a></li>
                                <li><a href="/profile-setting">Settings</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 ">
                        <div class="row">
                            <div class="col-xl-4 col-sm-12 col-12 d-flex">
                                <div class="card card-lists flex-fill">
                                    <div class="card-header">
                                        <h2 class="card-titles">Basic Information</h2>
                                        <ul>
                                            <li><a class="add-link" data-toggle="modal" data-target="#editinformation"><i
                                                        data-feather="plus"></i></a></li>
                                            <li><a class="delete-link" data-toggle="modal" data-target="#delete"><i
                                                        data-feather="trash-2"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="card-body">
                                        <div class="member-info">
                                            <ul>
                                                <li>
                                                    <label>Preferred Name </label>
                                                    <span>Maria</span>
                                                </li>
                                                <li>
                                                    <label>First Name </label>
                                                    <span>Maria</span>
                                                </li>
                                                <li>
                                                    <label>Last Name </label>
                                                    <span>Cotton</span>
                                                </li>
                                                <li>
                                                    <label>Nationality </label>
                                                    <span>American</span>
                                                </li>
                                                <li>
                                                    <label>Date of Birth </label>
                                                    <span>05 May 1990</span>
                                                </li>
                                                <li>
                                                    <label>Gender </label>
                                                    <span>Female</span>
                                                </li>
                                                <li>
                                                    <label>Blood Group</label>
                                                    <span>A+</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-12 col-12 d-flex">
                                <div class="card card-lists flex-fill">
                                    <div class="card-header">
                                        <h2 class="card-titles">Basic Information</h2>
                                        <ul>
                                            <li><a class="add-link" data-toggle="modal" data-target="#editinformations"><i
                                                        data-feather="plus"></i></a></li>
                                            <li><a class="delete-link" data-toggle="modal" data-target="#delete"><i
                                                        data-feather="trash-2"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="card-body">
                                        <div class="member-info">
                                            <ul>
                                                <li>
                                                    <label>Phone Number </label>
                                                    <span>987654321</span>
                                                </li>
                                                <li>
                                                    <label>Personal Email</label>
                                                    <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                            data-cfemail="7815190a11191b170c0c1716381d00191508141d561b1715">[email&#160;protected]</a></span>
                                                </li>
                                                <li>
                                                    <label>Secondary Number </label>
                                                    <span>986754231</span>
                                                </li>
                                                <li>
                                                    <label>Web Site </label>
                                                    <span>www.focustechnology.com</span>
                                                </li>
                                                <li>
                                                    <label>Linkedin </label>
                                                    <span>#mariacotton</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-sm-12 col-12 ">
                                <div class="card card-lists flex-fill">
                                    <div class="card-header">
                                        <h2 class="card-titles">Dates</h2>
                                        <a class="edit-link"><i data-feather="edit"></i></a>
                                    </div>
                                    <div class="card-body">
                                        <div class="member-info">
                                            <ul>
                                                <li>
                                                    <label>Phone Number </label>
                                                    <span>987654321</span>
                                                </li>
                                                <li>
                                                    <label>Personal Email</label>
                                                    <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                                            data-cfemail="e984889b80888a869d9d8687a98c91888499858cc78a8684">[email&#160;protected]</a></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-lists flex-fill">
                                    <div class="card-header">
                                        <h2 class="card-titles">Contact</h2>
                                        <label>New Type</label>
                                    </div>
                                    <div class="member-formcontent-path p-4">
                                        <div class="member-date  member-newformat">
                                            <ul>
                                                <li>
                                                    <div class="form-group">
                                                        <input type="text" placeholder="Add Start Date">
                                                        <div class="addon"><i data-feather="calendar"></i></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="form-group">
                                                        <input type="text" placeholder="Add Visa Expiry Date ">
                                                        <div class="addon"><i data-feather="calendar"></i></div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <a class="btn my-3 btn-primary w-100 ">Add A Key Date</a>
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
            <div class="modal fade" id="editinformation" tabindex="-1" aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Basic Information</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class=" col-md-12 p-0">
                                <div class=" form-popup">
                                    <input type="text" placeholder="Add Preferred Name">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="First Name">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="Last Name">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="Add Nationality">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="Add Date of Birth">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="Add Gender">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="Add Blood Group">
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
            <div class="modal fade" id="editinformations" tabindex="-1" aria-labelledby="staticBackdropLabels"
                aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabels">Add Contact</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class=" col-md-12 p-0">
                                <div class=" form-popup">
                                    <input type="text" placeholder="Add Phone Number">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="Login Email">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="Add Personal Email">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="Add Secondary Phone Number">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="Add Web Site">
                                </div>
                                <div class=" form-popup">
                                    <input type="text" placeholder="Connect Your Linkedin">
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
                <div class="modal-dialog modal-dialog-centered">
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
    </div>
</template>

<script>
export default {

}
</script>

<style></style>