import { useEffect, useState } from "react";
import CardProdotti from "./prodottiComponenti/cardProdotti";

const API_URL = "https://fakestoreapi.com/products";


function Prodotti() {
    const [prodotti, setProdotti] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                return response.json();
            })
            .then((prodotto) => {
                setProdotti(prodotto);
            })
            .catch((error) => {
                console.error("Errore nel recupero dei prodotti:", error);
            });
    }, []);

    return (
        <div className='app-container'>
            <div className='container py-5'>
                <h1 className='title text-center mb-5'>I nostri Prodotti</h1>
                <div className="row g-4">
                    {prodotti.map((prodotto) => (
                        <div className="col-md-4" key={prodotto.id}>
                            <CardProdotti prodotto={prodotto} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Prodotti