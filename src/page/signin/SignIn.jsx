import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import logo from "../../assets/image/bacola-logo.png";
import google from "../../assets/image/Google-Symbol.png";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const SignIn = () => {
  const context = useContext(MyContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    context.setisHeaderFooterShow(false);
  }, []);

  return (
    <section className="section signInPage">
      <div className="container">
        <div className="box card shadow">
          <div className="text-center imageWrapper">
            <img src={logo} alt="" className="w-100" />
          </div>
          <form action="">
            <h2>Sign In</h2>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                className="w-100"
                required
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
                        {/* {showPassword ? <FaRegEyeSlash /> : <FaRegEye />} */}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <a className="forgot">Forgot Password</a>
            <div className="row mt-2 Sign-btn">
              <div className="col-md-6 mt-1">
                <Button variant="contained">Sing In</Button>
              </div>
              <div className="col-md-6 mt-1">
                <Button variant="outlined">
                  {/* <Links to="/">Cancel</Links> */}
                  <Link href="/">Cancel</Link>
                </Button>
              </div>
            </div>
            <p className="mt-3">Not Registered? <a href="/signup">Sig Up</a> </p>
            
            <h3 className="text-center ">OR Sign up with google</h3>
            <Button variant="outlined" className="w-100 mt-2">
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
