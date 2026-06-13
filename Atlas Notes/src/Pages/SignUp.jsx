import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

import { useNavigate } from "react-router-dom";

import "/src/Styles/auth.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account Created!");

      // 👉 navigate to dashboard
      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      alert(`Welcome ${result.user.displayName}`);

    
      navigate("/dashboard");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>

        {/* ❌ FIXED: this should NOT be submit */}
        <button
          type="button"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>

        <div className="divider">OR</div>

        <button
          type="button"
          className="google-btn"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}

export default SignUp;