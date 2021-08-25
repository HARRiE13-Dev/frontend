import { createRouter, createWebHistory } from 'vue-router'

//import Views------------------------------
//Frontend
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Register from '@/views/frontend/Register.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'
import Notfound from '@/views/frontend/Notfound.vue'
import testApi from '@/views/frontend/testApi.vue'

//Backend

//import Layouts-------------------------------
import FrontendLayout from '@/layouts/Frontend.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: FrontendLayout,
    children:[
      {
        path: '',
        component: Home
      }
    ],
    meta :{
      title: 'หน้าหลัก',
      description: 'หน้าหลัก'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: FrontendLayout,
    children:[
      {
        path: '',
        component: About
      }
    ],
    meta :{
      title: 'เกี่ยวกับเรา',
      description: 'เกี่ยวกับเรา'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: FrontendLayout,
    children:[
      {
        path: '',
        component: Portfolio
      }
    ],
    meta :{
      title: 'ผลงาน',
      description: 'ผลงาน'
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: FrontendLayout,
    children:[
      {
        path: '',
        component: Service
      }
    ],
    meta :{
      title: 'บริการ',
      description: 'บริการ'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: FrontendLayout,
    children:[
      {
        path: '',
        component: Contact
      }
    ],
    meta :{
      title: 'ติดต่อ',
      description: 'ติดต่อ'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: FrontendLayout,
    children:[
      {
        path: '',
        component: Login
      }
    ],
    meta :{
      title: 'เข้าสู่ระบบ',
      description: 'เข้าสู่ระบบ'
    }
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: FrontendLayout,
    children:[
      {
        path: '',
        component: ForgotPassword
      }
    ],
    meta :{
      title: 'ลืมหรัสผ่าน',
      description: 'ลืมหรัสผ่าน'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: FrontendLayout,
    children:[
      {
        path: '',
        component: Register
      }
    ],
    meta :{
      title: 'ลงทะเบียน',
      description: 'ลงทะเบียน'
    }
  },
  {
    path: '/testapi',
    name: 'testApi',
    component: FrontendLayout,
    children:[
      {
        path: '',
        component: testApi
      }
    ],
    meta :{
      title: 'test',
      description: 'test'
    }
  },

  //Error 404
  {
    path: "/:catchAll(.*)",
    component: Notfound,
    meta :{
      title: 'ไม่พบหน้า',
      description: 'ไม่พบหน้า'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
