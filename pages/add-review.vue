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
                                <li class="breadcrumb-item"><a href="index.html"><img src="assets/img/dash.png" class="mr-2"
                                            alt="breadcrumb">Home</a>
                                </li>
                                <li class="breadcrumb-item active"> Reviews</li>
                            </ul>
                            <h3>Create Review</h3>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 ">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-titles">Setup</h2>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-12 col-sm-12 col-12 ">
                                        <div class="form-group">
                                            <label>Review Name <span class="mandatory">*</span> </label>
                                            <input type="text" placeholder="Review Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-6 col-sm-12 col-12 ">
                                        <div class="form-group">
                                            <label>Begins on </label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-sm-12 col-12 ">
                                        <div class="form-group">
                                            <label>Completion Date</label>
                                            <input type="text">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12 col-sm-12 col-12 ">
                                        <div class="form-group">
                                            <label>Review Frequency</label>
                                            <input type="text">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 ">
                        <div class="card ">
                            <div class="card-header">
                                <h2 class="card-titles">Participants</h2>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-6 col-sm-6 col-12 ">
                                        <div class="form-group">
                                            <label>Begins on </label>
                                            <select class="select">
                                                <option value="Select leave">Select leave</option>
                                                <option value="leave">Casual leave</option>
                                                <option value="leave">Earned leave</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-sm-6 col-12 ">
                                        <div class="form-group">
                                            <label>Completion Date</label>
                                            <select class="select">
                                                <option value="Select leave">Select leave</option>
                                                <option value="leave">Casual leave</option>
                                                <option value="leave">Earned leave</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 ">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-titles">Form</h2>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-12 col-sm-12 col-12 ">
                                        <div class="form-group">
                                            <textarea rows="4"
                                                cols="50">Explain What This Review Is To, How It's Going To Be Run, How Everyone Can Prepare.	</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <textarea rows="4"
                                                cols="50">Add Questions For The People Being Reviewed.	</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12 col-sm-12 col-12 mb-3">
                                        <div class="creation-btn">
                                            <ul>
                                                <li><a class="action_label3">Add <i data-feather="plus"></i></a></li>
                                                <li><a class="action_label4">Delete <i data-feather="trash-2"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12 col-sm-12 col-12 ">
                                        <div class="form-group">
                                            <textarea rows="4"
                                                cols="50">Add Questions For The People Being Reviewed.	</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12 col-sm-12 col-12 mb-5">
                                        <div class="creation-btn">
                                            <ul>
                                                <li><a class="action_label3">Add <i data-feather="plus"></i></a></li>
                                                <li><a class="action_label4">Delete <i data-feather="trash-2"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-12 col-sm-12 col-12 ">
                                        <div class="form-btn">
                                            <a href="#" class="btn btn-apply">Save</a>
                                            <a href="#" class="btn btn-secondary">Cancel</a>
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
</template>

<script>
export default {

}
</script>

<style></style>