import React from 'react'
import S from './Cart.module.css';
import { CiCircleRemove } from 'react-icons/ci';
import { useGlobalContext } from '../../contexts/globalContext';

function CartRow({ data }) {

    let { dispatch } = useGlobalContext();

    return (
        <div className={S.wholeRow}>
            <div className={S.removeItem} onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: data }) }}>
                <CiCircleRemove className={S.icon} />
            </div>
            <div className={S.left}>

                <div style={{ display: 'flex', alignItems: 'center' }} className={S.manage}>

                    <img src={data.images[0]} alt="dssd" width={100} className={S.img} />

                    <h3 className={S.name}>{data.name.slice(0, 9)}...</h3>
                </div>
                <h3 style={{ marginRight: '3rem' }} className={S.price}>₹{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3> /*This is a regular expression that matches any non-word boundary (\B) that is followed by groups of three digits (\d{3}), as long as those groups are not followed by any more digits ((?!\d)). 
                The g flag at the end of the regular expression causes it to match all occurrences in the string. */
            </div>
        </div>
    )
}

export default CartRow