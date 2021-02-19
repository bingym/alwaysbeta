<template>
  <div>
    <main class="p1">
      <h3>文件查找</h3>
      <div class="d-flex">
        <el-input placeholder="路径" v-model="cond.path"></el-input>
        <el-input
          placeholder="文件名"
          class="ml-1"
          v-model="cond.name"
        ></el-input>
        <div class="ml-1">
          <el-button @click="find">查找</el-button>
        </div>
      </div>
      <el-table :data="fileList" stripe border>
        <el-table-column prop="filePath" label="path"></el-table-column>
      </el-table>
    </main>
  </div>
</template>
<script>
const childProcess = require("child_process");
export default {
  name: "FindFile",
  data() {
    return {
      cond: {
        name: "",
        path: "",
      },
      fileList: [],
    };
  },
  methods: {
    find() {
      this.fileList = [];
      if (this.cond.name && this.cond.path) {
        const findWp = childProcess.exec(
          `find ${this.cond.path} -name '${this.cond.name}'`
        );
        findWp.stdout.on("data", (data) => {
          data = data.split("\n");
          data.forEach((ele) => {
            this.fileList.push({
              filePath: ele
            });
          });
        });
      }
    },
  },
};
</script>
<style scoped>
</style>