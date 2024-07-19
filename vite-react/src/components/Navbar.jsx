import globe from "../images/globe.png";

export default function () {
  return (
    <nav>
      <img src={globe} alt="globe logo" className="nav--globe" />
      <h1 className="nav--text">my travel journal.</h1>
    </nav>
  );
}
