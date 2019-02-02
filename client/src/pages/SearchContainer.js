import React, { Component } from "react";
import {UserConsumer} from "../providers";
import { Col, Row, Container } from "../components/Grid";
import { InvTblHdr} from "../components/InvTbl";
import API from "../utils/API";
import CatSearchForm from "../components/CatSearchForm";
import {CartHdr} from "../components/Cart";
import readCookie from "../utils/RCAPI";

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

    //Reference to UserId
    this.cookieUserId = '';
  }
  state = {
    //contains a list of items from the api, one render behind
    // products: [],

    //keeps track of all items in the cart
    cartItems: [],

    //the created ordered id;
    orderId: '',
    // product: {},
    category: "",
    organization: ""
  };
  componentDidMount() {
    const updateorg = readCookie("org");
    this.setState({organization: updateorg});
    this.orgSearch(updateorg);
    this.viewProps(this.callback);
    this.cookieUserId = readCookie("_uid");
    // this.loadBooks();
    // console.log("My ID = "+this.props.value.id);
  }
  /*************************************************/
  //API CALLS TO LOAD INVENTORY
  orgSearch = (organization) =>{
    if (organization){
      // event.preventDefault();
      const baseURL = "/products";
      this.loadByOrganization(baseURL, this.callback);
    }//if
  };
  loadByOrganization = (baseURL, cb) => {
    API.getOrganization(baseURL)
      .then(res => {
        //callback to store state variables
        cb(res);//01122019:SaveAndDisplay the Data:
        // history.push({
        //   pathname: '/search',
        //   state: {products: res.data}
        // });
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
    //console.log("Res = "+JSON.stringify(res));
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
    let stockQuantityAvailable = document.getElementById('prod-stock-quantity-'+productIdClicked).innerText;

    //Error Handling: If Item clicked don't enter it again
     let addButton = document.getElementById(productIdClicked);
      addButton.disabled = true;
      //console.log(quantityInputValue);

    //quantity
    let cartItem =
    {
      id: productIdClicked,
      name: productNameClicked,
      stockQuantity: stockQuantityAvailable
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
    let filteredCart = curCart.filter(eachItem => eachItem.id !== cartItemToDel);

    //Errorhandling if item deleted then enable the add to cart button:
    // let productIdClicked = event.target.getAttribute('data-product-id');
    let addButton = document.getElementById(cartItemToDel );
    addButton.disabled = false;

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
    //Add the User ID here.
    let completedOrder = this.orders.map(order =>{
      var productId = order.id;
      //console.log("Product ID = ", productId);
      if(document.getElementById("quantity-"+productId)){
        var  productQty= document.getElementById("quantity-"+productId).value;
        //console.log("Quantity for ID-"+productId+" = "+productQty);
        // return ({...order, quantity: productQty, userId:"5c5320138dc02066d00e5c3f"});
        // console.log("*****THE USER ID = "+this.props.currentId);
        return ({...order, quantity: productQty, userId: this.props.currentId});
        // return ({...order, quantity: productQty, userId: "5c547a48b136c68cecd954da"});
      }
      return ({...order, productQuantity: productQty});
    });//map
    let jsonOrder = {
      // id: this.props.currentId,
      data: {...completedOrder}
    };

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
        let orderId = res.data;//01122019:SaveAndDisplay the Data:
        // console.log("SearchContainer: Order Id = "+orderId);
        this.setState({ orderId: orderId });
        this.retrieveOrder(baseURL, this.state.orderId);
        // history.push('/confirmation');
        // this.props.history.push({
        //   pathname: '/confirmation',
        //   state: {products: res.data}
        // });
      })
      .catch(err => console.log(err));
  };

  retrieveOrder = (baseURL, orderId) => {
    API.getOrder(baseURL, orderId)
      .then(res => {
        // console.log("SearchContainer: completeOrder = "+JSON.stringify(res));
        // this.props.history.push({
          this.props.history.push({
          pathname: '/confirmation',
          state: {orders: res.data}
          // state: {test: "Tony"}
        });
      });

  }
  //END ORDER SUBMISSION
  /**********************************************************/

  viewProps = (cb) => {
    // console.log("Data = " + JSON.stringify(this.props.location.state));
    // this.setState({products: this.props.location.state.products});
    cb();
  }


  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <h1>I AM THE SEARCH PAGE</h1>
          <br/>
          <h3>UserId: {this.cookieUserId}</h3>
          <h3>Organization: {this.state.organization}</h3>
        <h5>Search by Category</h5>
        <CatSearchForm catSearchEvent={this.handleCatSearch}/>
        {/* <h1>Length: {this.props.location.state.products[0]._id}</h1> */}
        <div className="top-margin">
        <Row>
            <Col size="md-7">
            {/* <h1>{this.props.location.state.products.length}</h1> */}
              {!this.isCatBtnClicked && this.products.length ? (
                <InvTblHdr products = {this.products} addCartItems = {this.addCartItems}></InvTblHdr>
              ) : (
                !this.isCatBtnClicked && <h3> </h3>
              )}
                {this.isCatBtnClicked && this.products && this.products.length ? (
                <InvTblHdr products = {this.products} addCartItems = {this.addCartItems}></InvTblHdr>
              ) : (
                this.isCatBtnClicked && !this.products.length && <h3>No Results to Display</h3>
              )}
            </Col>
            <Col size="md-4">
             <CartHdr cartItems = {this.state.cartItems} delCartItems = {this.delCartItems} submitOrder= {this.submitOrder}>
             </CartHdr>
            </Col>
          </Row>
        </div>
        </Container>
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
        // currentOrder = {location}
      />
    )}
  </UserConsumer>
)
// export default SearchUpdate;
// export default withRouter(SearchContainer);
export default SearchUpdate;
