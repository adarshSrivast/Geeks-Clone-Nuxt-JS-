import { defineStore } from 'pinia';

export const useSearchState = defineStore('search',{
    state(){
        return {
            isSearched : false,
            searchValue : "",
        }
    },

    actions : {
        updateSearchState(state){
            this.isSearched = state;
        },

        updateSearchValue(newValue){
            this.searchValue = newValue;
        }
    }
})