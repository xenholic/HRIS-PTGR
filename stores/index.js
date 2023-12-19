import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useStore = defineStore({
  id: "counter",
  state: () => ({
    // isLogin: false,
    LoginForm: {
      email: "",
      password: "",
    },
    // registerForm: {
    //   email: "",
    //   password: "",
    //   username: "",
    //   phoneNumber: "",
    //   address: ""
    // },
    formEmployee : {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      brithPlace: "",
      dateOfBirth: "",
      nikNumber: "",
      gender: "",
      mariageStatus: 0,
      company: 0,
      department: 0,
      pohArea: 0,
      position: 0,
      fieldOfWorking: 0,
      bpjsKesNumber: "",
      bpjsTKesNumber: "",
      address: "",
      profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Prabowo_Subianto%2C_Candidate_for_Indonesia%27s_President_in_2024.jpg/1200px-Prabowo_Subianto%2C_Candidate_for_Indonesia%27s_President_in_2024.jpg",
      education: 0,
      contractType: 0,
      educationInstitution: "",
      major: "",
      sertification: "",
      educationYear: "",
      lastPosition: "",
      experience: "",
      personalWeakness: "",
      personalPower: "",
      fatherName: "",
      motherName: "",
      husbandOrWife: "",
      childName1: "",
      childName2: "",
      childName3: "",
      childName4: "",
      emergencyContactName: "",
      emergencyPhoneNumber: "",
      relationship: "",
      emergencyContactAddress: "",
      salary: 0,
      startDate: ""
    },
    baseUrl: "http://localhost:3000",
    employeesData: [],
    companiesData: [],
    totalEmployees: 0,
    totalCompanies: 0,
    leavesData: [],
    totalLeaves: 0,
    departmentData: [],
    fieldData: [],
    workingStatusData: [],
    pohAreaData: [],
    religionData: [],
    genderData: [],
    educationData: [],
    positionData: [],
    contractData: [],
    mariageStatusData: [],
    isActive: true,
  }),
  getters: {
    doubleCount: (state) => state.counter * 1,
  },
  actions: {
    // setLogin(status = false) {
    //   this.isLogin = status
    // },
    checkLogin() {
      // if (!localStorage.getItem("access_token")) {
      //   this.isLogin = false
      //   return this.router.push("/user")
      // }
      // this.isLogin = true
      return "/";
    },

    // async Register() {
    //   try {
    //     axios.post(`${this.baseUrl}/register`, {
    //       email: this.registerForm.email,
    //       password: this.registerForm.password,
    //       username: this.registerForm.username,
    //       phoneNumber: this.registerForm.phoneNumber,
    //       address: this.registerForm.address
    //     })
    //     this.router.push('/login')
    //     Swal.fire({
    //       icon: "success",
    //       title: `Success`,
    //       text: `Success Register`,
    //     });
    //   } catch (err) {
    //     console.log(err, "ini error");
    //     Swal.fire({
    //       icon: "error",
    //       title: `Error`,
    //       text: `${err.response.data.message}`,
    //     });
    //   } finally {
    //     this.email = ''
    //     this.password = ''
    //     this.username = ''
    //     this.phoneNumber = ''
    //     this.address = ''
    //   }
    // },

    async Login() {
      try {
        let custData = await axios.post(`${this.baseUrl}/users`, {
          email: this.LoginForm.email,
          password: this.LoginForm.password,
        });
        console.log(custData, "ini data");
        // localStorage.setItem("access_token", custData.data.access_token)
        localStorage.setItem("UserId", custData.data.id);
        localStorage.setItem("email", custData.data.email);
        localStorage.setItem("username", custData.data.name);
        this.checkLogin();

        Swal.fire({
          icon: "success",
          title: "Nice!",
          text: `${this.LoginForm.email}`,
        });
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: err.response.data.message,
        });
      }
    },

    async getEmployees() {
      try {
        let response = await axios.get(`${this.baseUrl}/employees`);

        this.employeesData = response.data;
        // console.log(this.employeesData,"cek data")
        this.totalEmployees = this.employeesData.length;
      } catch (err) {
        console.log(err, "ini err getEmployee");
      }
    },

    async addEmployee() {
      try {
        // let dataEmployee= {
        //   name: `${this.formEmployee.firstName} ${this.formEmployee.lastName}`,
        //   address: this.formEmployee.address,
        //   email: this.formEmployee.email,
        //   salary: this.formEmployee.salary,
        //   status: this.formEmployee.contractType,
        //   profilePic: this.formEmployee.profilePic,
        //   positionId: this.formEmployee.position,
        //   companyId: this.formEmployee.company,
        //   departmentId: this.formEmployee.department,
        //   fieldId: this.formEmployee.fieldOfWorking,
        //   religion: this.formEmployee.religion,
        //   startDateWorking: this.formEmployee.startDate,
        //   personalData: {
        //     dateOfBirth: this.formEmployee.dateOfBirth,
        //     placeOfBirth: this.formEmployee.brithPlace,
        //     gender: this.formEmployee.gender,
        //     educationData: {
        //       educationLevel: this.formEmployee.education,
        //       yearsOfEducation: this.formEmployee.educationYear,
        //       major: this.formEmployee.major,
        //       organizationExp: this.formEmployee.experience
        //     },
        //     familyData: {
        //       motherName: this.formEmployee.motherName,
        //       fatherName: this.formEmployee.fatherName,
        //       wifeName: this.formEmployee.husbandOrWife,
        //       mariageStatus: this.formEmployee.mariageStatus,
        //       dependentsChild: {
        //         childName1: this.formEmployee.childName1,
        //         childName2: this.formEmployee.childName2,
        //         childName3: this.formEmployee.childName3,
        //         childName4: this.formEmployee.childName4
        //       }
        //     },
        //     phoneNumber: this.formEmployee.phoneNumber,
        //     nikNumber: this.formEmployee.nikNumber,
        //     bpjsTkNumber: this.formEmployee.bpjsTKesNumber,
        //     bpjsKesNumber: this.formEmployee.bpjsKesNumber,
        //     npwp: this.formEmployee.nikNumber,
        //     experience: this.formEmployee.experience,
        //     lastDepartment: this.formEmployee.lastPosition,
        //     personalCharacter: {
        //       weakness: this.formEmployee.personalWeakness,
        //       advantage: this.formEmployee.personalPower
        //     },
        //     emergencyContact: {
        //       name: this.formEmployee.emergencyContactName,
        //       relation: this.formEmployee.relationship,
        //       address: this.formEmployee.emergencyContactAddress,
        //       phoneNumber: this.formEmployee.emergencyContact
        //     }
        //   }
        // }

        await axios.post(`${this.baseUrl}/employees`, {
          name: `${this.formEmployee.firstName} ${this.formEmployee.lastName}`,
          address: this.formEmployee.address,
          email: this.formEmployee.email,
          salary: this.formEmployee.salary,
          status: this.formEmployee.contractType,
          profilePic: this.formEmployee.profilePic,
          positionId: this.formEmployee.position,
          companyId: this.formEmployee.company,
          departmentId: this.formEmployee.department,
          fieldId: this.formEmployee.fieldOfWorking,
          religion: this.formEmployee.religion,
          startDateWorking: this.formEmployee.startDate,
          personalData: {
            dateOfBirth: this.formEmployee.dateOfBirth,
            placeOfBirth: this.formEmployee.brithPlace,
            gender: this.formEmployee.gender,
            educationData: {
              educationLevel: this.formEmployee.education,
              yearsOfEducation: this.formEmployee.educationYear,
              major: this.formEmployee.major,
              organizationExp: this.formEmployee.experience
            },
            familyData: {
              motherName: this.formEmployee.motherName,
              fatherName: this.formEmployee.fatherName,
              wifeName: this.formEmployee.husbandOrWife,
              mariageStatus: this.formEmployee.mariageStatus,
              dependentsChild: {
                childName1: this.formEmployee.childName1,
                childName2: this.formEmployee.childName2,
                childName3: this.formEmployee.childName3,
                childName4: this.formEmployee.childName4
              }
            },
            phoneNumber: this.formEmployee.phoneNumber,
            nikNumber: this.formEmployee.nikNumber,
            bpjsTkNumber: this.formEmployee.bpjsTKesNumber,
            bpjsKesNumber: this.formEmployee.bpjsKesNumber,
            npwp: this.formEmployee.nikNumber,
            experience: this.formEmployee.experience,
            lastDepartment: this.formEmployee.lastPosition,
            personalCharacter: {
              weakness: this.formEmployee.personalWeakness,
              advantage: this.formEmployee.personalPower
            },
            emergencyContact: {
              name: this.formEmployee.emergencyContactName,
              relation: this.formEmployee.relationship,
              address: this.formEmployee.emergencyContactAddress,
              phoneNumber: this.formEmployee.emergencyContact
            }
          }
        })
        console.log('sukses')
        Swal.fire({
          icon: "success",
          title: `Success`,
          text: `Success Register`,
      });
      } catch (err) {
        console.log(err, 'err')
      }
    },

    async getCompanies() {
      try {
        let response = await axios.get(`${this.baseUrl}/companies`);

        this.companiesData = response.data;
        this.totalCompanies = this.companiesData.length;
      } catch (err) {
        console.log(err, "ini errror dari total getCompanies");
      }
    },

    async getLeaves() {
      try {
        let response = await axios.get(`${this.baseUrl}/leaves`);

        this.leavesData = response.data;
        this.totalLeaves = this.leavesData.length;
      } catch (err) {
        console.log(err, "ini error getLeavesData");
      }
    },

    async getContractStatus() {
      try {
        let response = await axios.get(`${this.baseUrl}/workingStatus`);

        this.contractData = response.data;
      } catch (err) {
        console.log(err, "ini error get ContractStatus");
      }
    },

    async getDepartment() {
      try {
        let response = await axios.get(`${this.baseUrl}/department`);

        this.departmentData = response.data;
      } catch (err) {
        console.log(err, "ini error getDepartment");
      }
    },

    async getCompany() {
      try {
        let response = await axios.get(`${this.baseUrl}/companies`);

        this.companiesData = response.data;
      } catch (err) {
        console.log(err, "ini error getCompany");
      }
    },

    async getFieldArea() {
      try {
        let response = await axios.get(`${this.baseUrl}/fields`);

        this.fieldData = response.data;
      } catch (err) {
        console.log(err, "ini error getFieldArea");
      }
    },

    async getPosition() {
      try {
        let response = await axios.get(`${this.baseUrl}/position`);

        this.positionData = response.data;
      } catch (err) {
        console.log(err, "ini error getposition");
      }
    },

    async getReligion() {
      try {
        let response = await axios.get(`${this.baseUrl}/religions`);

        this.positionData = response.data;
      } catch (err) {
        console.log(err, "ini error getreligion");
      }
    },

    async getEducation() {
      try {
        let response = await axios.get(`${this.baseUrl}/education`);

        this.educationData = response.data;
      } catch (err) {
        console.log(err, "ini error getEducation");
      }
    },

    async getPOHArea() {
      try {
        let response = await axios.get(`${this.baseUrl}/poharea`);

        this.pohAreaData = response.data;
      } catch (err) {
        console.log(err, "ini error getPOHArea");
      }
    },

    async getMariageStatus() {
      try {
        let response = await axios.get(`${this.baseUrl}/mariagestatus`);

        this.mariageStatusData = response.data;
      } catch (err) {
        console.log(err, "ini error getMariageStatus");
      }
    },
  },
});
