import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../contexts/AuthContext";

function Compte() {
  const { auth } = useContext(AuthContext);
  const { data, loading, error, text } = useFetch("compte/" + auth.id);
  if (loading) return <div>Loading ...</div>;
  if (error) {
    console.log(error, text);
    return <div>Error ! </div>;
  }
  return (
    <>
      <h1>Bienvenue sur votre page profil</h1>
      {data && data.email}
    </>
  );
}
export default Compte;
