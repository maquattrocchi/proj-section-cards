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
        <span>{{cValue}}</span>
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
      this.$emit('input', this.cValue);
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
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: $black;
  cursor: pointer;
  // box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: $black;
  cursor: pointer;
  // box-shadow: 0 0 2px 0 #555;
}

input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: $black;
  cursor: pointer;
  // box-shadow: 0 0 2px 0 #555;
}
</style>