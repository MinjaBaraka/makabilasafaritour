<script>

import { ref } from "vue"

export default {
        setup() {
                const selectedComfortType = ref(null);

                const toggleCheckbox = (type) => {
                        selectedComfortType.value = type;
                };

                return {
                        selectedComfortType,
                        toggleCheckbox
                };
        }
}
</script>
<template>
        <div class="bg-white h-fit">
            <h1 class="text-2xl font-bold text-custom-gray mb-4">Comfort Type.</h1>

            <div class="flex flex-col justify-center w-full h-fit my-4">
                <!-- Open Form -->
                <form action="" class="flex flex-col space-y-2">
                    <!-- Open Luxury -->
                    <div class="flex flex-row items-center space-x-4 group">
                            <input type="checkbox" name="luxury" id="luxury" class="group-hover:cursor-pointer" :checked="selectedComfortType === 'luxury'" @change="toggleCheckbox('luxury')">
                            <label for="luxury" class="group-hover:cursor-pointer">Luxury</label>
                    </div>
                    <!-- Close Luxury -->

                     <!-- Open Semi - Luxury -->
                    <div class="flex flex-row items-center space-x-4 group">
                            <input type="checkbox" name="semi-luxury" id="semi-luxury" class="group-hover:cursor-pointer" :checked="selectedComfortType === 'semi-luxury'" @change="toggleCheckbox('semi-luxury')">
                            <label for="semi-luxury" class="group-hover:cursor-pointer">Semi - Luxury</label>
                    </div>
                    <!-- Close Semi - Luxury -->

                     <!-- Open Budget -->
                    <div class="flex flex-row items-center space-x-4 group">
                            <input type="checkbox" name="budget" id="budget" class="group-hover:cursor-pointer" :checked="selectedComfortType === 'budget'" @change="toggleCheckbox('budget')">
                            <label for="budget" class="group-hover:cursor-pointer">Budget</label>
                    </div>
                    <!-- Close Budget -->

                     <!-- Open Private -->
                    <div class="flex flex-row items-center space-x-4 group">
                            <input type="checkbox" name="private" id="private" class="group-hover:cursor-pointer" :checked="selectedComfortType === 'private'" @change="toggleCheckbox('private')">
                            <label for="private" class="group-hover:cursor-pointer">Private</label>
                    </div>
                    <!-- Close Private -->

                     <!-- Open Group -->
                    <div class="flex flex-row items-center space-x-4 group">
                            <input type="checkbox" name="group" id="group" class="group-hover:cursor-pointer" :checked="selectedComfortType === 'group'" @change="toggleCheckbox('group')">
                            <label for="group" class="group-hover:cursor-pointer">Group</label>
                    </div>
                    <!-- Close Group -->
                </form>
                <!-- Close Form -->
            </div>
                                
        </div>  
</template>
