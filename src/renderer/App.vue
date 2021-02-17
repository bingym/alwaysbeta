<template>
  <div id="app">
    <el-row>
      <el-col :span="3">
        <el-menu default-active="2" router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="dev">
            <template slot="title">
              <span>开发工具</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/dev/json-format">JSON格式化</el-menu-item>
              <el-menu-item index="/dev/uuid">UUID</el-menu-item>
              <el-menu-item index="/dev/char-calc">字符统计</el-menu-item>
              <el-menu-item index="/dev/byte-calc">字节统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/sys-info">
            <template slot="title">
              <span>系统信息</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/sys-info/basic">基础信息</el-menu-item>
              <el-menu-item index="/sys-info/monitor">资源监控</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="21">
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
/* CSS */
</style>
