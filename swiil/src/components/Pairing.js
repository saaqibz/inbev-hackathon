/**
 * Created by saz on 3/26/17.
 */
import React, { Component } from 'react';

import './Pairing.css';

import Header from './Header';
import card1 from '../assets/card/card-burgercrabe-alexanderkeithsred.png';
import card2 from '../assets/card/card-burgercrabe-labatt50.png';
import card3 from '../assets/card/card-calamari-stella.png';


// class MenuContainer extends Component {
//     getPairingCard() {
//         return [
//             'Entrees',
//             'Pizza',
//             'Salades',
//             'Plates',
//             'Frites',
//         ];
//     }

//     getEntrees() {
//         return [
//             'Prosciutto & Reggiano',
//             'Chorizo con Papas',
//             'Papas Fritas',
//             'Cabo',
//             'Bodillos',
//             'Calamari au Babeurre',
//             'Gambas al Ajillo',
//             'Pulpo a la Parrilla',
//             'Ceviche Peruano',
//             'Nachos Vegetales / Pollo / Chorizo',
//             'Quesadilla de Vegetales / Pollo / Chor',
//             'Antipasto (pour deux)',
//         ];
//     }

//     render() {
//         let categories = this.getCategories();
//         let entrees = this.getEntrees();
//         let selectedCategory = categories[0];

//         return <PairingView
//             categories={categories}
//             entrees={entrees}
//             selectedCategory={selectedCategory}
//         />;
//     }
// }


// const PairingView = ({ categories, entrees, selectedCategory }) => {
//     let categoryList = categories.map((cat) => {
//         return (selectedCategory === cat) ?
//             <li className="selected">{cat}</li> :
//             <li >{cat}</li>;
//     });

//     let entreeList = entrees.map((cat) => {
//         return <li>{cat}</li>;
//     });

//     return (
//         <div>
//             <Header />
//             <div>
//                 <ul id="menu-categories">
//                     {categoryList}
//                 </ul>
//                 <div id="entrees" class="menu-items">
//                     <ul>
//                         {entreeList}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// };

const getItemFromQueryParam = (param) => {
    let n = param.split("?item=")[1];
    let r = [card1, card2, card3];
    return r[n-1];
};


const PairingView = ({location}) => (

    <div>
        <Header />
        <div className="cards" style={{textAlign: 'center'}}>
            <img src={getItemFromQueryParam(location.search)} />
        </div>
        <div className="radio-scroll">
            <div className="radio"></div>

            <div className="radio active"></div>


            <div className="radio"></div>


        </div>
    </div>
);


export default PairingView;