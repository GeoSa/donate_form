<template>
  <form>
    <div class="input-icon input-icon-left">
      <input type="number" v-model="SUGGESTION" v-on:input="SET_SUGGESTION($event.target.value)">
      <i>{{character}}</i>
      <div>
        <DropBox></DropBox>
      </div>
    </div>
  </form>
</template>

<script>
import DropBox from "@/components/ui_components/DropBox";
import {mapMutations, mapGetters} from "vuex";

export default {
  name: "CustomInput",
  components: {
    DropBox
  },
  props: {
    character: {
      type: String
    }
  },
  computed: {
    ...mapGetters(['SUGGESTION'])
  },
  methods: {
    ...mapMutations(['SET_SUGGESTION'])
  }
}
</script>

<style scoped>
.input-icon {
  position: relative;
  width: 206px;
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
  width: 25px;
  text-align: center;
  font-style: normal;
}
.input-icon > div {
  position: absolute;
  display: block;
  transform: translate(0, -50%);
  top: 50%;
  width: 40px;
  text-align: center;
  font-style: normal;
}

.input-icon > input {
  padding-left: 25px;
  padding-right: 40px;
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
