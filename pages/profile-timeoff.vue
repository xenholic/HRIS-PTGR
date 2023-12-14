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
                                <li><a href="/profile-detail">Detail</a></li>
                                <li><a href="/profile-document">Document</a></li>
                                <li><a href="/profile-payroll">Payroll</a></li>
                                <li><a class="active" href="#">Timeoff</a></li>
                                <li><a href="/profile-review">Reviews</a></li>
                                <li><a href="/profile-setting">Settings</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-12 col-sm-12 col-12 mb-4">
                        <div class="row">
                            <div class="col-xl-6 col-sm-12 col-12 d-flex">
                                <div class="card flex-fill">
                                    <div class="card-header">
                                        <h2 class="card-titles">Holidays List</h2>
                                    </div>
                                    <div class="card-body">
                                        <div class="col-xl-12 col-sm-12 col-12 mb-5 ">
                                            <div class="row">
                                                <div class="col-xl-8 col-sm-12 col-12 p-0">
                                                    <div class="head-link-set">
                                                        <ul>
                                                            <li><a class="active" href="#">Upcoming</a></li>
                                                            <li><a href="#">History</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-sm-12 col-12 p-0 select-path">
                                                    <select class="select">
                                                        <option value="inactive">In Progress</option>
                                                        <option value="active">Completed</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="table table-responsive custimze-table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Date</th>
                                                        <th>Leave Reason</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mon, 26 Aug 2019</td>
                                                        <td>Bank Holiday</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Wed, 25 Dec 2019</td>
                                                        <td> Christmas Day</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Thu, 26 Dec 2019</td>
                                                        <td>Bank Holiday</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Wed, 1 Jan 2020</td>
                                                        <td>Bank Holiday</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Mon, 1 Jan 2020</td>
                                                        <td> Epiphany</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Fri, 17 Jan 2020 </td>
                                                        <td> Presidents' Day</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>Mon, 9 Mar 2020</td>
                                                        <td>Holi</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8</td>
                                                        <td>Wed, 1 Mar 2020 </td>
                                                        <td>Independence Day</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>Sat, 4 Jul 2020 </td>
                                                        <td>Bank Holiday</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>Mon, 11 Nov 2020 </td>
                                                        <td> Veterans Day</td>
                                                    </tr>
                                                    <tr>
                                                        <td>11</td>
                                                        <td>Fri, 25 Dec 2020</td>
                                                        <td> Christmas Day</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>Mon, 1 Jan 2020</td>
                                                        <td> Epiphany</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-sm-12 col-12 d-flex">
                                <div class="card flex-fill">
                                    <div class="card-header">
                                        <h2 class="card-title">Leave Off Details</h2>
                                    </div>
                                    <div class="card-body p-0">
                                        <div class="card-body-inner">
                                            <h3>Year</h3>
                                            <label>01 January – 31 December</label>
                                        </div>
                                        <div class="card-body-inner">
                                            <h3>Days Used</h3>
                                            <div class="card-range">
                                                <div class="card-set">
                                                    <div class="card-days">5 days</div>
                                                </div>
                                            </div>
                                            <h3>Days</h3>
                                            <label>5 Used</label>
                                        </div>
                                        <div class="card-body-inner">
                                            <h3>Non Deductible Days</h3>
                                            <ul>
                                                <li>
                                                    <a class="btn btn-approved">5 Approved</a>
                                                </li>
                                                <li>
                                                    <a class="btn btn-approved">7 Pending</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-body-inner">
                                            <h3>Attendance</h3>
                                            <label>3 Sick Days</label>
                                            <label>2 Working from Home</label>
                                        </div>
                                        <div class="card-body-inner select-path border-0">
                                            <h3>Time Off Approvers</h3>
                                            <div class="form-group">
                                                <select class="select">
                                                    <option value="inactive">Choose Approver</option>
                                                    <option value="active">Approved</option>
                                                </select>
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
</template>

<script>
export default {

}
</script>

<style></style>