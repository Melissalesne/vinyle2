import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function CompteValidate() {
  const { token } = useParams();

  console.log(token);

  const { data, loading } = useFetch("register/validate", {
    method: "POST",
    body: JSON.stringify(token),
  });
  if (loading) {
    return "Veuillez patienter ...";
  }
  if (!data.result) {
    return "Votre inscription n'a pas pu être validée, envoyez une nouvelle demande";
  }

  return (
    <>
      {data?.result && (
        <div>
          <div>nom : {data.nom}</div>
          <div>Prénom : {data.prenom}</div>
          <div>Tel : {data.numeroDeTelephone}</div>
          <div>email : {data.email}</div>
          <div>mdp : {data.motDePasse}</div>
        </div>
      )}
    </>
  );
}

export default CompteValidate;
