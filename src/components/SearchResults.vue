

<script setup>
    // Componeent currently inactive. Put within Welcome.vue component for simplicity.

    import router from "@/router.js"

    const props = defineProps({
        results: Array
    })

    function goTo(bc) {
       router.push({ path: '/Details/' + bc })
    } 
</script>
<template>
    <div class="text-2xl">{{ props.results.length }} dongle<span v-show="props.results.length !== 1">s</span> found.</div>
    <div>
        <table class="table-fixed">
        <thead>
            <tr>
                <th>Barcode</th>
                <th>Type</th>
                <th>Description</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dongle in props.results" :key="dongle.barcode" :id="dongle.barcode" class="hover:bg-fuchsia-400" @click="goTo(dongle.barcode)">
                <td>{{ dongle.barcode }}</td>
                <td>{{ dongle.category }}</td>
                <td>{{ dongle.description }}</td>
                <td>{{ dongle.available }}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>