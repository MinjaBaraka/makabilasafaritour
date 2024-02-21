<script>
import { ref } from 'vue';
import { Start, StarFill } from "../../constant"
export default {

    setup() {

        const checkedCategory = ref("");

        const handleChange = (category) => {
            // Efficiently uncheck other checkboxes using reactivity
            for (const checkbox of document.querySelectorAll('input[type="checkbox"]')) {
                if (checkbox.name !== category) {
                    checkbox.checked = false;
                }
            }

            checkedCategory.value = category;
        };


        return {
            Start,
            StarFill,

            checkedCategory,
            handleChange,
        }
    }

}
</script>

<template>
    <div class="bg-white h-fit">
        <h1 class="text-2xl font-bold text-custom-gray">Operator Rating.</h1>


           <div class="flex flex-col justify-center w-full h-fit my-4">
                <!-- Open Form -->
                    <form action="" class="flex flex-col space-y-2">
                        <!-- Open Luxury -->
                        <div class=" flex flex-row items-center space-x-4 group">
                                <input type="checkbox" name="fivestart" class="group-hover:cursor-pointer" @change="handleChange('fivestart')">
                                <component :is="checkedCategory === 'fivestart' ? StarFill : Start" class="group-hover:cursor-pointer fill-amber-500 h-6 w-6" v-for="n in 5" :key="n"/>
                        </div>
                        <!-- Close Luxury -->

                         <!-- Open Semi - Luxury -->
                        <div class="flex flex-row items-center space-x-4 group">
                                <input type="checkbox" name="fourStart" class="group-hover:cursor-pointer" @change="handleChange('fourStart')">
                                <component :is="checkedCategory === 'fourStart' ? StarFill : Start" class="group-hover:cursor-pointer fill-amber-500 h-6 w-6" v-for="n in 4" :key="n"/>
                        </div>
                        <!-- Close Semi - Luxury -->

                         <!-- Open Budget -->
                        <div class="flex flex-row items-center space-x-4 group">
                                <input type="checkbox" name="threeStart"  class="group-hover:cursor-pointer" @change="handleChange('threeStart')">
                                <component :is="checkedCategory === 'threeStart' ? StarFill : Start" class="group-hover:cursor-pointer fill-amber-500 h-6 w-6" v-for="n in 3" :key="n"/>
                        </div>
                        <!-- Close Budget -->

                         <!-- Open Private -->
                        <div class="flex flex-row items-center space-x-4 group">
                                <input type="checkbox" name="twoStart" class="group-hover:cursor-pointer" @change="handleChange('twoStart')">
                                <component :is="checkedCategory === 'twoStart' ? StarFill : Start" class="group-hover:cursor-pointer fill-amber-500 h-6 w-6" v-for="n in 2" :key="n"/>
                        </div>
                        <!-- Close Private -->

                         <!-- Open Group -->
                        <div class="flex flex-row items-center space-x-4 group">
                                <input type="checkbox" name="oneStart" class="group-hover:cursor-pointer" @change="handleChange('oneStart')">
                                <component :is="checkedCategory === 'oneStart' ? StarFill : Start" class="group-hover:cursor-pointer fill-amber-500 h-6 w-6"/>
                        </div>
                        <!-- Close Group -->
                    </form>
                    <!-- Close Form -->
           </div>
                                
     </div>
</template>
