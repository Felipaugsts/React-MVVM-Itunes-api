import "./field.css";

export default function TextField({ searchChange, keyDown }) {
  return (
    <div className="field-wrapper">
      <input
        className="input-field large"
        type="text"
        placeholder="Artist Name..."
        onChange={searchChange}
        onKeyDown={keyDown}
      />
    </div>
  );
}
