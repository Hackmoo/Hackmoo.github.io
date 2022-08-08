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
      <edit-student class="editor"></edit-student>
    </div>
  </div>
</template>

<script>
import listOfStudent from "@/components/listOfStudent";
import editStudent from "@/components/editStudent";
export default {
  components: {
    listOfStudent,editStudent
  },
  name: "studentList"
}
</script>

<style scoped>
.mainDisplay{
  display: flex;
}
</style>