/**
 * Created by saz on 3/26/17.
 */
import React, { Component } from 'react';

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
    }

    getCategories(state) {
        return state.categories || [];
    }

    getEntrees() {
        return [
            'Prosciutto & Reggiano',
            'Chorizo con Papas',
            'Papas Fritas',
            'Cabo',
            'Bodillos',
            'Calamari au Babeurre',
            'Gambas al Ajillo',
            'Pulpo a la Parrilla',
            'Ceviche Peruano',
            'Nachos Vegetales / Pollo / Chorizo',
            'Quesadilla de Vegetales / Pollo / Chor',
            'Antipasto (pour deux)',
        ];
    }

    render() {
        let categories = this.getCategories(this.state);
        let entrees = this.getEntrees();
        let selectedCategory = categories[0];

        return <MenuView
            categories={categories}
            entrees={entrees}
            selectedCategory={selectedCategory}
        />;
    }
}

const MenuView = ({ categories, entrees, selectedCategory }) => {
    let categoryList = categories.map((cat) => {
        return (selectedCategory === cat) ?
            <li className="selected" key={cat}>{cat}</li> :
            <li >{cat}</li>;
    });

    let entreeList = entrees.map((entree) => {
        return <li key={entree}>{entree}</li>;
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
                        {entreeList}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default MenuContainer;