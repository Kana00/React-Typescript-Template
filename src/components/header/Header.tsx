import React from 'react';
import './header.scss';

export default class Header extends React.Component<{},{}> {
  render() {
    return (
      <div>
        <h2>React Application</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore quo dicta et rerum error laboriosam enim est consequuntur impedit earum accusamus dolor, quasi magnam consequatur magni ipsam commodi rem?</p>
        <hr className='hr'/>
      </div>
    );
  }
}
