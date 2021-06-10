import { mock } from 'mockjs';
export const statusList = [
    {
        label: "全部",
        value: ""
    },
    {
        label: "未发布",
        value: "NOT"
    },
    {
        label: "显示中",
        value: "ON"
    },
    {
        label: "已关闭",
        value: "OFF"
    }
]
//显示表格的状态
export const statusType = {
    "NOT": "未发布",
    "ON": "显示中",
    "OFF": "已关闭"
}
//标签的状态
export const tagType = {
    "NOT": "danger",
    "ON": "success",
    "OFF": "info"
}
//标签的状态
export const statusBtn = {
    "NOT": "开启",
    "ON": "关闭"
}
//开启关闭
export const openCloseType = {
    "NOT": "ON",
    "ON": "OFF"
}

export const tableList = mock({
    'list|10': [
        {
            'id|+1': 1,
            'reasonOpening': '@cword(20)',
            'remark': '@cword(30)',
            'status|1': ["ON","NOT","OFF"],
            'operator': "admin",
            "isShow":1,
            'operateTime':'2021-05-04 14:05:00'
        }
    ]
}).list