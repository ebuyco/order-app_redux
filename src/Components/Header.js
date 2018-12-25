import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div style={Head}>
        <h2 style={fontMenu}>{this.props.name}</h2>
        <h2 style={{ color: '#000000', textAlign: 'center', margin: '2px' }}>{this.props.age}</h2>
      </div>
    );
  }
}

const Head = {
  backgroundColor: '#009688',
  width: '100%',
  height: '6vh',
  marginBottom: '1.4rem',

};

const fontMenu = {
  color: '#ffffff',
  textAlign: 'center',
  margin: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '3rem',
  marginBlockStart: '0',
  marginBlockEnd: '0',
  marginInlineStart: '0',
  marginInlineEnd: '0'
};


export default Header;
