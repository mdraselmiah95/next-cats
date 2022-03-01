import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";

export default function index() {
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
    const res = await fetch("/api/cats");
    const data = await res.json();
    // console.log(data);
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <Nav />
    </div>
  );
}
