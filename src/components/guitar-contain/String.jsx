import "./String.css";

export function String(props) {
  let keyClassName = "note-fret";
  let key;
  if (props.isPressed) {
    key = (
      <div className="string">
        <div className={`${keyClassName} pressed`}>
          <div className="key-text">{props.note.toUpperCase()}</div>
        </div>
      </div>
    );
  } else {
    key = (
      <div className="string">
        <div className={keyClassName}></div>
      </div>
    );
  }

  return key;
}
