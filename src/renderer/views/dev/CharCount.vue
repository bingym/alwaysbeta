<template>
  <div>
    <main class="p1">
      <h3>字符统计</h3>
      <el-input type="textarea" :rows="20" v-model="val"></el-input>
      <p>
        字数总计: <span class="text-success">{{ count }}</span
        >&nbsp; 行数:
        <span class="text-success">{{ rowCount }}</span>
      </p>
    </main>
  </div>
</template>
<script>
export default {
  name: "CharCount",
  data() {
    return {
      val: "",
    };
  },
  computed: {
    count() {
      return this.val.length;
    },
    rowCount() {
      if (this.val) {
        return this.val.split("\n").length;
      } else {
        return 0;
      }
    },
  },
};
</script>
<style scoped>
</style>