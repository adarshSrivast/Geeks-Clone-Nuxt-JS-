<template>
    <div v-if="!search.isSearched">
        <div class="content-first-items" >
            <div class="first-description">
                <h1 class="heading">
                    Welcome to Geeks UI Learning Application
                </h1>
                <p class="text">
                    Hand-picked Instrutor and expertly crafted courses, designed for the modern students and entrepreneur
                </p>
        
                <div class="first-description-links">
                    <NuxtLink class="first-link" to="">
                        <span>Browse Courses</span>
                    </NuxtLink>
                </div>
            
                <div class="first-description-links">
                    <NuxtLink class="second-link" to="">
                        <span>Are You Instructor?</span>
                    </NuxtLink>
                </div>
            </div>
        
            <div class="first-image">
                <img src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/hero-img.png" alt="Geeks" >
            </div>
        </div>

        <div class="content-second">
            <div class="content-second-wrapper">
                <div class="content-second-item">
                    <div class="icon-container">
                        <i class="fa fa-solid fa-video"></i>
                    </div>
                    <div class="descrip-container">
                        <h4>
                            30,000 online courses
                        </h4>
                        <p>
                            Enjoy a variety of fresh topics
                        </p>
                    </div>
                </div>
                <div class="content-second-item">
                    <div class="icon-container">
                        <i class="fa fa-solid fa-user-group"></i>
                    </div>
                    <div class="descrip-container">
                        <h4>
                            Expert instruction
                        </h4>
                        <p>
                            Find the right instructor for you
                        </p>
                    </div>
                </div>
                <div class="content-second-item">
                    <div class="icon-container">
                        <i class="fa fa-regular fa-clock"></i>
                    </div>
                    <div class="descrip-container">
                        <h4>
                            Lifetime access
                        </h4>
                        <p>
                            Learn on your schedule
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="content-third">
                <div class="cards-section">
                    <h2 class="section-heading">Recommended to you</h2>

                    <div class="section-cards">
                        <div v-for="card of trendingCards" :key="card.id" >
                            <Card :cardId="card.cardId">
                                <template #header>
                                    <NuxtLink :to="card.cardLink">
                                        <img :src="card.cardImage">
                                    </NuxtLink>
                                </template>
                                
                                <template #body>
                                    <NuxtLink :to="card.cardLink">
                                        <h4>{{ card.cardTitle }}</h4>
                                    </NuxtLink>
                                
                                    <ul>
                                        <li>
                                            <i class="fa fa-regular fa-clock"></i>
                                            <span>{{ card.cardDuration }}</span>
                                        </li>
                                        <li>
                                            <i class="fa fa-solid fa-signal"></i>
                                            <span>{{ card.cardLevel }}</span>
                                        </li>
                                        <li>
                                            <i class="fa fa-solid fa-star"></i>
                                            <span>{{ card.cardRating }}</span>
                                        </li>
                                    </ul>
                                </template>

                                <hr>

                                
                                <template #footer>
                                        <span>{{ card.cardAuthor }}</span>
                                </template>
                            </Card>
                            
                        </div>
                        
                    </div>
                </div>
                
                <div class="cards-section">
                    <h2 class="section-heading">Most Popular</h2>

                    <div class="section-cards">
                        <div v-for="card of popularCards" :key="card.id">
                            <Card :cardId="card.cardId">
                                <template #header>
                                    <NuxtLink :to="card.cardLink">
                                        <img :src="card.cardImage">
                                    </NuxtLink>
                                </template>
                        
                                <template #body>
                                    <NuxtLink :to="card.cardLink">
                                        <h4>{{ card.cardTitle }}</h4>
                                    </NuxtLink>
                        
                                    <ul>
                                        <li>
                                            <i class="fa fa-regular fa-clock"></i>
                                            <span>{{ card.cardDuration }}</span>
                                        </li>
                                        <li>
                                            <i class="fa fa-solid fa-signal"></i>
                                            <span>{{ card.cardLevel }}</span>
                                        </li>
                                        <li>
                                            <i class="fa fa-solid fa-star"></i>
                                            <span>{{ card.cardRating }}</span>
                                        </li>
                                    </ul>
                                </template>

                                <hr>

                        
                                <template #footer>
                                        <span>{{ card.cardAuthor }}</span>
                                </template>
                            </Card>
                    
                        </div>
                    </div>
                </div>


                <div class="cards-section">
                    <h2 class="section-heading">Trending</h2>

                    <div class="section-cards">
                        <div v-for="card of trendingCards" :key="card.id">
                            <Card :cardId="card.cardId">
                                <template #header>
                                    <NuxtLink :to="card.cardLink">
                                        <img :src="card.cardImage">
                                    </NuxtLink>
                                </template>
                            
                                <template #body>
                                    <NuxtLink :to="card.cardLink">
                                        <h4>{{ card.cardTitle }}</h4>
                                    </NuxtLink>
                            
                                    <ul>
                                        <li>
                                            <i class="fa fa-regular fa-clock"></i>
                                            <span>{{ card.cardDuration }}</span>
                                        </li>
                                        <li>
                                            <i class="fa fa-solid fa-signal"></i>
                                            <span>{{ card.cardLevel }}</span>
                                        </li>
                                        <li>
                                            <i class="fa fa-solid fa-star"></i>
                                            <span>{{ card.cardRating }}</span>
                                        </li>
                                    </ul>
                                </template>

                                <hr>

                            
                                <template #footer>
                                        <span>{{ card.cardAuthor }}</span>
                                </template>
                            </Card>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    </div>

    <div v-else >
         <div class="search-container">
            <div class="search-result">
                <p>Search Results for: <span id="course-name"> {{ search.searchValue }} </span></p>
            </div>
 
            <section>
                <div class="search-content">
                    <div class="display-options">
                        <p class="search-number">Showing all <span id="number">{{ reqCards.filteredCards.length }}</span> courses</p>
                    
                        <div class="result-display-options">
                            <div>
                                <button style="padding: 8px"><i class="fa fa-solid fa-grip-vertical"></i></button>
                                <button style="padding: 8px"><i class="fa fa-solid fa-list"></i></button>
                            </div>
                            <div class="display-filter">
                                <select>
                                    <option value="">Release Date (newest first)</option>
                                    <option value="">Release Date (oldest first)</option>
                                    <option value="">Course Title (a-z)</option>
                                    <option value="">Course Title (z-a)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="result-content">
                        <div class="filter-courses">
                            <div class="filter-options">
                                <h4>Filter</h4>
                                
                            </div>
                            <hr style="margin:16px 0px">
                        
                            <h6>CATEGORY</h6>
                            <ul class="categories">
                                <li>
                                    <input type="checkbox">
                                    <span>Angular</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>Bootstrap</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>CSS3</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>Figma</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>GatsBy</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>GraphQL</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>Javascript</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>Node</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>Python</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>React</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>Wordpress</span>
                                </li>

                            </ul>
                            <hr>

                            <h6>LEVEL</h6>
                            <ul class="level">
                                <li>
                                    <input type="checkbox">
                                    <span>Beginner</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>Intermediate</span>
                                </li>
                                <li>
                                    <input type="checkbox">
                                    <span>Expert</span>
                                </li>
                            </ul>

                        </div>
                        
                        <div class="result-display" v-if="reqCards.filteredCards.length !== 0">
                            <div v-for="card of reqCards.filteredCards" :key="card.id">
                                <div style="max-width: 260px">
                                    <Card :cardId="card.cardId">
                                        <template #header>
                                            <NuxtLink :to="card.cardLink">
                                                <img :src="card.cardImage">
                                            </NuxtLink>
                                        </template>
                                    
                                        <template #body>
                                            <NuxtLink :to="card.cardLink">
                                                <h4>{{ card.cardTitle }}</h4>
                                            </NuxtLink>
                                    
                                            <ul>
                                                <li>
                                                    <i class="fa fa-regular fa-clock"></i>
                                                    <span>{{ card.cardDuration }}</span>
                                                </li>
                                                <li>
                                                    <i class="fa fa-solid fa-signal"></i>
                                                    <span>{{ card.cardLevel }}</span>
                                                </li>
                                                <li>
                                                    <i class="fa fa-solid fa-star"></i>
                                                    <span>{{ card.cardRating }}</span>
                                                </li>
                                            </ul>
                                        </template>

                                        <hr>

                                    
                                        <template #footer>
                                                <span>{{ card.cardAuthor }}</span>
                                        </template>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div v-else> Nothing to display </div>
                    </div>
                </div>
            </section>
        </div>

        
    </div>
    
</template>

<script setup>

import { useSearchState } from "../store/search";
const search = useSearchState();

import { useFilterCards } from "../store/filtered";
const reqCards = useFilterCards();


import { useAllCards } from "../store/allCards";
const allCards = useAllCards();
allCards.updateAllCards();
const cardDetails = toRaw(allCards.cards); //To get data from proxy object into raw object
// console.log(cardDetails);

const popularCards = cardDetails.filter(currentCard => {
    if (
        currentCard.cardId === '3' ||
        currentCard.cardId >= '6'
    ) return true;
})

const trendingCards = cardDetails.filter(currentCard => currentCard.cardId < 5)









</script>

<style>

.content-first-items{
    margin-right: auto;
    margin-left: auto;
    padding: 0px 12px;
    display: flex;
    align-items: center;
    background-color: #754FFE;
}



.first-description{
    max-width: 500px;
}

.heading{
    color: rgb(255,255,255);
    line-height: 1.3;
    font-weight: 700;
    /* letter-spacing: -1px; */
    margin-bottom: 8px;
}

.text{
    color: rgba(255,255,255,0.5);
    margin-bottom: 16px;
    font-size: 18px;
    /* letter-spacing: -0.2px; */
}

.first-description-links{
    padding-top: 8px;
    width: auto;
    display: inline-block;
}

.first-description-links a{
    display: inline-block;
    font-weight: 600;
    user-select: none;
    border: 1px solid transparent;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}

.first-description-links .first-link{
    color: #fff;
    background-color: #19cb98;
}
.first-description-links .first-link:hover{
    color: #fff;
    background-color: #17b488;
}

.first-description-links .second-link{
    color: #000;
    background-color: #f5f4f8;
}

.first-description-links .second-link:hover{
    color: #000;
}

.first-image{
    line-height: 0;
}

.first-image img{
    width: 100%;
    height: 100%;
    max-width: 553px;
}

.content-second {
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    justify-content: center;
}

.content-second-wrapper{
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content-second-item{
    width: 100%;
    display: flex;
}

.icon-container{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #FFEEDA;
    display: flex;
    align-items: center;
    justify-content: center;
}

.descrip-container{
    margin-left: 16px;
}

section{
    background-color: rgb(245, 244, 248);
    display: flex;
    justify-content: center;
}

.section-cards{
    overflow: hidden;
}

.content-third{
    width: 100%;
    padding: 0px 12px;
}

.cards-section{
    padding-bottom: 32px;
}

.cards-section:first-child{
    width: 100%;
    padding-top: 52px;
}

.section-heading{
    margin-bottom: 16px;
}

.section-heading h2{
    font-weight:600;
}


.search-container{
    background-color: #f5f4f8;
}



.search-result {
    background-color: #754FFE;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
}

.search-result p {
    color: white;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.6px;
}


.search-content{
    max-width: 1024px;
}

.display-options{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.display-options p{
    font-weight: 700;
}

.result-display-options {
    display: flex;
}

.display-filter select{
    padding: 10px 0px;
    font-size: 16px;
    border-radius: 5px;
}

.result-content{
    display: flex;
}

.filter-courses {
    min-width: 240px;
    background-color: #fff;
    margin-right: 20px;
}

.result-display{
    display: flex;
}

@media(min-width: 320px){
    .content-first-items{
        flex-direction: column;
    }

    .first-description{
        padding: 36px 0px;
    }

    .heading{
        font-size: 28px;
    }

    .content-second{
        flex-direction: column;
        align-items: center;
    }

    .content-second-wrapper{
        flex-direction: column;
        max-width: 400px;
    }

    .content-second-item{
        padding-bottom: 32px;
        flex-direction: column;
    }

    .content-second-item:last-child{
        padding-bottom: 0px;
    }
}

@media(min-width:689px){
    .content-second-item {
        max-width: 332px;
        flex-direction: row;
        align-items: center;
    }
}

@media(min-width:691px){
    .first-description{
        max-width: 700px;
        padding: 28px 16px;
    }

    .content-second{
        align-items: center;
    }

    .content-second-wrapper{
        flex-direction: row;
        justify-content:flex-start;
        flex-wrap: wrap;
        max-width: 700px;
    }

    .descrip-container{
        max-width: 180px;
    }

    .descrip-container h4{
        font-size: 15px;
    }

    .descrip-container p{
        font-size:14px;
    }

    .section-cards{
        display: flex;
    }
}

@media(min-width:788px){
    .heading{
        font-size: 32px;
        max-width: 500px;
    }
}

@media (min-width:893px){
    .content-first-items{
        flex-direction: row;
        justify-content: center;
    }

    .first-description{
        max-width: 500px;
    }

    .text{
        max-width: 400px;
    }

    .first-image{
        align-self: end;
    }

    .content-second-wrapper{
        max-width: 900px;
        flex-wrap: nowrap;
    }

    .content-second-item{
        max-width: 300px;
    }

    .content-second-item:last-child{
        padding-bottom: 32px;
    }

    .content-third{
        max-width: 1024px;
    }
}

@media(min-width:1082px){
    .first-description{
        max-width: 460px;
    }
}
</style>