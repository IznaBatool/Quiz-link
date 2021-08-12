<template>
  <div class="main-div">
    <div class="row pt-5">
      <div class="col-9 text-left heading ml-4">
        <h4>Candidates</h4>
      </div>
    </div>
    
    <div class="row p-4 table-div">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Task</th>
          <th>Options</th>
          <th>Delete</th>
        </tr>
        <tr v-for="item in axiosData" :key="item.id">
          <td><p>{{ item.candidate_name }}</p></td>
          <td><p>{{ item.task }}</p></td>
          <td>
            <i class="fas fa-play"></i> &nbsp;
            <i class="fas fa-download"></i>
          </td>
          <td>
            <i class="far fa-trash-alt"></i>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      axiosData: []
    }
  },
  mounted () {
  this.$http
    .get("http://192.168.1.106:3000/api/dashboard/candidates_record")
    .then(res => {
      this.axiosData = res.data;
      // console.log('response',this.axiosData = res.data);
    })
    .catch(err => {
      alert("Error", err);
    })
  }
}
</script>

<style scoped>
.main-div {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.heading {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.table-div {
  height: 67vh;
  overflow-x:auto; 
  overflow-y:auto;  
}
table {
  background-color: #fff;
  box-shadow: 1px 1px 12px rgb(207, 207, 207);
  border-radius: 10px;
}
td {
  vertical-align: middle;
}
.fa-play{
  cursor: pointer;
  background-color:#ef6052;
  color: #fff;
  width: 30px;
  height: 30px;
  line-height: 15px;
  text-align: left;
  border-radius: 20px;
}
.fa-download{
  cursor: pointer;
  background-color:#44ab96;
  color: #fff;
  width: 30px;
  height: 30px;
  line-height: 12px;
  text-align: left;
  border-radius: 20px;
}
.fa-trash-alt{
  cursor: pointer;
  background-color:#dd3d60;
  color: #fff;
  width: 30px;
  height: 30px;
  line-height: 15px;
  text-align: center;
  border-radius: 20px;
}
</style>