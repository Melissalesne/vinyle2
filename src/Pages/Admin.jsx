import useFetch from "../hooks/useFetch";

function Admin() {
  const { data, loading, error, text } = useFetch("compte");
  if (loading) return <div>Loading ...</div>;
  if (error) {
    console.log(error, text);
    return <div>Error ! </div>;
  }
  return (
    <>
      <h1>AdminScreen</h1>
      {data && data.map((item, i) => <div key={i}>{item.email}</div>)}
    </>
  );
}
export default Admin;
