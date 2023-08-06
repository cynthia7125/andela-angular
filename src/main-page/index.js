import "./main-page.css";
import Header from "./header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFiler from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouse from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HouseContext from "../context/houseContext";

function App() {
  const allHouses = useHouse();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle="Providing houses all over the world" />
          <HouseFiler />
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>

            <Route path="/house/:id">
              <HouseFromQuery />
            </Route>

            <Route exact path="/">
              <FeaturedHouse house={featuredHouse}></FeaturedHouse>
            </Route>
          </Switch>
        </div>
      </HouseContext.Provider>
    </Router>
  );
}

export default App;
