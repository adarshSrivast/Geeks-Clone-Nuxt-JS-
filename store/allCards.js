import { defineStore } from 'pinia';

export const useAllCards = defineStore('allCards',{
    state(){
        return{
            cards : [],
        }
    },
    actions : {
        async updateAllCards(){
            const temp = await useFetch('http://localhost:3000/api/allCards');
            this.cards = temp.data._rawValue;
        }
    }
})