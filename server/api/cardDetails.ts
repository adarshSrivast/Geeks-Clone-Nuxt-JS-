// import { useAllCards } from "~/store/allCards"; Can't access pinia in backend


export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const res = await fetch('http://localhost:3000/api/allCards');
  const allCards = await res.json();
  // console.log(allCards);

  const filteredCard = allCards.filter(card => card.cardId === id);
  filteredCard[0].cardDescription = "JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.";
  filteredCard[0].cardStudents = 106;
  return ({ filteredCard });
})
