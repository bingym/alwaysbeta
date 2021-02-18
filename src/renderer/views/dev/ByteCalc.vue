<template>
  <div>
    <main class="p1">
      <h3>字节计算器</h3>
      <el-form ref="form">
        <el-form-item label="bit(b)">
          <el-input
            v-model="form.bitValue"
            @change="onBitValueChange"
          ></el-input>
        </el-form-item>
        <el-form-item label="byte(B)(字节)">
          <el-input
            v-model="form.byteValue"
            @change="onByteValueChange"
          ></el-input>
        </el-form-item>
        <el-form-item label="kilobyte(KB)">
          <el-input
            v-model="form.kiloByteValue"
            @change="onKiloByteValueChange"
          ></el-input>
        </el-form-item>
        <el-form-item label="megabyte(MB)">
          <el-input
            v-model="form.megaByteValue"
            @change="onMegaByteValueChange"
          ></el-input>
        </el-form-item>
        <el-form-item label="gigabyte(GB)">
          <el-input
            v-model="form.gigaByteValue"
            @change="onGigaByteValueChange"
          ></el-input>
        </el-form-item>
        <el-form-item label="terabyte(TB)">
          <el-input
            v-model="form.teraByteValue"
            @change="onTeraByteValueChange"
          ></el-input>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>
<script>
export default {
  name: "ByteCalc",
  data() {
    return {
      form: {
        bitValue: "",
        byteValue: "",
        kiloByteValue: "",
        megaByteValue: "",
        gigaByteValue: "",
        teraByteValue: "",
      },
    };
  },
  computed: {},
  methods: {
    onBitValueChange() {
      const value = this.form.bitValue;
      this.form.byteValue = value / 8;
      this.form.kiloByteValue = value / 8 / 1024;
      this.form.megaByteValue = value / 8 / Math.pow(1024, 2);
      this.form.gigaByteValue = value / 8 / Math.pow(1024, 3);
      this.form.teraByteValue = value / 8 / Math.pow(1024, 4);
    },
    onByteValueChange() {
      const value = this.form.byteValue;
      this.form.bitValue = value * 8;
      this.form.kiloByteValue = value / 1024;
      this.form.megaByteValue = value / Math.pow(1024, 2);
      this.form.gigaByteValue = value / Math.pow(1024, 3);
      this.form.teraByteValue = value / Math.pow(1024, 4);
    },
    onKiloByteValueChange() {
      const value = this.form.kiloByteValue;
      this.form.bitValue = value * 8 * 1024;
      this.form.byteValue = value * 1024;
      this.form.megaByteValue = value / 1024;
      this.form.gigaByteValue = value / Math.pow(1024, 2);
      this.form.teraByteValue = value / Math.pow(1024, 3);
    },
    onMegaByteValueChange() {
      const value = this.form.megaByteValue;
      this.form.bitValue = value * 8 * Math.pow(1024, 2);
      this.form.byteValue = value * Math.pow(1024, 2);
      this.form.kiloByteValue = value * 1024;
      this.form.gigaByteValue = value / 1024;
      this.form.teraByteValue = value / Math.pow(1024, 2);
    },
    onGigaByteValueChange() {
      const value = this.form.gigaByteValue;
      this.form.bitValue = value * 8 * Math.pow(1024, 3);
      this.form.byteValue = value * Math.pow(1024, 3);
      this.form.kiloByteValue = value * Math.pow(1024, 2);
      this.form.megaByteValue = value * 1024;
      this.form.teraByteValue = value / 1024;
    },
    onTeraByteValueChange() {
      const value = this.form.teraByteValue;
      this.form.bitValue = value * 8 * Math.pow(1024, 4);
      this.form.byteValue = value * Math.pow(1024, 4);
      this.form.kiloByteValue = value * Math.pow(1024, 3);
      this.form.megaByteValue = value * Math.pow(1024, 2);
      this.form.gigaByteValue = value * 1024;
    },
  },
};
</script>
<style scoped>
</style>