import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    authErrors: [],
    authStatus: null,
    authMessage: null,
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
    message: (state) => state.authMessage,
  },
  actions: {
    /* get token */
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    /* get user */
    async getUser() {
      await axios.get("/api/user").then((response) => {
        this.authUser = response.data;
        console.log(response.data);
      });
    },
    /* Login */
    async handleLogin(credentials) {
      this.authStatus = null;
      this.authErrors = [];
      this.authMessage = null;
      this.getToken();
      await axios
        .post("/login", {
          email: credentials.email,
          password: credentials.password,
        })
        .then((response) => {
          this.authUser = response.data.user;
          if (this.authUser.is_admin) {
            router.push({ name: "Dashboard" });
          } else {
            router.push({ name: "Home" });
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.authErrors = error.response.data.errors;
            this.authMessage = error.response.data.message;
          }
        });
    },
    /* Register */
    async handleRegister(credentials) {
      this.getToken();
      this.authErrors = [];
      this.authStatus = null;
      this.authMessage = null;

      await axios
        .post("/register", {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.password_confirmation,
          lastname: credentials.lastname,
          phone: credentials.phone,
          address: credentials.address,
        })
        .then((response) => {
          console.log("fsdfdfds");
          router.push({ name: "VerifyEmail" });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.authErrors = error.response.data.errors;
          }
        });
    },
    /* Logout */
    handleLogout() {
      axios
        .post("/logout")
        .then((response) => {
          this.authUser = null;
          router.push({ name: "Login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /* Forgot password */
    handleForgotPassword(credentials) {
      this.authErrors = [];
      this.getToken();
      axios
        .post("/forgot-password", {
          email: credentials.email,
        })
        .then((response) => {
          this.authStatus = response.data.status;
          console.log(this.authStatus);
          setTimeout(() => {
            router.push({ name: "Login" });
            this.authStatus = null;
          }, 3000);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.authErrors = error.response.data.errors;
          }
        });
    },
    /* Reset password */
    handleResetPassword(credentials) {
      this.authErrors = [];
      this.getToken();
      axios
        .post("/reset-password", {
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.password_confirmation,
          token: credentials.token,
        })
        .then((response) => {
          this.authStatus = response.data.status;
          setTimeout(() => {
            router.push({ name: "Login" });
            this.authStatus = null;
          }, 3000);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.authErrors = error.response.data.errors;
          }
        });
    },
    /* Verify email */
    handleSendVerifyEmail() {
      axios.post("/email/verification-notification").then((response) => {
        this.message =
          "Se ha enviado un correo de verificación a su cuenta de correo.";
      });
    },
  },
});
