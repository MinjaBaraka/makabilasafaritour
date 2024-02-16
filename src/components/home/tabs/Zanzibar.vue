<script>
import MainImage from '../../../assets/images/mainHeader/13.jpeg';
import { inject } from 'vue';

import {ArrowRightCircle, Start, Briefcase, History } from "../../constant"
export default {
    props: [
        'title'
    ],

     setup() {

        const selectTitle = inject("selectTitle")

        return {
            MainImage,
            selectTitle,
            ArrowRightCircle,
            Start,
            Briefcase,
            History
        }
    }
}
</script>

<template>
    <div class="rounded-b-lg bg-center bg-no-repeat bg-cover object-cover md:min-h-[700px] w-full text-white"
                    :style="{ backgroundImage: `url(${MainImage})` }" v-show="title == selectTitle">

        <div class="container flex flex-col md:flex-row items-center justify-center gap-6 mx-auto max-w-7xl px-2">

            <!-- Open Review -->
            <div class="flex flex-col items-center justify-center w-1/2 space-y-4">
                <h1 class="text-6xl font-semibold">Zanzibar</h1>

                <div class="flex space-x-4 cursor-pointer">
                    <component :is="Start" class="w-6 h-6 fill-amber-500"  v-for="n in 5" :key="n"/>
                </div>
                <p>4.9/5.0   -  (5000 Reviews)</p>

                <div class="flex flex-col space-y-4 items-center justify-center text-custom-gray px-2">
                    <div class="flex space-x-10 bg-white w-72 h-32 py-2 px-4 rounded-lg">
                        <component :is="Briefcase" class="fill-black mx-auto mt-4 w-20 h-20"/>
                        <div class="flex flex-col justify-center">
                            <h1 class="text-xl font-bold md:px-8 xl:px-0">Best Time to go</h1>
                            <p>
                                June to October;
                                January to February
                            </p>
                        </div>
                    </div>

                     <div class="flex space-x-10 bg-white w-72 h-32 py-2 px-4 rounded-lg">
                            <component :is="History" class="fill-black mx-auto mt-4 w-20 h-20"/>
                            <div class="flex flex-col justify-center">
                                <h1 class="text-xl font-bold md:px-8 xl:px-0">High Season</h1>
                                <p>
                                    July to March & June to October 
                                </p>
                            </div>
                        </div>
                </div>

            </div>
            <!-- Close Review -->

             <!-- Open Paragraph with two btn -->
             <div class="flex flex-col justify-center w-1/2 space-y-10 px-4">
                <p class="text-justify text-xl">
                            Zanzibar is an insular semi-autonomous region which united with
                            Tanganyika in 1964 to form the United Republic of Tanzania. 
                            It is an archipelago in the Indian Ocean, 25-50km (16-31 mi) off the coast of the African mainland, 
                            and consists of many small islands and two large ones: Unguja (the main island, referred to informally as Zanzibar) 
                            and Pemba Island. The capital is Zanzibar City, located on the island of Unguja. 
                            Its historic centre, Stone Town, is a World Heritage Site.
                </p>
                <div class="flex gap-10">
                    <button class="flex items-center gap-4 bg-green-400 hover:bg-custom-green px-4 py-4 rounded-lg">
                        Top Operators
                        <component :is="ArrowRightCircle" class="fill-current w-4 h-4"/>
                    </button>

                    <button class="flex items-center gap-4 bg-green-400 hover:bg-custom-green px-4 py-4 rounded-lg">
                        Safari
                        <component :is="ArrowRightCircle" class="fill-current w-4 h-4 "/>
                    </button>
                </div>
             </div>
            <!-- Close Paragraph with two btn -->
        </div>
    </div>
</template>