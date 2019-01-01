import React from 'react';


const Header = props => (
  <div style={Head}>
    <h2 style={fontMenu}>{props.title}</h2>
    <h3 style={{ color: '#000000', textAlign: 'center', margin: '2px' }}>{props.age}</h3>
    <h4>{props.WNU}</h4>
    <p>{props.children}</p>
  </div>
);


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
