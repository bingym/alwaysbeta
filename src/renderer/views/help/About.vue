<template>
  <div>
    <main class="p1">
      <h3>关于</h3>
      <ul>
        <li>nodejs版本 {{ nodeVersion }}</li>
        <li>V8 {{ v8 }}</li>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      nodeVersion: "",
      v8: "",
    };
  },
  methods: {
    updateInfo() {
      this.nodeVersion = process.version;
      this.v8 = process.versions.v8;
    },
  },
  mounted() {
    this.updateInfo();
  },
};
</script>
<style scoped>
</style>