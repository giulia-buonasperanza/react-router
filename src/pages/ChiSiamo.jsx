function ChiSiamo() {
    return (
        <div className="container py-5">

            <div className="text-center mb-5">
                <h1 className="fw-light">Chi Siamo</h1>

                <p className="text-secondary">
                    La bellezza nasce dalla cura di sé.
                </p>
            </div>

            <div className="row align-items-center g-5">

                <div className="col-md-6">
                    <img
                        src="/public/image/teamskincare.png"
                        alt="Team skincare"
                        className="img-fluid rounded-4 shadow-sm"
                    />
                </div>

                <div className="col-md-6">

                    <h2 className="mb-4">La nostra filosofia</h2>

                    <p>
                        Siamo un’azienda specializzata nella cosmetica e nella skincare,
                        nata dalla passione per la cura della pelle e il benessere quotidiano.
                    </p>

                    <p>
                        Crediamo in prodotti semplici, efficaci e delicati,
                        realizzati con ingredienti selezionati e formule pensate
                        per ogni tipo di pelle.
                    </p>

                    <p>
                        Il nostro obiettivo è aiutare ogni persona a sentirsi bene
                        nella propria pelle attraverso una skincare routine
                        naturale, moderna e accessibile.
                    </p>

                </div>

            </div>

            <div className="row text-center mt-5">

                <div className="col-md-4 mb-4">
                    <div className="p-4 shadow-sm rounded-4 h-100">

                        <h3 className="fw-light">Ingredienti Naturali</h3>

                        <p className="text-secondary">
                            Utilizziamo ingredienti delicati e di alta qualità.
                        </p>

                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="p-4 shadow-sm rounded-4 h-100">

                        <h3 className="fw-light">Qualità</h3>

                        <p className="text-secondary">
                            Ogni prodotto viene testato per garantire efficacia e sicurezza.
                        </p>

                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="p-4 shadow-sm rounded-4 h-100">

                        <h3 className="fw-light">Benessere</h3>

                        <p className="text-secondary">
                            Promuoviamo una skincare semplice e rilassante ogni giorno.
                        </p>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default ChiSiamo