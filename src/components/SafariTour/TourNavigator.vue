<script>
import { AngleRight, HouseDoor } from '../constant/svg'
export default {
    setup() {


        return {
            AngleRight,
            HouseDoor
        }
    }
}
</script>
<template>
  <section class="mb-10">
        <div class="container flex items-start mx-auto px-4">
            <nav class="flex" aria-label="Breadcrumb">
             <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center group">
                <a href="" class="inline-flex items-center text-sm font-medium text-custom-gray group-hover:text-green-500">
                    <component :is="HouseDoor" class="fill-gray-500 w-6 h-6 group-hover:fill-green-500"/>
                    Makabila
                </a>
                </li>
                <li>
                <div class="flex items-center group">                    
                    <a href="" class="inline-flex items-center text-sm font-medium text-custom-gray group-hover:text-green-500">
                        <component :is="AngleRight" class="fill-gray-500 w-6 h-6 group-hover:fill-green-500"/>
                            Safari Tours
                    </a>
                </div>
                </li>
            </ol>
            </nav>

        </div>
</section>
</template>
