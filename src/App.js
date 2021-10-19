import { Navbar } from "./components/Navbar";
import { SearchComponent } from "./components/SearchComponent";
import { SuperCard } from "./components/SuperCard";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div className="col-12 mt-2">
          <SearchComponent />
        </div>
        <div className="col-8 mx-auto mt-5">
          <SuperCard />
        </div>
      </div>
    </div>
  );
}

export default App;
