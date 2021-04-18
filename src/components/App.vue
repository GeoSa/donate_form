<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center">
      <div v-for="item in PRESETS" v-bind:key="item">
        <CustomButton
            v-bind:symbol=CURRENT_SYMBOL
            v-bind:value=item
            v-bind:isActive="item===SUGGESTION"
            :onClick="SET_SUGGESTION.bind(this, item)">
        </CustomButton>
      </div>
    </div>
    <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-top: 10px">
      <form>
        <CustomInput v-bind:character=CURRENT_SYMBOL></CustomInput>
        <CustomButton
            symbol="Donate"
            v-bind:isActive="true"
            :onClick="sendRequest.bind(this)">
        </CustomButton>
      </form>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import CustomButton from "@/components/ui_components/CustomButton";
import CustomInput from "@/components/ui_components/CustomInput";


export default {
  name: 'App',
  components: {
    CustomButton,
    CustomInput
  },
  methods: {
    ...mapMutations([
       'SET_SUGGESTION'
    ]),
    sendRequest: function () {
      const data = {
        amount: this.SUGGESTION,
        currency: this.CU
      }
    }
  },
  computed: {
    ...mapGetters([
      'SUGGESTION',
      'PRESETS',
      'CURRENT_SYMBOL'
    ])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
