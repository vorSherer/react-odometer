import React from 'react';

// Footer Component
//   trademark value via props
class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h4>{this.props.trademark}</h4>
            </footer>            
        );
    }  
}  
    
export default Footer;
