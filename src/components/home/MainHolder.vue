<script>
import  MainImage  from '../../assets/images/mainHeader/2.jpg';

import { Calendar, Location, Briefcase } from "../constant"
export default {
    setup () {

        return {
            MainImage,
            Location,
            Briefcase,
            Calendar
        }
    }
}
</script>

<template>
    <section class="mb-10 min-h-[900px]">
        <div class="container flex flex-col mx-auto rounded-md bg-center bg-no-repeat bg-cover min-h-[600px] mt-2" :style="{ backgroundImage: `url(${MainImage})` }">
            <div class="ml-10 mt-14 bg-white w-80 h-96 rounded-md shadow-[0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)]">
                <div class="container flex flex-col items-center mx-auto justify-center">
                    <h1 class="mt-10 text-xl font-bold text-[#808080]">Get Top African Safaris</h1>

                    <form action="" class="flex flex-col justify-between items-center mt-10 space-y-6">
                        <label for="where" class="flex border-2 border-custom-green rounded-lg items-center p-2">
                            <input type="text" id="where" placeholder="Where.." class="outline-none">
                            <component :is="Location" class="w-6 h-6 fill-custom-green"/>
                        </label>

                        <label for="date" class="flex border-2 border-custom-green rounded-lg items-center p-2 px-16">
                                <input type="date" id="date" placeholder="Date.." class="outline-none">
                                <!-- <component :is="Calendar" class="w-6 h-6 fill-custom-green"/> -->
                        </label>

                        <label for="travellers" class="flex border-2 border-custom-green rounded-lg items-center p-2">
                            <input type="text" id="travellers" placeholder="Travellers" class="outline-none">
                            <component :is="Briefcase" class="w-6 h-6 fill-custom-green"/>
                        </label>

                        <input type="button" value="Get Safari" class="cursor-pointer bg-custom-green px-12 w-full py-3 rounded-lg text-white">
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

