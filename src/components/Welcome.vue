<script setup>
    import { ref, computed } from 'vue';
    import SearchResults from './SearchResults.vue';
    const searchInput = ref('')
    const inputPresent = computed(()=> { return searchInput.value.length !== 0 })
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
        <SearchResults :query="searchInput" />
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