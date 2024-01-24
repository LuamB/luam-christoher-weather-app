import "./Location.css";

export default function Location({ location, setLocation }) {
  function handleLocation(e) {
    setLocation(e.target.value);
  }
  return (
    <>
      <fieldset className="location-buttons">
        <legend>Choose a location:</legend>
        <input
          onChange={handleLocation}
          type="radio"
          id="newyork"
          name="loc"
          value="arctic"
          checked={location === "arctic"}
        />
        <label htmlFor="newyork">New York</label>
        <input
          onChange={handleLocation}
          type="radio"
          id="rio"
          name="loc"
          value="rainforest"
          checked={location === "rainforest"}
        />
        <label htmlFor="rio">Rio</label>
        <input
          onChange={handleLocation}
          type="radio"
          id="tokio"
          name="loc"
          value="sahara"
          checked={location === "sahara"}
        />
        <label htmlFor="tokio">Tokio</label>
        <input
          onChange={handleLocation}
          type="radio"
          id="berlin"
          name="loc"
          value="europe"
          checked={location === "europe"}
        />
        <label htmlFor="berlin">Berlin</label>
      </fieldset>
    </>
  );
}
