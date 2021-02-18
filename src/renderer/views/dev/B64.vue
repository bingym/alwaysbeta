<template>
  <div>
    <main class="p1" v-loading="showLoading" element-loading-text="读取中...">
      <h3>Base64编解码</h3>
      <el-input
        :cols="30"
        :rows="10"
        type="textarea"
        placeholder="要编码的内容"
        v-model="value1"
      ></el-input>
      <div class="my-1">
        <input type="file" id="afile" class="d-hidden" @change="onFileChange" />
        <el-button @click="encode">编码 ↓</el-button>
        <el-button @click="onFileClick" class="ml-1">选择文件</el-button>
        <el-button @click="decode">解码 ↑</el-button>
      </div>
      <el-input
        :cols="30"
        :rows="20"
        type="textarea"
        placeholder="要解码的内容"
        v-model="value2"
      ></el-input>
    </main>
  </div>
</template>
<script>
export default {
  name: "B64",
  data() {
    return {
      value1: "",
      value2: "",
      showLoading: false,
    };
  },
  methods: {
    encode() {
      let value = unescape(encodeURIComponent(this.value1));
      this.value2 = window.btoa(value);
    },
    decode() {
      try {
        let value = escape(window.atob(this.value2));
        this.value1 = decodeURIComponent(value);
      } catch (err) {
        this.$message.error("不合法的base64值");
      }
    },
    onFileClick() {
      document.querySelector("#afile").click();
      this.showLoading = true;
    },
    onFileChange(e) {
      const ofile = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(ofile);
      const that = this;
      reader.onload = function () {
        that.value2 = this.result;
        that.showLoading = false;
      };
    },
  },
};
</script>
<style scoped>
</style>