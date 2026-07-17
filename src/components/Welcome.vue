<script setup>
    import { ref, computed } from 'vue';
    import db from "@/data.json"
    import router from "@/router.js"
    import SearchResults from './SearchResults.vue';

    const props = defineProps({
        query: String
    })

    const searchInput = ref(props.query || "")
    const inputPresent = computed(()=> { return searchInput.value.length !== 0 })

    let dongles = db.dongles
    const filtered = computed(()=> {
        return dongles.filter(d => d.barcode.toLowerCase().includes(searchInput.value.toLowerCase()) && !d.hidden)
    })

    function goTo(bc) {
       router.push({ path: '/Details/' + bc })
    } 
</script>
<template>
    <Transition name="search-padder">
        <div class="w-full h-10" v-show="!inputPresent"></div>
    </Transition>
    <div class="block w-full text-5xl">
        <input v-model="searchInput" class=" w-2xl border-1 border-gray-500 rounded-2xl" type="text" placeholder="Enter a Barcode Number" /> 
    </div>
    <div v-show="!inputPresent" class="block invisible md:visible text-5xl text-gray-950">
        <p class="text-3xl text-gray-400">or</p>
        <P>Use the Barcode Scanner to DING the Dongle</P>
        
    </div>
    <div v-show="inputPresent">
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
    </div>
</template>

<style scoped>
    .search-padder-enter-active,
    .search-padder-leave-active {
        transition: height 1s;
    }
    .search-padder-enter-from,
    .search-padder-leave-to {
        height: 0;
    }
</style>