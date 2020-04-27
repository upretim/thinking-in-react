import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
export {PRODUCTS} from './productList';
// example from https://codepen.io/gaearon/pen/LzWZvb

class FilterableProductTable extends Component {
  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
      ]
    };
  }
  
  handleInStockChange = (event)=>{
    this.setState({
      inStockOnly: event.target.checked
    })
  }
  handleFilterTextChange = (event)=>{
    this.setState({
      filterText: event.target.value
    })
  }

 render(){
  return (
    <div className="App">
          <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
         <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
    </div>
  );
 }
}
export default FilterableProductTable;
