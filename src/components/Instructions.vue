<template>
  <div class="bg-white">
    <div class="instruction-page rounded p-4 mx-auto">
      <div class="border-box">
        <div class="heading py-3 text-white">
          <h3 class="px-2 text-center">Quiz Instructions</h3>
        </div>
      </div>
      <div class="time-limit pt-4">
        <div class="px-2 row">
          <div class="col-3">
            <p class="point"><b>Points</b> : 10</p>
          </div>
          <div class="col-3">
            <p class="point"><b>Questions</b> : 2</p>
          </div>
          <div class="col-5 ml-4">
            <p class="point"><b>Time Limit</b> : 30 Minutes</p>
          </div>
        </div>
        <div class="horizontal-border mt-2"></div>
      </div>
      <div class="instructions px-2 py-3 text-left">
        <h5>Instructions</h5>
        <ul>
          <li>Each question carry <b>5 marks</b>.</li>
          <li>There is no negative marking.</li>
          <li>Only <b>one attempting</b> allowed.</li>
          <li>Quiz will be submitted automatically, if the time expired</li>
          <li>To start a quiz, click on <b>Start</b> button given below.</li>
          <li>
            When you click on a <b>Start</b> button, screen recording will get
            started.
          </li>
          <li>
            After attempting quiz, click on <b>Submit</b> button, to submit
            quiz.
          </li>
        </ul>
      </div>
      <div class="pb-4">
        <router-link to="/quiz">
          <button
            type="submit"
            class="start btn float-right"
            @click="handleShow()"
          >
            <span class="text-white">Start</span>
            <b-icon-chevron-right
              class="arrow text-white"
            ></b-icon-chevron-right>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Instructions",
  data() {
    return {
      instruction: true,
      quiz: false,
      submit: false,
      isClicked: false,
    };
  },
  mounted() {
    window.addEventListener("beforeunload", this.onWindowLoad);
  },
  methods: {
    handleShow() {
      var link = localStorage.getItem("generatedLink");
      this.$http
        .get(link)
        .then(res => {
          console.log(res);
          console.log(link);
        })
        .catch(err => {
          alert("Error", err);
        })

      let quiz = true;
      localStorage.setItem("quiz", JSON.stringify(quiz));
    },
  },
};
</script>

<style scoped>
.instruction-page {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 100%;
  /* font-size: 20px; */
}
.heading {
  background: #17114F;
  font-weight: 300;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.time-limit {
  font-size: 16px;
}
ul li{
  font-size: 14px;
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

.quiz {
  width: 90%;
}
.card-link {
  text-decoration: none;
  color: #17114F;
}
</style>