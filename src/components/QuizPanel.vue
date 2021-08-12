<template>
  <div class="container-fluid text-left main-div p-2">
    <img :src="logo" alt="logo" width="100px" class="ml-4"/>
    <div class="col-9 quiz-panel p-5 mt-n5 bg-white mx-auto">
      <div class="border-box">
        <div class="heading py-3 text-white">
          <h3 class="text-center">Quiz</h3>
        </div>
      </div>
      <h6 class="font-weight-bold pt-3 pl-2">
        Attempt all of the following questions.
      </h6>
      <div id="accordion" class="accordion mt-4">
        <div class="card">
          <div class="card-header">
            <a class="card-link" data-toggle="collapse" href="#collapseOne">
              Question 1
            </a>
          </div>
          <div id="collapseOne" class="collapse show" data-parent="#accordion">
            <div class="card-body">Lorem ipsum..</div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a
              class="collapsed card-link"
              data-toggle="collapse"
              href="#collapseTwo"
            >
              Question 2
            </a>
          </div>
          <div id="collapseTwo" class="collapse" data-parent="#accordion">
            <div class="card-body">Lorem ipsum..</div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a
              class="collapsed card-link"
              data-toggle="collapse"
              href="#collapseThree"
            >
              Question 3
            </a>
          </div>
          <div id="collapseThree" class="collapse" data-parent="#accordion">
            <div class="card-body">Lorem ipsum..</div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <a
              class="collapsed card-link"
              data-toggle="collapse"
              href="#collapseFour"
            >
              Question 4
            </a>
          </div>
          <div id="collapseFour" class="collapse" data-parent="#accordion">
            <div class="card-body">Lorem ipsum..</div>
          </div>
        </div>
      </div>
      <div class="pb-4">
        <button type="submit" class="start  mt-3 btn float-right">
          <span class="text-white ">Submit</span>
          <b-icon-chevron-right class="arrow text-white"></b-icon-chevron-right>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Image from "@/assets/dsGroup.png";

export default {
  name: "QuizPanel",
  data() {
    return {
      logo: Image,
    };
  },
};
</script>

<style scoped>
.main-div {
  background: #28374E;
  position: fixed;
  height: 100%;
}
.quiz-panel {
  border-radius: 40px;
  height: 90vh;
}
.heading {
  background: #17114F;
  font-weight: 300;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.card-link {
  text-decoration: none;
  color:#17114F
}
.time-limit {
  font-size: 18px;
}
.border-box {
  border: 2px solid #F05E59;
  border-left: 0;
  border-right: 0;
  padding: 5px 0;
}
.horizontal-border {
  border: 1px solid #F05E59;
}

button {
  background: #F05E59;
  border-radius: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 130px;
  transition: all 500ms ease 0ms;
}
button:hover {
  width: 150px;
}
.arrow {
  display: none !important;
  padding-left: 5px;
}
button:hover .arrow {
  display: inline !important;
}
.accordion {
  height: 40vh;
  overflow-x: auto;
  overflow-y: auto;
}
</style>
