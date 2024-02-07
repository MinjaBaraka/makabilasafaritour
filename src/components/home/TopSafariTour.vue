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
        <Zanzibar title="Zanzibar" />

        <Serengeti title="Serengeti" />
        
        <NgorongoroCrater title="Ngorongoro Crater" />        
        
        <Tarangire title="Tarangire" />
        
        <Manyara title="Manyara" />

    </TabWrapper>

</template>
