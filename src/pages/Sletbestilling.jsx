import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Tidsbestillingsside() {

  const navigate = useNavigate();
  const [bestilling, setBestilling] = useState({});
  const params = useParams();
 
  const url = `https://fidofidoline-491b7-default-rtdb.europe-west1.firebasedatabase.app/tidsbestilling/${params.bestillingsId}.json`;

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const data = await response.json();
      setBestilling(data);
    }
    getPost();
  }, [url]);


  async function sletBestilling(e) {
    e.preventDefault();

    const response = await fetch(url, {
        method: "DELETE"
    });

    const data = await response.json();

    console.log(data);
    navigate("/");
}

function fortrydKlik() {
    navigate("/");
}


  return (
    <dialog open style={{marginTop: "40px", width: "40%"}}>
        <p>Slet tidsbestilling?</p>
        <form method="dialog" onSubmit={sletBestilling}>
            Ønsker du at slette tidsbestillingen for {bestilling.hundenavn}, {bestilling.produkt}, den {bestilling.dato} {bestilling.tid}?
            <div style={{display: "flex", justifyContent: "flex-end", marginTop: "20px", gap: "20px"}}>
                <button type="button" onClick={fortrydKlik}>Fortryd</button>
                <button type="submit">Slet</button>
            </div>
        </form>
  </dialog>
    )
} 




