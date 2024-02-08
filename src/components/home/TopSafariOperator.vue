<script>
import { ref } from 'vue';
import MainImage from '../../assets/images/mainHeader/1.png';
import { Start, Heart } from "../constant"
export default {
    setup() {

        const iconMenu = ref([
            {title: 'Manyara safari', icon1: Start, icon2: Heart, imgUrl: MainImage},
            { title: 'Leopard safari', icon1: Start, icon2: Heart, imgUrl: MainImage },
            { title: 'Lifemate safari', icon1: Start, icon2: Heart, imgUrl: MainImage },
        ])

        return {
            iconMenu,
            Start,
            Heart,
        }
    }
}
</script>

<template>
    <section class="mb-20">
        <div class="container flex flex-col mx-auto  items-start justify-center px-2">
            <h1 class="h1">Top Tours Operators</h1>

            
            <!-- Grid -->
            <div class="container flex flex-col items-center justify-center md:grid xl:grid-cols-3 grid-cols-2 space-y-10 md:space-y-0 md:gap-6 mt-10">
                <div class="flex flex-col items-center justify-center bg-blue-50 h-96" v-for="object, objectIndex in iconMenu" :key="objectIndex">
                    <div class="h-48 w-80 flex items-center justify-center mt-10">
                        <img :src="object.imgUrl" alt="" class="w-full h-full object-cover">
                    </div>
                   <div class="flex items-center space-x-24 md:grid grid-cols-2 cursor-pointer mx-8">
                        <!-- Start Icon and Text -->
                        <div class=" grid grid-rows-2 space-y-2">
                            <div class="mt-10">
                                <h1 class="h2">{{object.title}}</h1>
                            </div>
                            <div class="flex space-x-2">
                                <component :is="object.icon1" class="w-6 h-6 fill-amber-500" :class="{ 'fill-amber-500': n <= 3 }" v-for="n in 5" :key="n"/>
                            </div>
                        </div>

                        <!-- Heart Icon -->
                        <div class="flex self-center justify-end">
                            <component :is="object.icon2" class="w-10 h-10 fill-red-500"/>
                       </div>
                   </div>
                </div>
            </div>

        </div>
    </section>
</template>
