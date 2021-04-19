<template>
    <div class="input-icon input-icon-left">
      <input type="number" v-model="userInput" >
      <i>{{character}}</i>
      <div>
        <DropBox></DropBox>
      </div>
    </div>
</template>

<script>
import DropBox from "@/components/ui_components/DropBox";
import { mapGetters } from 'vuex';

export default {
  name: "DonateInput",
  components: {
    DropBox
  },
  props: {
    character: {
      type: String
    }
  },
  computed: {
    ...mapGetters(['SUGGESTION']),
    userInput: {
      get() {
        return this.SUGGESTION;
      },
      set(value) {
        let active = /^\d+$/.test(value) && Number(value) > 0;
        this.$store.commit('SET_BTN_DISABLED', !active);
        if (active) this.$store.commit('SET_SUGGESTION', value);
      }
    }
  },
}
</script>

<style scoped>
.input-icon {
  position: relative;
  width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-icon > i {
  position: absolute;
  display: block;
  transform: translate(0, -50%);
  top: 50%;
  pointer-events: none;
  width: 20px;
  text-align: center;
  font-style: normal;
}
.input-icon > div {
  position: absolute;
  display: block;
  transform: translate(0, -50%);
  top: 50%;
  width: 60px;
  text-align: center;
  font-style: normal;
}

.input-icon > input {
  padding-left: 30px;
  padding-right: 0px;
  width: 350px;
  height: 40px;
  color: cornflowerblue;
  font-size: 30px;
  font-weight: 600;
}

.input-icon-left > i {
  left: 0;
}

.input-icon-left > div {
  right: 0;
}

.input-icon-left > input {
  padding-left: 25px;
  padding-right: 0;
  text-align: left;
}
</style>
