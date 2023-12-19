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
        <form class="row" @submit.prevent="submitHandler">
          <div class="col-xl-12 col-sm-12 col-12 ">
            <div class="breadcrumb-path mb-4">
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active"> Employees</li>
              </ul>
              <h3>Create Employees</h3>
            </div>
          </div>
          <div class="col-xl-12 col-sm-12 col-12 ">
            <div class="card">
              <div class="card-header">
                <h2 class="card-titles">Basic Details <span>Organized and secure.</span></h2>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <label for="firstName">First Name</label>
                      <input type="text" v-model="formEmployee.firstName" id="firstName" placeholder="First Name">
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label" for="lastName">Last Name</div>
                      <input type="text" v-model="formEmployee.lastName" id="lastName" placeholder="Last Name">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">E-mail</div>
                      <input type="text" v-model="formEmployee.email" id="email" placeholder="Email">
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Phone Number</div>
                      <input type="text" v-model="formEmployee.phoneNumber" id="phoneNumber" placeholder="Nomor Handphone...">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Place of Birth</div>
                      <input type="text" v-model="formEmployee.brithPlace" id="birthPlace" placeholder="Tempat Lahir">
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Date of Birth</div>
                      <input type="text" v-model="formEmployee.dateOfBirth" id="dateOfBirth" placeholder="DD MM YYYY">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">NIK Number</div>
                      <input type="text" v-model="formEmployee.nikNumber" id="nikNumber" placeholder="Nomor Induk Kewarganegaraan">
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Gender</div>
                     <select v-model="formEmployee.gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                     </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Mariage Status</div>
                      <select v-model="formEmployee.mariageStatus">
                        <option v-for="mariage in mariageStatusData" :key="mariage.id" :value="mariage.id">{{ mariage.status }} </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Point of Hire</div>
                      <select v-model="formEmployee.pohArea">
                        <option v-for="pohArea in pohAreaData" :key="pohArea.id" :value="pohArea.id">{{ pohArea.areaName }}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Company</div>
                      <select v-model="formEmployee.company">
                        <option v-for="comp in companiesData" :key="comp.id" :value="comp.id"> {{ comp.name }} </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Department</div>
                      <select v-model="formEmployee.department" id="fieldOfWorking">
                        <option v-for="dept in departmentData" :key="dept.id" :value="dept.id">{{ dept.departmentName }} </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Position</div>
                      <select v-model="formEmployee.position">
                        <option v-for="pos in positionData" :key="pos.id" :value="pos.id"> {{ pos.positionName }} </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Field of Working</div>
                      <select v-model="formEmployee.fieldOfWorking" id="fieldOfWorking">
                        <option v-for="fow in fieldData" :key="fow.id" :value="fow.id">{{ fow.fieldName }} </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                        <div class="form-group">
                          <div class="label">BPJS Kesehatan</div>
                          <input type="text" v-model="formEmployee.bpjsKesNumber" id="bpjsKesNumber" placeholder="Nomor BPJS Kesehatan">
                        </div>
                      </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">BPJS Ketenagakerjaan</div>
                      <input type="text" v-model="formEmployee.bpjsTKesNumber" id="bpjsTKesNumber" placeholder="Nomor BPJS Ketenagakerjaan">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Address</div>
                      <input type="text" v-model="formEmployee.address" id="address" placeholder="Alamat Lengkap"/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Photo Profile</div>
                      <input type="file" id="profilePic"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12 col-sm-12 col-12 ">
            <div class="card ">
              <div class="card-header">
                <h2 class="card-titles">Employment Details<span>Let everyone know the essentials so they're fully
                    prepared.</span></h2>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Tertiary Education</div>
                      <select v-model="formEmployee.education">
                        <option v-for="edu in educationData" :key="edu.id" :value="edu.id">{{ edu.level }} </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Contract Type</div>
                      <select v-model="formEmployee.contractType">
                        <option v-for="type in contractData" :key="type.id" :value="type.id">{{ type.statusName }} </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Last Education Institution</div>
                      <input type="text" v-model="formEmployee.educationInstitution" id="educationInstitution" placeholder="Universitas / School"/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Major</div>
                      <input type="text" v-model="formEmployee.major" id="major" placeholder="Tehnik Sipil..."/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Sertification</div>
                      <input type="file" id="sertification" placeholder="Universitas / School"/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Year of Education</div>
                      <input type="text" v-model="formEmployee.educationYear" id="educationYear" placeholder="Tehnik Sipil..."/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Last Job Position</div>
                      <input type="text" v-model="formEmployee.lastPosition" id="lastPosition" placeholder="PJO (Manager Ops Site)"/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Experiences</div>
                      <input type="text" v-model="formEmployee.experience" id="experience" placeholder=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12 col-sm-12 col-12 ">
            <div class="card">
              <div class="card-header">
                <h2 class="card-titles">Personal Detail<span>Weakness and Powerfull on something, Personal Encourage, trusting themselves.</span></h2>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <label>Peronal Weakness</label>
                      <input type="text" v-model="formEmployee.personalWeakness" id="personalWeakness" placeholder="Have a bad attitude"/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <label>Peronal Power</label>
                      <input type="text" v-model="formEmployee.personalPower" id="personalPower" placeholder="Have a Good Skill in comunication"/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Father Name</div>
                      <input type="text" v-model="formEmployee.fatherName" id="fatherName"/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Mother Name</div>
                      <input type="text" v-model="formEmployee.motherName" id="motherName"/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Husband or Wife Name</div>
                      <input type="text" v-model="formEmployee.husbandOrWife" id="husbandOrWife" placeholder="...."/>
                    </div>
                  </div>
                  <!-- <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Child name</div>
                      <input type="text"/>
                    </div>
                  </div> -->
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Child Name 1</div>
                      <input type="text" v-model="formEmployee.childName1" id="childName1"/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Child Name 2</div>
                      <input type="text" v-model="formEmployee.childName2" id="childName2"/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Child Name 3</div>
                      <input type="text" v-model="formEmployee.childName3" id="childName3"/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Child Name 4</div>
                      <input type="text" v-model="formEmployee.childName4" id="childName4"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12 col-sm-12 col-12 ">
            <div class="card">
              <div class="card-header">
                <h2 class="card-titles">Emergency Contact<span>For an emergency situation please fill with a specific</span></h2>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <label>Emergency Contact Name</label>
                      <input type="text" v-model="formEmployee.emergencyContactName" id="emergencyContactName" placeholder="Name"/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input type="text" v-model="formEmployee.emergencyPhoneNumber" id="emergencyPhoneNumber" placeholder="Phone number"/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Relation</div>
                      <input type="text" v-model="formEmployee.relationship" id="relationship" placeholder="relationship with emergency contact"/>
                    </div>
                  </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <div class="label">Address</div>
                      <input type="text" v-model="formEmployee.emergencyContactAddress" id="emergencyContactAddress" placeholder="specific address"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12 col-sm-12 col-12 ">
            <div class="card">
              <div class="card-header">
                <h2 class="card-titles">Salary Details<span>Stored securely, only visible to Super Admins, Payroll Admins,
                    and themselves.</span></h2>
              </div>
              <div class="card-body">
                <div class="row">
                      <div class="col-xl-6 col-sm-12 col-12 ">
                        <div class="form-group">
                          <label>Start Date</label>
                          <input type="text" placeholder="Start Date">
                        </div>
                      </div>
                  <div class="col-xl-6 col-sm-12 col-12 ">
                    <div class="form-group">
                      <label>Salary Type</label>
                      <select>
                        <option value="Select leave" selected disabled>Frequency </option>
                        <option value="leave">Annualy</option>
                        <option value="leave">Monthly</option>
                        <option value="leave">Weekly</option>
                        <option value="leave">Daily</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12 col-sm-12 col-12 ">
                <div class="form-btn">
                  <button type="submit" class="btn btn-apply w-auto">Add Team Member</button>
                  <button class="btn btn-secondary">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { useStore } from "../stores/index"
import { mapState, mapActions } from "pinia";

export default {
  name: "add-employee",
  components: {},
  data( ) {
    return {
       
    }
  },
  computed: {
    ...mapState(useStore, [
      "religionData",
      "contractData",
      "companiesData",
      "totalCompanies",
      "leavesData",
      "totalLeaves",
      "departmentData",
      "positionData",
      "fieldData",
      "educationData",
      "pohAreaData",
      "mariageStatusData",
      "formEmployee"
    ]),
  },
  methods: {
    ...mapActions(useStore, [
      "getReligion",
      "getCompanies",
      "getLeaves",
      "getContractStatus",
      "getDepartment",
      "getFieldArea",
      "getPosition",
      "getEducation",
      "getPOHArea",
      "getMariageStatus",
      "addEmployee"
    ]),
    submitHandler(){
      this.addEmployee();
      console.log("submit guys")
    }
  },
  created() {
    this.getReligion();
    this.getCompanies();
    this.getLeaves();
    this.getContractStatus();
    this.getDepartment();
    this.getFieldArea();
    this.getPosition();
    this.getEducation();
    this.getPOHArea();
    this.getMariageStatus();
  },
}

</script>

<style></style>