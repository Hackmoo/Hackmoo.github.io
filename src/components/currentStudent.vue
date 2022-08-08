<template>
<div class="item">
  <div class="idList">
    {{idList + 1}}
  </div>
  <div class="studentName" @click="sendStudent">
    {{student.firstName}}
    {{student.lastName}}
    {{student.patronymic}}
    {{student.groupOf}}
  </div>
</div>
</template>

<script>
export default {
  props: {
    student:{
      type: Object,
      required: true
    },
    idList:{
      type: String,
      required: true
    }
  },
  data: () => ({

  }),
  methods:{
    sendStudent(){
      this.$store.state.currentStudent = this.student // Отправляет элемент который отображает в глобальное хранилище
    }                                                 // Затем использует этот элемент как выбранный пользователем
  }

}
</script>

<style scoped>
.item{
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
}
.idList{
  background-color: #b7b7b7;
  padding: 5px 10px;
  margin-right: 10px;
}
.studentName{
  background-color: #e1e1e1;
  padding: 5px 10px;
  width: 36vw;
  cursor: pointer;
}
</style>