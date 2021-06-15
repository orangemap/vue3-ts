<template>
  <div class="Advertisement-wrapper">
    <div class="Advertisement-title flex-between">
      <div>
        <el-button type="primary" @click="showDialog">新建广告</el-button>
      </div>
      <el-form
        ref="form"
        :model="homePageFrom"
        label-width="90px"
        :inline="true"
      >
        <el-form-item label="状态：">
          <el-select
            v-model="homePageFrom.ad_status"
            placeholder="请选择"
            @change="handleChangeStatus"
          >
            <el-option
              v-for="item in dropdownMen"
              :key="item.code"
              :label="item.state"
              :value="item.code"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="操作时间：">
          <el-date-picker
            v-model="time"
            @change="changePicker"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="广告名称：">
          <el-input
            placeholder="请输入内容"
            v-model="homePageFrom.name"
            @keyup.enter="handleSeach"
            clearable
            prefix-icon="el-icon-search"
          >
            <template #append>
              <span @click="handleSeach">搜索</span>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="id" label="广告ID" align="center">
        <template #default="scope">
          {{ `tv-000${scope.row.tv_id}` }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="广告名称">
        <template #default="scope">
          <el-tooltip
            effect="dark"
            :content="scope.row.name"
            placement="top-start"
          >
            <div class="adv-name">
              {{ scope.row.name }}
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="mini_file_url" label="图片" align="center">
        <template #default="scope">
          <el-tooltip placement="right" effect="light">
            <template #content v-if="scope.row.show">
              <el-image
                style="height: 200px; width: 400px"
                :src="scope.row.file_url"
                :fit="'scale-down'"
              >
              </el-image>
            </template>
            <el-image
              @mouseover="handleMouseover(scope.row)"
              style="height: 40px; width: 80px"
              :fit="'scale-down'"
              :src="scope.row.mini_file_url"
            >
            </el-image>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="ad_space_name" label="广告位" align="center">
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template #default="scope">
          <el-tag effect="plain" :type="tagTypes[scope.row.ad_status]">
            {{ statusTypes[scope.row.ad_status] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="operator" label="操作人" align="center">
      </el-table-column>
      <el-table-column
        prop="update_time"
        label="操作时间"
        width="160"
        align="center"
      >
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template #default="scope">
          <el-button
            :disabled="btnDisable(scope.row.ad_status)"
            type="text"
            @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button type="text" @click="handleUpateStatus(scope.row)">{{
            btnStatu[scope.row.ad_status]
          }}</el-button>
          <el-button type="text" @click="handleAdvertisementDel(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="changePagination"
    >
    </el-pagination>
    <AdvertisementDialog v-model="isShowDialog" :ruleForm="ruleForm" />
  </div>
</template>
<script lang="tsx">
import { defineComponent, onMounted, reactive, ref } from "vue";
import {
  useAdvertisement,
  useTable,
  useFilterTable
} from "@/utils/advertisement";
import AdvertisementDialog from "@/components/advertisementDialog.vue";
export default defineComponent({
  name: "Advertisement",
  components: { AdvertisementDialog },
  setup() {
    const { dropdownMen, btnStatu, statusTypes, tagTypes } = useAdvertisement();
    const {
      btnDisable,
      handleMouseover,
      handleUpateStatus,
      handleAdvertisementDel,
      handleEdit
    } = useTable();
    const {
      time,
      total,
      tableData,
      homePageFrom,
      handleSeach,
      getTableList,
      handleChangeStatus,
      changePagination,
      changePicker
    } = useFilterTable();
    const isShowDialog = ref(false);
    const ruleForm = reactive({
      id: 0
    });
    const showDialog = () => {
      isShowDialog.value = true;
    };
    onMounted(() => {
      getTableList();
    });
    return {
      time,
      total,
      ruleForm,
      btnStatu,
      tagTypes,
      statusTypes,
      tableData,
      dropdownMen,
      isShowDialog,
      homePageFrom,
      btnDisable,
      showDialog,
      handleSeach,
      changePicker,
      changePagination,
      handleMouseover,
      handleEdit,
      handleUpateStatus,
      handleChangeStatus,
      handleAdvertisementDel
    };
  }
});
</script>

<style lang="scss" scoped>
.Advertisement-wrapper {
  padding: 0 20px;
  flex: 1;
  .Advertisement-title {
    margin-top: 20px;
    /deep/.el-select .el-input__inner {
      width: 100px;
    }
  }
}
</style>
