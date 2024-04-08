import "./Checkbox.scss";

const Checkbox = ({ checked, onChange, label, name = "checkbox", required = false }) => {
  return (
    <div className="custom-checkbox">
      <input
        name={name}
        required={required}
        checked={checked}
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        id="checkbox"
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};

export default Checkbox;
