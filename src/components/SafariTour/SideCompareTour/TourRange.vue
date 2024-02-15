<script>
export default {

}
</script>
<template>
  <div class="bg-white h-fit text-custom-gray my-10">
        <h1 class="text-2xl font-bold mb-4">Tour Range.</h1>


          <div class="relative mb-14">
              <label for="labels-range-input" class="sr-only">Labels range</label>
              <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-red-500 rounded-lg appearance-none cursor-pointer">
              <span class="text-sm absolute start-0 -bottom-6">1/2 days</span>
              <span class="text-sm absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">7 days</span>
              <span class="text-sm absolute end-0 -bottom-6">14 days</span>
          </div>

        <hr class="h-0.5 w-full bg-custom-gray mt-4">
    </div>
</template>
