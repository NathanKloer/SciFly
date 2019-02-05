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

    //the created ordered id;
    orderId: '',

    // product: {},
    category: '',

    organization: '',
  };
  componentDidMount() {
    const updateorg = readCookie("org");
    this.setState({organization: updateorg});
    this.orgSearch(updateorg);
    this.viewProps(this.callback);
  }
  /*************************************************/
  //API CALLS TO LOAD INVENTORY
  orgSearch = (organization) =>{
    if (organization){
      const baseURL = "/products";
      this.loadByOrganization(baseURL, this.callback);
    }//if
  };
  loadByOrganization = (baseURL, cb) => {
    API.getOrganization(baseURL)
      .then(res => {
        //callback to store state variables
        cb(res);//01122019:SaveAndDisplay the Data:
      })
      .catch(err => console.log(err));
  };
  handleCatSearch = event =>{
    this.isCatBtnClicked = true;
    var ddlCatElem = document.getElementById("ddlCatList");
    var category = ddlCatElem.options[ddlCatElem.selectedIndex].text;
    // console.log("Category to Search = "+category);
    this.setState({category: category});
    if (category){
      event.preventDefault();
      const baseURL = "/products";
      const parameter = '/'+category;
      //Get Product Info by Category
      this.loadByCategory(baseURL, parameter, this.callback);
    }//if
  };

  //Initialize the state variables with search results
  loadByCategory = (baseURL, parameter, cb) => {
    API.getCategory(baseURL, parameter)
      .then(res => {
        // console.log("API CALL HAS STARTED!");
        //callback to store state variables
        cb(res);//01122019:SaveAndDisplay the Data:
      })
      .catch(err => console.log(err));
  };

  callback = (res) => {
    //console.log("Res = "+JSON.stringify(res));
    if(res){
      this.products = res.data;
      this.setState({ products: res.data.items});
    }
  }
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
    //console.log("Cart Items= "+JSON.stringify(this.cartItems));
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
    //console.log("Filtered Data = "+JSON.stringify(filteredCart));
  };
/******************************************************************/
//Submit Completed Order:
/******************************************************************/
  submitOrder = (event, sendOrder) => {
    event.preventDefault();
    /*********************/
    //SUBMITTED ORDER
    /*********************/
    //console.log("Your Order Has Been Submitted!");
    this.orders.push(...this.cartItems);
    //console.log(JSON.stringify(this.orders));

    //Add the Quantity to the cart
    let completedOrder = this.orders.map(order =>{
      var productId = order.id;
      //console.log("Product ID = ", productId);
      if(document.getElementById("quantity-"+productId)){
        var  productQty= document.getElementById("quantity-"+productId).value;
        //console.log("Quantity for ID-"+productId+" = "+productQty);
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
      // event.preventDefault();
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
        // console.log("SearchContainer: Order Id = "+orderId);
        this.setState({ orderId: orderId });
        this.retrieveOrder(baseURL, this.state.orderId);
      })
      .catch(err => console.log(err));
  };

  retrieveOrder = (baseURL, orderId) => {
    API.getOrder(baseURL, orderId)
      .then(res => {
        // console.log("SearchContainer: completeOrder = "+JSON.stringify(res));

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
          pathname: '/confirmation',
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

  viewProps = (cb) => {
    cb();
  }


  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBCard className="main my-5 px-5 pb-5">
          <br/>
          {/* <h3>UserId: {this.props.currentId}</h3> */}
          <h3>Organization: {this.state.organization}</h3>
        <h5>Search by Category</h5>
        <CatSearchForm catSearchEvent={this.handleCatSearch}/>
        <div className="top-margin">
        <Row>
            <Col size="md-7">
              {!this.isCatBtnClicked && this.products.length ? (
                <InventoryTableBody currentId = {this.props.currentId} products = {this.products} addCartItems = {this.addCartItems} disableAddBtn = {this.disableAddBtn}></InventoryTableBody>
              ) : (
                !this.isCatBtnClicked && <h3> </h3>
              )}
                {this.isCatBtnClicked && this.products && this.products.length ? (
                <InventoryTableBody currentId = {this.props.currentId} products = {this.products} addCartItems = {this.addCartItems} disableAddBtn = {this.disableAddBtn}></InventoryTableBody>
              ) : (
                this.isCatBtnClicked && !this.products.length && <h3>No Results to Display</h3>
              )}
            </Col>
            <Col size="md-4">
             <CartBody cartItems = {this.state.cartItems} currentId = {this.props.currentId} delCartItems = {this.delCartItems} submitOrder= {this.submitOrder}>
             </CartBody>
            </Col>
          </Row>
        </div>
        </MDBCard>
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
