import "./main-page.css";
import Header from "./header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFiler from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouse from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";

function App() {
  const allHouses = useHouse();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFiler allHouses={allHouses} />
        <Switch>
          <Route path="/searchresults/:country">
              <SearchResults allHouses={allHouses} />
          </Route>

          <Route path="/house/:id">
              <HouseFromQuery allHouses={allHouses} />
          </Route>

          <Route exact path="/">
            <FeaturedHouse house={featuredHouse}></FeaturedHouse>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
