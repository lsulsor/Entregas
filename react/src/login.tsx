import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <div className="custom-page">
        <section className="form-section">
          <h1 className="heading">LOGIN</h1>
          <form onSubmit={handleNavigation}>
            <div className="input-block">
              <label className="label">Username: </label>
              <input
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="User is 'admin'"
                tabIndex={-1}
                required
              />
            </div>
            <div className="input-block">
              <label className="label">Password: </label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Paswword is 'test'"
                tabIndex={-1}
                required
              />
            </div>

            <Button className="linkbutton" variant="contained" type="submit">
              Login
            </Button>
          </form>
        </section>
      </div>
    </>
  );
};
