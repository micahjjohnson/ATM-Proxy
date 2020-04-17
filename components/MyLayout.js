import Header from './Header';
import React from "react";

const layoutStyle = {
    height: '100vh',
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const outerContainer = {
    position: 'relative',
    margin: 'auto',
    width: '85%',
    border: '1px solid red'
};

const Layout = props => (
    <div style={outerContainer}>

        {/*<SideNav/>*/}

        <div style={layoutStyle}>
            {props.children}
        </div>

        <Header/>
    </div>
);

export default Layout;

