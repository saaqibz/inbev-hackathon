/**
 * Created by saz on 3/26/17.
 */
import axios from 'axios';

import products from '../json/products.json';

const categories = [
    'Le Petit Déjeuner',
    'Le Brunch',
    'Le Déjeuner',
    'Le Dîner',
    'Happy Hour'
];

class Api {

    getCategories() {
        return new Promise((resolve) => resolve(categories));
    }

    getMenu() {
        const url = `http://localhost:3000`;
        return axios.get(url)
            .then(() => {
                return products;
            });
            // .then((resp) => {
            //     this.state.setState({products: resp});
            // })
    }
}

export default Api;
