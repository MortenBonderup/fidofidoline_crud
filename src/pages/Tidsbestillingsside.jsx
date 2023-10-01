export default function Tidsbestillingsside() {

    return (
        <>
            <h2>Opret tid til behandling</h2>

            <form>
                <div style={{ display: "flex", gap: "20px", flexDirection: "column", maxWidth: "40%", float: "left" }}>
                    <label>Behandling</label>
                    <select style={{ marginTop: "-15px", width: "190px" }}>
                        <option>Vælg et produkt</option>
                        <option>Neglesklipning</option>
                        <option>Klipning</option>
                        <option>Vask og føntørring</option>
                        <option>Ørepleje</option>
                        <option>Trimning</option>
                    </select>

                    <div>
                        <label style={{ display: "block" }}>Dato og tid</label><input type="date" />&nbsp;<input type="time" />
                    </div>

                    <div>
                        <label style={{ display: "block" }}>Hunderace</label><input type="text" style={{ width: "185px" }} />
                    </div>

                    <div>
                        <label style={{ display: "block" }}>Hundens navn</label><input type="text" style={{ width: "185px" }} />
                    </div>

                </div> {/* Første kolonne slut */}

                <div style={{ display: "flex", gap: "20px", flexDirection: "column", maxWidth: "40%", float: "left", marginLeft: "70px" }}>
                    <div>
                        <label style={{ display: "block" }}>Dit navn</label><input type="text" style={{ width: "300px" }} />
                    </div>

                    <div>
                        <label style={{ display: "block" }}>Adresse</label><input type="text" style={{ width: "300px" }} />
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label>Postnummer</label>
                            <input type="text" size="4" maxLength="4" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label>By</label>
                            <input type="text" style={{ width: "195px" }} />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: "block" }}>Din email</label><input type="email" style={{ width: "300px" }} />
                    </div>

                    <div>
                        <label style={{ display: "block" }}>Dit mobilnummer</label><input type="text" />
                        <input type="checkbox" style={{ marginLeft: "10px" }} />SMS notifikation
                    </div>

                    <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                        <button type="button">Fortryd</button>
                        <button type="submit">Gem tidsbestilling</button>
                    </div>
                </div> {/* Anden kolonne slut */}
            </form>
        </>
    )
}