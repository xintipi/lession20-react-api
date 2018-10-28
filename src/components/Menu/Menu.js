import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm̉',
        to: '/product-list',
        exact: false
    }
];

const MenuLink = ({label, to, activeWhenOnlyExact}) => {
    return (
        <Route
            path={to}
            exact={activeWhenOnlyExact}
            children={({match}) => {
                let active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>{label}</Link>
                    </li>
                )
            }}
        />
    )
};

class Menu extends Component {
    showMenu = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeWhenOnlyExact={menu.exact}
                    />
                )
            });
        }
        return result;
    };

    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">Call API</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }
}

export default Menu;
