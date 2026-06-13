import { useState } from "react";

import {
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";

import {
  auth,
  googleProvider
} from "../firebase";

import { useNavigate } from "react-router-dom";

import "/src/Styles/auth.css";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Logged In Successfully!");

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      console.log(result.user);

      alert(`Welcome ${result.user.displayName}!`);

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">

      <form className="auth-card" onSubmit={handleSubmit}>

        <h1>Welcome Back</h1>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-btn">
          Sign In
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button
          type="button"
          className="google-btn"
          onClick={handleGoogleSignIn}
        >
          Continue with Google
        </button>

      </form>

    </div>
  );
}

export default SignIn;