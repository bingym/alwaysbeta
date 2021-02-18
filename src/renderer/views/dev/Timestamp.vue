<template>
  <div>
    <main class="p1">
      <h3>时间戳</h3>
      <el-card>
        <h4>当前时间</h4>
        <p>当前时间: {{ currentTime }}</p>
        <p>当前时间戳(秒): {{ currentTimeSecond }}</p>
        <p>当前时间戳(毫秒): {{ currentTimeMS }}</p>
      </el-card>
      <el-card class="mt-1">
        <h4>时间戳转时间</h4>
        <div>
          <el-input v-model="timestampStr" placeholder="输入时间戳"></el-input>
        </div>
        <div class="my-1"><el-button @click="convert">转换</el-button></div>
        <div>
          <el-input v-model="timeStr" placeholder="转换后的时间"></el-input>
        </div>
      </el-card>
    </main>
  </div>
</template>
<script>
import { formatDatetime } from "@/utils/time";
export default {
  name: "Timestamp",
  data() {
    return {
      timestampStr: "",
      timeStr: "",
      currentTime: "",
      currentTimeSecond: "",
      currentTimeMS: "",
    };
  },
  methods: {
    setCurrentTime() {
      this.currentTime = formatDatetime(new Date());
      this.currentTimeSecond = Math.round(new Date().getTime() / 1000);
      this.currentTimeMS = new Date().getTime();
    },
    convert() {
      let res = "";
      if (this.timestampStr.length === 13) {
        res = parseInt(this.timestampStr);
      } else if (this.timestampStr.length === 10) {
        res = parseInt(this.timestampStr) * 1000;
      }
      this.timeStr = formatDatetime(new Date(res));
    },
  },
  mounted() {
    this.setCurrentTime();
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  },
};
</script>
<style scoped>
</style>