<template>
  <div>
    <main class="p1">
        <h3>CPU</h3>
        <el-table class="mt-1" :data="info" border stripe>
            <el-table-column prop="key" label="key">
            </el-table-column>
            <el-table-column prop="value" label="value"></el-table-column>
        </el-table>
    </main>
  </div>
</template>
<script>
const childProcess = require('child_process')
export default {
  name: "Cpu",
  data() {
    return {
        info:[]
    };
  },
  methods: {
      updateInfo(){
        childProcess.exec('lscpu', (err, stdout, stderr)=>{
            const data = stdout.split('\n').slice(0,-1)
            data.forEach(item=>{
                const [key, value] = item.split(':')
                this.info.push({key:key.trim(), value:value.trim()})
            })
        })
      }
  },mounted(){
      this.updateInfo()
  }
};
</script>
<style scoped>
</style>