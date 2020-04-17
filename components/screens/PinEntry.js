import React from 'react';
import Keypad from "../Keypad";
import textBoxStyle from "../../assets/css/site";

let pinInput = 0;

class PinEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinInput: '',
        }
    }

    setCount = count => {
        if (this.state.pinInput.length !== 4) {
            this.setState({pinInput: this.state.pinInput.concat(count)});
        }
    };

    render() {
        return (
            <div>
                <form>
                    <label>
                        Enter your pin <br/>
                    </label>
                    <input type="text" name="name" maxLength="4" style={textBoxStyle} defaultValue={this.state.pinInput}/>
                </form>
                <Keypad appendToInput={count => this.setCount(count)}/>
            </div>
        );
    }
}

export default PinEntry;
