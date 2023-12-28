<template>
    <div class="content-first-items">
        <div class="course">
            <h1 class="title">
                {{ cardDetails.filteredCard[0].cardTitle }}
            </h1>
            <p class="description">
                {{ cardDetails.filteredCard[0].cardDescription }}
            </p>

            <div class="details ">
                <span class="duration">
                    <i class="fa fa-clock"></i>
                    {{ cardDetails.filteredCard[0].cardDuration }}
                </span>
                <span class="students">
                    <i class="fa fa-user"></i>
                    {{ cardDetails.filteredCard[0].cardStudents }} enrolled
                </span>
                <span class="rating">
                    <i class="fa fa-star"></i>
                    {{ cardDetails.filteredCard[0].cardRating }}
                </span>
                <span class="level">
                    <i class="fa fa-signal"></i>
                    {{ cardDetails.filteredCard[0].cardLevel }}
                </span>
            </div>

        </div>
    </div>

    <div class="part-two" style="background-color: #f5f4f8; display: flex; justify-content: center;">
        <div class="all-details">
            <div class="grid grid-cols-3">
                <div class="left-side col-span-2 mr-4" style="height: fit-content">
                    <div class="options">
                        <button class="p-4 text-sm hover:text-violet-700 focus:text-violet-700"
                            @click="handleButtonClick">Curriculam</button>
                        <button class="p-4 text-sm hover:text-violet-700 focus:text-violet-700"
                            @click="handleButtonClick">Description</button>
                    </div>
                    <hr>

                    <div class="flow-chart px-4">
                        <div class="content text-sm" @click="handleContentClick">
                            <div class="flex justify-between hover:text-violet-700">
                                <p class=" mb-2 font-medium">Course Introduction</p>
                                <i class="fa fa-angle-down"></i>
                            </div>
                            <div class="content-details" v-if="contentClicked">
                                <div class="flex">
                                    <i class="fa fa-lock pr-4 self-center"></i>
                                    <p class="">Course Curriculam at a glance</p>
                                    <span style="margin-left:auto;">8m 12s</span>
                                </div>

                                <div class="flex">
                                    <i class="fa fa-lock pr-4 self-center"></i>
                                    <p>Basic Course Setup</p>
                                    <span style="margin-left:auto;">8m 12s</span>
                                </div>
                            </div>
                        </div>
                        <hr>

                        <div class="content text-sm" v-on:click="handleContentClick">
                            <div class="flex justify-between hover:text-violet-700">
                                <p class=" mb-2 font-medium">Course Introduction</p>
                                <i class="fa fa-angle-down"></i>
                            </div>
                            <div class="content-details" v-show="contentClicked">
                                <div class="flex">
                                    <i class="fa fa-lock pr-4 self-center"></i>
                                    <p class="">Course Curriculam at a glance</p>
                                    <span style="margin-left:auto;">8m 12s</span>
                                </div>

                                <div class="flex">
                                    <i class="fa fa-lock pr-4 self-center"></i>
                                    <p>Basic Course Setup</p>
                                    <span style="margin-left:auto;">8m 12s</span>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
                <div class="grid grid-rows-3 gap-4 right-side">
                    <div class="info" style="border-radius: 4px;">
                        <div style=" border-radius: 4px"><img :src="cardDetails.filteredCard[0].cardImage" style="padding: 4px;"></div>
                        <h2 style="padding: 12px 20px; font-weight: 700; font-size: 24px">Free</h2>
                        <button style="display: block; width: -webkit-fill-available; background-color: #754FFE; color: white; padding: 10px 0px; border-radius: 4px; margin:0px 12px">Enroll Course</button>
                        <button style="width: -webkit-fill-available; padding: 10px 0px; color: #754FFE; border: 1px solid #754FFE; margin:8px 12px; border-radius: 4px;">Add to bookmark</button>
                    </div>
                    <div class="info" style="border-radius: 4px; height: fit-content;">
                        <h3 style="font-weight: 700; padding:8px;">What's Included</h3>
                        <hr style="width: 100%; margin: 0px">
                        <p style="padding: 8px">12 hours video</p>
                        <hr style="width: 100%; margin: 0px">
                        <p style="padding: 8px">Certificate</p>
                        <hr style="width: 100%; margin: 0px">
                        <p style="padding: 8px">12 article</p>
                        <hr style="width: 100%; margin: 0px">
                        <p style="padding: 8px">Wtch Offline</p>
                        <hr style="width: 100%; margin: 0px">
                        <p style="padding: 8px">Lifetime Access</p>
                    </div>
                    <div class="info" style="border-radius: 4px; height: fit-content;">
                        <h3>{{ cardDetails.filteredCard[0].cardAuthor }}</h3>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    {{ cardDetails.filteredCard }}


</template>

<script setup>

let { id } = useRoute().params;

const cardEndpoint = "http://localhost:3000/api/cardDetails/card" + id;

// const {data : cardDetails} = await useFetch(cardEndpoint);
// console.log(cardDetails._rawValue);

const {data : cardDetails} = await useFetch(`http://localhost:3000/api/cardDetails`,{
    query : { id }, 
});


let contentClicked = true;

function handleContentClick() {
    console.log("content clicked");
    contentClicked = !contentClicked;
}

</script>

<style scoped>
.course {
    max-width: 560px;
    margin-top: 60px;
    margin-bottom: 120px;
    color: white;
}

.title {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 6px;
}

.description {
    margin-bottom: 32px;
}

.details span {
    margin-right: 20px;
}

.all-details {
    max-width: 1024px;
    position: relative;
    bottom: 40px;
}

.options {
    margin-left: 16px;
}

.flow-chart {
    margin-left: 16px;
}



.right-side {
    position: relative;
    bottom: 40px;
}

.info,
.left-side {
    background-color: white;
}
</style>