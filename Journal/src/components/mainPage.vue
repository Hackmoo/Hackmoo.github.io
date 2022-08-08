<template>
<div>
  <div class="header" draggable="false">
    <h1> Журнал успеваемости студентов БИБИГУГА ВШЭ </h1>
    <router-link to="/@/components/studentList" class="text"> Журнал </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'main-page'
}
</script>

<style scoped>
.header{
 text-align: center;
}
.text{
  text-decoration: none;
  font-size: 25px;
  color: black;
  cursor: pointer;
  padding: 5px;
  border-radius: 20px;
}

.text:hover{
  background-color: rgba(0,0,0,0.1);
  transition-duration: 0.5s;
}
</style>