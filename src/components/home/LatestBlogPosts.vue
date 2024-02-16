<script>
import Blog1 from '../../assets/images/mainHeader/3.jpeg';
import Blog2 from '../../assets/images/mainHeader/5.jpeg';
import Blog3 from '../../assets/images/mainHeader/12.jpeg';
import { ref } from 'vue';
export default {
    name: "Lastest Blog Posts",
    setup () {

          const iconMenu = ref([
            { title: 'Top Tanzania Safari Beach', imgUrl: Blog1 },
            { title: 'Top Tanzania Safari Beach', imgUrl: Blog2 },
            { title: 'Top Tanzania Safari Beach', imgUrl: Blog3 },
        ])

        return {
            iconMenu,
        }
    }
}
</script>

<template>
  <section class="mb-20">
    <div class="container flex flex-col mx-auto  items-start justify-center px-3">
        <h1 class="h1">Latest Blog posts</h1>


        <!-- Open Grid -->
        <div class="container flex flex-col items-center justify-center md:grid xl:grid-cols-3 grid-cols-2 space-y-10 md:space-y-0 md:gap-6 mt-10">

            <!-- Open Grid Container -->
            <div class="relative flex flex-col justify-center w-full" v-for="object, objectIndex in iconMenu" :key="objectIndex">

                <div class="w-full h-80 mb-6">
                    <img :src="object.imgUrl" alt="Main Image" class="h-full w-full object-cover rounded-lg">
                </div>
                
                <div class="absolute md:top-60 top-[80%]">
                    <h1 class=" md:text-4xl text-2xl text-white font-bold px-2">{{ object.title }}</h1>
                </div>
            </div>
            <!-- Close Grid Container -->
        </div>
        <!-- Close Grid -->
    </div>
  </section>
</template>
