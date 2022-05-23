import React, { useEffect, useState } from 'react'
import { getTradeOffers } from '../api/api';
import { Button } from "react-bootstrap";
import { TradeOfferUpdate } from '../api/api';


const Offers = ({ setTradeOffers, userId, tradeOffers, products }) => {

    const [status, setStatus] = useState("")

    useEffect(() => {
        getTradeOffers(setTradeOffers);
    }, [])

    const accept = (id, status) => {

        TradeOfferUpdate(id, status)

    }

    return (
        <div>
            < table className="table mt-5 text-center">
                <tbody>
                    <th>Status</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Details</th>
                    <th>Image</th>

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
                                            {prods.status}
                                            {prods.id}
                                        </div>
                                    </td>
                                    <td value={prods.senderProdName}>{prods.senderProdName}</td>
                                    <td>{prods.senderProdPrice}</td>
                                    <td>{prods.senderProdDetails}</td>
                                    <img src={prods.senderProdImage} style={{ height: 200, width: 200 }}></img>-

                                </tr>

                            ))}
                </tbody>
            </table >

        </div>

    )
}

export default Offers
