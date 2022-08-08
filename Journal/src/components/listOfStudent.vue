<template>
<div>
  <h1> </h1>
  <h2 style="text-align: center; margin-bottom: 0"> Список студентов </h2>
  <div v-for="(student, numOfList) in $store.state.students" :key="student.id" class="studentsList">
   <current-student :student="student" :id-list="numOfList"></current-student>
  </div>
</div>
</template>

<script>
import currentStudent from "@/components/currentStudent";
export default {
  name: "listOfStudent",
  components: {currentStudent},
  data: () => ({
  })
}
</script>

<style scoped>
.studentsList{
  display: flex;
  flex-direction: column;
}
</style>