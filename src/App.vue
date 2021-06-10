<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "App"
 
});
</script>
<style lang="scss">
.el-table--border th.gutter:last-of-type {
  display: block !important;
  width: 17px !important;
}
.el-table__header col[name="gutter"] {
  display: table-cell !important;
}
</style>
