import FetchApi from "./components/FetchApi";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NowPlaying from "./pages/NowPlaying";
import BasketballScoring from "./components/BasketballScoring";
import BadmintonScoring from "./components/BadmintonScoring";

function App() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <BasketballScoring />
        <BadmintonScoring />
      </div>
    </>
  );
}

export default App;
