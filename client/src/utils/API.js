import axios from "axios";

export default {
  getInventoryByOrganization: function (baseURL, organization) {
    if (baseURL && organization) {
      /*Make a request to the ./api/products/Georgia_BioEd. resource, and run the findByOrganization method*/
      return axios.get('/api' + baseURL + '/' + organization);
    }//if
  },//getOrganization
  getInventoryByCategory: function (baseURL, parameter1, parameter2) {
    if (parameter1 && parameter2) {
      /*Make a request to the '/api/products/:category/:organization' resource, and run the findByCategoryAndOrganization method*/
      return axios.get('/api' + baseURL + parameter1 + '/' + parameter2);
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
    if (data) {
      return axios.post('/api' + baseURL, data);
    }
  },
  getOrder: function (baseURL, parameter) {
    if (parameter) {
      return axios.get('/api' + baseURL + '/' + parameter);
    }
  },
  putQuantity(baseURL, data) {
    if (data) {
      return axios.put('/api' + baseURL, data);
    }
  },
  getOrganizationValues(baseURL) {
    if (baseURL) {
      return axios.get('/api' + baseURL);
    }
    else
      console.log("NO DATA TO SEND");
  },
  getCategoryValues(baseURL, organization) {
    if (baseURL && organization) {
      return axios.get('/api' + baseURL + '/' + organization);
    }
    else
      console.log("API: NO DATA TO SEND");
  }
};

