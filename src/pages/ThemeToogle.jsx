import MoonIcon from "../components/icons/MoonIcon";
import SunIcon from "../components/icons/SunIcon";
import Switch from "../components/Switch";

const style = {
  minHeight: "100vh",
  textAlign: "center",
  paddingTop: "10rem",
  backgroundColor: "#f5f5f5",
};

export default function ThemeToogle() {
  return (
    <div style={style}>
      <SunIcon />
      <Switch />
      <MoonIcon />
      <h1>Victoria Bogustka</h1>
    </div>
  );
}
