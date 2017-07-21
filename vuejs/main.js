Vue.component('hello', {
template: '#templateTag',
props:['data', 'color']
});

var app = new Vue({
  el: '.main-content',
  data: {
      json: []
  },
  created(){
    this.$http.get('/colorData.json').then(response => {

  // get body data
  this.json = response.data.data;

}, response => {
  // error callback
});
  }
});
