<script>
import { ref } from 'vue';
import Operator1 from '../../assets/images/mainHeader/1.png';
import Operator2 from '../../assets/images/mainHeader/3.jpeg';
import Operator3 from '../../assets/images/mainHeader/5.jpeg';
import Operator4 from '../../assets/images/mainHeader/12.jpeg';

import { Start, Heart } from "../constant"
export default {
    name: "Top Safari Operator",
    setup() {

        const iconMenu = ref([
            {title: 'Manyara safari', icon1: Start, icon2: Heart, imgUrl: Operator1},
            { title: 'Leopard safari', icon1: Start, icon2: Heart, imgUrl: Operator2 },
            { title: 'Lifemate safari', icon1: Start, icon2: Heart, imgUrl: Operator4 },
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
        <div class="container flex flex-col mx-auto  items-start justify-center px-3">
            <h1 class="h1">Top Tours Operators</h1>

            
            <!-- Open Grid -->
            <div class="container flex flex-col items-center justify-center md:grid xl:grid-cols-3 grid-cols-2 space-y-10 md:space-y-0 md:gap-6 mt-4">
                <!-- Open Grid Container -->
                <div class="flex flex-col justify-center w-full" v-for="object, objectIndex in iconMenu" :key="objectIndex">
                    <div class="h-60 w-full mt-10">
                        <img :src="object.imgUrl" alt="" class="w-full h-full rounded-md object-cover select-none">
                    </div>
                   <div class="flex justify-between my-6 cursor-pointer">
                        <!-- Start Icon and Text -->
                        <div class="flex flex-col space-y-2">
                            <h1 class="h2">{{object.title}}</h1>
                            <div class="flex space-x-2">
                                <component :is="object.icon1" class="w-6 h-6 fill-amber-500" :class="{ 'fill-amber-500': n <= 3 }" v-for="n in 5" :key="n"/>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <!-- Heart Icon -->
                            <component :is="object.icon2" class="w-10 h-10 fill-red-500"/>
                       </div>                        
                   </div>
                </div>
                <!-- Close Grid Container -->
            </div>
            <!-- Close Grid -->

        </div>
    </section>
</template>
