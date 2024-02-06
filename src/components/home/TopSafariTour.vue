<script>
import { ref } from 'vue'

import MainImage from '../../assets/images/mainHeader/13.jpeg';

export default {
    setup() {
        const tabMenu = ref([
            { title: 'Zanzibar', link: '' },
            { title: 'Serengeti', link: '' },
            { title: 'Ngorongoro Crater', link: '' },
            { title: 'Tarangire', link: '' },
            { title: 'Manyara', link: '' },
        ])
        return {
            tabMenu,
            MainImage
        }
    }
}
</script>

<template>
    <section class="mb-20">

        <div class="container flex flex-col mx-auto  items-start justify-center px-2">
            <h1 class="h1">Top Safari Tours</h1>

            <!-- TabView -->
            <div
                class="hidden md:flex mt-10 outline-none border-2 border-green-400 w-full h-28 rounded-t-lg items-center justify-between px-6">
                <ul class="text-[#279E72] text-xl" v-for="object, objectIndex in tabMenu" :key="objectIndex">
                    <li class="">
                        <a href="">{{ object.title }}</a>
                    </li>
                </ul>
            </div>

            <!-- swiper with image -->
            <div class="rounded-b-lg bg-center bg-no-repeat bg-cover object-cover md:min-h-[700px] w-full"
                :style="{ backgroundImage: `url(${MainImage})` }">
            </div>
            
            <!-- More Safari Button -->
            <button
                class="capitalize mt-4 flex items-center justify-center self-end bg-custom-green px-10 py-4 text-white rounded-lg">
                More safari...
            </button>

        </div>

    </section>
</template>
