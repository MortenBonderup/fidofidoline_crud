import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Bestillingsformular from "../components/Bestillingsformular";

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


  // Opdatering af eksisterende tidsbestilling
  async function opdaterBestilling(tidsbestilling) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(tidsbestilling)
    });
    const data = await response.json();
    console.log(data);
    navigate("/");
  }


  return (
      <Bestillingsformular bestilling={bestilling} gemBestilling={opdaterBestilling} />
    )
} 