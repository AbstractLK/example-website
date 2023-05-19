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
                            <Button label="Contact Us" plain text icon="pi pi-fw pi-comments"></Button>
                        </router-link>
                        <router-link to="" >
                            <Button label="Branches" plain text icon="pi pi-fw pi-clone"></Button>
                        </router-link>
                    </template>
                    <template #end>
                        <InputText placeholder="Search" class="mr-5" type="text" />

                        <Button label="Sign Up" outlined  size="small" class="mr-3"></Button>
                        <router-link to="/signIn">
                            <Button label="Sign In" outlined  severity="secondary" size="small" class="mr-3"></Button>
                        </router-link>
                    </template>
                </Menubar>
            </div>

            <div class="grid grid-nogutter surface-section text-800">
                <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <div class="text-3xl text-success font-bold mb-1">A range of </div>
                        <span class="block text-6xl font-bold mb-1">Fresh Vegetables</span>
                        <div class="text-5xl text-primary font-bold mb-3">From farm to store within 24 hours.</div>
                        <p class="mt-0 mb-4 text-700 line-height-3">Harvest Super is a Sri Lankan supermarket chain that offers online shopping services. You can visit their website at harvestsuper.com to shop online.</p>
                        
                        
                    </section>
                </div>
                <div class="col-12 md:col-6 overflow-hidden">
                    <img src="@\assets\newslide.jpg" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
                </div>
            </div>

            <div class="bg-bluegray-900 text-gray-100 p-2 flex justify-content-between lg:justify-content-center align-items-center flex-wrap mt-5 mx-8">
                <div class="font-bold mr-8">🔥 Hot Deals!</div>
                <div class="align-items-center hidden lg:flex">
                    <span class="line-height-3">Enjoy exclusive additional discounts up to 25% off when you shop online</span>
                </div>
                <a class="flex align-items-center ml-2 mr-8">
                    <a class="text-white" href="#"><span class="underline font-bold">Learn More</span></a>
                </a>
                <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
                    <i class="pi pi-times"></i>
                </a>
            </div>

            
        </div>

</template>

<script>
    import Button from "primevue/button";
    import Menubar from 'primevue/menubar';
    import InputText from 'primevue/inputtext';

    export default {
        name: 'HomePage',
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

<style>
</style>