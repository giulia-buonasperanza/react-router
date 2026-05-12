
/*{
  "id": 0,
  "title": "string",
  "price": 0.1,
  "description": "string",
  "category": "string",
  "image": "http://example.com"
}*/

function cardProdotti({ prodotto }) {
    return (
        <div className="card card-prodotto shadow-sm rounded-4 h-100">
            <div>
                <img src={prodotto.image} className="card-img-top" alt={prodotto.title} />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{prodotto.title}</h5>
                <p className="card-text">{prodotto.description}</p>
                <p className="card-text">{prodotto.category}</p>
                <p className="card-price"><strong>Prezzo:</strong>{prodotto.price.toFixed(2)}<strong>€</strong></p>
            </div>
        </div>
    )
}
export default cardProdotti