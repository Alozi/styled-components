import "./Switch.css";

export default function Switch({ isDarkTheme, onToggle }) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isDarkTheme} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
