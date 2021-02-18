<template>
  <div>
    <main class="p1">
      <h3>MD5</h3>
      <el-input
        :cols="30"
        :rows="10"
        type="textarea"
        placeholder="要进行哈希的内容"
        v-model="value1"
      ></el-input>
      <div class="my-1">
        <el-button @click="doHash">哈希 ↓</el-button>
      </div>
      <el-input
        :cols="30"
        :rows="20"
        type="textarea"
        placeholder="哈希后的内容"
        v-model="value2"
      ></el-input>
    </main>
  </div>
</template>
<script>
const crypto = require('crypto')
export default {
  name: "Md5",
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  methods: {
    doHash() {
        this.value2 = crypto.createHash('md5').update(this.value1).digest('hex')
    },
  },
};
</script>
<style scoped>
</style>