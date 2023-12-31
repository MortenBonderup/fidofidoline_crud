import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Bestillingsformular({gemBestilling, bestilling}) {
    const [produkt, setProdukt] = useState("Vælg et produkt");
    const [dato, setDato] = useState("2023-01-11");
    const [tid, setTid] = useState("00:00"); 
    const [hundenavn, setHundenavn] = useState("");
    const [hunderace, setHunderace] = useState("");
    const [kundenavn, setKundenavn] = useState("");
    const [kundeadresse, setKundeadresse] = useState("");
    const [postnr, setPostnr] = useState("");
    const [bynavn, setBynavn] = useState("");
    const [email, setEmail] = useState("");
    const [mobil, setMobil] = useState("");
    const [notifikation, setNotifikation] = useState(false);
    const [fejlmeddelelse, setFejlmeddelelse] = useState("");
    const [sidetitel, setSidetitel] = useState("Opret tid til behandling");

    const navigate = useNavigate();

    useEffect(() => {
        if (bestilling) {
            setSidetitel("Opdater tidsbestilling");
            setProdukt(bestilling.produkt);
            setDato(bestilling.dato);
            setTid(bestilling.tid);
            setHundenavn(bestilling.hundenavn);
            setHunderace(bestilling.hunderace);
            setKundenavn(bestilling.kundenavn);
            setKundeadresse(bestilling.kundeadresse);
            setPostnr(bestilling.postnr);
            setBynavn(bestilling.bynavn);
            setEmail(bestilling.email);
            setMobil(bestilling.mobil);
            setNotifikation(bestilling.notifikation);
        } 
    }, [bestilling]);

    async function formsend(e) {
        e.preventDefault();

        if (produkt !== "Vælg et produkt") {
        const formularData = {
            produkt: produkt,
            dato: dato,
            tid: tid,
            hundenavn: hundenavn,
            hunderace: hunderace,
            kundenavn: kundenavn,
            kundeadresse: kundeadresse,
            postnr: postnr,
            bynavn: bynavn,
            email: email,
            mobil: mobil,
            notifikation: notifikation
        }

        gemBestilling(formularData);
    } else {
        setFejlmeddelelse("Vælg et produkt")
    }
    }

    function fortrydKlik() {
        navigate("/");
    }

    return (
        <>
            <h2>{sidetitel}</h2>

            <form onSubmit={formsend}>
                <div style={{ display: "flex", gap: "20px", flexDirection: "column", maxWidth: "40%", float: "left" }}>
                <div style={{color: "red"}}>{fejlmeddelelse}</div>
                    <label style={{ marginTop: "-20px"}}>Behandling</label>
                    <select name="produkt" value={produkt} onChange={e => setProdukt(e.target.value)} style={{ marginTop: "-15px", width: "210px" }} >
                        <option>Vælg et produkt</option>
                        <option>Klip af negle</option>
                        <option>Klipning</option>
                        <option>Vask og føntørring</option>
                        <option>Ørepleje</option>
                        <option>Trimning</option>
                    </select>
                    
                    <div>
                        <label style={{ display: "block" }}>Dato og tid</label><input type="date" name="dato" value={dato} onChange={e => setDato(e.target.value)} required/>&nbsp;<input type="time" value={tid} onChange={e => setTid(e.target.value)} name="tid" required />
                    </div>

                    <div>
                        <label style={{ display: "block" }}>Hunderace</label><input type="text" name="hunderace" value={hunderace} onChange={e => setHunderace(e.target.value)} style={{ width: "200px" }} required />
                    </div>

                    <div>
                        <label style={{ display: "block" }}>Hundens navn</label><input type="text" value={hundenavn} onChange={e => setHundenavn(e.target.value)} style={{ width: "200px" }} name="hundenavn" required />
                    </div>

                </div> {/* Første kolonne slut */}

                <div style={{ display: "flex", gap: "20px", flexDirection: "column", maxWidth: "40%", float: "left", marginLeft: "70px" }}>
                    <div>
                        <label style={{ display: "block" }}>Dit navn</label><input type="text" name="kundenavn" value={kundenavn} onChange={e => setKundenavn(e.target.value)} style={{ width: "300px" }} required/>
                    </div>

                    <div>
                        <label style={{ display: "block" }}>Adresse</label><input type="text" name="kundeadresse" value={kundeadresse} onChange={e => setKundeadresse(e.target.value)} style={{ width: "300px" }}  required/>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label>Postnummer</label>
                            <input type="text" name="postnr" value={postnr} onChange={e => setPostnr(e.target.value)} size="4" maxLength="4" required/>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label>By</label>
                            <input type="text" name="bynavn" value={bynavn} onChange={e => setBynavn(e.target.value)} style={{ width: "187px" }} required/>
                        </div>
                    </div>

                    <div>
                        <label style={{ display: "block" }}>Din email</label><input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "300px" }} required/>
                    </div>

                    <div>
                        <label style={{ display: "block" }}>Dit mobilnummer</label><input type="text" name="mobil" value={mobil} onChange={e => setMobil(e.target.value)} />
                        <input type="checkbox" name="notifikation" checked={notifikation} style={{ marginLeft: "10px" }} onChange={e => setNotifikation(e.target.checked)} />SMS notifikation
                    </div>

                    <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                        <button type="button" onClick={fortrydKlik}>Fortryd</button>
                        <button type="submit">Gem tidsbestilling</button>
                    </div>
                </div> {/* Anden kolonne slut */}
            </form>
        </>
    )
}

