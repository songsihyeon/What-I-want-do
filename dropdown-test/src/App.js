import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function App() {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <div>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Select an option"
      />
    </div>
  );
}

export default App;
