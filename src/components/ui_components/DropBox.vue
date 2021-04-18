<template>
  <select v-on:change="SET_CURRIENCY($event.target.value)">
    <option
        v-for="curriency in curriencies"
        v-bind:key="curriency.code"
        v-bind:selected="curriency.code===currentCurrency">
      {{curriency.code}}
    </option>
  </select>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "DropBox",
  computed: {
    curriencies() {
      return this.$store.state.curriencies;
    },
    currentCurrency() {
      return this.$store.state.currentCurrency;
    }
  },
  methods: {
    ...mapMutations(['SET_CURRIENCY']),
  }
}
</script>

<style scoped>

</style>
