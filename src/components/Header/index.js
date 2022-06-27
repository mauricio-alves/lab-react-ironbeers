import { Link } from "react-router-dom";

import header from "../../assets/header.png";

export function Header() {
  return (
    <>
      <Link to={"/"}>
        <img src={header} alt="page header" style={{ paddingBottom: "20px" }} />
      </Link>
    </>
  );
}
