import { defineStore } from 'pinia';

export const useFilterCards = defineStore('filterCards',{
    state(){
        return{
            filteredCards : [],
        }
    },
    actions : {
        async updateFilteredCards(){
            this.filteredCards = [];
            this.filteredCards = await useUtils();
            
            // console.log("Pinia filterdCards updated ");
            // console.log(this.filteredCards);
        }
    }
})