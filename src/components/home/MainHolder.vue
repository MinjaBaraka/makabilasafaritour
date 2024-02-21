<script>
import { ref } from 'vue';
import  MainImage  from '../../assets/images/mainHeader/5.jpeg';

import { Calendar, Location, Briefcase, Circle } from "../constant"
export default {
    name: "Main Holder",
    setup () {

        // Individual states for each checkbox
        const isTopTourOperatorsChecked = ref(false);
        const isBestParksBeachersChecked = ref(false);
        const isBetterTourPriceChecked = ref(false);

        return {
            MainImage,
            Location,
            Briefcase,
            Calendar,
            Circle,
            isTopTourOperatorsChecked,
            isBestParksBeachersChecked,
            isBetterTourPriceChecked
        }
    }
}
</script>

<template>
    <section class="mb-10 min-h-[800px]">
        <div class=" container flex flex-col mx-auto mt-2" >
            <div class="rounded-md bg-center bg-no-repeat bg-cover min-h-[600px] mb-20" :style="{ backgroundImage: `url(${MainImage})` }">
                <div class="container md:ml-10 my-14 bg-white w-80 mx-auto rounded-md shadow-shadow_container">
                    <div class="container flex flex-col mx-auto items-center md:mx-auto ">
                        <h1 class="mt-10 text-xl font-bold text-custom-gray">Get Top African Safaris</h1>

                        <form action="" class="relative flex flex-col items-center space-y-6 my-10">
                            <!-- Where... -->
                            <label for="where" class="flex  rounded-lg items-center p-2">
                                <input type="text" id="where" placeholder="Where.." class="outline-none border-2 border-custom-green focus:border-custom-green py-3 px-3 w-full rounded-lg">
                                <component :is="Location" class="relative right-8 w-6 h-6 fill-custom-green"/>
                            </label>

                            <!-- Date... -->
                            <label for="date" class="flex  rounded-lg items-center p-2">
                                     <input datepicker type="text" id="date" class="outline-none border-2 border-custom-green focus:border-custom-green py-3 px-3 w-full rounded-lg" placeholder="Select date">                                    
                                    <component :is="Calendar" class="relative right-8 w-6 h-6 fill-custom-green"/>
                            </label>

                            <!-- Travellers... -->
                            <label for="travellers" class="flex  rounded-lg items-center p-2">
                                <input type="text" id="travellers" placeholder="Travellers..." class="outline-none border-2 border-custom-green focus:border-custom-green py-3 px-3 w-full rounded-lg">
                                <component :is="Briefcase" class="relative right-8 w-6 h-6 fill-custom-green"/>
                            </label>

                            <input type="button" value="Get Safari" class="cursor-pointer bg-green-400 hover:bg-custom-green w-full px-12 py-3 rounded-lg text-white">
                        </form>
                    </div>
                </div>
            </div>            
        </div>

                <!-- Open Three CheckBox -->
                <div class="container flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-3 mx-auto gap-y-10 gap-x-10 px-6">
                    <!-- Top Tour Operators -->
                    <label for="isTopTourOperatorsChecked" class="flex items-center space-x-8 ring-2 ring-green-500 px-10 py-8 rounded-lg cursor-pointer">
                        <input type="checkbox" name="" id="isTopTourOperatorsChecked" class="sr-only outline-none" v-model="isTopTourOperatorsChecked">
                        <component :is="Circle" class="w-8 h-8  fill-green-500" :class="{ 'bg-green-500 rounded-full': isTopTourOperatorsChecked }"/>
                        <h1 class="w-52 text-xl">Top Tour Operators</h1>
                    </label>

                    <!-- Best Parks & Beachers -->
                    <label for="isBestParksBeachersChecked" class="flex items-center space-x-8 ring-2 ring-green-500 px-10 py-8 rounded-lg cursor-pointer">
                        <input type="checkbox" name="" id="isBestParksBeachersChecked" class="sr-only outline-none" v-model="isBestParksBeachersChecked">
                        <component :is="Circle" class="w-8 h-8 cursor-pointer fill-green-500" :class="{ 'bg-green-500 rounded-full': isBestParksBeachersChecked }"/>
                        <h1 class="w-52 text-xl">Parks & Beachers</h1>
                    </label>

                     <!-- Better Tour Price -->
                    <label for="isBetterTourPriceChecked" class="flex items-center space-x-8 ring-2 ring-green-500 px-10 py-8 rounded-lg cursor-pointer">
                        <input type="checkbox" name="" id="isBetterTourPriceChecked" class="sr-only outline-none" v-model="isBetterTourPriceChecked">
                        <component :is="Circle" class="w-8 h-8 cursor-pointer fill-green-500" :class="{ 'bg-green-500 rounded-full': isBetterTourPriceChecked }"/>
                        <h1 class="w-52 text-xl">Better Tour Price</h1>
                    </label>
                </div>
                <!-- Close Three CheckBox -->

    </section>
</template>

