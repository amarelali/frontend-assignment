import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import { logIn, register } from "../features/auth/authSlice";
import { useState } from "preact/hooks";
import InputFields from "../components/InputFields";

interface IProps {}
const LogIn = ({}: IProps) => {
  const { error, isLoading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const [identifier, setidentifier] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <div id="logInForm">
        <h1 className="mb-3">Log In</h1>
        <hr />
        <InputFields
          type="identifier"
          placeholder="Enter identifier"
          name="identifier"
          id="identifier"
          required
          label="Identifier"
          onChange={(e: Event) => setidentifier(e.target.value)}
        />
        <InputFields
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          required
          label="Password"
          onChange={(e: Event) => setPassword(e.target.value)}
        />
        <hr           className="mb-3"
         />
        {error && <h2 style={{ color: "red", fontSize: "10px" }}>{error}</h2>}
        <button
          type="submit"
          className="my-3"
          onClick={async () => {
            const val = await dispatch(
              logIn({
                identifier,
                password,
              })
            );
            if (!val.hasOwnProperty("error")) {
              location.reload();
            }
          }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
          }}
        >
          {isLoading && (
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
            </svg>
          )}
          <span>Log In</span>
        </button>
        <div>
          <p>
            Don't have an account yet? <a href="/register">Register</a>.
          </p>
        </div>
      </div>
    </>
  );
};
export default LogIn;
