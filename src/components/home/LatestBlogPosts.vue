<script>
import MainImage from '../../assets/images/mainHeader/1.png';
import { ref } from 'vue';
export default {
    setup () {

          const iconMenu = ref([
            { title: 'Top Tanzania Safari Beach', imgUrl: MainImage },
            { title: 'Top Tanzania Safari Beach', imgUrl: MainImage },
            { title: 'Top Tanzania Safari Beach', imgUrl: MainImage },
        ])

        return {
            iconMenu,
        }
    }
}
</script>

<template>
  <section class="mb-20">
    <div class="container flex flex-col mx-auto  items-start justify-center px-2">
        <h1 class="h1">Latest Blog posts</h1>


        <!-- Grid Main -->
        <div class="container flex flex-col items-center justify-center md:grid xl:grid-cols-3 grid-cols-2 space-y-10 md:space-y-0 md:gap-6 mt-10">

            <!-- Grid Container -->
            <div class="flex flex-col items-center justify-center h-96  w-[100%]" v-for="object, objectIndex in iconMenu" :key="objectIndex">

                <img :src="object.imgUrl" alt="Main Image" class="w-full h-full object-cover rounded-lg">
                <div class="absolute xl:mt-72 mt-60 xl:mr-28">
                    <h1 class=" text-white text-3xl">{{object.title}}</h1>
                </div>
                
            </div>

        </div>
    </div>
  </section>
</template>
