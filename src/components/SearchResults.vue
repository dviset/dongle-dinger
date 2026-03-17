<script setup>
    import db from "@/data.json"
    import { computed } from 'vue'
    const props = defineProps({
        query: String
    })
    let dongles = db.dongles
    const filtered = computed(()=> {
        return dongles.filter(d => d.barcode.toLowerCase().includes(props.query.toLowerCase()) && !d.hidden)
    })

    function goTo(bc) {
        alert(bc)
    } 
</script>
<template>
    <div class="text-2xl">{{ filtered.length }} dongle<span v-show="filtered.length !== 1">s</span> found.</div>
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
            <tr v-for="dongle in filtered" :key="dongle.barcode" :id="dongle.barcode" class="hover:bg-fuchsia-400" @click="goTo(dongle.barcode)">
                <td>{{ dongle.barcode }}</td>
                <td>{{ dongle.category }}</td>
                <td>{{ dongle.description }}</td>
                <td>{{ dongle.available }}</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>