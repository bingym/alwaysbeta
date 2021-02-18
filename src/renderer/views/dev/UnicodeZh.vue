<template>
  <div>
    <main class="p1">
      <h3>unicode/中文转换</h3>

      <el-input
        :cols="30"
        :rows="10"
        type="textarea"
        placeholder="unicode"
        v-model="value1"
      ></el-input>
      <div class="my-1">
        <el-button @click="toZh">转中文 ↓</el-button>
        <el-button @click="toUnicode">转unicode ↑</el-button>
      </div>
      <el-input
        :cols="30"
        :rows="10"
        type="textarea"
        placeholder="中文"
        v-model="value2"
      ></el-input>
    </main>
  </div>
</template>
<script>
export default {
  name: "UnicodeZh",
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  methods: {
    toZh() {
      this.value2 = unescape(this.value1.replace(/\\u/g, "%u"));
    },
    toUnicode() {
      this.value1 = escape(this.value2).replace(/%/g, "\\").toLowerCase();
    },
  },
};
</script>
<style scoped>
</style>