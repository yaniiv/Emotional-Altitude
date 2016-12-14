import React from 'react';
import NavItem from './NavItems.jsx'


const Nav = (props) => {
  let list_items = [];

  // Build list of Nav Items 
  props.items.forEach((item,i) => {
    list_items.push(
      <NavItem 
        key={i} 
        index={item.index} 
        label={item.label}
        isSelected={item.isSelected}
        handler={props.handler}
      />
    );
  });

  return (
    <ul className='nav'>
      {list_items}
    </ul>
  );
}

export default Nav