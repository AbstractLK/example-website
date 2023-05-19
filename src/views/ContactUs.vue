<template>
    <div>

        <div class="card relative z-2">
            <Menubar :model="items">
                
                <template #start>
                    <router-link to="/">
                        <img alt="logo" src="@\assets\logo-Copy.png" height="50" class="mr-2" />
                    </router-link>
                    
                    <router-link to="/about" >
                        <Button type="button" label="About Us" plain text icon="pi pi-fw pi-book"></Button>
                    </router-link>
                    <router-link to="/contact" >
                        <Button label="Contact Us" severity="success" text icon="pi pi-fw pi-comments"></Button>
                    </router-link>
                    <router-link to="" >
                        <Button label="Branches" plain text icon="pi pi-fw pi-clone"></Button>
                    </router-link>
                </template>
                <template #end>
                    <InputText placeholder="Search" class="mr-5" type="text" />

                    <Button label="Sign Up" outlined  size="small" class="mr-3"></Button>
                    <Button label="Sign In" outlined  severity="secondary" size="small" class="mr-3"></Button>
                </template>
            </Menubar>
        </div>

        <!-- <div style="background-color: #5a635c;" class="">
            <h1 style="color: #a4bdaa;padding-top: 10px; font-size: 300%; margin-left: 100px">Contact Us</h1>
        </div> -->
        <div class="bg-bluegray-900 text-gray-100 p-1 h-5rem mx-8 pb-8 my-5">
            <div class="card">
            <div class="flex justify-content-center flex-wrap card-container yellow-container">
                <div class="flex align-items-center justify-content-center w-4rem h-4rem font-bold text-gray-900 border-round m-2"><img src="@\assets\enquire.png" class="h-5rem"></div>
                <div class="flex align-items-center justify-content-center w-12rem h-5rem font-bold text-gray-900 border-round m-2"><h1 style="color: #c98c40" class="">Enquire Now</h1> </div>
            </div>
        </div>
        </div>

        
        <div class="card">
            <div class="flex justify-content-around flex-wrap card-container indigo-container">
                <div class="card flex justify-content-start">
                    <div class="flex flex-column gap-2">
                        <label for="username"><b>Name</b></label>
                        <InputText id="username" placeholder="Enter your name" v-model="value" aria-describedby="username-help" />
                        
                    </div>
                </div>
                <div class="bg-cyan-500 flex align-items-center justify-content-start w-17rem h-4rem font-bold m-2 px-2">
                    <i class="pi pi-home mr-4" style="font-size: 2.5rem"></i>
                    <lable>Address : Harvest Super (pvt) Limited Colombo 07, Sri Lanka.</lable>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="flex justify-content-around flex-wrap card-container indigo-container">
                <div class="card flex justify-content-start">
                    <div class="flex flex-column gap-2">
                        <label for="username"><b>Email</b></label>
                        <InputText id="username" placeholder="Enter your email" v-model="value" aria-describedby="username-help" />
                        
                    </div>
                </div>
                <div class="bg-cyan-500 flex align-items-center justify-content-start w-17rem h-4rem font-bold m-2 px-2">
                    <i class="pi pi-envelope mr-4" style="font-size: 2.5rem"></i>
                    <lable>E-mail : info@harvest.lk</lable>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="flex justify-content-around flex-wrap card-container indigo-container">
                <div class="card flex justify-content-start">
                    <div class="flex flex-column gap-2">
                        <label for="username"><b>Subject</b></label>
                        <InputText id="username" placeholder="Enter your subject" v-model="value" aria-describedby="username-help" />
                        
                    </div>
                </div>
                <div class="bg-cyan-500 flex align-items-center justify-content-start w-17rem h-4rem font-bold m-2 px-2">
                    <i class="pi pi-phone mr-4" style="font-size: 2.5rem"></i>
                    <lable>Tele : 033-2345678</lable>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="flex justify-content-around flex-wrap card-container indigo-container">
                <div class="card flex justify-content-start">
                    <div class="flex flex-column gap-2">
                        <label for="username"><b>Message</b></label>
                        <InputText id="username" placeholder="Enter your Message" v-model="value" aria-describedby="username-help" />
                        <Button class="my-4 mr-8" type="submit" label="Submit" severity="info" size="small" ></Button>
                    </div>
                </div>
                <div class="bg-cyan-500 flex align-items-center justify-content-start w-17rem h-4rem font-bold m-2 px-2">
                    <i class="pi pi-print mr-4" style="font-size: 2.5rem"></i>
                    <lable>Fax : 033 2280285</lable>
                </div>
            </div>
        </div>
            

    </div>
    
</template>

<script>
    import Button from "primevue/button";
    import Menubar from 'primevue/menubar';
    import InputText from 'primevue/inputtext';

    export default {
        name: 'ContactUs',
        components: {Button,Menubar,InputText},
    
        data() {
            return {
                // items: [
                //     {
                //         label: 'About Us',
                //         icon: 'pi pi-fw pi-book',
                        
                        
                //     },
                //     {
                //         label: 'Contact Us',
                //         icon: 'pi pi-fw pi-comments',
                        
                //     },
                //     {
                //         label: 'Branches',
                //         icon: 'pi pi-fw pi-clone',
                        
                //     }
                // ]
            };
        }
    };
</script>

<style></style>