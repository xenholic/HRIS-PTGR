import axios from 'axios'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useCounterStore = defineStore({
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
    employeesData : [],
    totalEmployees: 0,


  }),
  getters: {
    doubleCount: (state) => state.counter * 1
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
      return "/"
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
          password: this.LoginForm.password
        })
        console.log(custData, "ini data");
        // localStorage.setItem("access_token", custData.data.access_token)
        localStorage.setItem("UserId", custData.data.id)
        localStorage.setItem("email", custData.data.email)
        localStorage.setItem("username", custData.data.name)
        this.checkLogin()

        Swal.fire({
          icon: 'success',
          title: 'Nice!',
          text: `${this.LoginForm.email}`,
        })
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: err.response.data.message,
        })
      }
    },

    async getEmployees() {
      try {
        let response = await axios.get(`${this.baseUrl}/employees`)

        this.employeesData = response.data.results
      } catch (err) {
        console.log(err, "ini err");
      }
    },

    async getTotalEmployees() {
      try {
        let data = await axios.get(`${this.baseUrl}/totalData`)
        console.log(data)

        this.totalEmployees = data.ammountEmployees[0].ammountEmployees
      } catch (err) {
        console.log(err, "ini errror dari total employeee")
      }
    }

    // async getTrendingMovies() {
    //   try {
    //     let response = await axios.get(`${this.baseUrl}/movies/trending`)

    //     this.trendingMovies = response.data.results

    //   } catch (err) {
    //     console.log(err, "ini error");
    //   }
    // },

    // async getTopMovies() {
    //   try {
    //     let response = await axios.get(`${this.baseUrl}/movies/top`)

    //     this.topMovies = response.data.results
    //   } catch (err) {
    //     console.log(err, "ini error top");
    //   }
    // },

    // async dataMovieDetail(movieId) {
    //   try {
    //     const response = await axios.get(`${this.baseUrl}/movies/${movieId}`, {
    //       headers: {
    //         access_token: localStorage.getItem("access_token"),
    //       },
    //     });
    //     console.log(response, "ini movie detail");
    //     this.moviesDetail = response.data
    //   } catch (err) {
    //     console.log(err, "ini error detail");
    //   }
    // },

    // async getDataOrder() {
    //   try {
    //     const response = await axios.get(`${this.baseUrl}/transactions`, {
    //       headers: {
    //         access_token: localStorage.getItem("access_token"),
    //       },
    //     });
    //     console.log(response.data, "orders");
    //     this.orders = response.data
    //   } catch (err) {
    //     console.log(err, "ini error Order");
    //   }
    // },

    // async dataPrice() {
    //   try {
    //     const response = await axios.get(`${this.baseUrl}/prices`);
    //     console.log(response, "prices");
    //     this.prices = response.data
    //   } catch (err) {
    //     console.log(err, "ini error price");
    //   }
    // },

    // async addTransaction(data) {
    //   try {
    //     console.log(data, "ini data addtrans");
    //     await axios.post(
    //       `${this.baseUrl}/movies/${data.MovieId}`,
    //       {
    //         PriceId: data.PriceId,
    //       },
    //       {
    //         headers: {
    //           access_token: localStorage.getItem("access_token"),
    //         },
    //       }
    //     );
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

    // async getTokenPayment(data) {
    //   try {
    //     const response = await axios.post(
    //       `${this.baseUrl}/transactions/${data.id}`,
    //       { MovieId: data.MovieId },
    //       {
    //         headers: {
    //           access_token: localStorage.getItem("access_token"),
    //         },
    //       }
    //     );
    //     console.log(response, "ini respon gettoken");
    //     localStorage.setItem("redirect_url", response.data.redirect_url);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

    // async editPayment(id) {
    //   try {
    //     await axios.patch(`${this.baseUrl}/payment/${id}`, null, {
    //       headers: {
    //         access_token: localStorage.getItem("access_token"),
    //       },
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
})