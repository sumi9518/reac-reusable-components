import React from 'react';
import Alert from "./ui-component/Alert";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showAlert: false
        }
    }

    AlertToggle = () => {
        this.setState({
            showAlert: !this.state.showAlert
        });
    }

    render() {
        return (
            <div className="container">
                <Alert
                    type="danger"
                    message="Its danger Alert"
                    // toggle={this.AlertToggle}
                    show={!this.state.showAlert}
                />


            </div>
        );
    };
}

export default App;
