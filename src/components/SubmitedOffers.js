import React, { useEffect } from 'react'
import { getTradeOffers } from '../api/api';


const SubmitedOffers = ({ setTradeOffers, userId, tradeOffers }) => {

    useEffect(() => {
        getTradeOffers(setTradeOffers);
    }, [])

    return (
        <div>
            < table className="table mt-5 text-center">
                <tbody>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Details</th>
                    <th>Image</th>
                    <th>Status</th>
                    {
                        tradeOffers.filter(tradeOffer => tradeOffer.senderUserId === userId)
                            .map(prods => (
                                <tr key={prods.id}>
                                    <td value={prods.productName}>{prods.productName}</td>
                                    <td>{prods.productPrice}</td>
                                    <td>{prods.productDetails}</td>
                                    <td><img src={prods.productImage} style={{ height: 100, width: 100 }} /></td>
                                </tr>

                            ))}
                </tbody>
            </table >

        </div>

    )
}

export default SubmitedOffers
