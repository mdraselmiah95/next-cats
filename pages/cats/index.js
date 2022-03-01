import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Nav from "../../components/Nav/Nav";

export default function index() {
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
    const res = await fetch("/api/cats");
    const data = await res.json();
    console.log(data);
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <Nav />
      <div className="container mt-5">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {cats.map((cat) => (
            <Card
              name={cat.name}
              id={cat.id}
              phone={cat.phone}
              email={cat.email}
              image={cat.image}
              key={cat.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
