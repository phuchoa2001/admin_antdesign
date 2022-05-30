import React from 'react';

import { useHistory } from 'react-router-dom';

import Styles from './index.module.css';
import Logo from '../../../imgs/logo.png';
import MenuSideBar from './Menusidebar';
function SideBar(props) {
    const history = useHistory();
    return (
        <div className={Styles.Sidebar}>
            <div className={Styles.wrapper}>
                <div className={Styles.logo} onClick={() => history.push("/")}>
                    <img src={Logo} className={Styles.img} alt={"logo"} />
                    <p className={Styles.text}>Sh<span className={Styles.span}>o</span>ps</p>
                </div>
                <MenuSideBar />
            </div>
        </div>
    );
}

export default SideBar;