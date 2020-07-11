import React from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const layout = props => ( 
    <Aux>
    <Toolbar />
    <Sidedrawer />
    <main className = {classes.Content}>
       {props.children}
    </main>
    </Aux>
);

export default layout;