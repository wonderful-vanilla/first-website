import React from 'react';
import { useGlobalContext } from '../../contexts/globalContext';
import ProductCard from '../ProductCard/ProductCard';
import S from './BestSellerSection.module.css';

function BestSellerSection() {

    let { bestSellingProducts, themeState } = useGlobalContext();
    return (
        <div className={S.grid} style={themeState} data-aos="zoom-in">
            {
                bestSellingProducts.slice(0, 6).map((prod) => {
                    return <ProductCard data={prod} key={prod._id} />/*creates a set of ProductCard components based on a subset of the bestSellingProducts array.
                     The slice() method is used to extract only the top 6 best-selling products, and the map() method is used to iterate over the subset and render the components.
                     The resulting components can then be displayed on a web page or integrated into a larger React component.*/ 
                })
            }
        </div>
    )
}

export default BestSellerSection