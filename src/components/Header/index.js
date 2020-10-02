import React from 'react';

// Header Component
//   text value via props
class Header extends React.Component {
    render() {
        return (
            <header>
                <h2>{this.props.text}</h2>
            </header>        
        );
    }    
}

export default Header;
