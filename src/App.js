import React from 'react';
import Alert from "./ui-component/Alert";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showAlert: false
        }
    }

        AlertToggle = () =>{
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
                    toggle = {this.AlertToggle}
                    show = {this.state.showAlert}
                />

                <Alert
                    type="success"
                    message="Its success Alert"
                    toggle = {this.AlertToggle}

                />

                <Alert type="warning"  toggle = {this.AlertToggle}>
                    <h2 className="alert alert-header"> Alert Header without msg </h2>
                </Alert>

                <Alert type="primary" message="Its primary Alert with header in children"   toggle = {this.AlertToggle}

                >
                    <h2 className="alert alert-header"> Alert Header </h2>
                </Alert>
            </div>
        );
    };
}

export default App;
