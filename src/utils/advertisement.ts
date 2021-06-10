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
    }
}
export const useTable = () => {
    const handleMouseover = (row: tableDataInvo) => { row.show = true };
    const handleEdit = () => {
         
     };
    const handleUpateStatus = () => { };
    const handleAdvertisementDel = () => { };
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
    }
}
export const useFilterTable = () => {
    let homePageFrom = reactive<AdvertisementInvo>({
        name: "",
        start_time: "",
        end_time: "",
        ad_status: "",
        page_num: 1,
        page_size: 10,
        tableData: []
    });
    const total = ref<number>(0)
    const time = ref<any>("")
    const getTableList =async  () => {
        let params = homePageFrom
        await  searchPageListApi(params).then((res) => {
            if (res.code === 200) {
                homePageFrom.tableData = res.data.items;
                total.value = res.data.total
            }
        });
    };
    const handleChangeStatus = () => {
        homePageFrom.page_num = 1
        getTableList()
    }
    const changePagination = (val: number) => {
        homePageFrom.page_num = val
        getTableList()
    }
    const changePicker = () => {
        homePageFrom.start_time = time.value ? dayjs(time.value[0]).format("YYYY-MM-DD HH:mm:ss") : ""
        homePageFrom.end_time = time.value ? dayjs(time.value[1]).format("YYYY-MM-DD HH:mm:ss") : ""
        homePageFrom.page_num = 1
        getTableList()
    }
    const handleSeach = () => {
        homePageFrom.page_num = 1
        getTableList()
    }
    return {
        time,
        total,
        homePageFrom,
        handleSeach,
        changePicker,
        changePagination,
        getTableList,
        handleChangeStatus
    }
}
