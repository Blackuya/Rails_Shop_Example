import React from "react"
import PropTypes from "prop-types"
//import $ from 'jquery';
/*
const content = ((typeof this.state.products === 'undefined')?
  <div>True</div>
 : <div>False</div>);
*/

class ShoppingList extends React.Component {

constructor(props){
  super(props);
  this.state = {
    products: props.products
  }

}


 total(products){
  if(typeof products === 'undefined'){
    return 0;
  }
  var total = 0;
  for (var i = 0; i < products.length; i++){
    total += products[i].price * products[i].quantity;
  }
  return Number(total).toFixed(2);
};

updateList(){
  var valid = this.state.products.filter(function(n){
    return n.quantity > 0;
  });
this.state.products = valid;
};

updateCart(){
  var cart = [];
  this.state.products.forEach(p => {
    //console.log(p);
    cart.push(p);
  } );
  $.ajax({
  url: "/cart",
  type: "Patch",
  beforeSend: function(xhr) {
    xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
  },
  data: {products: cart},
  success: response => {
    console.log("it worked!", response);
  }
});
};

removeProduct(name){
  this.state.products.forEach(function(e){
    if(e.name === name){
      e.quantity = parseInt(e.quantity) - 1;
    }
  });
  this.updateList();
  this.updateCart();
  this.setState({ state: this.state });
};

  render() {
    const addProduct = (product) =>{
      var exists = false;
      if(this.state.products !== null){
        console.log("READ:");
        console.log(this.state.products);
        this.state.products.forEach(function(e){
          if(e.name === product.name){
            e.quantity = parseInt(e.quantity) + 1;
            exists = true;
          }
        });
        if(!exists){
          this.state.products.push(product);
        }
      }
      this.updateCart();
      this.setState({ state: this.state });
    };

    const content = ((this.state.products.length > 0 )?
    <table>
    <tbody>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Edit</th>
    </tr>
    {this.state.products.map((product) =>
    <tr key={product.name}>
      <td>{product.name}</td>
      <td>${product.price}</td>
      <td>{product.quantity}</td>
      <td><button onClick={() => {this.removeProduct(product.name)}}>Remove One</button></td>
    </tr>
  )}
  <tr>
    <td colSpan="3">Total: ${ this.total(this.state.products)}</td>
  </tr>
  </tbody>
  </table>
     : <div>Your cart is empty.</div>);
    //console.log(this.state.products);
    document.querySelectorAll(".product-btn").forEach(btn => {
      if(btn.classList.contains("click-e")) return;
      btn.classList.add('click-e');
      btn.addEventListener("click", event => {
        addProduct(JSON.parse(btn.getAttribute("data-val")));
      });
    });

    return (
      <React.Fragment>
      <div>
        <h3>In Shopping Cart:</h3>
        {content}
      </div>
      </React.Fragment>
    );
  }
}

ShoppingList.propTypes = {
  products: PropTypes.array
};

export default ShoppingList
