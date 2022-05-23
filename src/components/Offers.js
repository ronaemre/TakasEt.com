import React, { useEffect, useState } from 'react'
import { getTradeOffers } from '../api/api';
import { Button } from "react-bootstrap";
import { TradeOfferUpdate } from '../api/api';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const Offers = ({ setTradeOffers, userId, tradeOffers, products }) => {

    const [status, setStatus] = useState("")

    useEffect(() => {
        getTradeOffers(setTradeOffers);
    }, [])

    const accept = (id, status) => {
        TradeOfferUpdate(id, status, setTradeOffers)
    }

    return (
        <div>
            < table className="table mt-5 text-center">
                <tbody>
                    <th>Accept/Decline</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Details</th>
                    <th>Image</th>
                    <th>Status</th>

                    {
                        tradeOffers.filter(tradeOffer => tradeOffer.userId === userId)
                            .map(prods => (
                                <tr key={prods.id}>
                                    <td>
                                        <div>
                                            <Button variant="success" onClick={() => accept(prods.id, "true")}  >
                                                Accept
                                            </Button>
                                            <Button variant="danger" onClick={() => accept(prods.id, "false")} >
                                                Decline
                                            </Button>

                                        </div>
                                    </td>
                                    <td value={prods.senderProdName}>{prods.senderProdName}</td>
                                    <td>{prods.senderProdPrice}</td>
                                    <td>{prods.senderProdDetails}</td>
                                    <img src={prods.senderProdImage} style={{ height: 180, width: 200 }}></img>
                                    <td>{prods.status == "true" ? <ThumbUpIcon sx={{ fontSize: 80 }} style={{ fill: '#0ba334' }} /> : <ThumbDownAltIcon sx={{ fontSize: 80 }} style={{ fill: '#b82e16' }} />}</td>

                                </tr>

                            ))}
                </tbody>
            </table >

        </div>

    )
}

export default Offers
