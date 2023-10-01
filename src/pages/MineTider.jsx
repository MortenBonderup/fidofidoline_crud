import { useNavigate } from "react-router-dom";
import TidsbestillingsKort from "../components/TidsbestillingsKort";
import { useEffect, useState } from "react";

export default function MineTider() {
    const navigate = useNavigate();
    const [bestillinger, setBestillinger] = useState([]);
    const [isBestillinger, setIsBestillinger] = useState(true);

    function opretFunktion() {
        navigate("/tidsbestilling");
    }

    useEffect(() => {
        async function getPosts() {
            const url = "https://fidofidoline-491b7-default-rtdb.europe-west1.firebasedatabase.app/tidsbestilling.json";

            const response = await fetch(url);
            const data = await response.json();
            if (data !== null) {
                const postsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setBestillinger(postsArray);
            } else {
                setIsBestillinger(false);
            }
        }
        getPosts();
    }, []);

    return (
        <>
            <div style={{ display: "flex" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>Mine tider &nbsp;</span>
                <button type="button" style={{ backgroundColor: "green", color: "white", cursor: "pointer" }} onClick={opretFunktion}>+ Opret tidsbestilling</button>
            </div>

            {isBestillinger ? (
                <div>
                    {bestillinger.map((bestilling) => (
                        <TidsbestillingsKort key={bestilling.id} bestilling={bestilling} />
                    ))}
                </div>
            ) : (
                <p>Ingenting at vise</p>
            )}
        </>
    )
}