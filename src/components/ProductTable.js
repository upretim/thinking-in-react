import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';
const productTable = (props)=>{
    const rows = [];
    let lastCategory = null;
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    props.products.forEach((product) => {
        /*returns if filter is on and product is not found*/
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        /*returns if check box is checked and product is not found*/
        if (inStockOnly && !product.stocked) {
          return;
        }
        /* pushes a new category row in the tr if category changed from last category */
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
        lastCategory = product.category;
      });
    return(
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>    
    )
}
export default productTable;