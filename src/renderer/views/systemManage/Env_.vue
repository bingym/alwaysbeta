<template>
  <div>
    <main class="p1">
      <h3>环境变量</h3>
      <el-input placeholder="变量名" v-model="keyword"></el-input>
      <el-table stripe border class="mt-1" :data="tableData">
        <el-table-column prop="key" label="key"></el-table-column>
        <el-table-column prop="value" label="value"></el-table-column>
      </el-table>
    </main>
  </div>
</template>
<script>
export default {
  name: "Env_",
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    tableData() {
      const ret = [];
      const keyword = this.keyword.toUpperCase();
      for (const key in process.env) {
        if ((keyword && key.includes(keyword)) || !keyword)
          ret.push({
            key,
            value: process.env[key],
          });
      }
      return ret;
    },
  },
  methods: {},
  mounted() {
    
  },
};
</script>
<style scoped>
</style>