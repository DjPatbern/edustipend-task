import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//AUTHENTICATION STATE MANAGEMENT

const RegisterDataSource = () => {
  //state to determine if a user already have an account or not
  const [haveAccnt, setHaveAccnt] = useState(true);

  //State to hold the user's account registration data
  const newUser = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //Logic to assign the user's informations around the app
  const [user, setUser] = useState(newUser);

  // Logic to check if the user is authenticated or not
  const [auth, setAuth] = useState(false);

  //Logic to handle programmatical navigations from page to page
  const navigate = useNavigate();

  //Logic to assign the user's registration data to the app's user state
  const { username, email, password, confirmPassword } = user;

  //Logic to save the inputted user's data into the app's user state
  const handleSetUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Logic to allow a user signup successfully
  const handleSignup = (e) => {
    e.preventDefault();
    if (
      username &&
      email &&
      password &&
      password.length > 5 &&
      password === confirmPassword
    ) {
      toast.success("Sign Up Successfull");
      setHaveAccnt(true);
    } else if (password.length < 5) {
      toast.error("Password must be more than 5 characters");
    } else if (password !== confirmPassword) {
      toast.error("Password does not match");
    } else {
      toast.error("Please fill all input fields");
    }
  };

  //Logic to allow a user login successfully
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username &&
      email &&
      password &&
      password.length > 5 &&
      password === confirmPassword
    ) {
      setAuth(true);
      toast.success("Login Successfull");
      navigate("/");
    } else if (password.length < 5) {
      toast.error("Password must be more than 5 characters");
    } else if (password !== confirmPassword) {
      toast.error("Account not found, please sign up");
    } else {
      toast.error("Please fill all input fields");
    }
  };

  //Logic o logout already logged in user from the web app
  const handleLogout = (e) => {
    e.preventDefault();
    setUser(newUser);
    setAuth(false);
    navigate("/signup");
    window.location.reload();
    toast.success("You are Logged Out now");
  };

  //States and logics to be exported and get used around the app
  return {
    username,
    email,
    password,
    confirmPassword,
    auth,
    haveAccnt,
    setHaveAccnt,
    handleLogout,
    handleSetUser,
    handleSignup,
    handleLogin,
  };
};

//REACT USECONTEXT STATE MANAGER TO HELP USE OUR LOGICS AROUND OUR CODE BASE
const RegisterContext = createContext([]);

export function useRegisterContext() {
  return useContext(RegisterContext);
}

export const UseRegister = ({ children }) => {
  return (
    <RegisterContext.Provider value={RegisterDataSource()}>
      {children}
    </RegisterContext.Provider>
  );
};
