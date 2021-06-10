import { reactive, ref, computed } from 'vue';
export const useNav = () => {
    let menu = () => {
        let user: any = sessionStorage.getItem("user");
        return JSON.parse(user);
    };
    const breadcrumb = reactive({
        homePageadvertisement: {
            title: "小程序管理",
            desc: "广告管理"
        },
        homePageshieldingPage: {
            title: "页面控制",
            desc: "屏蔽页"
        }
    });
    const currentIndex = ref(0);
    const menuList = reactive(menu().menuList);
    const imageUrl = computed(() => {
        return (item: any, index: number) => {
            let i = index + 1;
            return currentIndex.value === i ? item.activeUrl : item.url;
        };
    });
    return {
        breadcrumb,
        menuList,
        imageUrl
    }
}