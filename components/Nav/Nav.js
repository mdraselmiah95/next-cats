import Link from "next/link";

export default function Nav() {
  return (
    //Nav Bar and Routing
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand mb-0 h1">
          Navbar
        </Link>
      </div>
    </nav>
  );
}
