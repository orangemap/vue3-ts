export const userType ={
    admin: {
        userName: 'admin',
        password: "tv-zone888",
        menuList: [
            {
                title: "小程序管理",
                index: "1",
                url: require("@/assets/images/home/applet.png"),
                children: [
                    {
                        title: "广告管理",
                        index: "/homePage/advertisement",
                        route: "/homePage/advertisement",
                    },
                ],
            },
            {
                title: "页面控制",
                index: "2",
                url: require("@/assets/images/home/pagecontrol.png"),
                children: [
                    {
                        title: "屏蔽页",
                        index: "/homePage/shieldingPage",
                        route: "/homePage/shieldingPage",
                    },
                ],
            },
        ],
    },
    tvzone: {
        userName: 'tvzone',
        password: "huanwang123",
        menuList: [
            {
                title: "小程序管理",
                index: "1",
                url: require("@/assets/images/home/applet.png"),
                children: [
                    {
                        title: "广告管理",
                        index: "/homePage/advertisement",
                        route: "/homePage/advertisement",
                    },
                ],
            }
        ]
    }
}
