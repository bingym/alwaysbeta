<template>
  <div>
    <main class="p1">
      <h3>JSON格式化</h3>
      <el-input
        type="textarea"
        :rows="10"
        :cols="30"
        placeholder="需要格式化的JSON"
        v-model="inputValue"
      ></el-input>
      <div class="my-1">
        <el-button @click="run">格式化 ↓</el-button>
      </div>
      <el-input
        type="textarea"
        :cols="30"
        :rows="20"
        placeholder="格式化后的JSON"
        v-model="outputValue"
      ></el-input>
    </main>
  </div>
</template>
<script>
export default {
  name: "JsonFormat",
  data() {
    return {
      inputValue: "",
      outputValue: "",
    };
  },
  methods: {
    run() {
      try {
        const inputValue = this.inputValue.trim();
        const jsonData = JSON.parse(inputValue);
        this.outputValue = JSON.stringify(jsonData, null, 4);
      } catch (err) {
        alert("JSON格式错误");
      }
    },
  },
};
</script>
<style scoped>
</style>