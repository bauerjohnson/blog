import React, {Component} from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
import sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {showsidedrawer : true}

    sidedrawerhandler = () => {
        this.setState({showsidedrawer : false})
    }

    togglehandler = () => {
        this.setState ((prevState) => {
            return {showsidedrawer : !prevState.showsidedrawer}
        })
    }

render () {
return (
    <Aux>
    <Toolbar />
    <Sidedrawer open = {this.state.showsidedrawer} closed = {this.sidedrawerhandler}/>
    <main className = {classes.Content}>
       {this.props.children}
    </main>
    </Aux>
);
}


}

export default Layout;