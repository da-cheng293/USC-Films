'use strict';
const ax_request= require('axios');
let TMDB_api_key='6f587a758e64d464e12950da51b10fd6';
// [START gae_node_request_example]
const express = require('express');
var cross_domain = require('cors');
const path_handler=require("path")
const app = express();
app.use(cross_domain());
const fetch = require("node-fetch");
const url ='http://35.184.206.13:5000/upload';
const headers = {
  "Content-Type": "application/json",
  
  
}
const data = {
  data_text:"In 1903, the state of Maine issued a decree that “no person be allowed to enter the employ of, or work in, a lumber camp who can not show a good vaccination scar.” In that same year, industrialist Henry Clay Frick ordered all employees at his Pittsburgh-area steelworks and their families to show a scar or be vaccinated."}
 


fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data)})
  .then((res) => {
     console.log(res)
     return res.json()
})
.then((json) => {
   // Do something with the returned data.
  console.log(json);

});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;