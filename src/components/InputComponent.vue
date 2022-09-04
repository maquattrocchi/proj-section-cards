<template>
    <div class="flex gap-2 text-sub-text items-center">
        <label for="slider">Number of <br> cards:</label>
        <input
            id="slider"
            ref="input"
            v-model="cValue"
            type="range"
            :min="min"
            :max="max"
            class="range"
            @input="onInput"
            :style="{backgroundSize: bgSize + '% 100%' }"
        >
        <span class="block w-6">{{cValue}}</span>
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      cValue: this.value,
      bgSize: 25,
      cMin: this.min,
      cMax: this.max,
    };
  },
  methods: {
    onInput() {
      this.$emit('input', parseInt(this.cValue));
      this.bgSize = (this.cValue - this.cMin) * 100 / (this.cMax - this.cMin);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../style/vars';
input[type="range"] {
  -webkit-appearance: none;
  width: 130px;
  height: 5px;
  background: $sub-text;
  border-radius: 5px;
  cursor:pointer;
  background-image: linear-gradient($black, $black);
  background-repeat: no-repeat;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: $black;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover{
    transform: scale(1.3);
  }
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: $black;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover{
    transform: scale(1.4);
  }
}

input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: $black;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover{
    transform: scale(1.3);
  }
}
</style>