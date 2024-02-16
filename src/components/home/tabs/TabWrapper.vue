<script>
import SafariTour1 from '../../../assets/images/mainHeader/1.jpg';
import SafariTour2 from '../../../assets/images/mainHeader/5.jpeg';
import SafariTour3 from '../../../assets/images/mainHeader/1.png';
import SafariTour4 from '../../../assets/images/mainHeader/12.png';
import SafariTour5 from '../../../assets/images/mainHeader/13.jpeg';

import { ArrowRightCircle, Start, Briefcase, History } from "../../constant"


// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { ref, provide } from 'vue'
export default {
    name: "Tab Wrapper",

     components: {
        Swiper,
        SwiperSlide,
    },

    setup (props, { slots }) {

        const tabMenu = ref(slots.default().map((object) => object.props.title))
        const selectTitle = ref(tabMenu.value[0])

        provide("selectTitle", selectTitle)

        const safariTour = ref(
            [
                {
                    title: 'Zanzibar',
                    bgImageUrl: SafariTour1,
                    startIcon: Start,
                    reviews: '4.9/5.0 - (5000 Reviews)',
                    briefcaseIcon: Briefcase,
                    headerBriefcase: 'Best Time to go',
                    paragraphBriefcase: 'June to October; January to February',
                    historyIcon: History,
                    headerHistory: 'High Season',
                    paragraphHistory: 'July to March & June to October',
                    moreInformation: 'Zanzibar[a] is an insular semi-autonomous region which united with  Tanganyika in 1964 to form the United Republic of Tanzania. It is an archipelago in the Indian Ocean, 25–50 km (16–31 mi) off the coast of the African mainland, and consists of many small islands and two large ones: Unguja (the main island, referred to informally as Zanzibar) and Pemba Island. The capital is Zanzibar City, located on the island of Unguja. Its historic centre, Stone Town, is a World Heritage Site.'
                },
                {
                    title: 'Serengeti',
                    bgImageUrl: SafariTour2,
                    startIcon: Start,
                    reviews: '4.9/5.0 - (5000 Reviews)',
                    briefcaseIcon: Briefcase,
                    headerBriefcase: 'Best Time to go',
                    paragraphBriefcase: 'June to October; January to February',
                    historyIcon: History,
                    headerHistory: 'High Season',
                    paragraphHistory: 'July to March & June to October',
                    moreInformation: 'Zanzibar[a] is an insular semi-autonomous region which united with  Tanganyika in 1964 to form the United Republic of Tanzania. It is an archipelago in the Indian Ocean, 25–50 km (16–31 mi) off the coast of the African mainland, and consists of many small islands and two large ones: Unguja (the main island, referred to informally as Zanzibar) and Pemba Island. The capital is Zanzibar City, located on the island of Unguja. Its historic centre, Stone Town, is a World Heritage Site.'
                },

                {
                    title: 'Ngorongoro Crater',
                    bgImageUrl: SafariTour3,
                    startIcon: Start,
                    reviews: '4.9/5.0 - (5000 Reviews)',
                    briefcaseIcon: Briefcase,
                    headerBriefcase: 'Best Time to go',
                    paragraphBriefcase: 'June to October; January to February',
                    historyIcon: History,
                    headerHistory: 'High Season',
                    paragraphHistory: 'July to March & June to October',
                    moreInformation: 'Zanzibar[a] is an insular semi-autonomous region which united with  Tanganyika in 1964 to form the United Republic of Tanzania. It is an archipelago in the Indian Ocean, 25–50 km (16–31 mi) off the coast of the African mainland, and consists of many small islands and two large ones: Unguja (the main island, referred to informally as Zanzibar) and Pemba Island. The capital is Zanzibar City, located on the island of Unguja. Its historic centre, Stone Town, is a World Heritage Site.'
                },

                {
                    title: 'Tarangire',
                    bgImageUrl: SafariTour4,
                    startIcon: Start,
                    reviews: '4.9/5.0 - (5000 Reviews)',
                    briefcaseIcon: Briefcase,
                    headerBriefcase: 'Best Time to go',
                    paragraphBriefcase: 'June to October; January to February',
                    historyIcon: History,
                    headerHistory: 'High Season',
                    paragraphHistory: 'July to March & June to October',
                    moreInformation: 'Zanzibar[a] is an insular semi-autonomous region which united with  Tanganyika in 1964 to form the United Republic of Tanzania. It is an archipelago in the Indian Ocean, 25–50 km (16–31 mi) off the coast of the African mainland, and consists of many small islands and two large ones: Unguja (the main island, referred to informally as Zanzibar) and Pemba Island. The capital is Zanzibar City, located on the island of Unguja. Its historic centre, Stone Town, is a World Heritage Site.'
                },

                {
                    title: 'Manyara',
                    bgImageUrl: SafariTour5,
                    startIcon: Start,
                    reviews: '4.9/5.0 - (5000 Reviews)',
                    briefcaseIcon: Briefcase,
                    headerBriefcase: 'Best Time to go',
                    paragraphBriefcase: 'June to October; January to February',
                    historyIcon: History,
                    headerHistory: 'High Season',
                    paragraphHistory: 'July to March & June to October',
                    moreInformation: 'Zanzibar[a] is an insular semi-autonomous region which united with  Tanganyika in 1964 to form the United Republic of Tanzania. It is an archipelago in the Indian Ocean, 25–50 km (16–31 mi) off the coast of the African mainland, and consists of many small islands and two large ones: Unguja (the main island, referred to informally as Zanzibar) and Pemba Island. The capital is Zanzibar City, located on the island of Unguja. Its historic centre, Stone Town, is a World Heritage Site.'
                },
            ]
        )

            const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        return {
            tabMenu,
            selectTitle,
            ArrowRightCircle,
            safariTour,

            onSwiper,
            onSlideChange,
            modules: [Autoplay, Pagination],
        }
    }

}
</script>

<template>
    <section class="mb-20">
        <div class="container flex flex-col mx-auto  items-start justify-center px-2">
            <h1 class="h1">Top Safari Tours</h1>
              <div
                    class="hidden xl:flex mt-10 outline-none border-2 border-green-400 w-full h-28 rounded-t-lg items-center justify-between px-6">
                    <ul class="text-[#279E72] text-xl cursor-pointer" v-for="object, objectIndex in tabMenu" :key="objectIndex" @click="selectTitle = object">
                        <li class="">
                            {{ object }}
                        </li>
                    </ul>
                </div>

                <slot />

           
                 

                  <!-- More Safari Button -->
                <button
                    class="flex capitalize mt-4 md:mr-4 xl:mr-0 items-center justify-center self-end bg-green-400 hover:bg-custom-green px-10 py-4 text-white rounded-lg">
                    More safari...
                </button>
        </div>

        <div class="md:flex xl:hidden" >

            <Swiper 
                               :modules="modules"
                                :breakpoints="{
                                    // Breakpoint for medium screens
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 10
                                    },
                                    // Breakpoint for extra large screens
                                    1024: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    }
                                }"
                                :autoplay="{
                                    delay: 7000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false
                                }"
                                :thumbs="{ swiper: thumbsSwiper }"
                                :mousewheel="true"
                                :pagination="{ clickable: true }"
                                @swiper="onSwiper"
                                @slideChange="onSlideChange"
   
                           >
   
                       <SwiperSlide class="flex items-center my-10 px-2" v-for="object, objectIndex in safariTour" :key="objectIndex">
                           <div  class="rounded-b-lg bg-center bg-no-repeat bg-cover object-cover md:min-h-[400px] w-full text-white"
                                           :style="{ backgroundImage: `url(${object.bgImageUrl})` }">
   
                                   <div class="container flex flex-col md:flex-row items-center justify-center gap-6 mx-auto max-w-7xl px-2">
   
                                   <!-- Open Review -->
                                   <div class="flex flex-col items-center justify-center w-1/2 space-y-4 my-10">
                                       <h1 class="text-5xl font-semibold">{{ object.title }}</h1>
   
                                       <div class="flex space-x-4 cursor-pointer">
                                           <component :is="object.startIcon" class="w-6 h-6 fill-amber-500"  v-for="n in 5" :key="n"/>
                                       </div>
                                       <p>{{ object.reviews }}</p>
   
                                       <!-- Open Two Box -->
                                       <div class="flex flex-col space-y-4 items-center justify-center text-custom-gray px-2">
                                           <div class="flex space-x-8 bg-white w-72 h-32 py-2 px-4 rounded-lg">
                                               <component :is="object.briefcaseIcon" class="fill-black mx-auto mt-4 w-20 h-20"/>
                                               <div class="flex flex-col justify-center">
                                                   <h1 class="text-xl font-bold px-2">{{ object.headerBriefcase }}</h1>
                                                   <p>{{ object.paragraphBriefcase }}</p>
                                               </div>
                                           </div>
   
                                           <div class="flex space-x-10 bg-white w-72 h-32 py-2 px-4 rounded-lg">
                                                   <component :is="object.historyIcon" class="fill-black mx-auto mt-4 w-20 h-20"/>
                                                   <div class="flex flex-col justify-center">
                                                       <h1 class="text-xl font-bold px-2">{{ object.headerHistory }}</h1>
                                                       <p>
                                                           {{ object.paragraphHistory }} 
                                                       </p>
                                                   </div>
                                               </div>
                                       </div>
                                       <!-- Open Two Box -->
   
                                   </div>
                                   <!-- Close Review -->
   
                                   <!-- Open Paragraph with two btn -->
                                   <div class="flex flex-col justify-center w-1/2 space-y-10 my-10">
                                       <p class="text-justify text-xl">{{ object.moreInformation }}
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
                               </div>
                           </div>
   
                       </SwiperSlide>
   
                   </Swiper>
        </div>
        
    </section>
    

</template>
