import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import SignUpView from '../views/SignUpView.vue'
import PostView from '../views/PostView.vue'
import AddPostView from '../views/AddPostView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
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
