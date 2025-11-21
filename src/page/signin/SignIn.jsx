import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import google from "../../assets/image/Google-Symbol.png";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
} from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { APIpostData, postData } from "../../util/api";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { firebaseApp } from "../../firebase";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider()

const SignIn = () => {
  const context = useContext(MyContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

   const navigate = useNavigate();
       const [message, setMessage] = useState({ open: false, type: "", text: "" });
const [formFields, setFormFields] = useState({
        email: "",
        password: "",
        isAdmin: false,
      });
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    context.setisHeaderFooterShow(false);
  }, []);


        const onChangeInput = (e) => {
          setFormFields(() => ({
            ...formFields,
            [e.target.name]: e.target.value,
          }));
        };
        const handleClose = () => {
          setMessage({ ...message, open: false });
        };
  
  const SignIn = async (e) => {
      e.preventDefault();
     
      if (formFields.email == "") {
        setMessage({
          open: true,
          type: "error",
          text: "please field in email",
        });
        return false;
      }
     
      if (formFields.password == "") {
        setMessage({
          open: true,
          type: "error",
          text: "please field in password",
        });
        return false;
      }
   
      const formData = new FormData();
      
      formData.append("email", formFields.email);
    
      formData.append("password", formFields.password);
      
  
      try {
        const res = await postData("user/signin", formData);
        console.log(res);
      localStorage.setItem("token",res.token)
      const user={
        name:res.user?.name,
        email:res.user?.email,
        _id:res.user?._id
      }
      localStorage.setItem("user",JSON.stringify(user))
  
     
        setMessage({
          open: true,
          type: "success",
          text: "user Authenticated!"
        });
  
        // clearForm();
        navigate("/");
      } catch (err) {
        setMessage({
      open: true,
      type: "error",
      text: err.response?.data?.msg || err.message,
    });
      }
    };

    // sing with google 
    const signInWithGoogle =  () => {
      signInWithPopup(auth,googleProvider)
      .then((result) =>{
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken; 
        const user = result.user;
        const fields = {
          name:user.providerData[0].displayName,
          email:user.providerData[0].email,
          password:null,
          phone:user.providerData[0].phoneNumber,
          isAdmin:false
        }
        APIpostData("user/authWithGoogle",fields).then((res)=>{
          setMessage({
          open: true,
          type: "success",
          text: res.msg || "user Authenticated!"
        });
        localStorage.setItem("token", res.token);  // <=== ផ្ទុក JWT token មកពី backend
        localStorage.setItem("user", JSON.stringify(res.user)); 
        navigate("/");

        })



      })
    }
    
// end signin with google


  return (
    <section className="section signInPage">

       <Snackbar
                  open={message.open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <Alert
                    onClose={handleClose}
                    severity={message.type}
                    sx={{ width: "100%" }}
                  >
                    {message.text}
                  </Alert>
                </Snackbar>
      <div className="container">
        <div className="box card shadow">
          <div className="logoWrapper text-center ">
                        <Link to={"/"}>
                         <div className="logo">
                            eco<span>Shop</span>
                          </div>
                        </Link>
                        <p>Please Login with an account!</p>
                      </div>
          <form onSubmit={SignIn}>
            <h2>Sign In</h2>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                className="w-100"
                required
                name="email"
                  onChange={onChangeInput}
              />
            </div>
            <div className="form-group ">
              <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="standard"
                className="w-100"
                required
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={onChangeInput}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                      >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <a className="forgot">Forgot Password</a>
            <div className="row mt-2 Sign-btn">
              <div className="col-md-6 mt-1">
                <Button variant="contained" type="submit">Sing In</Button>
              </div>
              <div className="col-md-6 mt-1">
                <Button variant="outlined">
                  <Link href="/">Cancel</Link>
                </Button>
              </div>
            </div>
            <p className="mt-3">Not Registered? <a href="/signup">Sig Up</a> </p>
            
            <h3 className="text-center ">OR Sign up with google</h3>
            <Button variant="outlined" className="w-100 mt-2" onClick={signInWithGoogle}>
              <img src={google} className="gooleimage" />
              <span>Sign In With Google</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
