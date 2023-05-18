import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterDataSource = () => {
  // INITIAL STATE OF A NEW USER BEFORE LOGGING IN
  const [haveAccnt, setHaveAccnt] = useState(true);
  const newUser = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [user, setUser] = useState(newUser); //LOGIC TO ASSIGN USER DETAILS AROUND THE WEB.
  const [auth, setAuth] = useState(false); // LOGIC TO CHECK IF USER IS AUTHENTICATED OR NOT.
  const navigate = useNavigate();
  const { username, email, password, confirmPassword } = user;

  const handleSetUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }; //LOGIC TO SAVE THE USER'S INPUTS INTO THE NEW USER VARIABLE

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
  }; //LOGIC TO FINALY ALLOW A USER TO SIGN UP SUCCESSFULLY

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
      toast.error("Account not found");
    } else {
      toast.error("Please fill all input fields");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();

    setUser(newUser);
    setAuth(false);
    navigate("/");
    window.location.reload();
    toast.success("You are Logged Out now");
  }; //LOGIC TO LOG AN ALREADY SIGNED IN USER OUT OF THE WEBSITE

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
  }; //LOGICS AND VARIABLES EXPORTED TO BE USED ANYWHERE IN THE CODE BASE
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
