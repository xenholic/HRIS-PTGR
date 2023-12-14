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
          <div class="col-xl-12 col-sm-12 col-12">
            <div class="breadcrumb-path mb-4">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/"
                    ><img
                      src="assets/img/dash.png"
                      class="mr-2"
                      alt="breadcrumb"
                    />Home</a
                  >
                </li>
                <li class="breadcrumb-item active">Reports</li>
              </ul>
              <h3>Reports</h3>
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
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="form-group">
                    <input type="text" placeholder="start Date" />
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="form-group">
                    <input type="text" placeholder="From" />
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="form-group">
                    <input type="text" placeholder="To" />
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <a class="btn btn-save">Apply Filter</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12 col-sm-12 col-12 mb-4">
            <div class="head-link-set">
              <ul>
                <li><a href="/report">Offical Reports</a></li>
                <li><a class="active" href="#">Personal Reports</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-12 col-sm-12 col-12">
            <div class="card">
              <div class="table-responsive">
                <table class="table custom-table no-footer">
                  <thead>
                    <tr>
                      <th>Reviewers</th>
                      <th>Gender</th>
                      <th>Salary Current</th>
                      <th>DOB</th>
                      <th>Phone Number</th>
                      <th>Address</th>
                      <th>Bank Name</th>
                      <th>Account Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="table-img">
                          <a href="/profile">
                            <img
                              src="assets/img/profiles/avatar-13.jpg"
                              alt="profile"
                              class="img-table"
                            />
                          </a>
                          <label>Sean Black</label>
                        </div>
                      </td>
                      <td><label>Male</label></td>
                      <td><label>$3000</label></td>
                      <td><label>25 Jun 1984 </label></td>
                      <td><label>9876543221</label></td>
                      <td>
                        <label
                          >201 Lunetta Street,Plant City,<br />Florida(FL),
                          33566</label
                        >
                      </td>
                      <td><label>Life Essence Banks, Inc. </label></td>
                      <td><label>112300987652 </label></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="table-img">
                          <a href="/profile">
                            <img
                              src="assets/img/profiles/avatar-16.jpg"
                              alt="profile"
                              class="img-table"
                            />
                          </a>
                          <label>Linda Craver</label>
                        </div>
                      </td>
                      <td><label>Female</label></td>
                      <td><label>$2000</label></td>
                      <td><label>14 Feb 1984 </label></td>
                      <td><label>9876543231</label></td>
                      <td>
                        <label
                          >683 Longview Avenue,New York,<br />New York(NY),
                          10011
                        </label>
                      </td>
                      <td><label>Life Essence Banks, Inc. </label></td>
                      <td><label>112300987652 </label></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="table-img">
                          <a href="/profile">
                            <img
                              src="assets/img/profiles/avatar-17.jpg"
                              alt="profile"
                              class="img-table"
                            />
                          </a>
                          <label> Jenni Sims</label>
                        </div>
                      </td>
                      <td><label>Female</label></td>
                      <td><label>$1000</label></td>
                      <td><label>15 Jul 1984 </label></td>
                      <td><label>9876534214 </label></td>
                      <td>
                        <label
                          >4923 Front Street,Detroit, <br />Michigan(MI), 48226
                        </label>
                      </td>
                      <td><label>Life Essence Banks, Inc. </label></td>
                      <td><label>112300987652 </label></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="table-img">
                          <a href="/profile">
                            <img
                              src="assets/img/profiles/avatar-19.jpg"
                              alt="profile"
                              class="img-table"
                            />
                          </a>
                          <label> Stacey Linville</label>
                        </div>
                      </td>
                      <td><label>Male</label></td>
                      <td><label>$1000</label></td>
                      <td><label>15 Jul 1984 </label></td>
                      <td><label>9876534214 </label></td>
                      <td>
                        <label
                          >4923 Front Street,Detroit, <br />Michigan(MI), 48226
                        </label>
                      </td>
                      <td><label>Life Essence Banks, Inc. </label></td>
                      <td><label>112300987652 </label></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="table-img">
                          <a href="/profile">
                            <img
                              src="assets/img/profiles/avatar-14.jpg"
                              alt="profile"
                              class="img-table"
                            />
                          </a>
                          <label>Maria Cotton</label>
                        </div>
                      </td>
                      <td><label>Male</label></td>
                      <td><label>$3000</label></td>
                      <td><label>25 Jun 1984 </label></td>
                      <td><label>9876543221 </label></td>
                      <td>
                        <label
                          >201 Lunetta Street,Plant City,<br />Florida(FL),
                          33566</label
                        >
                      </td>
                      <td><label>Life Essence Banks, Inc. </label></td>
                      <td><label>112300987652 </label></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="table-img">
                          <a href="/profile">
                            <img
                              src="assets/img/profiles/avatar-18.jpg"
                              alt="profile"
                              class="img-table"
                            />
                          </a>
                          <label>Sean Black</label>
                        </div>
                      </td>
                      <td><label>Male</label></td>
                      <td><label>$2000</label></td>
                      <td><label>14 Feb 1984 </label></td>
                      <td><label>9876543231 </label></td>
                      <td>
                        <label
                          >683 Longview Avenue,New York,<br />New York(NY),
                          10011
                        </label>
                      </td>
                      <td><label>Life Essence Banks, Inc. </label></td>
                      <td><label>112300987652 </label></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="table-img">
                          <a href="/profile">
                            <img
                              src="assets/img/profiles/avatar-10.jpg"
                              alt="profile"
                              class="img-table"
                            />
                          </a>
                          <label>Maria Cotton</label>
                        </div>
                      </td>
                      <td><label>Male</label></td>
                      <td><label>$1000</label></td>
                      <td><label>15 Jul 1984 </label></td>
                      <td><label>9876543231 </label></td>
                      <td>
                        <label
                          >4923 Front Street,Detroit,<br />Michigan(MI), 48226
                        </label>
                      </td>
                      <td><label>Life Essence Banks, Inc. </label></td>
                      <td><label>112300987652 </label></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>