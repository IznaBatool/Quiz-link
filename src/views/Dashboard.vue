<template>
  <div class="container-fluid main-div m-0 py-0">
    <div class="row p-2">
      <!---------- LEFT PANEL --------->
      <div class="col-lg-3 left-panel p-2">
        <div class="row pt-2 pb-5">
          <img class="logoMax" :src="logoMax" alt="Developers Studio Logo">
          <img class="logoMin" :src="logoMin" alt="Developers Studio Logo">
        </div>
        <div class="row border-top-0 text-left pb-2"
          v-for="obj in panelData" :key="obj.id">
          <router-link :to="{name: 'leftpanel', params: { leftpanel: obj.slug }}" class="col-12 links">
            <div class="p-3 w-100">
              <i :class="obj.icon"></i>
              <span class="text-light"> {{ obj.name }}</span> 
            </div>
          </router-link>
        </div>
      </div>

      <!---------- RIGHT PANEL --------->
      <div class="col-lg-9 right-panel">
        <div class="row p-4 top-row">
          <div class="col-9 text-left">
            <h3>Admin Panel</h3>
          </div>
          <div class="col-3 text-right">
            <button class="btn btn-logout">
              <i class="fas fa-power-off"></i>&nbsp;
              <span class="my-auto">Logout</span>
            </button>
          </div>
        </div>
        
        <!-- <div class="row p-4 m-5 date-div">
          <h4>{{ today }}</h4>
          <h4>{{ timestamp }}</h4>
        </div> -->

        <div>
          <router-view :key="$route.path" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import image1 from "@/assets/devvelopers_studio_logo.png";
import image2 from "@/assets/dsGroup.png";

export default {
  data () {
    return {
      panelData: [
        { id: 1, name: "Candidates", slug: "display-candidates", icon: "fas fa-users"}, 
        { id: 2, name: "Generate Link", slug: "generate-link", icon: "fas fa-link"}
      ],
      logoMax: image1,
      logoMin: image2,
      today : new Date().toLocaleDateString(),
      timestamp: null
    }
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
        const today = new Date();
        var currentHours = today.getHours();
        currentHours = ("0" + currentHours).slice(-2);
        var currentMinutes = today.getMinutes();
        currentMinutes = ("0" + currentMinutes).slice(-2);

        // const time = today.getHours() + ":" + today.getMinutes();
        const time = currentHours + ":" + currentMinutes;
        this.timestamp = time;
    }
  },
};
</script>

<style scoped>
.main-div {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 300;
  background-color: #28374e;
  /* position: fixed; */
  height: 100%;
}
.logoMin {
  display: none;
}
.left-panel img {
  width:95%
}
.left-panel i {
  color: #fff;
  font-size: 20px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 20px;
}
.left-panel .links {
  text-decoration: none;
  border-left: solid 5px #eab24d;
}
.links:hover, .links:focus {
  background-color: #eab24d;
}
.right-panel {
  background-color: #fcfcfc;
  border-radius: 20px;
  height: 97vh;
}
.right-panel .top-row {
  border-bottom: solid 1px #ececec;
}
.right-panel .date-div {
  /* background-color: #ef6052; */
  background-image: linear-gradient(to bottom right, #ef6052, #fcfcfc);
  width:30%;
  height: 25%;
  border-radius: 20px;
  float: right;
}
.btn-logout {
  background-color: #ef6052;
  color: #fcfcfc;
  border-radius: 20px;
}

@media screen and (max-width: 991px) {
  .logoMin {
    display: inline;
  }
  .logoMax {
    display: none;
  }
  .left-panel {
    width: 15%;
  }
  .right-panel {
    /* position: relative;
	  left: 140px; */
    max-width: 85%;
  }
  .links span {
    display: none;
  }
  .links i {
    font-size: 25px;
  }
  .links {
    text-align: center;
  }
}
</style>