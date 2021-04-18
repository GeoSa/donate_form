<template>
  <button
    :class="isActive ? 'button-active' : 'button-not-active'"
    class="button"
    @click="onClick">
    {{symbol}} {{ value }}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    value: {
      type: Number,
      required: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    symbol: {
      type: String
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.button {
  outline: none;
  padding: auto 20px;
  cursor: pointer;
  margin: 5px;
  width: 120px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
}

.button-not-active {
  background: #fff;
  color: #000;
  border: 1px solid #c2c2c2;
}

.button-active {
  background: dodgerblue;
  color: #fff;
  border: 1px solid dodgerblue;
}
</style>
