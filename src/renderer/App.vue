<template>
  <div id="app">
    <el-row>
      <el-col :md="{span:4}" :lg="{span:3}">
        <el-menu default-active="2" router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="dev">
            <template slot="title">
              <span>开发工具</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/dev/json-format">JSON格式化</el-menu-item>
              <el-menu-item index="/dev/timestamp">时间戳</el-menu-item>
              <el-menu-item index="/dev/md5">MD5</el-menu-item>
              <el-menu-item index="/dev/b64">Base64编解码</el-menu-item>
              <el-menu-item index="/dev/unicode-zh">unicode/中文转换</el-menu-item>
              <el-menu-item index="/dev/byte-calc">字节计算器</el-menu-item>
              <el-menu-item index="/dev/uuid">UUID</el-menu-item>
              <el-menu-item index="/dev/url-encode-decode">URL编解码</el-menu-item>
              <el-menu-item index="/dev/char-count">字符统计</el-menu-item>
              <el-menu-item index="/dev/byte-count">字节统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/system-manage">
            <template slot="title">
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/system-manage/basic">基础信息</el-menu-item>
              <el-menu-item index="/system-manage/monitor">资源监控</el-menu-item>
              <el-menu-item index="/system-manage/process-manage">进程管理</el-menu-item>
              <el-menu-item index="/system-manage/env_">环境变量</el-menu-item>
              <el-menu-item index="/system-manage/file-manage">文件管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/hardware">
            <template slot="title">
              <span>硬件信息</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/hardware/cpu">CPU</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :md="{span:20}" :lg="{span:21}">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "alwaysbeta",
  data() {
    return {
      items: [],
    };
  },
  mounted(){
    this.$electron.ipcRenderer.on('goToRoute', (event, arg)=>{
      this.$router.push(arg)
    })
  }
};
</script>

<style>
body {
  font: caption;
}
.mt-2 {
  margin-top: 2rem;
}
.mt-1 {
  margin-top: 1rem;
}
.my-1 {
  margin: 1rem 0 1rem 0;
}
.mt-0 {
  margin-top: 0;
}
.mb-0{
  margin-bottom: 0;
}
.mb-2 {
  margin-bottom: 2rem;
}
.mb-1 {
  margin-bottom: 1rem;
}
.ml-1{
  margin-left: 1rem;
}
.mr-1{
  margin-right: 1rem;
}
.p1 {
  padding: 1rem;
}
.d-flex{
  display: flex;
}
.d-hidden{
  display: none;
}
.d-inline{
  display: inline;
}
/* CSS */
</style>
