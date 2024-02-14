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
    <div class="bg-white shadow-lg h-fit">
        <div class="flex flex-col items-center mx-auto my-4">
            <h1 class="text-2xl font-bold text-custom-gray">Your Safari Tour.</h1>

            <form action="" class="flex flex-col items-center space-y-6 my-10">
                 <!-- Where to... -->
                <label for="whereto" class="flex border-2 border-custom-green rounded-lg items-center p-2">
                    <input type="text" id="whereto" placeholder="Where to..." class="outline-none  py-2 px-2">
                    <component :is="Location" class="w-6 h-6 fill-custom-green"/>
                 </label>

                 <!-- Date... -->
                 <label for="StartDate" class="relative flex items-center justify-between ring-2 ring-custom-green rounded-lg w-full h-14">
                    <input type="date" id="StartDate" class="flex-grow outline-none py-2 px-8 sr-only">
                    <p class="ml-4 text-custom-gray">Start Date...</p>
                    <component :is="Calendar" class="absolute left-64 top-1/2 transform -translate-y-1/2 w-6 h-6 fill-custom-green"/>                         
                </label>

                 <!-- Travellers... -->
                <label for="travellers" class="flex border-2 border-custom-green rounded-lg items-center p-2">
                    <input type="text" id="travellers" placeholder="Travellers..." class="outline-none py-2 px-2">
                    <component :is="Briefcase" class="w-6 h-6 fill-custom-green"/>
                </label>

                <input type="button" value="Get Safari" class="cursor-pointer bg-custom-green w-full px-12 py-3 rounded-lg text-white">
             </form>
        </div>
   </div>  
</template>
