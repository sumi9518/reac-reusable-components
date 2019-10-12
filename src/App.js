import React from 'react';
import Alert from "./ui-component/Alert";

class App extends React.Component {
    constructor(){
        super();
        this.state ={
            showAlert: false
        }
    }
    render() {
        return (
            <div className="container">
                <Alert
                    type="danger"
                    message="Its danger Alert"
                    show = {this.state.showAlert}
                />

                <Alert
                    type="success"
                    message="Its success Alert"

                />

                <Alert type="warning" >
                    <h2 className="alert alert-header"> Alert Header without msg </h2>
                </Alert>

                <Alert type="primary" message="Its primary Alert with header in children"
                >
                    <h2 className="alert alert-header"> Alert Header </h2>
                </Alert>
            </div>
        );
    };
}

export default App;
