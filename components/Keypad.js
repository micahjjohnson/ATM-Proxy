import React from 'react';
import keypadNumbers from "../assets/json/keypadNumbers";

const center = {
    margin: 'auto',
    marginTop: '40px',
    width: '50%'
};

const formStyle = {
    display: 'grid',
    gridTemplateRows: '50px 50px 50px 50px',
    gridTemplateColumns: '60px 60px 60px',

};

const buttonStyle = {
    background: '#444',
    border: '1px solid #555',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#AAA'
};

class Keypad extends React.Component {
    render() {
        return (
            <div style={center}>
                <button style={buttonStyle}>Show Keyboard</button>
                <div style={formStyle}>
                    {keypadNumbers.map(number => <button style={buttonStyle}
                                                         onClick={() => this.props.appendToInput(number.value)}>{number.label}</button>)}
                </div>
            </div>
        );
    }
}

export default Keypad;
