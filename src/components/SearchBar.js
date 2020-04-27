import React from 'react';
const searchBar = (props)=>{

    return(
        <form>
        <input
          type="text"
          placeholder="Search..."
          value={props.filterText}
          onChange={props.onFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={props.inStockOnly}
            onChange={props.onInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
}

export default searchBar;