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

import axios from "axios";
//import http from "@/services/AuthService";
//import api from "@/services/testLogin";

export default {
  data() {
    return {
      
      email: "",
      password: "",
    };
  },

  methods: {
    submitForm() {
     
       axios.get('https://api.mju.ac.th/Student/API/STUDENTe8ee4f3759cc4763a8f231965a2da6db23052020/Program/0401')
       .then((response)=>{
           console.log(response.data);
       })
       .catch((err)=>{
           console.log(err)
       });
     
          
    
    },
  },

};
</script>
<style></style>
