<template>
  <div>
    <main class="p1">
      <h3>资源监控</h3>
      <el-card>
        <h3 class="mt-0">系统负载</h3>
        <div>
          1分钟 <el-tag>{{ loadAvg[0].toFixed(2) }}</el-tag> <br />
        </div>
        <div class="mt-1">
          5分钟 <el-tag>{{ loadAvg[1].toFixed(2) }}</el-tag> <br />
        </div>
        <div class="mt-1">
          15分钟 <el-tag>{{ loadAvg[2].toFixed(2) }}</el-tag>
        </div>
      </el-card>
      <el-card class="mt-1">
        <h3 class="mt-0">内存</h3>
        <div>
          总内存 <el-tag type="info">{{ totalMem }}</el-tag>
        </div>
        <div class="mt-1">
          空闲内存 <el-tag type="danger">{{ freeMem }}</el-tag>
        </div>
        <el-table :data="memData" stripe border class="mt-1">
          <el-table-column label="total" prop="total"> </el-table-column>
          <el-table-column prop="used" label="used"> </el-table-column>
          <el-table-column prop="free" label="free"> </el-table-column>
          <el-table-column prop="shared" label="shared"> </el-table-column>
          <el-table-column prop="buff_cached" label="buff/cached">
          </el-table-column>
          <el-table-column prop="available" label="available">
          </el-table-column>
        </el-table>
      </el-card>
    </main>
  </div>
</template>
<script>
const os = require("os");
const childProcess = require("child_process");
export default {
  name: "Monitor",
  data() {
    return {
      autoRefresh: true,
      totalMem: 0,
      freeMem: 0,
      loadAvg: [0, 0, 0],
      memData: [],
      mData: [{ total: 100 }, { total: 200 }],
    };
  },
  methods: {
    updateInfo() {
      this.loadAvg = os.loadavg();
      const totalMem = os.totalmem() / 1024 / 1024;
      if (totalMem > 1024) {
        // 大于1G
        this.totalMem = (totalMem / 1024).toFixed(2) + "GB";
      } else {
        this.totalMem = totalMem.toFixed(2) + "MB";
      }
      const freeMem = os.freemem() / 1024 / 1024;
      if (freeMem > 1024) {
        this.freeMem = (freeMem / 1024).toFixed(2) + "GB";
      } else {
        this.freeMem = freeMem.toFixed(2) + "MB";
      }

      let wp = childProcess.exec("free -h");
      wp.stdout.on("data", (data) => {
        data = data.split("\n");
        const memData = [];
        const mem = data[1].split(/\s+/).slice(1);
        memData.push({
          total: mem[0],
          used: mem[1],
          free: mem[2],
          shared: mem[3],
          buff_cached: mem[4],
          available: mem[5],
        });
        const swap = data[2].split(/\s+/).slice(1);
        memData.push({
          total: swap[0],
          used: swap[1],
          free: swap[2],
          shared: "",
          buff_cached: "",
          available: "",
        });
        this.memData = memData;
      });
    },
  },
  mounted() {
    this.updateInfo();
    setInterval(this.updateInfo, 3000);
  },
};
</script>
<style scoped>
</style>