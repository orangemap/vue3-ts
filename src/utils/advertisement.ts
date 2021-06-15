import { reactive, ref, computed } from "vue";
import { searchPageListApi } from "@/api/advertisement";
import dayjs from "dayjs";
import {
  dropdownList,
  statusType,
  tagType,
  btnStatus
} from "@/config/advertisement";
export const useAdvertisement = () => {
  const statusTypes = statusType;
  const tagTypes = tagType;
  const btnStatu = btnStatus;
  const dropdownMen = dropdownList;
  return {
    statusTypes,
    tagTypes,
    btnStatu,
    dropdownMen
  };
};
export const useTable = () => {
  const handleMouseover = (row: TableDataInvo) => {
    row.show = true;
  };
  const handleEdit = () => {
    console.log(1);
  };
  const handleUpateStatus = () => {
    console.log(1);
  };
  const handleAdvertisementDel = () => {
    console.log(1);
  };
  const btnDisable = computed(() => {
    return (status: string) => {
      return status === "UNPUBLISHED" ? false : true;
    };
  });
  return {
    btnDisable,
    handleMouseover,
    handleUpateStatus,
    handleAdvertisementDel,
    handleEdit
  };
};
export const useFilterTable = () => {
  const homePageFrom = reactive<AdvertisementInvo>({
    name: "",
    start_time: "",
    end_time: "",
    ad_status: "",
    page_num: 1,
    page_size: 10
  });
  const tableData = ref([]);
  const total = ref<number>(0);
  const time = ref<any>("");
  const getTableList = async () => {
    const params = homePageFrom;
    await searchPageListApi(params).then(res => {
      if (res.code === 200) {
        tableData.value = res.data.items;
        total.value = res.data.total;
      }
    });
  };
  const handleChangeStatus = () => {
    homePageFrom.page_num = 1;
    getTableList();
  };
  const changePagination = (val: number) => {
    homePageFrom.page_num = val;
    getTableList();
  };
  const changePicker = () => {
    homePageFrom.start_time = time.value
      ? dayjs(time.value[0]).format("YYYY-MM-DD HH:mm:ss")
      : "";
    homePageFrom.end_time = time.value
      ? dayjs(time.value[1]).format("YYYY-MM-DD HH:mm:ss")
      : "";
    homePageFrom.page_num = 1;
    getTableList();
  };
  const handleSeach = () => {
    homePageFrom.page_num = 1;
    getTableList();
  };
  return {
    time,
    total,
    tableData,
    homePageFrom,
    handleSeach,
    changePicker,
    changePagination,
    getTableList,
    handleChangeStatus
  };
};
