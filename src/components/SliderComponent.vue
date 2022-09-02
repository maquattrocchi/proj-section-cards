<template>
  <section>
    
    <div class="slider w-4/5 py-8 flex mx-auto" :class="cardNumber < 3 ? 'justify-center' : ''">
        <card-component :item="cards[firstIndex]"/>
        <card-component :item="cards[secondIndex]" v-if="cardNumber > 1"/>
        <card-component :item="cards[thirdIndex]" v-if="cardNumber > 2"/>
    </div>
    <div class="flex justify-center align-center gap-4">
        <div class="circle rounded-full" v-for="(circle,index) in cards" :key="index" :class="{'active': index === secondIndex}"></div>
    </div>
        <div class="next" @click="prevSlide">prev</div>
        <div class="next" @click="nextSlide">next</div>
  </section>
</template>

<script>
import CardComponent from './CardComponent';
export default {
    name: 'SliderComponent',
    components: {
        CardComponent
    },
    props: ['cardNumber'],
    data(){
        return{
            firstIndex: 0,
            secondIndex: 1,
            thirdIndex: 2,
            cardsArray:[
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "1 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "2 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "3 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "4 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "5 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "6 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "7 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "8 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "9 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "10 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "11 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "12 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "13 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "14 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "15 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "16 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "17 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "18 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "19 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "20 icing toffee sweet rool tootsie roll jelly apple pie.",
                },
            ]
        }
    },
    methods: {
        prevSlide(){
            if(this.firstIndex == 0){
                this.firstIndex = this.cards.length - 1 
                this.secondIndex = 0
                this.thirdIndex = 1
            }else if(this.secondIndex == 0){
                this.firstIndex--
                this.secondIndex = this.cards.length - 1
                this.thirdIndex = 0
            }else if (this.thirdIndex == 0){
                this.firstIndex--
                this.secondIndex--
                this.thirdIndex = this.cards.length - 1
            }else{
                this.firstIndex--
                this.secondIndex--
                this.thirdIndex--
            }
        },
        nextSlide(){
            if(this.thirdIndex == this.cards.length - 1){
                this.firstIndex = this.cards.length - 2 
                this.secondIndex = this.cards.length - 1
                this.thirdIndex = 0
            }else if(this.secondIndex == this.cards.length - 1){
                this.firstIndex = this.cards.length - 1
                this.secondIndex = 0
                this.thirdIndex++
            }else if (this.firstIndex == this.cards.length - 1){
                this.firstIndex = 0
                this.secondIndex++
                this.thirdIndex++
            }else{
                this.firstIndex++
                this.secondIndex++
                this.thirdIndex++
            }
        },
    },
    computed: {
        cards(){
            return this.cardsArray.slice(0, this.cardNumber)
        },
    },
}
</script>

<style lang="scss">
@import '../style/vars';
    .slider{
        height: 540px;
    }
    .circle{
        width: 15px;
        height: 15px;
        background-color: $sub-text;
        &.active{
            background-color: $black;
        }
    }
</style>