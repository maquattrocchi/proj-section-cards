<template>
<div class="relative">
   <label for="colorPicker" class="text-sub-text align-middle mr-3">Background Color:</label>
   <vue-color-picker v-model="color" id="colorPicker" @input="colorChange"/>
</div>
</template>

<script>

export default {
   name: 'PickerComponent',
   data(){
      return{
         color: '#F4EAE1'
      }
   },
   methods: {
      colorChange() {
         this.$emit('color', this.color);
      }
   }
}
</script>

<style lang="scss">
@import '../style/vars';

.cpicker {
   width: 50px;
   height: 25px !important;
   outline: white solid 4px;
   border-radius: 20px;
   overflow: hidden;
   vertical-align: middle;
   cursor: pointer;
   transition: all 0.4s ease-in-out;
   &:hover{
      box-shadow: 0px 0px 17px 5px $white;
   }
}
.cpicker__dropdown{
   position: unset !important;
   .cpicker__box {
      background-color: white;
      border-radius: 20px;
      overflow: hidden;
      top: 30px !important;
      left: unset !important;
      right: 0;
      z-index: 200;
      .cpicker__palette, .cpicker__history {
         display: none;
      }
      .cpicker__gamut{
         cursor: crosshair;
      }
      .gamut-tri__dot{
         cursor: move;
      }
      .cpicker__ho {
         padding: 10px 10px 10px 10px !important;
         .cpicker__slider {
            border-radius: 10px;
         }
      }
      .cpicker__manual {
         padding-bottom: 10px;
      }
   }
}
</style>