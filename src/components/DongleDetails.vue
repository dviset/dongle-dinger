<script setup>
    import db from "@/data.json"
    import { useRoute } from "vue-router";
    let route = useRoute()

    let dongle = db.dongles.find(d => d.barcode === route.params.id )
    if(!dongle) {
        alert("Dongle with Barcode " + props.barcode + " not found.")
    }

</script>
<template>
    <div class=" grid"> 
        <h1 class=" text-3xl text-center align-text-top">POOOPY {{ dongle.barcode }}</h1>
        <div class=""></div>
        <input type="button" class=" text-white bg-gray-600 border" value="GO BACK" />
        <input type="button" class=" text-white bg-pink-600 border" value="CHECK OUT" />
    </div>
</template>