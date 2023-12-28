<template>
    <div class="card" :class="'card-' + cardId">
        <div class="card-link">
            <slot name="header"></slot>
        </div>

        <div class="card-body">
            <slot name="body" ></slot>
        </div>

        <slot/>

        <div class="card-footer">
            <slot name="footer"></slot>
        </div>    
    </div>
    
</template>

<script setup>

const { cardId } = defineProps(['cardId']);

</script>

<style>

.card{
    margin-right: 20px;
    margin-bottom: 24px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
}

.card-link img{
    width: 100%;
    height: 100%;
}

.card-link a{
    font-size: 0;
}

.card-body{
    padding: 24px;
    overflow: hidden;
}

.card-body h4{
    margin-bottom: 8px;
    color: #18113c;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    letter-spacing: -0.4px;
}

.card-body ul{
    font-size: 12px;
    font-weight: 500;
}

.card-body li{
    margin-right: 16px;
}

.card-body i{
    margin-right: 4px;
}

.card-footer {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 16px ;
}

@media(min-width : 320px){

    .card-body ul{
        display: flex;
    }
}

@media(min-width : 691px){
    .card-2{
        display: block;
        margin-right: 0px;
    }
}

@media(min-width : 893px){
   .card{
        display: block;
        margin-right: 20px;
    }

    .card-body{
        padding: 10px 20px;
    }

    .card-body h4{
        font-size: 15px;
    }
    .card-body ul{
        display: block;
    } 
}
</style>