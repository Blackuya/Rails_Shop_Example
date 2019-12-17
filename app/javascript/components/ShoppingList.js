import React from "react"
import PropTypes from "prop-types"

/*
const content = ((typeof this.props.products === 'undefined')?
  <div>True</div>
 : <div>False</div>);
*/

class ShoppingList extends React.Component {

constructor(props){
  super(props);
  this.state = {
    //order: null
  }

}


/*

*/


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

  render() {
    const addProduct = (product) =>{
      var exists = false;
      if(this.props.order.products !== null){
        this.props.order.products.forEach(function(e){
          if(e.name === product.name){
            e.quantity = parseInt(e.quantity) + 1;
            exists = true;
          }
        });
        if(!exists){
          this.props.order.products.push(product);
        }
      }
      this.setState({ state: this.state });
      console.log(this.props.order);
    };

    const content = ((typeof this.props.order.products !== 'undefined')?
    <table>
    <tbody>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
    {this.props.order.products.map((product) =>
    <tr key={product.name}>
      <td>{product.name}</td>
      <td>${product.price}</td>
      <td>{product.quantity}</td>
    </tr>
  )}
  <tr>
    <td colSpan="3">Total: ${ this.total(this.props.order.products)}</td>
  </tr>
  </tbody>
  </table>
     : <div>False</div>);
    //console.log(this.props.products);
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
  order: PropTypes.object
};

export default ShoppingList
