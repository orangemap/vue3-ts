<template>
  <div class="shieldingPage-wrapper">屏蔽页</div>
</template>
<script  lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted
} from "vue";
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const data = reactive({});
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    const refData = toRefs(data);
    return {
      ...refData
    };
  }
});
</script>

<style lang="scss" scoped>
.shieldingPage-wrapper {
}
</style>
