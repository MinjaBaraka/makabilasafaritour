<script>
import MainImage from '../../../assets/images/mainHeader/1.png';
import { inject } from 'vue';
export default {
    props: [
        'title'
    ],

    setup() {

        const selectTitle = inject("selectTitle")

        return {
            MainImage,
            selectTitle
        }
    }
}
</script>

<template>
    <div class="rounded-b-lg bg-center bg-no-repeat bg-cover object-cover md:min-h-[700px] w-full"
        :style="{ backgroundImage: `url(${MainImage})` }" v-show="title == selectTitle">
    </div>

</template>