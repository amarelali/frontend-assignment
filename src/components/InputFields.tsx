import { InputHTMLAttributes } from "preact/compat";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const InputFields = ({ label, id, ...rest }: IProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <label for={id}>
        <b>{label}</b>
      </label>
      <input {...rest} />
    </div>
  );
};
export default InputFields;
