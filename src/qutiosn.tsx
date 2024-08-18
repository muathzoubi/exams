const Question = (props: {
  q: string;
  answers:
    | [string, string, string]
    | [string, string]
    | [string, string, string, string];
  checked: number;
  setChecked: any;
}) => {
  return (
    <div className="question" dir="rtl">
      <label>
        <strong style={{ color: '' }}>{props.q}</strong>
      </label>
      <br />
      {props.answers.map((q, i) => (
        <div key={i} style={{ display: 'flex' }}>
          <label key={i} className="lbl">
            <input
              className="input"
              type="radio"
              value={i}
              checked={i === props.checked}
              onChange={() => {
                props.setChecked(i);
              }}
            />
            <span className="custom-checkbox"></span>
          </label>
          <span>{q}</span>

          <br />
        </div>
      ))}
    </div>
  );
};
export default Question;
