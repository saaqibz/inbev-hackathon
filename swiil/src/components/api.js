/**
 * Created by saz on 3/26/17.
 */
import axios from 'axios';
import _ from 'lodash';

import products from '../json/products.json';

const categories = [
    'Le Petit Déjeuner',
    'Le Brunch',
    'Le Déjeuner',
    'Le Dîner',
    'Happy Hour',
];

class Api {

    constructor(state) {
        this.state = state;
    }

    getCategories() {
        return new Promise((resolve) => resolve(categories));
    }

    getMenu() {
        const url = `http://www.google.com`;
        axios.get(url)
            .then(() => {
                return resp = products;
            })
            .then((resp) => {

            })
    }
}
