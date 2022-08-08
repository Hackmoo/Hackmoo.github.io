import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "@/components/mainPage";
import studentList from "@/components/studentList";
import addStudent from "@/components/addStudent";
import listOfStudent from "@/components/listOfStudent";
import mainStudentPage from "@/components/mainStudentPage";
import editStudentPage from "@/components/editStudentPage";

const routes = [
  {
    path: '/',
    component: mainPage
  },
  {
    path: '/@/components/studentList',
    component: studentList
  },
  {
    path: '/@/components/addStudent',
    component: addStudent
  },
  {
    path: '/@/components/mainStudentPage',
    component: mainStudentPage
  },
  {
    path: '/@/components/editStudentPage',
    component: editStudentPage
  },
  {  // Это VueX
    path: '/./store',
    component: listOfStudent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
