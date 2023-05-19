import React from "react";
import { useRegisterContext } from "../ContextManagers/SignupContext";
import { Helmet } from "react-helmet-async";

// SIGUP PAGE MARKUP

const SignUp = () => {
  //Variables to hold the user's inputted data, Logic to determine & give a user an account, allow a user signup...
  // and login imported from the Signup context provider
  const {
    haveAccnt,
    setHaveAccnt,
    handleSetUser,
    handleSignup,
    handleLogin,
    username,
    password,
    email,
    confirmPassword,
  } = useRegisterContext();

  return (
    <>
      {/* REACT HELMET IS USED FOR SEO TRACKING */}
      <Helmet>
        <title>Signup - Edustipend Playlist</title>
        <meta name="description" content="Edustipend playlist signup page" />
        <link rel="canonical" href="/signup" />
      </Helmet>

      {/* MARKUP */}
      <div className="signup-div">
        {haveAccnt ? (
          <form onSubmit={handleLogin}>
            <h3>Login</h3>
            <input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleSetUser}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleSetUser}
            />
            <button type="submit">Sign In</button>
            <p>
              Do not have an account?{" "}
              <span onClick={() => setHaveAccnt(!haveAccnt)}>Sign Up</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <h3>Sign Up</h3>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleSetUser}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleSetUser}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleSetUser}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleSetUser}
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?{" "}
              <span onClick={() => setHaveAccnt(!haveAccnt)}>Login</span>
            </p>
          </form>
        )}
      </div>
    </>
  );
};

export default SignUp;
