import { useRouter } from "next/router";

export default function Jumbotron() {
  const router = useRouter();
  return (
    <div className="jumbotron jumbotron-fluid mt-5">
      <div className="container">
        <h1 className="display-4">Cat World</h1>
        <p className="lead">Find your next best friend</p>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => router.push("/cats")}
        >
          Start looking
        </button>
      </div>
    </div>
  );
}
