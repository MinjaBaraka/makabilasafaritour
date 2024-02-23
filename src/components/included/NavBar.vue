<script>
import { ref } from 'vue'

import { Search, Menu } from '../../components/constant/svg'
export default {
    setup () {

        const menu = ref([
            { title: 'Home', link: '/' },
            { title: 'About Us', link: '/AboutUs' },
            { title: 'Tours', link: '/Tours' },
            { title: 'Parks', link: '' },
            { title: 'Operators', link: '' },
            { title: 'Plan with AI', link: '' },
        ])

        return {
            menu,
            Search,
            Menu
        }

    }
}
</script>

<template>
    <header class="sticky top-0 z-50 ">
        <div class=" bg-white">

            <nav class="container mx-auto flex items-center justify-between py-8 px-6 xl:px-0 max-w-screen-xl">
    
                <!-- Logo -->
                <div class="">
                    <h1 class="text-green-500 font-bold text-2xl">Makabila Safari</h1>
                </div>
    
                <!-- Menu List -->
                <div class="hidden xl:flex items-center space-x-8">
                    <ul class="outline-none" v-for="object, objectIndex in menu" :key="objectIndex">
                        <li class="cursor-pointer ">
                            <router-link :to="object.link" class="hover:text-green-500 animation_text">{{ object.title }}</router-link>
                        </li>
                    </ul>
                </div>
    
                <!-- Search -->
                <div class="hidden xl:block">
                    <form action="" class="flex">
                        <label for="search" class="relative flex rounded-lg items-center p-2 cursor-pointer">
                            <component :is="Search" class="absolute xl:right-[10%] w-6 h-6 fill-custom-green"/>
                            <input  type="text" placeholder="search..." id="date" class="outline-none border-2 border-custom-green focus:border-custom-green py-3 px-3 w-full rounded-lg">
                        </label>
                    </form>
                </div>
    
                <!-- Mobile Menu Icon -->
                <div class="xl:hidden block">
                    <component :is="Menu" class="fill-current stroke-green-500"/>
                </div>
            </nav>
        </div>

        <div class="hidden">
            <!-- Mobile List Menu -->
            <div class="xl:hidden flex flex-col items-center absolute bg-white w-full ">
               <div class="space-y-6 mb-10">
                 <ul class="outline-none md:text-3xl text-2xl" v-for="object, objectIndex in menu" :key="objectIndex">
                           <li class="cursor-pointer">
                               <a href="" class="hover:text-green-500 ease-in duration-300 hover:underline decoration-green-500">{{ object.title }}</a>
                           </li>
                   </ul>
               </div>

                           <!-- Search -->
                    <div class="xl:hidden flex mb-10">
                        <form action="" class="flex space-x-4">
                            <label for="search" class="relative flex rounded-lg items-center p-2 cursor-pointer">
                                <component :is="Search" class="absolute right-[10%] w-6 h-6 fill-custom-green"/>
                                <input  type="text" placeholder="search..." id="date" class="outline-none border-2 border-custom-green focus:border-custom-green py-3 px-3 w-full rounded-lg">
                            </label>
                        </form>
                    </div>
            </div>
        </div>
    </header>
</template>
