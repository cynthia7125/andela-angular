import "./main-page.css";
import Header from "./header";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFiler from "./house-filter";

function App() {
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFiler allHouses={allHouses} />
        <Switch>
          <Route path="/searchresults/:country">
              <SearchResults allHouses={allHouses} />
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
