<template>
  <div>
    <main class="p1">
      <h3>UUID</h3>
      <el-card>
        <div class="card-header d-flex">
          <el-input show-word-limit class="mr-1" v-model="value"> </el-input>
          <el-button size="small" type="text" @click="newUUID"
            >生成一个UUID
          </el-button>
        </div>
        <div>
          <div class="mt-1">
            <el-switch
              v-model="sep"
              active-text="带分隔符"
              inactive-text="不带分隔符"
            >
            </el-switch>
            <el-switch
              v-model="upperCase"
              active-text="大写"
              inactive-text="小写"
              class="ml-1"
            >
            </el-switch>
          </div>
        </div>
        <h4 class="mb-0">
          {{ outValue }}
        </h4>
      </el-card>
    </main>
  </div>
</template>
<script>
import {
  v4 as uuidv4,
  validate as uuidValidate,
  parse as uuidParse,
  stringify as uuidStringify,
} from "uuid";
export default {
  name: "Uuid",
  data() {
    return {
      value: "",
      sep: true,
      upperCase: false,
    };
  },
  computed: {
    outValue() {
      if (this.value) {
        if (!uuidValidate(this.value)) {
          return "校验失败";
        } else {
          let ret = this.value;
          if (this.sep) {
            ret = uuidStringify(uuidParse(ret));
          } else {
            ret = ret.replace(/-/g, "");
          }
          if (this.upperCase) {
            ret = ret.toUpperCase();
          } else {
            ret = ret.toLowerCase();
          }
          return ret;
        }
      } else {
        return "";
      }
    },
  },
  methods: {
    newUUID() {
      this.value = uuidv4();
    },
  },
};
</script>
<style scoped>
</style>