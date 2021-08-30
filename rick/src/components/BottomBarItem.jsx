import React, { useState, useContext } from 'react';
import '../styles/BottomBar.scss';
import { observer } from 'mobx-react-lite';
import { bottomBarIcons } from '../utils';

const BottomBar = observer(props => {
    return <div className={"bottombar-item"}>
        <div className="bottombar-item">
            {bottomBarIcons[`${props.page}${props.isCurrent === true ? '-current' : ''}`]}
            <p className={props.isCurrent === true ? 'blue-text-thin' : 'grey-text'}>{props.name}</p>
        </div>
    </div>
})

export default BottomBar;
