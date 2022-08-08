<template>
<div>
  <div class="main" draggable="false">
    <div class="hBtn">
      <div style="align-self: flex-start;">
        <h3 class="nameOfStudent">Студент:
          {{ this.$store.state.currentStudent.firstName }}
          {{ this.$store.state.currentStudent.lastName }}
          {{ this.$store.state.currentStudent.patronymic }}
          {{ this.$store.state.currentStudent.groupOf }}
        </h3>
      </div>
      <div>
        <button @click="$router.push('/@/components/editStudentPage')" class="btn redact"> Редактировать </button>
        <button @click="this.$store.commit('delStudent', this.$store.state.currentStudent.id)" class="btn del"> Удалить студента </button>
      </div>
    </div>
  </div>
  <h1 style="text-align: center; margin: 0"> Оценки </h1>                     <!-- Стили заданы через style для h1 -->
  <hr style="margin: 10px 0 0 0;color: teal">                                             <!-- полоса <hr> -->
  <div style="text-align: center; font-size: 20px;font-weight: bold">
    Август
  </div>
  <hr style="margin: 0; color: teal">
  <div>
    <grades-of-student> </grades-of-student>
  </div>
</div>
</template>

<script>
import gradesOfStudent from "@/components/gradesOfStudent";
export default {
  name: "mainStudentPage",
  components: {gradesOfStudent}

}
</script>

<style scoped>
.main{
  margin: 20px;
  display: flex;
  flex-direction: column;
}
.nameOfStudent{
  margin: 0;
  text-align: center;
  font-weight: normal;
}
.hBtn{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.btn{
  width: 10vw;
  border: 1px solid teal;
  border-radius: 10px;
  font-weight: bold;
  padding: 10px;
  background-color: white;
}
.btn:hover{
  background-color: rgba(0,0,0,0.1);
  transition-duration: 0.25s;
}
.redact{
  margin-right: 10px;
}
.del{
  color: rgb(255,46,46);
}
</style>