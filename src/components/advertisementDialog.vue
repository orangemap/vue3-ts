<template>
  <el-dialog title="提示" v-model="isShowDialog" width="30%">
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="confrim">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script  lang='ts'>
import { defineComponent, } from "vue";
export default defineComponent({
  name: "advertisementDialog",
  props: {
    isShowDialog: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const cancle = () => {
        
    };
    const confrim = () => {};
    return { cancle, confrim };
  }
});
</script>

<style lang="scss" scoped>
</style>
