import React, { Component } from 'react';

const Title = 'Menu';

class Header extends Component {
  render() {
    return (
      <div style={Head}>
        <h2 style={fontMenu}>{Title}</h2>
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
