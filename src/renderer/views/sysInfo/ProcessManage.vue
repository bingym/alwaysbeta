<template>
  <div>
    <main class="p1">
      <h3>进程管理</h3>
      <el-card class="mt-1" v-loading="showLoading">
        <h3 class="mt-0">进程</h3>
        <div class="search d-flex">
          <el-input placeholder="进程名" v-model="cond.name"></el-input>
          <el-input placeholder="PID" v-model="cond.pid" class="ml-1"></el-input>
          <div class="ml-1">
            <el-button @click="filterList">过滤</el-button>
          </div>
        </div>
        <el-table :data="processList" stripe border class="mt-1">
          <el-table-column label="USER" prop="user"></el-table-column>
          <el-table-column
            label="PID"
            prop="pid"
            sortable
            :sort-method="sortPid"
          ></el-table-column>
          <el-table-column
            label="CPU(%)"
            prop="cpu"
            sortable
            :sort-method="sortCPU"
          ></el-table-column>
          <el-table-column
            label="MEM(%)"
            prop="mem"
            sortable
            :sort-method="sortMem"
          ></el-table-column>
          <el-table-column label="VSZ" prop="vsz"></el-table-column>
          <el-table-column label="RSS" prop="rss"></el-table-column>
          <el-table-column label="TTY" prop="tty"></el-table-column>
          <el-table-column label="STAT" prop="stat"></el-table-column>
          <el-table-column
            label="START"
            prop="start"
            sortable
            :sort-method="sortStart"
          ></el-table-column>
          <el-table-column
            label="TIME"
            prop="time"
            sortable
            :sort-method="sortTime"
          ></el-table-column>
          <el-table-column label="COMMAND">
            <template slot-scope="scope">
              <el-tooltip
                effect="dark"
                :content="scope.row.command"
                placement="top"
              >
                <div
                  style="
                    background: #ccc;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                  "
                  @click="copyCmd(scope.row.command)"
                >
                  {{ scope.row.command.split(" ")[0] }}
                </div>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="danger"
                size="mini"
                @click="killProcess(scope.row.pid)"
                >kill</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </main>
  </div>
</template>
<script>
const childProcess = require("child_process");
const { clipboard } = require("electron");
import { sortNumber } from "../../utils/sorts";
export default {
  name: "ProcessManage",
  data() {
    return {
      processList: [],
      cond: {
        name: "",
        pid: null,
      },
      showLoading: false,
    };
  },
  methods: {
    updateInfo() {
      const commandArray = ["ps", "aux"];
      const cmd = commandArray.join(" ");
      let wp = childProcess.exec(cmd);
      const processList = [];
      const pName = this.cond.name.toLowerCase();
      const pPid = this.cond.pid;
      wp.stdout.on("data", (data) => {
        const processListBuff = data.split("\n").slice(1);
        processListBuff.forEach((element) => {
          const elementArray = element.split(/\s+/);
          let [
            user,
            pid,
            cpu,
            mem,
            vsz,
            rss,
            tty,
            stat,
            start,
            time,
            ...rest
          ] = elementArray;
          let command = rest.join(" ");
          if (user) {
            if (
              (pName === "" ||
                (pName !== "" && command.toLowerCase().includes(pName))) &&
              (!pPid || pPid === pid)
            ) {
              processList.push({
                user,
                pid,
                cpu,
                mem,
                vsz,
                rss,
                tty,
                stat,
                start,
                time,
                command: command,
              });
            }
          }
        });
      });
      this.processList = processList;
    },
    filterList() {
      this.updateInfo();
    },
    killProcess(pid) {
      const wp = childProcess.exec(`kill ${pid}`, (error, stdout, stderr) => {
        if (!null) {
          this.$message.success(`kill成功`);
          this.updateInfo();
        } else {
          this.$message(`kill失败: ${stderr}`);
        }
      });
    },
    copyCmd(cmd) {
      clipboard.writeText(cmd);
      this.$message.success("复制成功");
    },
    sortCPU(a, b) {
      return sortNumber(a.cpu, b.cpu);
    },
    sortMem(a, b) {
      return sortNumber(a.mem, b.mem);
    },
    sortPid(a, b) {
      return sortNumber(a.pid, b.pid);
    },
    sortStart(a, b) {
      return sortNumber(a.start, b.start);
    },
    sortTime(a, b) {
      return sortNumber(a.time, b.time);
    },
  },
  mounted() {
    this.updateInfo();
  },
};
</script>
<style scoped>
</style>