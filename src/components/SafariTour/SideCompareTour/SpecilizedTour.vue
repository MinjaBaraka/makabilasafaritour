<script>
export default {

}
</script>

<template>
    <div class="bg-white h-fit my-10">
        <h1 class="text-2xl font-bold text-custom-gray">Specilized Tour.</h1>
            
        <div class="flex flex-col justify-center w-full h-fit my-4">
                    <!-- Open Form -->
                    <form action="" class="flex flex-col space-y-2">
                        <!-- Open Luxury -->
                        <div class="flex flex-row items-center space-x-4 group">
                                <input type="checkbox" name="family" id="family" class="group-hover:cursor-pointer">
                                <label for="family" class="group-hover:cursor-pointer">Family</label>
                        </div>
                        <!-- Close Luxury -->

                         <!-- Open Semi - Luxury -->
                        <div class="flex flex-row items-center space-x-4 group">
                                <input type="checkbox" name="beach-time" id="beach-time" class="group-hover:cursor-pointer">
                                <label for="beach-time" class="group-hover:cursor-pointer">Beach Time</label>
                        </div>
                        <!-- Close Semi - Luxury -->

                         <!-- Open Budget -->
                        <div class="flex flex-row items-center space-x-4 group">
                                <input type="checkbox" name="honeymoon" id="honeymoon" class="group-hover:cursor-pointer">
                                <label for="honeymoon" class="group-hover:cursor-pointer">Honeymoon</label>
                        </div>
                        <!-- Close Budget -->

                         <!-- Open Private -->
                        <div class="flex flex-row items-center space-x-4 group">
                                <input type="checkbox" name="montain-trekking" id="montain-trekking" class="group-hover:cursor-pointer">
                                <label for="montain-trekking" class="group-hover:cursor-pointer">Montain Trekking</label>
                        </div>
                        <!-- Close Private -->

                         <!-- Open Group -->
                        <div class="flex flex-row items-center space-x-4 group">
                                <input type="checkbox" name="fly-in-safari" id="fly-in-safari" class="group-hover:cursor-pointer">
                                <label for="fly-in-safari" class="group-hover:cursor-pointer">Fly in Safari</label>
                        </div>
                        <!-- Close Group -->
                    </form>
                    <!-- Close Form -->
                </div>
     </div>
</template>
