<script>

import FeedBack1 from '../../assets/images/feedBack/feedback1.jpg'
import FeedBack2 from '../../assets/images/feedBack/feedback2.jpg'
import FeedBack3 from '../../assets/images/feedBack/feedback3.jpg'


import { Start } from "../constant"

import { ref } from 'vue';


// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {

    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        const testimonial = ref([
            {
                imageUrl: FeedBack1,
                name: 'John Doe',
                icon: Start,
                rate: "(' 4.5 ')",
                message: 'Mike is an award-winning wildlife writer, former editor of Travel Zambia magazine  and author of the Bradt Guide to Southern African Wildlife.'
            },

            {
                imageUrl: FeedBack2,
                name: 'John Doe',
                icon: Start,
                rate: "(' 3.5 ')",
                message: 'Mike is an award-winning wildlife writer, former editor of Travel Zambia magazine  and author of the Bradt Guide to Southern African Wildlife.'
            },

            {
                imageUrl: FeedBack3,
                name: 'John Doe',
                icon: Start,
                rate: "(' 3 ')",
                message: 'Mike is an award-winning wildlife writer, former editor of Travel Zambia magazine  and author of the Bradt Guide to Southern African Wildlife.'
            },

            {
                imageUrl: FeedBack1,
                name: 'John Doe',
                icon: Start,
                rate: "(' 4.5 ')",
                message: 'Mike is an award-winning wildlife writer, former editor of Travel Zambia magazine  and author of the Bradt Guide to Southern African Wildlife.'
            },
        ]);

            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };

        return {
            testimonial,
            onSwiper,
            onSlideChange,
            modules: [Autoplay, Pagination],
        }

    }

}
</script>
<template>
  <section class="">
     <div class="container flex flex-col mx-auto  items-start justify-center px-3">
            <h1 class="h1">Our Testimonials</h1>
                <div class="container flex flex-col  mx-auto md:px-4 ">
                        <div class="items-center justify-center py-10">
                            <!-- swiper -->
                            <swiper
                                    :modules="modules"                                    
                                    :autoplay="{
                                        delay: 7000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: false
                                    }"
                                    :breakpoints="{
                                        // Breakpoint for medium screens
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 10
                                        },
                                        // Breakpoint for extra large screens
                                        1024: {
                                            slidesPerView: 2,
                                            spaceBetween: 20
                                        }
                                    }"
                                    :thumbs="{ swiper: thumbsSwiper }"
                                    :mousewheel="true"
                                    :pagination="{ clickable: true }"
                                    @swiper="onSwiper"
                                    @slideChange="onSlideChange"                                      
                                >
                                  <SwiperSlide   v-for="object, objectIndex in testimonial" :key="objectIndex" class="container flex mx-auto items-center justify-center cursor-pointer mb-20">                                       
                                             <div class="relative flex items-center max-w-xl justify-between">
                                                <img :src="object.imageUrl" alt="FeedBack" class="w-24 h-24 rounded-full">
                                                <div class="flex flex-col justify-center">
                                                    <div class="flex flex-row justify-between mx-2">
                                                       <h2 class="xl:text-3xl text-2xl text-[#5252FF] font-bold mb-2">
                                                              {{ object.name }}                                    
                                                       </h2>
                                                        <div class="flex flex-row items-center space-x-2">
                                                            <component :is="object.icon" class="w-6 h-6 fill-amber-500" />
                                                            
                                                            <p class="text-sm font-semibold">{{ object.rate }}</p>
                                                        </div>
                                                    </div>
                                                    <p class="text-justify px-3 mb-2">
                                                            {{ object.message }}
                                                    </p>
                                                </div>
                                             </div>
                                  </SwiperSlide>  
                            </swiper>
                            <!-- v-for="n in 5" :key="n" -->
                        </div>
                    </div>   

        </div>  
  </section>
</template>
