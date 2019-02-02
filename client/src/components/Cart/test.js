    //Error Handling for incorrect values:
    let quantityInputElements = document.querySelectorAll('[data-quantity-id]');
    console.log("Length"+quantityInputElements.length);
    // let quantityInputValue;
    //values are good?
    let isQuantityAvailable = true;
    let shouldCartBeSubmitted = true;
      for(let i = 0; i<  quantityInputElements.length; i++){
        let maxValue = parseInt(quantityInputElements[i].getAttribute('max'));
        let minValue = parseInt(quantityInputElements[i].getAttribute('min'));
        let quantityId = quantityInputElements[i].getAttribute('data-quantity-id');
        let delBtnElem = document.getElementById('delete-btn-'+quantityId);
        let quantityInputValue = parseInt(quantityInputElements[i].value);

        isQuantityAvailable = minValue <= quantityInputValue && maxValue >= quantityInputValue;
        console.log("QUANTITY = ", isQuantityAvailable);
        console.log("minValue = ", minValue, "QUANTITY = ", quantityInputValue, "maxValue = ", maxValue, "Available = ", isQuantityAvailable);

        //if quantity not available stop loop
        if (!isQuantityAvailable){
          shouldCartBeSubmitted = false;
          delBtnElem.disabled = true;
        }
        else{
          delBtnElem.disabled = false;
        }
      }//for

      if(shouldCartBeSubmitted)
      {
        document.getElementById("checkout-btn").disabled = false;
        //console.log("Completed Order", jsonOrder);
        this.sendOrder(jsonOrder);

        //reset the cart
        this.cartItems = [];
        this.orders =[];
        this.setState({ cartItems: [] });
      }
      else
      {
        // document.getElementById("checkout-btn").disabled = true;
