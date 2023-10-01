import { useNavigate } from "react-router-dom";
import Bestillingsformular from "../components/Bestillingsformular";

export default function Opretbestilling() {

  const navigate = useNavigate();

  async function gemNyBestilling(newPost) {
    const url = "https://fidofidoline-491b7-default-rtdb.europe-west1.firebasedatabase.app/tidsbestilling.json";
    
    const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify(newPost) 
    });
    const data = await response.json();
    console.log(data);
    navigate("/");
} 

return (
    <Bestillingsformular gemBestilling={gemNyBestilling} />
)

} 