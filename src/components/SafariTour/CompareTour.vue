<script>

// Import Components from Folder called Side Compare Tour
import FormSafariTour from './SideCompareTour/FormSafariTour.vue';
import TourRange from './SideCompareTour/TourRange.vue';
import RateUSD from './SideCompareTour/RateUSD.vue';
import ComfortType from './SideCompareTour/ComfortType.vue';
import OperatorRating from './SideCompareTour/OperatorRating.vue';
import SpecilizedTour from './SideCompareTour/SpecilizedTour.vue';

import { AngleRight, } from '../constant/svg'

import { getCompareById } from "../constant/modal"


export default {
    name: "Compare Tour",

    components: {
    FormSafariTour,
    TourRange,
    RateUSD,
    ComfortType,
    OperatorRating,
    SpecilizedTour
},  

    setup () {

        return {
            getCompareById,
            AngleRight,
        }
    }
   
}
</script>
<template>
  <section class="my-10">
     
    <div class="container flex flex-col-reverse xl:flex-row items-center mx-auto text-custom-gray space-x-6 md:max-2xl:px-4 md:px-0">

        <div class="flex flex-col  mx-auto text-custom-gray px-4 md:px-0 self-start">
                     <h1 class="text-2xl font-bold mb-6">Tanzania Safari Tours - Compare Safari</h1>


                        <!-- Open 1 - 50 of 50 Tanzania Safari Tours -->
                        <div class="flex flex-row justify-between items-center mb-8">
                            <p class="text-sm">1 - 50 of 50 Tanzania Safari Tours</p>
                            <div class="flex items-center md:space-x-6">
                                <p class="font-bold">Search filters:</p>
                                <button class="outline-none text-red-500 font-extrabold capitalize ring-2 ring-red-500 rounded-lg px-6 py-2">
                                    clear filters
                                </button>
                            </div>
                        </div>
                        <!-- Close 1 - 50 of 50 Tanzania Safari Tours -->

                        <div class="container flex flex-col items-center justify-center md:grid xl:grid-cols-3 grid-cols-2 mb-10 gap-10">
                            <div class="flex flex-col justify-center w-full h-96"  v-for="object, objectIndex in getCompareById" :key="objectIndex">
                                <div class="w-full h-64 mb-4">
                                    <img :src="object.urlImage" alt="Safari Tour" class="w-full h-full object-cover rounded-lg select-none">
                                </div>

                                <!-- Open Money Description -->
                                <h2 class="text-xl font-bold text-green-500 mb-2">{{ object.moneyDescriptio }}</h2>
                                <!-- Close Money Description -->

                                <!-- Open Navigator -->
                                <nav class="flex mb-2" aria-label="Breadcrumb">
                                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                        <li class="inline-flex items-center hover:text-green-500 capitalize cursor-pointer">
                                            <component :is="AngleRight" class="fill-gray-500 w-6 h-6"/>
                                                Private tour
                                        </li>
                                        <li>
                                        <div class="flex items-center hover:text-green-500 capitalize cursor-pointer">
                                            <component :is="AngleRight" class="fill-gray-500 w-6 h-6"/>
                                            Luxury tour
                                        </div>
                                        </li>
                                         <li>
                                            <div class="flex items-center hover:text-green-500 capitalize cursor-pointer">
                                            <component :is="AngleRight" class="fill-gray-500 w-6 h-6"/>
                                               Hotel
                                            </div>
                                            </li>
                                    </ol>
                                 </nav>
                                <!-- Close Navigator -->

                                <!-- Open Visited -->
                                <p class="mb-2"><span class="font-bold">You Visited:</span> {{ object.visited }}</p>
                                <!-- Close Visited -->
                            </div>
                        </div>
                   </div>

        
                   
                     <div class="container flex flex-col mx-auto space-y-8 xl:w-1/4 px-4 md:px-0">

                        <!-- Open Your Safari Tour. -->
                        <FormSafariTour />
                        <!-- Open Your Safari Tour. -->

                        <!-- Open Tour Range -->
                        <TourRange />
                        <!-- Close Tour Range -->

                        <!-- Open Rate in USD -->
                        <RateUSD />
                        <!-- Close Rate in USD -->
                        
                        <!-- Open Operator Rating -->
                        <OperatorRating />
                        <!-- Close Operator Rating -->


                        <!-- Open Comfort Type -->
                        <ComfortType />
                        <!-- Close Comfort Type -->
                        
                        
                        <!-- Open Specilized Tour -->
                        <SpecilizedTour />
                        <!-- Close Specilized Tour -->

                       </div>

      

    </div>
       
  </section>
</template>