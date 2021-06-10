import { reactive, ref } from 'vue';
export const login = () => {
    let loginForm = reactive<LoginFrom>({
        userName: "",
        password: "",
    })
    const formRef = ref<any>(null)
    const loading = ref(false);
    const changePassword = () => {

    }
    return {
        loginForm,
        loading,
        formRef,
        changePassword
    }
}