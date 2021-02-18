<template>
  <div>
    <main class="p1">
      <h3>基础信息</h3>
      <el-row :gutter="10">
        <el-col :sm="6" :md="4">
          <el-card>
            CPU架构: <el-tag type="success">{{ arch }}</el-tag>
          </el-card>
        </el-col>
        <el-col :sm="6" :md="4">
          <el-card>
            系统平台: <el-tag type="success">{{ platform }} </el-tag></el-card
          >
        </el-col>
        <el-col :sm="6" :md="4">
          <el-card>
            用户目录: <el-tag type="success">{{ homedir }}</el-tag>
          </el-card>
        </el-col>
        <el-col :sm="6" :md="4">
          <el-card
            >主机名 : <el-tag type="success">{{ hostname }}</el-tag></el-card
          >
        </el-col>
        <el-col :sm="6" :md="4">
          <el-card
            >内核 : <el-tag type="success">{{ release }}</el-tag></el-card
          >
        </el-col>
        <el-col :sm="6" :md="4">
          <el-card
            >发行版信息:
            <el-tag type="success">{{ lsb_release }}</el-tag></el-card
          >
        </el-col>
        <el-col :span="24" class="mt-1">
          <el-card>
            <el-row v-for="(value, key) in networks" :key="key">
              <h3>网卡: {{ key }}</h3>
              <el-col
                :sm="12"
                :md="12"
                :lg="6"
                v-for="(item, index) in value"
                :key="index"
                style="padding: 1rem"
              >
                <el-card>
                  <p>地址: {{ item.address }}</p>
                  <p>掩码: {{ item.netmask }}</p>
                  <p>MAC: {{ item.mac }}</p>
                  <p>是否是回环地址: {{ item.internal }}</p>
                  <p>cidr: {{ item.cidr }}</p>
                  <p>scopeid: {{ item.scopeid }}</p>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </main>
  </div>
</template>
<script>
const os = require("os");
const childProcess = require("child_process");
export default {
  name: "SysInfoBasic",
  data() {
    return {
      arch: "",
      homedir: "",
      hostname: "",
      platform: "",
      release: "",
      networks: [],
      lsb_release: "",
    };
  },
  methods: {},
  mounted() {
    const wp = childProcess.exec("lsb_release -a");
    wp.stdout.on("data", (data) => {
      const lr = data.split("\n")[1].split(":")[1].trim();
      this.lsb_release = lr;
    });
    this.arch = os.arch();
    this.platform = os.platform();
    this.homedir = os.homedir();
    this.hostname = os.hostname();
    this.release = os.release();
    this.networks = os.networkInterfaces();
  },
};
</script>
<style scoped>
</style>