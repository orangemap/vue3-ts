<template>
  <el-dialog :title="title" v-model="modelValue" width="600px">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="confrim">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { rule } from "@/utils/rules";
export default defineComponent({
  name: "advertisementDialog",
  props: {
    // modelValue: {
    //   type: Boolean,
    //   default: false
    // },
    ruleForm: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      title: "提示"
    };
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const rules = rule;
    const cancle = () => {
      context.emit("update:modelValue", false);
    };
    return { rules, cancle };
  },
  methods: {
    confrim() {
      this.$emit("update:modelValue", false);
    }
  }
});
</script>

<style lang="scss" scoped></style>
