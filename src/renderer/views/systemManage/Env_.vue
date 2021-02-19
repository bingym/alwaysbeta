<template>
  <div>
    <main class="p1">
      <h3>环境变量</h3>
      <el-card v-for="(item, index) in env_" :key="index">
        <h4>{{ item.tp }}</h4>
        <el-table :data="item.data" stripe border>
          <el-table-column prop="key" label="key"></el-table-column>
          <el-table-column prop="value" label="value"></el-table-column>
        </el-table>
      </el-card>
    </main>
  </div>
</template>
<script>
const childProcess = require("child_process");
export default {
  name: "Env_",
  data() {
    return {
      env_: [
        {
          tp: "Golang",
          data: [
            { key: "GOROOT", value: "" },
            { key: "GOPATH", value: "" },
            { key: "GOPROXY", value: "" },
            { key: "GOPRIVATE", value: "" },
          ],
        },
      ],
    };
  },
  methods: {
    update() {
      childProcess.exec("echo $GOROOT", (err, stdout, stderr) => {
        this.env_[0].data[0].value = stdout;
      });
      childProcess.exec("echo $GOPATH", (err, stdout, stderr) => {
        this.env_[0].data[1].value = stdout;
      });
      childProcess.exec("echo $GOPROXY", (err, stdout, stderr) => {
        this.env_[0].data[2].value = stdout;
      });
      childProcess.exec("echo $GOPRIVATE", (err, stdout, stderr) => {
        this.env_[0].data[3].value = stdout;
      });
    },
  },
  mounted() {
    this.update();
  },
};
</script>
<style scoped>
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
</style>