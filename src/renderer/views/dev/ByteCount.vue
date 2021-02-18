<template>
  <div>
    <main class="p1">
      <h3>字节统计</h3>
      <el-input type="textarea" :rows="20" v-model="val"></el-input>
      <p>
          共 {{outVal}} 字节
      </p>
    </main>
  </div>
</template>
<script>
export default {
  name: "ByteCalc",
  data() {
    return {val:''};
  },
  computed:{
      outVal(){
          return new Blob([this.val]).size
      }
  }
};
</script>
<style scoped>
</style>