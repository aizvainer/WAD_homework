import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import MainView from '../views/MainView.vue'
import ContactUs from '../views/ContactUs.vue'
import PostView from '../views/PostView.vue'
import AddPostView from '../views/AddPostView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'

  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/',
    name: 'main',
    component: MainView

  },
  {
    path: '/contactus',
    name: 'contactus',
    component: ContactUs
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: AddPostView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


