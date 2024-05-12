import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <h1 className="md:text-2xl text-xl font-bold">
        <span className="text-primary">Do</span>Donate
      </h1>
    </Link>
  );
}
