import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Cat() {
  const [cat, setCat] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const fetchCat = async () => {
    const res = await fetch(`/api/cats/${id}`);
    const data = await res.json();
    setCat(data);
  };

  useEffect(() => {
    fetchCat();
  }, []);
  return (
    <div>
      {cat && (
        <div className="container mt-5" style={{ display: "flex" }}>
          <img src={cat.image.url} alt={cat.image.alt} className="w-50" />
          <div className="mx-5">
            <h1>{cat.name}</h1>
            <p>{cat.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
