export const rule = {
    userName: [
        {
            required: true,
            message: "请输入账号",
            trigger: "blur",
        },
    ],
    password: [
        {
            required: true,
            min: 6,
            message: "密码不能小于六位",
            trigger: "blur",
        },
    ],
}