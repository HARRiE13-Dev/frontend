<template>
  <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div
      class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img
            aria-hidden="true"
            class="object-cover w-full h-full dark:hidden"
            src="@/assets/img/login-office.jpeg"
            alt="Office"
          />
          <img
            aria-hidden="true"
            class="hidden object-cover w-full h-full dark:block"
            src="@/assets/img/login-office-dark.jpeg"
            alt="Office"
          />
        </div>

        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <h1
              class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
            >
              เข้าสู่ระบบ
            </h1>

            <form @submit.prevent="onSubmit">
              <label class="block mt-3 mb-2 text-sm text-gray-700" for="email"
                >อีเมล์</label
              >
              <input
                v-model="email"
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                type="text"
              />
              <div v-if="v$.email.$error" class="mt-2 text-sm text-red-500">
                {{ v$.email.$errors[0].$message }}
              </div>

              <label
                class="block mt-3 mb-2 text-sm text-gray-700"
                for="password"
                >รหัสผ่าน</label
              >
              <input
                v-model="password"
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
                type="password"
              />
              <div v-if="v$.password.$error" class="mt-2 text-sm text-red-500">
                {{ v$.password.$errors[0].$message }}
              </div>

              <button
                @click="submitForm"
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg cursor-pointer active:bg-purple-600 hover:bg-purple-700"
              >
                เข้าสู่ระบบ
              </button>
            </form>

            <p class="mt-2">
              <router-link
                to="/forgotpassword"
                class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                >ลืมรหัสผ่าน</router-link
              >
            </p>
            <p class="mt-2">
              <router-link
                to="/register"
                class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                >สมัครสมาชิกใหม่</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import http from "@/services/AuthService";


export default {
  data() {
    return {
      v$: useValidate(),
      email: "",
      password: "",
    };
  },

  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        http
          .post("login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            console.log(response.data);

            //Data User LocalStorage
            localStorage.setItem("user", JSON.stringify(response.data));

            const Toast = this.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", this.$swal.stopTimer);
                toast.addEventListener("mouseleave", this.$swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "เข้าสู่ระบบสำเร็จ",
            }).then(() => {
              // Login  Success => Dashboard
              // window.location.href = '/backend'
              this.$router.push({name:'Dashboard'})
            });
          })
          .catch((error) => {
            if (error.response) {
              //  console.log(error.response.data);
              //  console.log(error.response.status);
              //  console.log(error.response.headers);
              if (error.response.status == 500) {
                //Call Sweet Alert
                const Toast = this.$swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener("mouseenter", this.$swal.stopTimer);
                    toast.addEventListener(
                      "mouseleave",
                      this.$swal.resumeTimer
                    );
                  },
                });

                Toast.fire({
                  icon: "error",
                  title: "ข้อมูลไม่ถูกต้อง",
                });
              }
            }
          });
      } else {
        alert("Form Validate fail!");
      }
    },
  },

  validations() {
    return {
      email: {
        required: helpers.withMessage("ป้อนอีเมลก่อน", required),
        email: helpers.withMessage("รูปแบบอีเมลไม่ถูกต้อง", email),
      },
      password: {
        required: helpers.withMessage("ป้อนรหัสผ่านก่อน", required),
        minLength: helpers.withMessage(
          ({ $params }) => `รหัสผ่านต้องไม่น้อยกว่า ${$params.min} ตัวอักษร`,
          minLength(6)
        ),
      },
    };
  },
};
</script>
<style></style>
