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
      </el-card>
    </main>
  </div>
</template>
<script>
const os = require("os");
export default {
  name: "Monitor",
  data() {
    return {
      autoRefresh: true,
      totalMem: 0,
      freeMem: 0,
      loadAvg: [0, 0, 0],
    };
  },
  methods: {
    updateInfo() {
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
      this.loadAvg = os.loadavg();
    },
  },
  mounted() {
    this.updateInfo();
    setInterval(this.updateInfo, 3000)
  },
};
</script>
<style scoped>
</style>