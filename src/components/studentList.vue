<template>
<div>
  <div class="prop"></div> <!-- Начало -->
  <div class="headerMainPage">
    <div class="topRight">
      <p @click="$router.push('/@/components/studentList')"  class="itemTop"> Студенты </p>
      <p class="itemTop" @click="$router.push('/@/components/addStudent') ">Добавить студента</p>
      <p class="itemTop"> О нас </p>
      <p class="itemTop">Журнал</p>
    </div>
  </div>  <!-- Конец верхней штуки -->
  <div class="mainDisplay">
    <list-of-student class="list"></list-of-student>
    <main-student-page class="editor"> </main-student-page>
  </div>
</div>
</template>

<script>

import mainStudentPage from "@/components/mainStudentPage";
import listOfStudent from "@/components/listOfStudent";
export default {
  components: {
    listOfStudent,mainStudentPage
  },
  name: "studentList"
}
</script>

<style scoped>
.mainDisplay{
  display: flex;
}
</style>