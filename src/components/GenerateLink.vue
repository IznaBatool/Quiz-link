<template>
  <div class="main-div">
    <div class="row pt-5">
      <div class="col-9 text-left heading ml-4">
        <h4>Generate Quiz Link</h4>
      </div>
    </div>


    <div class="row p-4 table-div">
    
      <div class="mx-auto w-50">
        <form class="form-group p-4 my-2 mx-auto text-left" @submit.prevent="handleSubmit">          
          <label name="email" class="pb-0">Email address</label>
          <input v-model="form.email" type="email" class="form-control mb-4" />
          
          <label name="password" class="pb-0">Password</label>
          <input v-model="form.password" type="password" class="form-control mb-4" />
          
          <button type="submit" class="btn btn-submit mx-auto px-3">Generate Link</button>
        </form>
      </div>
      
      <div class="link-div py-3">
        <router-link to="/instructions"><p>{{ generatedLink }}</p></router-link>

        <!-- <a :href="generatedLink"><p>{{ generatedLink }}</p></a> -->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      form: {
        email: null,
        password: null
      },
      generatedLink: null
    }
  },
  methods: {
    handleSubmit () {
      // var email = this.email;
      // var password = this.password;
      // this.generatedLink = 'localhost:8080/quiz?email=' + email + '&password=' + password;

      this.$http
        .post("http://192.168.1.106:3000/api/dashboard/generateurl", this.form)
        .then(res => {
          // this.axiosData = res.data;
          this.generatedLink = res.data;
          localStorage.setItem("generatedLink", this.generatedLink);
          console.log(res);
        })
        .catch(err => {
          alert("Error", err);
        })

      
    }
  },
}
</script>

<style scoped>
.main-div {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.heading {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
form {
  background-color: #fff;
  box-shadow: 1px 1px 12px rgb(207, 207, 207);
  border-radius: 10px;
}
.btn-submit {
  background-color: #ef6052;
  color: #fcfcfc;
  border-radius: 20px;
}
.link-div {
  word-wrap: break-word;
}
</style>