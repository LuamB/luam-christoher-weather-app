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
          id="arctic"
          name="location"
          value="arctic"
          checked={location === "arctic"}
        />
        <label htmlFor="arctic">Murmansk - Arctic</label>
        <input
          onChange={handleLocation}
          type="radio"
          id="rainforest"
          name="location"
          value="rainforest"
          checked={location === "rainforest"}
        />
        <label htmlFor="rainforest">Manaus - Rainforest</label>
        <input
          onChange={handleLocation}
          type="radio"
          id="sahara"
          name="location"
          value="sahara"
          checked={location === "sahara"}
        />
        <label htmlFor="sahara">Niger - Sahara</label>
        <input
          onChange={handleLocation}
          type="radio"
          id="europe"
          name="location"
          value="europe"
          checked={location === "europe"}
        />
        <label htmlFor="Europe">Berlin - Europe</label>
      </fieldset>
    </>
  );
}
