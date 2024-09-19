import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import { register } from "../features/auth/authSlice";
import { useState } from "preact/hooks";
import InputFields from "../components/inputFields";

interface IProps {}
const Register = ({}: IProps) => {
  const { error, jwt, user,isLoading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <>
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <InputFields
        type="text"
        placeholder="Enter UserName"
        name="username"
        id="username"
        required
        label="Username"
        onChange={(e: Event) => setUserName(e.target.value)}
      />
      <InputFields
        type="email"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
        label="Email"
        onChange={(e: Event) => setEmail(e.target.value)}
      />
      <InputFields
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="psw"
        required
        label="Password"
        onChange={(e: Event) => setPassword(e.target.value)}
      />
      <hr />
      {error && <h2 style={{ color: "red", fontSize: "10px" }}>{error}</h2>}
      <button
        type="submit"
        onClick={() =>
          dispatch(
            register({
              username,
              email,
              password,
            })
          )
        }
        style={{ display: "flex", justifyContent: "space-between",margin:"auto" }}
      >

        {isLoading &&
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          style={{ width: "20px", height: "20px", marginRight: "20px" }}
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>}
        <span>Register</span>
      </button>
      <div>
        <p>
          Already have an account? <a href="#">Sign in</a>.
        </p>
      </div>
    </>
  );
};
export default Register;
