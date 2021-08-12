<template>
  <div class="quiz">
    <div class="container-fluid text-left main-div p-3 pb-5">
      <img :src="logo" alt="logo" width="100px" class="ml-4"/>
      <div class="col-9 right-panel mt-n5 bg-white mx-auto">
        <Instructions></Instructions>
      </div>
    </div>
  </div>
</template>
<script>
import Instructions from "@/components/Instructions.vue";
import Image from "@/assets/dsGroup.png";

export default {
  components: {
    Instructions,
  },
  data() {
    return {
      logo: Image,
      instructions: true,
      quiz: false,
    };
  },
  methods: {
    handleDisplay(display) {
      if (display == this.quiz) {
        this.instructions = false;
        this.quiz = true;
      } else {
        this.instructions = true;
        this.quiz = false;
      }
    },
  },
};
</script>
<style scoped>
.main-div {
  background: #28374E;
  /* position: fixed; */
  height: 100%;
}
.right-panel {
  /* height: 90vh; */
  height: 100%;
  padding: 40px;
  border-radius: 40px;
}
.selcted-tab {
  border-left: 4px solid #EAB24D;
  cursor: pointer;
}
</style>
