<template>
    <div>

        <div class="card relative z-2">
            <Menubar :model="items">
                
                <template #start>
                    <router-link to="/">
                        <img alt="logo" src="@\assets\logo-Copy.png" height="50" class="mr-2" />
                    </router-link>
                    
                    <router-link to="/about" >
                        <Button type="button" label="About Us" severity="success" text icon="pi pi-fw pi-book"></Button>
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
                    <Button label="Sign In" outlined  severity="secondary" size="small" class="mr-3"></Button>
                </template>
            </Menubar>
        </div>

        
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
            <div class="mb-3 font-bold text-3xl">
                <span class="text-900">One Place, </span>
                <span class="text-blue-600">Many Items</span>
            </div>
            <div class="text-700 mb-6">Enter Sri Lanka's freshest online grocery store for all your grocery needs- fresh to frozen and everything in between! Now, you can order ALL your daily necessities from the comfort of your home or anywhere you want! Choose from same-day, next-day & saver to ensure you get what you need when you need it.</div>
            <div class="grid">
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-tags text-4xl text-blue-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">Best Prices & Offers</div>
                    <span class="text-700 line-height-3">Enjoy the same lowest prices as your local Cargills Food City, Express & Food Hall store!</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-box text-4xl text-blue-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">Wide Assortment</div>
                    <span class="text-700 line-height-3">Choose from a variety of products from branded, chilled, fresh & frozen. New products added weekly!</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-undo text-4xl text-blue-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">Easy Returns</div>
                    <span class="text-700 line-height-3">Not satisfied with a product? Return it at the doorstep & get a refund within hours.</span>
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
        name: 'AboutUs',
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