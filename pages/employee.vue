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
          <div class="col-xl-12 col-sm-12 col-12">
            <div class="breadcrumb-path mb-4">
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
                <li><a class="active" href="#">All</a></li>
                <li><a href="/employee-team">Teams</a></li>
                <li><a href="/employee-office">Offices</a></li>
              </ul>
              <a class="btn-add" href="/add-employee"><i data-feather="plus"></i> Add Person</a>
            </div>
          </div>
          <div class="col-xl-12 col-sm-12 col-12 mb-4">
            <div class="row">
              <div class="col-xl-10 col-sm-8 col-12 ">
                <label class="employee_count">7 People</label>
              </div>
              <!-- <div class="col-xl-1 col-sm-2 col-12 ">
                <a href="../assets/employee-grid.html" class="btn-view "><i data-feather="grid"></i> </a>
              </div>
              <div class="col-xl-1 col-sm-2 col-12 ">
                <a href="#" class="btn-view active"><i data-feather="list"></i> </a>
              </div> -->
            </div>
          </div>
          <div class="col-xl-12 col-sm-12 col-12 mb-4">
            <div class="card">
              <div class="table-heading">
                <h2>Project Summery</h2>
              </div>
              <div class="table-responsive">
                <table class="table  custom-table no-footer">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Company Name</th>
                      <th>Department</th>
                      <th>Field of Work</th>
                      <th>Position</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody
                  v-for="employees in employeesData"
                  :key="employees.id"
                  >
                    <tr>
                      <td>
                        <div class="table-img">
                            <img :src="employees.profilePic" alt="profile" class="img-table" />
                            <label>{{ employees.name }}</label>
                        
                        </div>
                      </td>
                      <td>
                        <label class="action_label"> {{ companiesData[employees.companyId - 1].name }} </label>
                      </td>
                      <td>
                        <label class="action_label2 truncate"> {{ departmentData[employees.departmentId - 1].departmentName }} </label>
                      </td>
                      <td class=""><label>{{ fieldData[employees.fieldId - 1].fieldName }} </label></td>
                      <td><label>{{ positionData[employees.positionId].positionName }}</label></td>
                      <td>
                        <label v-if="employees.status === 'active' " class="action_label bg-green-400 text-black">Active</label>
                        <label v-else-if="employees.status === 'leaves'" class="action_label bg-red-500 text-black">Leaves</label>
                      </td>
                      <td class="">
                        <button data-modal-target="detail-modal" data-modal-toggle="detail-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                          Detail
                        </button>
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
  </div>

 <!-- Main modal -->
<div id="detail-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Product
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span class="sr-only">Close modal</span>
              </button>
          </div>
          <!-- Modal body -->
          <form class="p-4 md:p-5">
              <div class="grid gap-4 mb-4 grid-cols-2">
                  <div class="col-span-2">
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                      <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                      <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="">
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                      <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                      <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                          <option selected="">Select category</option>
                          <option value="TV">TV/Monitors</option>
                          <option value="PC">PC</option>
                          <option value="GA">Gaming/Console</option>
                          <option value="PH">Phones</option>
                      </select>
                  </div>
                  <div class="col-span-2">
                      <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                      <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                  </div>
              </div>
              <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                  Add new product
              </button>
          </form>
      </div>
  </div>
</div> 

</template>

<script>
import { useStore } from "../stores/index"
import { mapState, mapActions } from "pinia";


export default {
  name: "Dasboard",
  components: { },
  computed: {
    ...mapState(useStore, [
      "employeesData",
      "totalEmployees",
      "companiesData",
      "totalCompanies",
      "leavesData",
      "totalLeaves",
      "departmentData",
      "companiesData",
      "fieldData",
      "positionData"
    ]),
  },
  methods: {
    ...mapActions(useStore, [
      "getEmployees",
      "getCompanies",
      "getLeaves",
      "getDepartment",
      "getCompanies",
      "getFieldArea",
      "getPosition"
    ]),

  },
  created() {
    this.getEmployees();
    this.getCompanies();
    this.getLeaves();
    this.getDepartment();
    this.getCompanies();
    this.getFieldArea();
    this.getPosition();
  },
};
</script>

<style></style>