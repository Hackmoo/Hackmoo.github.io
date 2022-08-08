<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.prop{
  width: 100vw;
  height: 33px;
  border: 1px solid black;
  margin: 0;
}
.headerMainPage{
  background-color: rgb(204, 204, 204);
  margin: 0;
  padding: 0;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99;
}
.topRight{
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 100px;
}
.itemTop{
  margin: 0 10px;
  padding: 10px;
}
.itemTop:hover{
  background-color: rgba(0,0,0,0.1);
  transition-duration: 0.25s;
  border-radius: 20px;
  padding: 15px;
  cursor: pointer;
}
.editor{
  width: 100vw;
  background-color: #f9f9f9;
}
.list{
  width: 30vw;
  height: 100vw;
}
body{
  margin: 0;
  padding: 0;
}
</style>