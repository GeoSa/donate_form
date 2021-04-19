<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="btn-row">
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
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <DonateInput v-bind:character=CURRENT_SYMBOL></DonateInput>
        <div v-if="disableBtn">Incorrect value. Amount mast be an integer number and above than zero</div>
        <CustomButton
            symbol="Donate"
            v-bind:isActive="true"
            :onClick="sendRequest.bind(this)"
            v-bind:customStyle="{width: '100%', 'margin-top': '20px'}">
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import CustomButton from "@/components/ui_components/CustomButton";
import DonateInput from "@/components/ui_components/DonateInput";


export default {
  name: 'App',
  components: {
    CustomButton,
    DonateInput
  },
  methods: {
    ...mapMutations([
       'SET_SUGGESTION'
    ]),
    sendRequest: function () {
      const data = {
        amount: this.SUGGESTION,
        currency: this.$store.state.currentCurrency
      }
      console.log(data);
    }
  },
  computed: {
    ...mapGetters([
      'SUGGESTION',
      'PRESETS',
      'CURRENT_SYMBOL'
    ]),
    disableBtn() {
      return this.$store.state.disableBtn;
    }
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btn-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  flex-wrap: wrap;
}
</style>
