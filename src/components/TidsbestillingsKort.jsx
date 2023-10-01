export default function TidsbestillingsKort(props) {

    return (
        <section style={{ display: "flex", justifyContent: "space-around", marginTop: "25px", border: "1px solid black", height: "70px", alignItems: "center" }}>
            <div style={{ border: "1px solid black", width: "100px", textAlign: "center", height: "40px", paddingTop: "10px" }}>{props.hundenavn}</div>
            <div>{props.behandling}</div>
            <div>{props.dato}</div>
            <div>{props.tid}</div>

            <div style={{ display: "flex", flexFlow: "column", gap: "10px" }}>
                <button type="button">Opdater</button>
                <button type="button">Slet</button>
            </div>
        </section>
    )
    /*
<section style={{ display: "flex", justifyContent: "space-around", marginTop: "25px", border: "1px solid black", height: "70px", alignItems: "center" }}>
            <div style={{ border: "1px solid black", width: "100px", textAlign: "center", height: "40px", paddingTop: "10px" }}>Cleo</div>
            <div>Vask & føntørring</div>
            <div>23-04-2024</div>
            <div>11:45</div>

            <div style={{ display: "flex", flexFlow: "column", gap: "10px" }}>
                <button type="button">Opdater</button>
                <button type="button">Slet</button>
            </div>
        </section>
    */
}

