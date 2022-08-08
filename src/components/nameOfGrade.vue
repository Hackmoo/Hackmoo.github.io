<template>
<div class="main">
  <div>
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "nameOfGrade"
}
</script>

<style scoped>
.main{
  padding: 0 16px;
  border-bottom: 2px solid teal;
  height: 23px;
}
</style>