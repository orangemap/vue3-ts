//广告状态的数组
export const dropdownList = [
    {
        code: "",
        state: "全部",
    },
    {
        code: "UNPUBLISHED", //后端定义返回状态码
        state: "未发布",
    },
    {
        code: "PUBLISHED",
        state: "已发布",
    },
    {
        code: "WITHDRAWN",
        state: "已下架",
    }
]
//显示表格的状态
export const statusType ={
    "UNPUBLISHED":"未发布",
    "PUBLISHED":"已发布",
    "WITHDRAWN":"已下架",
    "INVALID":"已失效"
}
//标签的状态
export const tagType ={
    "UNPUBLISHED":"danger",
    "PUBLISHED":"success",
    "WITHDRAWN":"warning",
    "INVALID":"info"
}
//按钮的状态
export const  btnStatus={
    "UNPUBLISHED":"立即发布",
    "PUBLISHED":"立即下架",
    "WITHDRAWN":"重新发布",
    "INVALID":""
}
export const  upateStatus={
    "UNPUBLISHED":"PUBLISHED",
    "PUBLISHED":"WITHDRAWN",
    "WITHDRAWN":"PUBLISHED"
}