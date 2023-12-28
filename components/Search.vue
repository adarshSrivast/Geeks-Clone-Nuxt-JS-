<template>
    <div class="navbar-search">
        <form class="search-form" @submit.prevent="handleSearch2">
            <span class="search-icon">
                <i class="fa fa-solid fa-magnifying-glass"></i>
            </span>
            <input v-model="searchCourse" class="search-field" type="search" placeholder="Search Courses" title="Search for:">
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['searchStatus']);
    const { courseSearched } = defineProps(['courseSearched']);
    const searchCourse = ref("");

    function handleSearch(){
        const searchObj = {
            isSearched : true,
            searchValue : searchCourse.value,
        }
        if(searchCourse.value) emit('searchStatus', searchObj);
    }

    import { useSearchState } from "../store/search";
    import { useFilterCards } from "../store/filtered";

    async function handleSearch2(){
        const search = useSearchState();
        if(searchCourse.value){
            search.updateSearchState(true);
            search.updateSearchValue(searchCourse.value);

            const filteredCards = useFilterCards();
            filteredCards.updateFilteredCards();

            search.updateSearchValue("");
            

            await navigateTo(`/?s=${searchCourse.value}`);
            searchCourse.value = '';
        }
    }




</script>

<style>

.navbar-search{
    margin-left: 16px;
    border-radius: 4px; 
}

.search-form{
    display: flex;
    align-items: center;
    transition: border-color 0.15s ease-in-out;
}

.search-icon{
    padding-left: 16px;
    position: absolute;
}

.search-field{
    display: block;
    min-width: 228px;
    font-size: 14px;
    padding: 12px 20px;
    padding-left: 40px;
    border: 1px solid #dbd8e9;
    border-radius: 4px;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}


.search-field:focus{
    outline: none;
    border-color: #754ffe;
    box-shadow: 0 0 0 3px rgba(231, 225, 253, .75);
    
}

</style>