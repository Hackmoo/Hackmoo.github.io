<template>
<div class="main">
  <h1> Редактирование студента {{ this.$store.state.currentStudent.id }}</h1>
  <div class="infStudent">
    <div class="item">
      <h3>Введите имя </h3>
      <input class="myInput" placeholder="Имя" :value="this.$store.state.currentStudent.firstName" @input='nameOf = $event.target.value' />
      <button class="btn" @click="changeName"> Изменить имя </button>
    </div>
    <div class="item">
      <h3>Введите фамилию </h3>
      <input class="myInput" placeholder="Фамилия" :value="this.$store.state.currentStudent.lastName" @input="lastNameOf = $event.target.value"/>
      <button class="btn" @click="changeLastName"> Изменить фамилию </button>
    </div>
    <div class="item">
      <h3> Введите отчество </h3>
      <input class="myInput" placeholder="Отчество" :value="this.$store.state.currentStudent.patronymic" @input="patronymicOf = $event.target.value"/>
      <button class="btn" @click="changePatronymic"> Изменить отчество </button>
    </div>
    <div class="item">
      <h3>Введите группу </h3>
     <input class="myInput" placeholder="Группа" :value="this.$store.state.currentStudent.groupOf" @input="groupOf = $event.target.value"/>
      <button class="btn" @click="changeGroup"> Изменить группу </button>
    </div>
    <button class="bottomBtn"> Изменить всё</button>
  </div>
</div>
</template>

<script>
export default {
  name: "editStudent",
  data: () => ({
    nameOf: '',
    lastNameOf: '',
    patronymicOf: '',
    groupOf: ''
  }),
  methods:{
    changeName(){
       this.$store.commit('changePost', {idOf: this.$store.state.currentStudent.id, fName: this.nameOf})
    },
    changeLastName(){
      this.$store.commit('changeLname', {idOf: this.$store.state.currentStudent.id, lName: this.lastNameOf})
    },
    changePatronymic(){
      this.$store.commit('changePatronymic', {idOf: this.$store.state.currentStudent.id, patronymicOfS: this.patronymicOf})
    },
    changeGroup(){
      this.$store.commit('changeGroup', {idOf: this.$store.state.currentStudent.id, groupOfS: this.groupOf})
    }
  }
}
</script>

<style scoped>
 .main{
   display: flex;
   margin: 0;
   padding: 0;
   flex-direction: column;
   align-items: center;
 }
 .infStudent{
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .myInput{
   margin-bottom: 7px;
   padding: 5px;
   width: 35vw;
 }
 .item{
   display: flex;
   flex-direction: column;
   margin-bottom: 10px;
 }
 .btn{
   width: 10vw;
   border: 1px solid teal;
   border-radius: 10px;
   font-weight: bold;
   padding: 5px 10px;
   background-color: white;
 }
 .btn:hover{
   background-color: rgba(0,0,0,0.1);
   transition-duration: 0.25s;
 }
 h3{
   margin: 0;
 }
 .bottomBtn{
   margin-top: 20px;
   width: 36vw;
   border: 1px solid teal;
   border-radius: 10px;
   font-weight: bold;
   padding: 10px 15px;
   background-color: white;
 }
 .bottomBtn:hover{
   background-color: rgba(0,0,0,0.1);
   transition-duration: 0.25s;
 }
</style>