<script setup>
    import db from "@/data.json"
    import { useRoute } from "vue-router";
    import router from "@/router.js"

    

    let route = useRoute()

    let dongle = db.dongles.find(d => d.barcode === route.params.bc )
    if(!dongle) {
        alert("Dongle with Barcode " + props.barcode + " not found.")
    }
    alert("In DongleDetails.vue")
</script>
<template>
    <div class=" grid"> 
        <h1 class=" text-3xl text-center align-text-top">POOOPY {{ dongle.barcode }}</h1>
        <div class=""></div>
        <input type="button" class=" text-white bg-gray-600 border" value="GO BACK" @click="router.back()" />
        <input type="button" class=" text-white bg-pink-600 border" value="CHECK OUT" />
    </div>
</template>