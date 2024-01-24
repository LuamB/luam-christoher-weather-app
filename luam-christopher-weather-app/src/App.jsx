import { uid } from "uid";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

import Deleted from "./components/Deleted/Deleted";
import Location from "./components/Location/Location";
import List from "./components/List/List";
import Form from "./components/Form/Form";

import "./App.css";

function App() {
  const [deleted, setDeleted] = useLocalStorageState("deleted", {
    defaultValue: [],
  });
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState("");
  const [condition, setCondition] = useState("");
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useLocalStorageState("location", {
    defaultValue: "",
  });

  console.log("location", location);

  //let url = `https://example-apis.vercel.app/api/weather/${location}`;
  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          `https://example-apis.vercel.app/api/weather/${location}`
        );
        const data = await response.json();
        setWeather(data.isGoodWeather);
        setCondition(data.condition);
        setTemperature(data.temperature);
        console.clear();
        console.log("url fetch ", data);
      } catch (error) {
        console.log(error);
      }
    }
    getWeather();
    const interval = setInterval(() => {
      getWeather();
    }, 5000);
    return () => clearInterval(interval);
  }, [location]);

  const isGoodWeather = weather;

  useEffect(() => {
    document.body.classList.toggle("good-weather", isGoodWeather);
    document.body.classList.toggle("bad-weather", !isGoodWeather);
  }, [isGoodWeather]);

  const filteredActivities = activities.filter(
    (a) => a.isForGoodWeather === isGoodWeather
  );

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }

  function handleDeleteActivity(id) {
    setDeleted([...deleted, ...activities.filter((e) => e.id === id)]);
    console.log("deleted ", deleted);
    setActivities(activities.filter((a) => a.id !== id));
  }

  function handleRestoreActivity(id) {
    setActivities([...activities, ...deleted.filter((a) => a.id === id)]);
    setDeleted(deleted.filter((a) => a.id !== id));
  }
  // console.log("location ", location);
  console.log("activities ", activities);
  console.log("deleted ", deleted);
  return (
    <>
      <main>
        <Location
          location={location}
          setLocation={setLocation}
          // onChange={handleLocation}
        />
        <header>
          {" "}
          <h1>{condition}</h1>
          <h1>{temperature}</h1>
        </header>

        <List
          isGoodWeather={isGoodWeather}
          activities={activities}
          filteredActivities={filteredActivities}
          onDeleteActivity={handleDeleteActivity}
        />
        <Form onAddActivity={handleAddActivity} />
        <Deleted deleted={deleted} onRestoreActivity={handleRestoreActivity} />
      </main>
    </>
  );
}

export default App;
