import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/signup.scss";
const Signup = () => {
  const [inputChangeCreateAccount, setInputChangeCreateAccount] = useState({
    username: "",
    email: "",
    password: "",
    passwordValidation: "",
  });
  const handleInputs = (e) => {
    const { username, email, password, password_validation } = e.target;
    console.log(e.target);
    setInputChangeCreateAccount({
      ...inputChangeCreateAccount,
      [name]: value,
    });
  };

  const submitCreateAccount = (e) => {
    e.preventDefault();
    console.log("je submit");
  };

  return (
    <div className="signup">
      <h1 className="signup__title">Créer un nouveau compte ?</h1>
      <form
        action="submit"
        className="signup__form"
        onClick={submitCreateAccount}
      >
        <label htmlFor="username"> Nom d'utilisateur</label>
        <input
          type="text"
          name="username"
          value={inputChangeCreateAccount.username}
          onChange={handleInputs}
          className="signup__form__username"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="signup__form__email"
          value={inputChangeCreateAccount.email}
          onChange={handleInputs}
        />
        <label htmlFor="password"> Mot de passe</label>
        <input
          type="password"
          name="password"
          value={inputChangeCreateAccount.password}
          onChange={handleInputs}
          className="signup__form__password"
        />
        <label htmlFor="password-validation"> Validation du mot de passe</label>
        <input
          type="password"
          value={inputChangeCreateAccount.password_validation}
          onChange={handleInputs}
          name="password-validation"
          className="signup__form__password-validation"
        />
        <button
          type="submit"
          className="signup__form__btn"
          onClick={submitCreateAccount}
        >
          Créer le compte
        </button>
        <div>
          <Link to="/signin">Vous avez déjà un compte ?</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
