import React, { Component } from "react";
import {UserConsumer} from "../providers";
import { Col, Row, Container } from "../components/Grid";
import { InventoryTableBody} from "../components/InventoryTableBody";
import API from "../utils/API";
import CatSearchForm from "../components/CatSearchForm";
import {CartBody} from "../components/CartBody";
import readCookie from "../utils/RCAPI";
import {  MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import "../style.css";


class SearchContainer extends Component {
  constructor(){
    super();
    this.isCatBtnClicked = false;

    //Array of products returned from the API
    this.products = [];

    //Array of orders to submit
    this.orders = [];

    //Array that is assembled from the inventory table, must be reset when items are deleted from shopping cart
    this.cartItems = [];
  }

  state = {
    //contains a list of items from the api, one render behind
    products: [],

    //keeps track of all items in the cart
    cartItems: [],

    //load categories into category dropdownlist
    ddlCategories: [],

    //the created ordered id;
    orderId: '',

    category: '',

    organization: '',
  };

  componentDidMount() {
    const updateorg = readCookie("org");
    //ErrorHandling: If users enter an organization directly (/search/Georgia_BioEd) or click navbar search
      // if(!updateorg){
        let url = window.location.pathname;
        let urlArr = url.split('/');
        let urlOrganization = urlArr[urlArr.length-1].split('_').join(' ');
        // console.log("Organization = "+urlOrganization);
        this.setState({organization: urlOrganization});
        this.orgSearch(urlOrganization);
        this.getDDLCategoryValues(urlOrganization, this.loadDDLCategoryValues);
      // }
      // Caching is interfering with dynamic input
      // else{
      //   this.setState({organization: updateorg});
      //   this.orgSearch(updateorg);
      //   this.getDDLCategoryValues(updateorg, this.loadDDLCategoryValues);
      // }
  }

  //Populates the ddlOrgList values
  getDDLCategoryValues = (organization, cb) => {
    let baseURL = "/categories";
    API.getCategoryValues(baseURL, organization)
      .then(res => {
        //callback to store state variables
        cb(res);
      })
      .catch(err => console.log(err));
  };

  loadDDLCategoryValues = (res) => {
    // console.log("Res = "+JSON.stringify(res.data));
    this.setState({ ddlCategories: res.data});
    // console.log("Res = "+JSON.stringify(this.state.ddlCategories));
    const ddlCatListElem = document.getElementById( 'ddlCatList' );

    for( let category in this.state.ddlCategories ) {
      ddlCatListElem.add( new Option( this.state.ddlCategories[category]));
    };
  };
  /*************************************************/
  //API CALLS TO LOAD INVENTORY
  orgSearch = (organization) =>{
    if (organization){
      // event.preventDefault();
      const baseURL = "/products";
      this.loadInventoryByOrganization(baseURL, organization, this.setOrgProductsState);
    }//if
  };

  //Initialize the state variables with search results
  loadInventoryByOrganization = (baseURL, organization, cb) => {
    API.getInventoryByOrganization(baseURL, organization)
      .then(res => {
        //callback to store state variables
        cb(res);
      })
      .catch(err => console.log(err));
  };

  handleCatSearch = event =>{
    this.isCatBtnClicked = true;
    // console.log("IN HANDLECATSEARCH");
    var ddlCatElem = document.getElementById("ddlCatList");
    var category = ddlCatElem.options[ddlCatElem.selectedIndex].text;
    this.setState({category: category});
    if (category){
      event.preventDefault();
      const baseURL = "/products";
      const formattedCategory = '/'+category;
      //Get Product Info by Category
      this.loadInventoryByCategory(baseURL, formattedCategory, this.setCatProductsState);
    }//if
  };

  //Initialize the state variables with search results
  loadInventoryByCategory = (baseURL, category, cb) => {
    API.getInventoryByCategory(baseURL, category, this.state.organization)
      .then(res => {
        //callback to store state variables
        cb(res);
      })
      .catch(err => console.log(err));
  };

  setOrgProductsState = (res) => {
    // console.log("Products for Organization = "+JSON.stringify(res));
    if(res){
      this.products = res.data;
      this.setState({ products: res.data.items});
    }
  };

  setCatProductsState = (res) => {
    // console.log("Products for Category = "+JSON.stringify(res));
    if(res){
      this.products = res.data;
      this.setState({ products: res.data.items});
    }//if
    // console.log("THIS.PRODUCTS = "+JSON.stringify(this.products));
  };
/*************************************************/
//Load Cart Items:
  addCartItems = (event) => {
    event.preventDefault();
    let productIdClicked = event.target.getAttribute('data-product-id');
    let productNameClicked = document.getElementById('name-'+productIdClicked).innerText;
    let stockQuantityAvailable = document.getElementById('prod-stock-quantity-'+productIdClicked).innerText;

    //Error Handling: If item has been added to cart, don't add it to the cart again
    let addButton = document.getElementById(productIdClicked);
    addButton.disabled = true;

    //Assemble cart
    let cartItem =
    {
      id: productIdClicked,
      name: productNameClicked,
      stockQuantity: stockQuantityAvailable
    };
    this.cartItems.push(cartItem);
    /*********************/
    // CART ITEMS
    /*********************/
    this.setState({ cartItems: this.cartItems} );
  }

  //ERROR HANDLING: If A Product is not avaialbe disable the add button;
  disableAddBtn = (stockQuantity) => {
    if(parseInt(stockQuantity) < 1){
      return 'disabled';
    }
    else
      return '';
  }//disabledAddBtn

  //Delete Cart Items
  delCartItems = (event) =>{
    event.preventDefault();
    let cartItemToDel = event.target.getAttribute('data-cart-item-id');
    let curCart = this.state.cartItems;
    let filteredCart = curCart.filter(eachItem => eachItem.id !== cartItemToDel);

    //Error Handling: If item deleted from cart then enable the add to cart button:
    let addButton = document.getElementById(cartItemToDel );
    addButton.disabled = false;

    //Set cart Items array
    this.setState({ cartItems: filteredCart});

    //Set cartItems, minus any that have been deleted
    this.cartItems= []
    this.cartItems = filteredCart;
  };
/******************************************************************
 **Submit Completed Order:
 ******************************************************************/
  submitOrder = (event, sendOrder) => {
    event.preventDefault();
    this.orders.push(...this.cartItems);
    //Add the Quantity to the cart
    let completedOrder = this.orders.map(order =>{
      var productId = order.id;
      if(document.getElementById("quantity-"+productId)){
        var  productQty= document.getElementById("quantity-"+productId).value;
        return ({...order, quantity: productQty, userId: this.props.currentId});
      }
      return ({...order, productQuantity: productQty});
    });//map
    let jsonOrder = {
      data: {...completedOrder}
    };

    this.sendOrder(jsonOrder);

    //Reset the cart after order submitted
    this.cartItems = [];
    this.orders =[];
    this.setState({ cartItems: [] });
  }//function

  sendOrder = (order) =>{
    if (order){
      const baseURL = "/order";
      this.loadOrder(baseURL, order, this.displayOrder);
    }//if
  };

  loadOrder = (baseURL, order, displayOrder) => {
   let data = {...order};
    API.postOrder(baseURL, data)
      .then(res => {
        /******************** */
        //API CALL
        /******************** */
        let orderId = res.data;
        this.setState({ orderId: orderId });
        this.retrieveOrder(baseURL, this.state.orderId);
      })
      .catch(err => console.log(err));
  };

  retrieveOrder = (baseURL, orderId) => {
    API.getOrder(baseURL, orderId)
      .then(res => {
        //Assemble all order items to send to the confirmation page
        let order = res.data[0].products.map(product => {
          return(
            {
              userName: res.data[0].user.userName,
              orderId: res.data[0]._id,
              _id: product.product._id,
              productName: product.product.productName,
              currentStockQuantity: product.product.stockQuantity,
              orderQuantity: product.productQuantity,
              newStockQuantity: this.addNewStockQuantity(product.product.stockQuantity, product.productQuantity)
            }
          );
        })//map
        // Push the order to the confirmation page
          this.props.history.push({
          pathname: '/confirmation/'+order[0].orderId,
          state: {order: order}
        });
      });
  }

  addNewStockQuantity = (currentStockQuantity, orderQuantity) => {
    let newStockQuantity = parseInt(currentStockQuantity) - orderQuantity;
    return newStockQuantity;
  }
  //END ORDER SUBMISSION
  /**********************************************************/
  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          {this.state.organization?(<MDBCard className="main-search my-5 px-5 pb-5">
            <br />
            <h3>Organization: {this.state.organization.split('_').join(' ')}</h3>
            <h5>Search by Category</h5>
            <CatSearchForm catSearchEvent={this.handleCatSearch} />
            <div className="top-margin">
              <Row>
                <Col size="md-6">
                  {!this.isCatBtnClicked && this.products.length ? (
                    <InventoryTableBody currentId={this.props.currentId} products={this.products} addCartItems={this.addCartItems} disableAddBtn={this.disableAddBtn}></InventoryTableBody>
                  ) : (
                      !this.isCatBtnClicked && <h3> </h3>
                    )}
                  {this.isCatBtnClicked && this.products && this.products.length ? (
                    <InventoryTableBody currentId={this.props.currentId} products={this.products} addCartItems={this.addCartItems} disableAddBtn={this.disableAddBtn}></InventoryTableBody>
                  ) : (
                      this.isCatBtnClicked && !this.products.length && <h3>No Results to Display</h3>
                    )}
                </Col>
                <Col size="md-6">
                  <CartBody cartItems={this.state.cartItems} currentId={this.props.currentId} delCartItems={this.delCartItems} submitOrder={this.submitOrder}>
                  </CartBody>
                </Col>
              </Row>
            </div>
          </MDBCard>):<MDBCard className="main-confirmation text-center my-5 px-5 pb-5"><h1>Please select an <a href='/'>organization</a></h1></MDBCard>}
        </MDBContainer>
      </React.Fragment>
    );
  }
}
const SearchUpdate = props => (
  <UserConsumer>
    {({ id, userName}) => (
      <SearchContainer
        {...props}
        currentId={id}
        currentUserName={userName}
      />
    )}
  </UserConsumer>
)

export default SearchUpdate;
