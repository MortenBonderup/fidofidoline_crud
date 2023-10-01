import { useNavigate } from "react-router-dom"

export default function TidsbestillingsKort({bestilling}) {

    const navigate = useNavigate();

    function opdaterKlik() {
        navigate(`bestilling/${bestilling.id}`)
    }

    function sletKlik() {
        navigate(`/sletbestilling/${bestilling.id}`);
    }

    return (
        <section style={{ display: "flex", justifyContent: "space-around", marginTop: "25px", border: "1px solid black", height: "70px", alignItems: "center" }}>
            <div style={{ border: "1px solid black", width: "100px", textAlign: "center", height: "40px", paddingTop: "15px" }}>{bestilling.hundenavn.toUpperCase()}</div>
            <div>{bestilling.produkt}</div>
            <div>{bestilling.dato}</div>
            <div>{bestilling.tid}</div>

            <div style={{ display: "flex", flexFlow: "column", gap: "10px" }}>
                <button type="button" onClick={opdaterKlik}>Opdater</button>
                <button type="button" onClick={sletKlik}>Slet</button>
            </div>
        </section>
    )

}

