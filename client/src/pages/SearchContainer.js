import React, { Component } from "react";
import { UserConsumer } from "../providers";
import { Col, Row } from "../components/Grid";
import { InventoryTableBody } from "../components/InventoryTableBody";
import { CartModal } from "../components/CartModal";
import API from "../utils/API";
import Touchable from 'rc-touchable';
import readCookie from "../utils/RCAPI";
import CategorySearchList from "../components/CategorySearchList";
import { MDBCard, MDBIcon } from "mdbreact";
import history from "../history";
import "../style.css";

/*************************************************************************
 * Reads the parameter of the URL each time the search page is mounted
 * (called) to display inventory.  However, the push to the SearchContainer
 * is done in App.js.  Each time a push occurs the page is mounted again.
 * All organization information is grabbed directly from the url and stored
 * as an organization state variable.  The search page is responsible for
 * setting the state of the categories.
 * ************************************************************************/
class SearchContainer extends Component {
  constructor() {
    super();
    this.isCatBtnClicked = false;

    //Array of products returned from the API
    this.products = [];

    //Array of orders to submit
    this.orders = [];

    //Array that is assembled from the inventory table, must be reset when items are deleted from shopping cart
    this.cartItems = [];

    this.urlOrganization = '';
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

    sideModal: false,

    _id: ''
  };

  componentWillMount() {
    /************************************************************
     * Determine the correct organization: Pull the organization
     * directly from the URL(/search/Georgia_BioEd)
    /************************************************************/
    let url = window.location.pathname;
    let urlArr = url.split('/');
    this.urlOrganization = urlArr[urlArr.length - 1].split('_').join(' ');
    this.setState({ organization: this.urlOrganization });
    this.orgSearch(this.urlOrganization);
    /**************************************************************/
    const cookieUserId = readCookie("_uid");
    this.setState({ _id: cookieUserId });
    //Load Category Values
    this.getDDLCategoryValues(this.urlOrganization, this.loadDDLCategoryValues);
  }

  //Error Handing: Each time the state is updated, if the user is logged
  //in check if there is anything in his cart.  If not disable the submit
  //button
  //Open Cart
  toggleCart = () => {
    this.setState({
      sideModal: !this.state.sideModal
    });
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
    this.setState({ ddlCategories: res.data });
    const ddlCatListElem = document.getElementById('ddlCatList');

    for (let category in this.state.ddlCategories) {
      ddlCatListElem.add(new Option(this.state.ddlCategories[category]));
    };
  };
  /*******************************
   **API CALLS TO LOAD INVENTORY
   *******************************/
  orgSearch = (organization) => {
    if (organization) {
      const baseURL = "/products";
      this.loadInventoryByOrganization(
        baseURL,
        organization,
        this.setOrgProductsState
      );
    }//if
  };

  //Initialize the product state variables with the
  //results of the Inventory by Organization search results
  loadInventoryByOrganization = (baseURL, organization, cb) => {
    API.getInventoryByOrganization(baseURL, organization)
      .then(res => {
        this.cartItems = [];
        this.setState({ cartItems: [] });
        //callback to store state variables
        cb(res);
      })
      .catch(err => console.log(err));
  };

  handleCatSearch = event => {
    this.isCatBtnClicked = true;
    const ddlCatElem = document.getElementById("ddlCatList");
    const category = ddlCatElem.options[ddlCatElem.selectedIndex].text;
    this.setState({ category: category });
    if (category && category !== "All") {
      event.preventDefault();
      const baseURL = "/products";
      const formattedCategory = '/' + category;
      /**************************************
       * Get Product Inventory by Category
       * ***********************************/
      this.loadInventoryByCategory(
        baseURL,
        formattedCategory,
        this.setCatProductsState
      );
    }
    else if (category) {
      this.loadInventoryByOrganization("/products", this.state.organization,
        this.setCatProductsState);
    }
  };

  //Initialize the product state variables with the
  //results of the Inventory by Category search results
  loadInventoryByCategory = (baseURL, category, cb) => {
    API.getInventoryByCategory(baseURL, category, this.state.organization)
      .then(res => {
        //callback to store state variables
        cb(res);
      })
      .catch(err => console.log(err));
  };

  setOrgProductsState = (res) => {
    if (res) {
      this.products = res.data;
      this.setState({ products: res.data.items });
    }
  };

  setCatProductsState = (res) => {
    if (res) {
      this.products = res.data;
      this.setState({ products: res.data.items });
    }//if
    // Error Handling: Each time the category changes if an item
    // is in the cart disable its add button
    this.disableCartItemsAddBtn();
  };

  /*************************
   * BEGINNING CART ASSEMBLY
   *************************/
  //Load Cart Items:
  addCartItems = (event) => {
    event.preventDefault();
    this.setState({
      sideModal: false
    })
    const addButton = document.getElementById(event.target.id);
    addButton.disabled = true;

    API.getItem(event.target.id)
      .then(res => {
        //callback to store state variables
        const cartItem =
        {
          _id: res.data._id,
          product: res.data.productName,
          description: res.data.description,
          uom: res.data.uom,
          stockQuantity: res.data.stockQuantity,
          productQuantity: 1
        };
        this.cartItems.push(cartItem);
        this.setState({ cartItems: this.cartItems });
      })
      .catch(err => console.log(err));
    this.toggleCart();
  }

  //ERROR HANDLING: If A Product is not avaialbe disable the add button;
  delCartItems = (event) => {
    event.preventDefault();
    let cartItemToDel = event.target.id;
    let curCart = this.cartItems;
    let filteredCart = curCart.filter(eachItem => eachItem._id !== cartItemToDel);

    //Error Handling: If item deleted from cart then enable the add to cart button:
    let addButton = document.getElementById(cartItemToDel);

    //ErrorHandling: Disable the addButton only when it is on the page.
    if (addButton) {
      addButton.disabled = false;
    }

    //Set cart Items array
    this.setState({ cartItems: filteredCart });

    //Set cartItems, minus any that have been deleted
    this.cartItems = []
    this.cartItems = filteredCart;
  };

  /******************************************************************
   **Submit Completed Order:
   ******************************************************************/
  submitOrder = (event) => {
    event.preventDefault();
    let completedOrder = {
      _id: this.state._id,
      data: this.cartItems
    };
    this.sendOrder(completedOrder);
    //Reset the cart after order submitted
    this.orders = [];
  }//function

  sendOrder = (order) => {
    if (order) {
      const baseURL = "/order";
      this.loadOrder(baseURL, order, this.displayOrder);
    }//if
  };

  loadOrder = (baseURL, order, displayOrder) => {
    API.postOrder(baseURL, order)
      .then(res => {
        /*********************/
        //API CALL
        /*********************/
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
          return (
            {
              userName: res.data[0].user.userName,
              orderId: res.data[0]._id,
              _id: product.product._id,
              organization: product.product.organization,
              productName: product.product.productName,
              currentStockQuantity: product.product.stockQuantity,
              orderQuantity: product.productQuantity,
              newStockQuantity: this.addNewStockQuantity(product.product.stockQuantity, product.productQuantity)
            }
          );
        })//map
        this.cartItems = [];
        this.setState({ cartItems: [] });
        // Push the order to the confirmation page
        history.push({
          pathname: '/confirmation/' + order[0].orderId,
          state: { order: order }
        });
      });
  }

  addNewStockQuantity = (currentStockQuantity, orderQuantity) => {
    let newStockQuantity = parseInt(currentStockQuantity) - orderQuantity;
    return newStockQuantity;
  }
  updateItem = (id, quantity) => {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i]._id === id) {
        this.cartItems[i].productQuantity = quantity;
      }
    }
  }
  /***************************
  * Beginning of Error Block
  ****************************/
  //Disables the add button for items already in the cart
  disableCartItemsAddBtn = () => {
    for (let i = 0; i < this.cartItems.length; i++) {
      let addBtnId = this.cartItems[i]._id;
      let addBtnElement = document.getElementById(addBtnId);
      if (addBtnElement) {
        addBtnElement.disabled = true;
      }//if
    }//for
  }
  //Disable the submit button if any delete buttons on
  //the page are disabled
  disableCartSubmitBtn = () => {
    let shouldDisableSubmitBtn = false;
    let deleteBtnElem = document.querySelectorAll("button[data-cart-item-id]");
    for (let i = 0; i < deleteBtnElem.length; i++) {
      let isDisabled = deleteBtnElem[i].disabled;
      if (isDisabled) {
        shouldDisableSubmitBtn = true;
      }
    }//for
    if (shouldDisableSubmitBtn) {
      document.getElementById("checkout-btn").disabled = true;
    }//if
  }

  //Disable the submit button if there is nothing in the cart
  disableSubmitBtn = () => {
    let checkOutBtn = document.getElementById("checkout-btn");
    if (checkOutBtn && this.state.cartItems.length === 0) {
      document.getElementById("checkout-btn").disabled = true;
    }
    else if (checkOutBtn)
      document.getElementById("checkout-btn").disabled = false;
  }

  //ERROR HANDLING: If A Product is not available disable the add button;
  disableAddBtn = (stockQuantity) => {
    if (parseInt(stockQuantity) < 1) {
      return true;
    }
    else
      return false;
  }//disabledAddBtn
  /**********************************************************/
  render() {
    return (
      <React.Fragment>
      <div className="container">
          {this.state.organization?(
          <MDBCard className="main-search my-5">
                {this.props.currentId ?
                       <span>
                         <Touchable onPress={this.toggleCart}>
                            <button
                                    className="link-button text-left"
                                    icon="shopping-cart"
                                    color="info"
                                    size="sm">
                                    <MDBIcon icon="shopping-cart" /> Shopping Cart
                            </button>
                          </Touchable>
                        </span>:("")}
            <br />
            <h3>Organization: {this.state.organization.split('_').join(' ')}</h3>
            <h5>Search by Category</h5>
            <CategorySearchList catSearchEvent={this.handleCatSearch} />
            <div className="top-margin">
              <Row>
                <Col size="md-12">
                  {!this.isCatBtnClicked && this.products.length ? (
                    <InventoryTableBody
                                        currentId={this.props.currentId}
                                        products={this.products}
                                        addCartItems={this.addCartItems}
                                        disableAddBtn={this.disableAddBtn}
                                        toggleCart={this.toggleCart}/>
                  ) : (
                      !this.isCatBtnClicked && <h3> </h3>
                    )}
                  {this.isCatBtnClicked && this.products && this.products.length ? (
                    <InventoryTableBody currentId={this.props.currentId}
                                        products={this.products}
                                        addCartItems={this.addCartItems}
                                        disableAddBtn={this.disableAddBtn}
                                        toggleCart={this.toggleCart}/>
                  ) : (
                      this.isCatBtnClicked && !this.products.length && <h3>No Results to Display</h3>
                    )}
                </Col>
                  <CartModal
                              sideModal={this.state.sideModal}
                              toggleCart={this.toggleCart}
                              updateItem={this.updateItem}
                              cartItems={this.cartItems}
                              currentId={this.props.currentId}
                              delCartItems={this.delCartItems}
                              submitOrder={this.submitOrder}
                    >
                  </CartModal>
              </Row>
            </div>
          </MDBCard>):
          <MDBCard className="main-confirmation text-center my-5 px-5 pb-5">
            <h1>Please select an <a href='/'>organization</a></h1>
          </MDBCard>}
      </div>
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
