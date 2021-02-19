<template>
  <div>
    <main class="p1">
      <h3>文件管理</h3>
      <div class="d-flex">
        <el-input placeholder="路径" v-model="cPath"></el-input>
        <el-input placeholder="文件名" class="ml-1" v-model="cName"></el-input>
        <div class="ml-1">
          <el-button @click="find">查找</el-button>
        </div>
      </div>
      <div class="op mt-1">
        <i class="el-icon-top" @click="backPath"></i>
      </div>
      <el-table :data="fileList" stripe border class="mt-1">
        <el-table-column label="#">
          <template slot-scope="scope">
            <div @click="onFileClick(scope.row)">
              <i
                class="el-icon-folder"
                v-if="scope.row.property.startsWith('d')"
                style="color: #409eff"
              ></i>
              <i v-else class="el-icon-document"></i>
              <span class="ml-1">{{ scope.row.filename }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="property" label="属性"></el-table-column>
        <el-table-column prop="inode" label="i-node"></el-table-column>
        <el-table-column prop="user" label="拥有者"></el-table-column>
        <el-table-column prop="group" label="用户组"></el-table-column>
        <el-table-column prop="filesize" label="文件大小"></el-table-column>
        <el-table-column prop="update_at" label="修改日期"></el-table-column>
      </el-table>
    </main>
  </div>
</template>
<script>
const childProcess = require("child_process");
const os = require("os");
const pathLib = require("path");
export default {
  name: "FileManage",
  data() {
    return {
      cName: "",
      cPath: "",
      fileList: [],
    };
  },
  methods: {
    find() {
      this.fileList = [];
      if (this.cName && this.cPath) {
        const findWp = childProcess.exec(
          `find ${this.cPath} -name '${this.cName}'`
        );
        findWp.stdout.on("data", (data) => {
          data = data.split("\n");
          data.forEach((ele) => {
            this.fileList.push({
              filePath: ele,
            });
          });
        });
      }
    },
    onFileClick(row) {
      if (row.property.startsWith("d")) {
        this.cPath = pathLib.join(this.cPath, row.filename);
      }
    },
    backPath() {
      this.cPath = "/" + this.cPath.split("/").slice(1, -1).join("/");
    },
  },
  watch: {
    cPath(newValue, oldValue) {
      this.fileList = [];
      childProcess.exec(`ls -lh ${newValue}`, (err, stdout, stderr) => {
        const lines = stdout.split("\n").slice(1);
        lines.forEach((line) => {
          const [property, inode, user, group, filesize, ...rest] = line.split(
            /\s+/
          );
          if (property) {
            this.fileList.push({
              property,
              inode,
              user,
              group,
              filesize,
              update_at: rest.slice(0, -1).join(" "),
              filename: rest.slice(-1)[0],
            });
          }
        });
      });
    },
  },
  mounted() {
    const homedir = os.homedir();
    this.cPath = homedir;
  },
};
</script>
<style scoped>
</style>