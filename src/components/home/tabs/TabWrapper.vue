<script>
import { ref, provide } from 'vue'
export default {

    setup (props, { slots }) {

        const tabMenu = ref(slots.default().map((object) => object.props.title))
        const selectTitle = ref(tabMenu.value[0])

        provide("selectTitle", selectTitle)

        return {
            tabMenu,
            selectTitle
        }
    }

}
</script>

<template>
    <section class="mb-20">
        <div class="container flex flex-col mx-auto  items-start justify-center px-2">
            <h1 class="h1">Top Safari Tours</h1>
              <div
                    class="hidden md:flex mt-10 outline-none border-2 border-green-400 w-full h-28 rounded-t-lg items-center justify-between px-6">
                    <ul class="text-[#279E72] text-xl cursor-pointer" v-for="object, objectIndex in tabMenu" :key="objectIndex" @click="selectTitle = object">
                        <li class="">
                            {{ object }}
                        </li>
                    </ul>
                </div>

                <slot />

                  <!-- More Safari Button -->
                <button
                    class="hidden md:flex capitalize mt-4 items-center justify-center self-end bg-custom-green px-10 py-4 text-white rounded-lg">
                    More safari...
                </button>
        </div>
    </section>
    

</template>
