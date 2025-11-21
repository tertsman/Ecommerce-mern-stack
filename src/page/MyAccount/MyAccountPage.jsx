import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { APIpostData, APIputData, getData, postData } from "../../util/api";
import { MyContext } from "../../App";
const MyAccountPage = () => {
  const [isLogIn, setisLogin] = useState(false);
  const context = useContext(MyContext);
  //  const [userList ,setUserList ]= useState("")
  const [formField, setFormField] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null && token !== "") {
      setisLogin(true);
    } else {
      navigate("/signin");
    }

    //  console.log("user data my acount",context?.user)
    getUser();

    //  const userData = JSON.parse(localStorage.getItem('user'))
  }, []);

  const getUser = async () => {
    const userString = localStorage.getItem('user');
    const userData = userString ? JSON.parse(userString) : null;
    // const userData = JSON.parse(localStorage.getItem("user"));
    const res = await getData(`/user/${userData?._id}`);
    setFormField({
      name: res.name,
      email: res.email,
      phone: res.phone,
    });
  };

  const changInput = (e) => {
    setFormField({
      ...formField,
      [e.target.name]: e.target.value,
    });
  };
  const formData = new FormData();

  const editProfile = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));
    // alert(JSON.stringify(formField))

    try {
      formData.append("name", formField.name);
      formData.append("email", formField.email);
      formData.append("phone", formField.phone);
      const res = await APIputData(`/user/${userData?._id}`, formData);
      console.log(res);
      context.setMessage({
        open: true,
        type: "success",
        text: "profile  updated!",
      });
      getUser();
    } catch (error) {
      context.setMessage({
        open: true,
        type: "success",
        text: error.message || "profile  updated!",
      });
    }
  };

  const [fields, setFields] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });
  const changInput2 = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const ChangPassWord = async (e) => {
    e.preventDefault();

    if (!fields.oldPassword || !fields.password || !fields.confirmPassword) {
      return context.setMessage({
        open: true,
        type: "error",
        text: "All field are required!",
      });
    }

    if (fields.password !== fields.confirmPassword) {
      return context.setMessage({
        open: true,
        type: "error",
        text: "Passwords do not match",
      });
    }

    try {
      const res = await APIpostData("/user/change-password", {
        oldPassword: fields.oldPassword,
        newPassword: fields.password,
      });
      context.setMessage({
        open: true,
        type: "success",
        text: res.msg || "Passwords Updated!",
      });
      setFields({
        oldPassword:'',
        password:'',
        confirmPassword:''
      })
      console.log("clear fields",fields)
    } catch (error) {
      console.log(error.message);
      return context.setMessage({
        open: true,
        type: "error",
        text: error.msg,
      });
    }
  };

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="myAccount mb-3 mt-3">
      <div className="container">
        <h2 className="hd">MY Account</h2>
        <div className="tabsBox border-0 card shadow-sm p-6">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Edit Profile" value="1" />
                <Tab label="Chang password" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <form onSubmit={editProfile}>
                <div className="row">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <div className="form-group">
                          <TextField
                            label="Name"
                            value={formField.name}
                            variant="outlined"
                            className="w-100"
                            name="name"
                            onChange={changInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="form-group">
                          <TextField
                            label="Email"
                            value={formField.email}
                            variant="outlined"
                            disabled
                            className="w-100"
                            name="email"
                            onChange={changInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="form-group">
                          <TextField
                            label="Phone"
                            variant="outlined"
                            value={formField.phone}
                            className="w-100"
                            name="phone"
                            onChange={changInput}
                          />
                        </div>
                      </div>
                    </div>
                    <Button type="submit" className="addcart">
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </TabPanel>
            <TabPanel value="2">
              <form onSubmit={ChangPassWord}>
                <div className="row">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <div className="form-group">
                          <TextField
                            label="Old Password"
                            value={fields.oldPassword}
                            variant="outlined"
                            className="w-100"
                            name="oldPassword"
                            onChange={changInput2}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="form-group">
                          <TextField
                            label="New Password"
                            value={fields.password}
                            variant="outlined"
                            className="w-100"
                            name="password"
                            onChange={changInput2}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="form-group">
                          <TextField
                            label="Confirm Password"
                            variant="outlined"
                            value={fields.confirmPassword}
                            className="w-100"
                            name="confirmPassword"
                            onChange={changInput2}
                          />
                        </div>
                      </div>
                    </div>
                    <Button type="submit" className="addcart">
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </section>
  );
};

export default MyAccountPage;
