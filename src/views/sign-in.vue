<template>

    <div class="flex justify-content-center my-6">

        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div class="text-center mb-5">
                <img src="@/assets/logo-Copy.png" alt="Image" height="50" class="mb-3">
                <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                <span class="text-600 font-medium line-height-3">Don't have an account?</span>
                <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
            </div>

            <div>
                <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                <InputText id="email1" type="text" class="w-full mb-3" />

                <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                <InputText id="password1" type="password" class="w-full mb-3" />

                <div class="flex align-items-center justify-content-between mb-6">
                    <div class="flex align-items-center">
                        <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                        <label for="rememberme1">Remember me</label>
                    </div>
                    <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
                </div>

                <div class="flex justify-content-between">
                    <router-link to="/">
                        <Button label="Back" icon="pi pi-arrow-left" class="w-8rem"></Button>
                    </router-link>
                    <Button label="Sign In" icon="pi pi-user" class=""></Button>
                </div>
            </div>
        </div>

    </div>
    
</template>

<script>
    import Button from "primevue/button";
    //import Menubar from 'primevue/menubar';
    import InputText from 'primevue/inputtext';

    export default {
        name: 'signIn',
        components: {Button,InputText},
    
        data() {
            return {
                
            };
        }
    };
</script>

<style></style>