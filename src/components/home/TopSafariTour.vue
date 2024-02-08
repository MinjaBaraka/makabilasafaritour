<script setup>
import TabWrapper from "./tabs/TabWrapper.vue";
import Zanzibar from "./tabs/Zanzibar.vue"
import Manyara from "./tabs/Manyara.vue"
import NgorongoroCrater from "./tabs/NgorongoroCrater.vue"
import Serengeti from "./tabs/Serengeti.vue"
import Tarangire from "./tabs/Tarangire.vue"

</script>

<template>
    <TabWrapper>
        <Zanzibar title="Zanzibar"  class="hidden xl:flex" />

        <Serengeti title="Serengeti"  class="hidden xl:flex"/>
        
        <NgorongoroCrater title="Ngorongoro Crater"  class="hidden xl:flex"/>        
        
        <Tarangire title="Tarangire"  class="hidden xl:flex"/>
        
        <Manyara title="Manyara"  class="hidden xl:flex"/>

    </TabWrapper>

</template>
