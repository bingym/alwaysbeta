<template>
  <div>
    <main class="p1">
      <h3>URL编解码</h3>
      <el-input
        :cols="30"
        :rows="10"
        type="textarea"
        placeholder="要编码的URL"
        v-model="value1"
      ></el-input>
      <div class="my-1">
        <el-button @click="encode">编码 ↓</el-button>
        <el-button @click="decode">解码 ↑</el-button>
      </div>
      <el-input
        :cols="30"
        :rows="10"
        type="textarea"
        placeholder="编码后的URL"
        v-model="value2"
      ></el-input>
    </main>
  </div>
</template>
<script>
export default {
  name: "UrlEncodeDecode",
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  methods: {
    encode() {
      this.value2 = encodeURIComponent(this.value1);
    },
    decode() {
      this.value1 = decodeURIComponent(this.value2);
    },
  },
};
</script>
<style scoped>
</style>