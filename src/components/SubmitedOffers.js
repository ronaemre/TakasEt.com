import React, { useEffect } from 'react'
import { getTradeOffers } from '../api/api';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';

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
                    <th>Contact Number</th>
                    {
                        tradeOffers.filter(tradeOffer => tradeOffer.senderUserId === userId)
                            .map(prods => (
                                <tr key={prods.id}>
                                    <td value={prods.productName}>{prods.productName}</td>
                                    <td>{prods.productPrice}</td>
                                    <td>{prods.productDetails}</td>
                                    <td><img src={prods.productImage} style={{ height: 180, width: 200 }} /></td>
                                    <td>{prods.status == "true" ? < ThumbUpIcon sx={{ fontSize: 80 }} style={{ fill: '#0ba334' }} /> : <ThumbDownAltIcon sx={{ fontSize: 80 }} style={{ fill: '#b82e16' }} />}</td>
                                    <td>{prods.status == "true" ? prods.userId : <PhonelinkLockIcon sx={{ fontSize: 80 }} style={{ fill: '#b82e16' }} />}</td>

                                </tr>

                            ))}
                </tbody>
            </table >

        </div>

    )
}

export default SubmitedOffers
