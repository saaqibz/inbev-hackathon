/**
 * Created by saz on 3/26/17.
 */
import React, { Component } from 'react';
import _ from 'lodash';

import './Menu.css';

import Header from './Header';

import Api from './api';

class MenuContainer extends Component {
    constructor() {
        super();
        this.state = {};
        this.Api = new Api();
    }

    componentDidMount() {
        this.Api.getCategories().then((categories) => this.setState({categories}));
        this.Api.getMenu().then((menuItems) => this.setState({menuItems}));
    }

    getCategories(state) {
        return state.categories || [];
    }

    getMenuItems() {
        let menuItems = this.state.menuItems || [];
        return menuItems;
    }

    onChangeCategory(selectedCategory) {
        let menuItems = _.sample(this.state.menuItems || []);
        this.setState({menuItems, selectedCategory});
    }

    render() {
        let categories = this.getCategories(this.state);
        let menuItems = this.getMenuItems();
        let selectedCategory = this.state.selectedCategory || categories[0];

        return <MenuView
            categories={categories}
            menuItems={menuItems}
            selectedCategory={selectedCategory}
        />;
    }
}

const MenuView = ({ categories, menuItems, selectedCategory }) => {
    let categoryList = categories.map((cat) => {
        return (selectedCategory === cat) ?
            <li className="selected" key={cat} onClick={() => this.onChangeCategory(cat)}>{cat}</li> :
            <li key={cat}>{cat}</li>;
    });

    let menuItemsList = menuItems.map((menuItems) => {
        let {product_name, product_id} = menuItems;
        return <li key={product_id}>{product_name}</li>;
    });

    return (
        <div>
            <Header />
            <div>
                <ul id="menu-categories">
                    {categoryList}
                </ul>
                <div id="entrees" className="menu-items">
                    <ul>
                        {menuItemsList}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default MenuContainer;