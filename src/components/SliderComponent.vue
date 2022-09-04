<template>
  <section>
    
    <div class="slider w-4/5 flex mx-auto relative" :class="cardNumber < 3 ? 'justify-center' : ''">
        <card-component :item="cards[firstIndex]"/>
        <card-component :item="cards[secondIndex]" v-if="cardNumber > 1" class="hidden sm:block"/>
        <card-component :item="cards[thirdIndex]" v-if="cardNumber > 2" class="hidden lg:block"/>
        <!-- frecce slider -->
        <div 
        class="arr absolute translate-y-2/4 top-2/4 -left-3 text-3xl text-sub-text hover:text-black cursor-pointer" 
        @click="prevSlide"
        :class="{'text-black' : lSelected}"
        v-if="cardNumber > 3">
            <i class="fa-solid fa-arrow-left-long"></i>
        </div>
        <div 
        class="arr absolute translate-y-2/4 top-2/4 -right-3 text-3xl text-sub-text hover:text-black cursor-pointer" 
        @click="nextSlide"
        :class="{'text-black' : rSelected}"
        v-if="cardNumber > 3">
            <i class="fa-solid fa-arrow-right-long"></i>
        </div>
    </div>
    <!-- dot navigation -->
    <div class="flex flex-wrap justify-center align-center gap-4" v-if="cardNumber > 3">
        <div class="circle rounded-full" 
        v-for="(circle,index) in cards" :key="index" 
        :class="{'active': index === firstIndex}"
        @click="dotChange(index, cards)">
        </div>
    </div>
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
            rSelected: false,
            lSelected: false,
            cardsArray:[
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "1 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "2 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/chi-siamo/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "3 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/user-experience-design-roma/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "4 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "5 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/chi-siamo/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "6 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/user-experience-design-roma/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "7 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "8 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/chi-siamo/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "9 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/user-experience-design-roma/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "10 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "11 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/chi-siamo/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "12 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/user-experience-design-roma/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "13 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "14 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/chi-siamo/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "15 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/user-experience-design-roma/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "16 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "17 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/chi-siamo/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Tootsie roll I love fruitcake pastry tart jelly",
                    "subtitle": "18 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/user-experience-design-roma/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "Bear claw gumi bears fruitcake cookie snaps wafer",
                    "subtitle": "19 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/"
                },
                {
                    "img": "https://picsum.photos/200/300",
                    "title": "I love bonbon oat cake caramels",
                    "subtitle": "20 icing toffee sweet rool tootsie roll jelly apple pie.",
                    "link": "https://www.nois3.it/chi-siamo/"
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
            this.lSelected = true;
            this.rSelected = false;
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
            this.rSelected = true;
            this.lSelected = false;
            console.log(this.rSelected)
        },
        dotChange(index, cards){
            if(index == 0){
                this.firstIndex = cards.length - 1;
                this.secondIndex = index;
                this.thirdIndex = index + 1;
            }else if (index == cards.length - 1){
                this.firstIndex = cards.length - 2;
                this.secondIndex = cards.length - 1;
                this.thirdIndex = 0;
            }else{
                this.firstIndex = index - 1;
                this.secondIndex = index;
                this.thirdIndex = index +1;
            }
        }
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
        border: 2px solid $sub-text;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover{
            background-color: $black;
        }
        &.active{
            background-color: $black;
            border-color: $black
        }
    }
    .arr{
        transition: all 0.4s ease-in-out;
    }
</style>