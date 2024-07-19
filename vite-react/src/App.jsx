import "./App.css";
import Navbar from "./components/Navbar";
// import Travel from "./components/Travel";
import Data from "./Data.jsx";

export default function App() {
  // const travelJournal = Data.map((item) => {
  //   return <Travel {...item} />;
  // });
  return (
    <div>
      <Navbar />
      {/* <section className="travel--lists">{travelJournal}</section> */}
    </div>
  );
}
