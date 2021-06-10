<template>
  <div class="homePage-wrapper">
    <header class="flex-center homePage-wrapper-header">
      <div class="homePage-logo">Tvzone管理后台</div>
      <div class="homePage-title flex-between">
        <div class="flex-center">
          <span class="adv-position">当前位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>{{breadcrumb[breadcrumbTitle].title}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{breadcrumb[breadcrumbTitle].desc}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">您好，admin</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="handleLogot"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </header>
    <el-main class="homePage-main">
      <el-aside width="200px">
        <el-menu
          class="menuLeft"
          :default-active="$route.path"
          :unique-opened="true"
          router
        >
          <div v-for="(item, index) in menuList" :key="item.title">
            <el-submenu :index="item.index" v-if="item.children">
              <template #title>
                <img
                  class="el-menu-item-image"
                  :src="imageUrl(item, index)"
                  :height="index === 0 ? 18 : 15"
                  :width="index === 0 ? 18 : 15"
                />
                <span>{{ item.title }}</span></template
              >
              <el-menu-item
                style="padding-left: 70px"
                :index="cItem.index"
                v-for="cItem in item.children"
                :key="cItem.title"
                >{{ cItem.title }}</el-menu-item
              >
            </el-submenu>
            <el-menu-item v-else :index="item.index">{{
              item.title
            }}</el-menu-item>
          </div>
        </el-menu></el-aside
      >
      <router-view />
    </el-main>
  </div>
</template>
<script  lang='tsx'>
import { defineComponent, reactive, onMounted, computed, ref } from "vue";
import { useRouter,useRoute } from "vue-router";
import {useNav} from "@/utils/homePage";
export default defineComponent({
  name: "HomePage",
  setup() {
    const router = useRouter();
    let route =useRoute()
    const {imageUrl,menuList,breadcrumb} = useNav();
    const breadcrumbTitle = computed(() => {
       return route.path.replace(new RegExp("/", "g"), "");
    });
    const handleLogot = () => {
      router.push({
        name: "Login"
      });
    };
    return {
      handleLogot,
      imageUrl,
      menuList,
      breadcrumb,
      breadcrumbTitle
    };
  }
});
</script>

<style lang="scss">
.homePage-wrapper {
  .homePage-wrapper-header {
    line-height: 60px;
    height: 60px;
    color: #ffffff;
    .homePage-logo {
      background: $--color-primary;
      text-align: center;
      width: 200px;
      font-weight: 500;
      color: #ffffff;
      font-size: 18px;
    }
    .homePage-title {
      flex: 1;
      background: $--color-primary;
      padding: 0 20px;
      .adv-position {
        color: #fff;
        font-size: 14px;
        margin-right: 4px;
      }
      .el-dropdown-link {
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .el-menu-item-image {
    margin-right: 10px;
  }
  .el-main {
    height: calc(100vh - 60px);
    display: flex;
    .el-aside {
      height: 100%;
      .el-menu {
        height: 100%;
      }
    }
  }
  .homePage-main {
    padding: 0;
  }
}
</style>
