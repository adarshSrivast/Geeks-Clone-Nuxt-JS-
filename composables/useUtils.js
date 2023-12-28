import { useSearchState } from "../store/search";
import { useAllCards } from "../store/allCards";

export const useUtils = async ()=>{
    const search = useSearchState();

    const allCards = toRaw(useAllCards().cards);
    // const allCards = await useFetch('http://localhost:3000/api/allCards');
    // console.log(allCards.data._rawValue);

    const searchedCard = search.searchValue;

    const reqCards = allCards.filter((card)=>{
        // console.log(card);
        if(card.cardTitle.toLowerCase().includes(searchedCard.toLowerCase())) return true;
    })

    // console.log(reqCards);
    return reqCards;
}