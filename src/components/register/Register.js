import { useState } from "react";
import { useLocation } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import regStyle from "./register.module.css";

export const Register = () => {
  const { isUserLoggedIn, register } = useAuthContext();
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [{ status, msg, backgroundColor }, setAlert] = useState({
    status: null,
    message: null,
    backgroundColor: "#fff",
  });
  const { state } = useLocation();
  console.log({ isUserLoggedIn });
  return (
    <>
      <div className={regStyle.container}>
        <section>
          <div className={regStyle.card}>
            <h3 style={{ marginBottom: "1rem" }}>
              Enter Your Username & Password{" "}
            </h3>
            {status === true && (
              <p
                style={{
                  backgroundColor,
                  padding: "1rem",
                  margin: "0.5rem",
                }}
              >
                {msg}
              </p>
            )}
            {status === false && (
              <p
                style={{
                  backgroundColor,
                  padding: "1rem",
                  margin: "0.5rem",
                }}
              >
                {msg}
              </p>
            )}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const response = await register(
                  text,
                  password,
                  state?.from ? state.from : "/"
                );
                console.log(response);
                if (response?.success === true) {
                  console.log(response.success);
                  setAlert({
                    status: response.success,
                    msg: response?.message,
                    backgroundColor: "green",
                    color: "#fff",
                  });
                  setTimeout(() => setAlert(false), 3000);
                }
                if (!response?.success) {
                  setAlert({
                    status: response.success,
                    msg: response.message,
                    backgroundColor: "red",
                    color: "#fff",
                  });
                  setTimeout(() => setAlert(false), 3000);
                }
              }}
            >
              <div className={regStyle.inputs}>
                <label htmlFor="name">Username :</label>
                <input
                  type="text"
                  name=""
                  id="name"
                  placeholder="Enter Username..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div className={regStyle.inputs}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Enter Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input type="submit" value="Register" className={regStyle.btn} />
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
