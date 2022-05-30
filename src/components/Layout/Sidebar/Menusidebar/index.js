import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, ShoppingCartOutlined, ShoppingOutlined, TeamOutlined } from '@ant-design/icons';
import clsx from 'clsx';

import Styles from './index.module.css';
function MenuSideBar(props) {
    let location = useLocation();
    const { pathname } = location;
    return (
        <div className={Styles.MenuSideBar}>
            <div className={clsx(Styles.MenuItem, {
                [Styles.active]: pathname === "/"
            })}
            >
                <Link className={Styles.href} to="/">
                    <HomeOutlined className={Styles.icon} />
                    <span className={Styles.ItemText}>Dashboard</span>
                </Link>
            </div>
            <div className={clsx(Styles.MenuItem, {
                [Styles.active]: pathname === "/order"
            })}
            >
                <Link className={Styles.href} to="/order">
                    <ShoppingCartOutlined className={Styles.icon} />
                    <span className={Styles.ItemText}>Order</span>
                </Link>
            </div>
            <div className={clsx(Styles.MenuItem, {
                [Styles.active]: pathname === "/users"
            })}
            >
                <Link className={Styles.href} to="/users">
                    <TeamOutlined className={Styles.icon} />
                    <span className={Styles.ItemText}>Users</span>
                </Link>
            </div>
            <div className={clsx(Styles.MenuItem, {
                [Styles.active]: pathname === "/products"
            })}
            >
                <Link className={Styles.href} to="/products">
                    <ShoppingOutlined className={Styles.icon} />
                    <span className={Styles.ItemText}>products</span>
                </Link>
            </div>
        </div>
    );
}

export default MenuSideBar;