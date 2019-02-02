import axios from "axios";
//const BASEURL = '/';

export default {
  getOrganization: function (baseURL) {
    // console.log("**Get Organization has been called**");
    if (baseURL) {
      // console.log("BASEURL = "+baseURL);
      /*Make a request to the ./api/products. resource, and run the findByOrganization method for all products for the GeorgiaBio organization*/
      return axios.get('/api' + baseURL);
    }//if
  },//getOrganization

  getCategory: function (baseURL, parameter) {
    // console.log("**Get Category has been called**");
    if (parameter) {
      // console.log("Parameter = "+parameter);
      /*Make a request to the '/api/products/:category' resource, and run the findByCategory method for all products for a particular category*/
      return axios.get('/api' + baseURL + parameter);
    }//if
  },//getCategory
  getUser: function (id) {
    return axios.get("/api/users" + id);
  },
  createUser: function (userData) {
    return axios.post("/api/users/", userData);
  },
  userLogin: function (userData) {
    console.log(userData)
    return axios.post("/api/login/", userData);
  },

  postOrder: function (baseURL, data) {
    //console.log('/api'+baseURL+" order = ", data);
    if (data) {
      return axios.post('/api' + baseURL, data);
    }
   },
   getOrder: function(baseURL, parameter){
    // console.log('/api'+baseURL+"/"+parameter);
   if(parameter){
    // console.log('/api'+baseURL+"/"+parameter);
     return axios.get('/api'+baseURL+'/'+parameter);
   }
  }
};

