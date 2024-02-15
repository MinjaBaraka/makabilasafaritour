<script>
export default {

}
</script>
<template>
     <div class="bg-white h-fit text-custom-gray my-10">
        <h1 class="text-2xl font-bold mb-4">Rate in USD.</h1>

             <div class="relative mb-14">
                  <label for="labels-range-input" class="sr-only">Labels range</label>
                  <input id="labels-range-input" type="range" value="1000" min="100" max="5000" class="w-full h-2 bg-red-500 rounded-lg appearance-none cursor-pointer">
                  <span class="text-sm absolute start-0 -bottom-6">Min ($100)</span>
                  <span class="text-sm absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                  <span class="text-sm absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                  <span class="text-sm absolute end-0 -bottom-6">Max ($5000)</span>
              </div>

               <!-- <div class="flex items-center justify-between">
                    <div class="relative mb-6">
                    <label for="day-range-input" class="sr-only">Day Range</label>
                    <input id="day-range-input" type="range" min="1" max="7" v-model="daysSelected" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">{{ daysSelected }} Days Selected</span>
                    </div>
                    <div class="relative mb-6">
                    <label for="day-selection-input" class="sr-only">Select Days</label>
                    <input id="day-selection-input" type="range" min="1" max="7" v-model="selectedDays" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">{{ selectedDays }} Days Selected</span>
                    </div>
                </div> -->

        <hr class="h-0.5 w-full bg-custom-gray mt-4">
    </div>
</template>
