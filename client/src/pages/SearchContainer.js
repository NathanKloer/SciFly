import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { InvTblHdr} from "../components/InvTbl";
import API from "../utils/API";
import CatSearchForm from "../components/CatSearchForm";
import {CartHdr, CheckOutBtn} from "../components/Cart";
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
    product: {},
    category: ""
  };

  /*************************************************/
  //API CALLS TO LOAD INVENTORY

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
      //Search for all books in Google Books API
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
    // console.log();
    // console.log("API CALL HAS ENDED!");
    // console.log();
    // console.log("Res = "+JSON.stringify(res));
    if(res){
      //this.clearTableDiv('table-contents');
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
    //quantity
    let cartItem =
    {
      id: productIdClicked,
      name: productNameClicked
    };
    this.cartItems.push(cartItem);
    // {this.orders.push(cartItem)};
    /******************** */
    // CART ITEMS
    /******************** */
    //console.log("Cart Items= "+JSON.stringify(this.cartItems));
    this.setState({ cartItems: this.cartItems} );
    console.log()
  }
  //Delete Cart Items
  delCartItems = (event) =>{
    event.preventDefault();
    let cartItemToDel = event.target.getAttribute('data-cart-item-id');
    let curCart = this.state.cartItems;
    let filteredCart = curCart.filter(eachItem => eachItem.id != cartItemToDel);

    //Set cart Items array
    this.setState({ cartItems: filteredCart});

    //set the array that creates initial cart
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
        return ({...order, quantity: productQty});
      }
    });//map
    //console.log("TEST DATA = "+test);
    let jsonOrder = {
      data: {...completedOrder}
    };
    //console.log("Completed Order", jsonOrder);
    this.sendOrder(jsonOrder);

    //reset the cart
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
        //console.log("API CALL HAS STARTED!");
        // callback to store state variables
        displayOrder(res);//01122019:SaveAndDisplay the Data:
        // history.push('/confirmation');
        // this.props.history.push({
        //   pathname: '/confirmation',
        //   state: {products: res.data}
        // });
      })
      .catch(err => console.log(err));
  };

  displayOrder = (data) => {
    //console.log("Order Id = "+JSON.stringify(data));
  }
  //END ORDER SUBMISSION
  /**********************************************************/

  viewProps = (cb) => {
    // console.log("Data = " + JSON.stringify(this.props.location.state));
    this.setState({products: this.props.location.state});
    cb();
  }

  componentDidMount() {
    // this.loadBooks();
    this.viewProps(this.callback);
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <h1>I AM THE SEARCH PAGE</h1>
          <br/>
        <h5>Search by Category</h5>
        <CatSearchForm catSearchEvent={this.handleCatSearch}/>
          <Row>
            <Col size="md-7">
              {!this.isCatBtnClicked && this.props.location.state.products.length ? (
                <InvTblHdr products = {this.props.location.state.products} addCartItems = {this.addCartItems}></InvTblHdr>
              ) : (
                !this.isCatBtnClicked && <h3></h3>
              )}
              {/* {this.products && "Products= " +this.products.length} */}
                {this.isCatBtnClicked && this.products && this.products.length ? (
                <InvTblHdr products = {this.products} addCartItems = {this.addCartItems}></InvTblHdr>
              ) : (
                this.isCatBtnClicked && !this.products.length && <h3>No Results to Display</h3>
              )}
            </Col>
            <Col size="md-4">
             <CartHdr cartItems = {this.state.cartItems} delCartItems = {this.delCartItems} submitOrder= {this.submitOrder}>
              {/* <h5>Invalid user id or password</h5> */}
             </CartHdr>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default SearchContainer;
