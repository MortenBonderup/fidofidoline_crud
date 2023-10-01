import { useNavigate } from "react-router-dom";
import TidsbestillingsKort from "../components/TidsbestillingsKort";
import { useEffect, useState } from "react";

export default function MineTider() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [isPosts, setIsPosts] = useState(true);

    function opretFunktion() {
        navigate("/tidsbestilling");
    }

    useEffect(() => {
        async function getPosts() {
            const url = "https://fidofidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";

            const response = await fetch(url);
            const data = await response.json();
            if (data !== null) {
                const postsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setPosts(postsArray);
            } else {
                setIsPosts(false);
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

            {isPosts ? (
                <div>
                    {posts.map((post) => (
                        <TidsbestillingsKort key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <p>Ingenting at vise</p>
            )}
        </>
    )
}