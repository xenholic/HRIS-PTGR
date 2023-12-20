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
        this.totalEmployees = this.employeesData.length;
      } catch (err) {
        console.log(err, "ini err");
      }
    },

    async getCompanies() {
      try {
        let response = await axios.get(`${this.baseUrl}/companies`);

        this.companiesData = response.data;
        this.totalCompanies = this.companiesData.length;
      } catch (err) {
        console.log(err, "ini errror dari total employeee");
      }
    },

    async getLeaves() {
      try {
        let response = await axios.get(`${this.baseUrl}/leaves`);

        this.leavesData = response.data;
        this.totalLeaves = this.leavesData.length;
      } catch (err) {
        console.log(err, "ini error");
      }
    },

    // async activeEmployee() {
    //   try {

    //   } catch (err) {
    //     console.log(err, "ini error dari Active Employee");
    //   }
    // },

    // async modalDetail() {
    //   try {
    //     //modal setup
    //     const { open, close } = useModal({
    //       component: modalTestVue,
    //       attrs: {
    //         title: "Hello World!",
    //         onConfirm() {
    //           close();
    //         },
    //       },
    //       slots: {
    //         default: "<p>The content of the modal</p>",
    //       },
    //     });
    //   } catch (err) {}
    // },

    async getDepartment() {
      try {
        let response = await axios.get(`${this.baseUrl}/department`);

        this.departmentData = response.data;
      } catch (err) {
        console.log(err, "ini error detail");
      }
    },

    async getCompany() {
      try {
        let response = await axios.get(`${this.baseUrl}/companies`);

        this.companiesData = response.data;
      } catch (err) {
        console.log(err, "ini error detail");
      }
    },

    async getFieldArea() {
      try {
        let response = await axios.get(`${this.baseUrl}/fields`);

        this.fieldData = response.data;
      } catch (err) {
        console.log(err, "ini error detail");
      }
    },

    async getPosition() {
      try {
        let response = await axios.get(`${this.baseUrl}/position`);

        this.positionData = response.data;
      } catch (err) {
        console.log(err, "ini error detail");
      }
    },
  },
});
