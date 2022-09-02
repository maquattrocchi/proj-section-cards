<template>
  <main :style="{backgroundColor: color}" class="flex flex-col justify-center h-screen">
    <section class="w-4/5 flex justify-between mx-auto px-8">
      <h1 class="text-5xl">Section Cards</h1>
      <div class="flex items-center gap-12">
        <input-component :value="cardNumber" :max="max" :min="min" @input="newNumber"/>
        <picker-component @color="newColor"/>
      </div>
    </section>
    <slider-component :cardNumber="cardNumber"/>
  </main>
</template>

<script>
import SliderComponent from './SliderComponent.vue'
import InputComponent from './InputComponent.vue'
import PickerComponent from './PickerComponent.vue'
export default {
  name: 'MainComponent',
  components:{
    SliderComponent,
    InputComponent,
    PickerComponent
  },
  data(){
    return{
      cardNumber: 5,
      color: '#F4EAE1',
      min: 1,
      max: 20,
    }
  },
  methods: {
    newNumber(val){
      this.cardNumber = val
    },
    newColor(val){
      this.color = val
    }
  }
    
}
</script>

<style lang="scss">

</style>