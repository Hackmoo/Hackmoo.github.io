<template>
<div>
  <div class="prop"></div>
  <div class="headerMainPage">  <!-- Начало -->
    <div class="topRight">
      <p @click="$router.push('/@/components/studentList')"  class="itemTop"> Студенты </p>
      <p class="itemTop" @click="$router.push('/@/components/addStudent') ">Добавить студента</p>
      <p class="itemTop"> О нас </p>
      <p class="itemTop">Журнал</p>
    </div>
  </div>  <!-- Конец верхней штуки -->
  <div class="mainDisplay">
    <list-of-student class="list"></list-of-student>
    <div class="editor"> <!-- Контент -->
      <h1> Добавление студента </h1>
      <div class="myInput">
        <div class="item">
          <h3>Введите имя</h3>
          <input placeholder="Имя" v-model="this.student.firstName"/>
        </div>
        <div class="item">
          <h3>Введите фамилию</h3>
          <input placeholder="Фамилия" v-model="this.student.lastName"/>
        </div>
        <div class="item">
          <h3>Введите отчество</h3>
          <input placeholder="Отчество" v-model="this.student.patronymic"/>
        </div>
        <div class="item">
          <h3>Введите группу</h3>
          <input placeholder="Группа" v-model="this.student.groupOf"/>
        </div>
        <button class="btn" @click="createStudent"> Добавить </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import listOfStudent from "@/components/listOfStudent";
export default {
  name: "addStudent",
  components:{
    listOfStudent
  },
  data: () => ({
    student: {
      id: '',firstName: '', lastName: '', patronymic:'', groupOf: '', nameOfObject: [], grades: []
    }
  }),
  methods:{
    createStudent(){                                    // Создаёт новый обьект, отправляет его в коммит addPost.
      this.student.id = Date.now()                      // Очищает локальный для этого компонента объект.
      this.$store.state.currentStudent = this.student   // Устанавливает currentStudent на только что созданный.
      this.$store.commit('addPost', this.student)
      this.student = {
        id: '',
        firstName: '',
        lastName: '',
        patronymic: '',
        groupOf: ''
      }
    }
  }
}
</script>

<style scoped>
.mainDisplay{
  display: flex;
}
h1{
  margin: 10px;
  padding: 0;
  text-align: center;
}
.myInput{
  display: flex;
  flex-direction: column;
}
input{
  margin-bottom: 7px;
  padding: 5px;
  width: 35vw;
}
.item{
  align-self: center;
}
h3{
  margin: 0;
}
.btn{
  margin-top: 7px;
  width: 36vw;
  align-self: center;
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
</style>