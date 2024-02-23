<script>
import { ref } from 'vue'
import { 
    Envelope, 
    Location, 

    // Social Media
    Twitter,
    Instagram,
    Facebook,
    LinkedIn,
    Youtube
} from "../../components/constant/svg"

export default {
    setup () {
        
        const safariByParks = ref([
            { title: 'Ngorongoro Crater', link: ''},
            { title: 'Tarangire', link: '' },
            { title: 'Zanzibar', link: '' },
            { title: 'Manyara', link: '' },
        ])

        const safariByType = ref([
            { title: 'Luxury Safari', link: '' },
            { title: 'Semi-Luxury Safari', link: '' },
            { title: 'Family Safari', link: '' },
            { title: 'Group Safari', link: '' },
            { title: 'Private Safari', link: '' },
        ])

        const quickLinks = ref([
            { title: 'Home', link: '/' },
            { title: 'About Us', link: '/AboutUs' },
            { title: 'Tours', link: '/Tours' },
            { title: 'Operators', link: '' },
            { title: 'Parks', link: '' },
            { title: 'Makabila AI', link: '' },
        ])


        return {
            safariByParks,
            safariByType,
            quickLinks,
            Envelope,
            Location,

            // Social Media
            Twitter,
            Instagram,
            Facebook,
            LinkedIn,
            Youtube
        }
    },

    data() {
        return {
            currentYear: new Date().getFullYear(),
        }
    },
}
</script>

<template>
   <footer class="bg-[#3F3D3D]">
        <div class="container flex flex-col mx-auto text-white px-4 max-w-screen-xl">
            <!-- Header Text -->
            <div class="flex flex-col space-y-4 mt-10">
                <h1 class="text-2xl">About Makabila Safari</h1>
                <p class="max-w-6xl">
                    SafariBookings is the largest online marketplace for African safari tours. Easily compare offers from top-rated tour operators. Make decisions like a pro by using our 97,941 reviews and 223 destination guides. 
                    <span class="underline hover:text-green-500 cursor-pointer">More About Us</span> 
                </p>
            </div>

            <!-- Grid -->
            <div class="flex flex-col items-center md:grid xl:grid-cols-4 md:grid-cols-2 mt-10 mb-20 space-y-4">
                <!-- Safari By Parks -->
                <div class="flex flex-col items-start self-start">
                    <div class="mb-6 w-auto">
                        <h2 class="text-xl font-bold">Safari By Parks</h2>
                    </div>
                    <ul class="outline-none space-y-2">
                        <li v-for="object, objectIndex in safariByParks" :key="objectIndex">
                            <a href="" class="hover:text-green-500">{{object.title}}</a>
                        </li>
                    </ul>
                </div>

                <!-- Safari By Type -->
                <div class="flex flex-col items-start self-start">
                    <div class="mb-6 w-auto">
                            <h2 class="text-xl font-bold">Safari By Type</h2>
                    </div>
                        <ul class="outline-none space-y-2">
                            <li v-for="object, objectIndex in safariByType" :key="objectIndex">
                                <a href="" class="hover:text-green-500">{{object.title}}</a>
                            </li>
                        </ul>

                </div>

                <!-- Quick Links -->
                <div class="flex flex-col items-start self-start">
                    
                    <div class="mb-6 w-auto">
                            <h2 class="text-xl font-bold">Quick Links</h2>
                    </div>
                      <ul class="outline-none space-y-2">
                                <li v-for="object, objectIndex in quickLinks" :key="objectIndex">
                                    <router-link :to="object.link" class="hover:text-green-500">{{object.title}}</router-link>
                                </li>
                            </ul>
                </div>
                
                <!-- Contact -->
                <div class="flex flex-col items-start self-start">
                    
                    <div class="mb-6 w-auto">
                        <h2 class="text-xl font-bold">Contact</h2>
                    </div>                   
                    <ul class="cursor-pointer space-y-4">
                        <li class="flex items-center space-x-4 group">
                                <component :is="Envelope" class="fill-current group-hover:fill-green-500"/>
                            <span class="underline group-hover:text-green-500">info@makabilasafari.com</span>
                        </li>

                        <li class="flex items-center space-x-4 group">
                                    <component :is="Location" class="fill-current group-hover:fill-green-500 w-6 h-6"/>
                                <span class="group-hover:text-green-500">
                                    P.o.Box 100 <br/>
                                    Arusha,Tanzania
                                </span>
                        </li>

                        <li class="flex items-start space-x-4">
                            <div class="bg-white w-10 h-10 flex items-center justify-center rounded-full">
                                <component :is="Twitter" class="fill-blue-500 w-6 h-6"/>
                            </div>

                            <div class="bg-white w-10 h-10 flex items-center justify-center rounded-full">
                                <component :is="Instagram" class="fill-red-500 w-6 h-6"/>
                            </div>

                            <div class="bg-white w-10 h-10 flex items-center justify-center rounded-full">
                                    <component :is="Facebook" class="fill-blue-500 w-6 h-6"/>
                            </div>

                            <div class="bg-white w-10 h-10 flex items-center justify-center rounded-full">
                                    <component :is="Youtube" class="fill-red-500 w-6 h-6"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="container w-[100%] px-[15px] mx-auto  border-t-2 pt-[3rem] mb-12">
                
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">© {{ currentYear }} <a href="" class="hover:underline decoration-green-500 hover:text-green-500 capitalize">Makabila Safari tour</a>. All Rights Reserved.</span>
                </div>

        </div>
   </footer >
</template>
