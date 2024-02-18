<script>
import {   Calendar, Location, Briefcase, Circle } from '../../constant'
export default {
    setup () {
          return {
            
            Location,
            Briefcase,
            Calendar,
            Circle,
        }
    }
}
</script>
<template>
    <div class="relative container flex mx-auto bg-white shadow-md rounded-md  h-fit w-full">
        <div class="flex flex-col items-center mx-auto my-4 w-full">
            <h1 class="text-2xl font-bold text-custom-gray">Your Safari Tour.</h1>

            <form action="" class="flex flex-col items-center space-y-6 my-10 px-4 md:px-0 w-full">
                 <!-- Where to... -->
                <label for="whereto" class="relative flex  rounded-lg items-center p-2 w-full">
                    <input type="text" id="whereto" placeholder="Where to..." class="outline-none border-2 border-custom-green focus:border-custom-green py-3 px-3 w-full rounded-lg">
                    <component :is="Location" class="absolute right-[8%] w-6 h-6 fill-custom-green"/>
                 </label>

                 <!-- Date... -->
                 <label for="StartDate" class="relative flex rounded-lg items-center p-2 w-full">
                    <input datepicker type="text" id="date" class="outline-none border-2 border-custom-green focus:border-custom-green py-3 px-3 w-full rounded-lg" placeholder="Select date">
                    <component :is="Calendar" class="absolute right-[8%] w-6 h-6 fill-custom-green"/>
                </label>

                 <!-- Travellers... -->
                <label for="travellers" class="relative flex rounded-lg items-center p-2 w-full">
                    <input type="text" id="travellers" placeholder="Travellers..." class="outline-none border-2 border-custom-green focus:border-custom-green py-3 px-3 w-full rounded-lg">
                    <component :is="Briefcase" class="absolute right-[8%] w-6 h-6 fill-custom-green"/>
                </label>

                <input type="button" value="Get Safari" class="cursor-pointer bg-green-400 hover:bg-custom-green w-full px-12 py-3 rounded-lg text-white">
             </form>
        </div>
   </div>  
</template>
