import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/signin.scss";
const Signin = () => {
  const [inputLoginAccount, setInputLoginAccount] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInputs = (e) => {
    const { username, email, password } = e.target;
    console.log(e.target);
    setInputLoginAccount({
      ...inputLoginAccount,
      [name]: value,
    });
  };

  const submitLoginAccount = (e) => {
    e.preventDefault();
    console.log("je submit");
  };

  return (
    <div className="signin">
      <h1 className="signin__title">Je me connecte à mon compte</h1>
      <form
        action="submit"
        className="signin__form"
        onClick={submitLoginAccount}
      >
        <label htmlFor="username"> Nom d'utilisateur</label>
        <input
          type="text"
          name="username"
          value={inputLoginAccount.username}
          onChange={handleInputs}
          className="signin__form__username"
        />
        <div>ou</div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="signin__form__email"
          value={inputLoginAccount.email}
          onChange={handleInputs}
        />
        <label htmlFor="password"> Mot de passe</label>
        <input
          type="password"
          name="password"
          value={inputLoginAccount.password}
          onChange={handleInputs}
          className="signin__form__password"
        />
        <button
          type="submit"
          className="signin__form__btn"
          onClick={submitLoginAccount}
        >
          Je me connecte à mon compte
        </button>
      </form>
      <div>
        <Link to="/signup">Vous n'avez pas de compte ?</Link>
      </div>
    </div>
  );
};

export default Signin;
