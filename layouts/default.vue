<template>

    <Header @searchStatus="handleSearch"/>

    <slot :prop="courseSearched" />

    <Footer />
   
</template>

<script setup>

import { ref } from 'vue';
const emit = defineEmits(['searchStatusFromLayout']);

let courseSearched = ref(false);

function handleSearch(search) {
    if(search.searchValue) {
        console.log("Listened in layout. Search boolean : " + search.isSearched);
        console.log("Listened in layout . Search value : " + search.searchValue);
        courseSearched.value = search.isSearched;
    }
}

</script>

<style scoped>



</style>