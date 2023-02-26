import React from 'react';

import Header from './Header';

class DefaultLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}

export default DefaultLayout;
