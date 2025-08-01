// import TextField from "@mui/material/TextField";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";
// import { useContext, useEffect, useState } from "react";
// import FormControl from "@mui/material/FormControl";
// import { MyContext } from "../../App";
// import Button from "@mui/material/Button";
// import { APIpostData, getData } from "../../util/api";

// const CheckoutPage = () => {
// //   const [country, setCountry] = useState("");
//   const context = useContext(MyContext);
//   const [formField,setFormField] = useState({
//      firstName:"",
//      lastName:"",
//      country:"",
//      streetAddress:"",
//      city:"",
//      zipCode:"",
//      phone:"",
//      email:""
//   })
// //   const handleChangeCountry = (event) => {
// //     setCountry(event.target.value);
// //   };
//   const [cartData, setCartData] = useState([]);

// const  fetchCart = async () => {
//       const user = JSON.parse(localStorage.getItem("user"));
//       if (!user) return;
//       const res = await getData(`/cart/user/${user.userId}`); // <-- your backend route
//       setCartData(res);
//     };

//     useEffect(()=>{
//         fetchCart();
//     },[])
// const changInput = (e)=>{
//   setFormField(()=>({
//     ...formField,
//     [e.target.name]:e.target.value
//   }))
// }
//   const checkout = async(e)=>{
//     e.preventDefault();
//     // console.log("check out",formField)
//     if(formField.firstName === "" ){
//         context.setMessage({
//         open: true,
//         type: "error",
//         text: "please fill in first name"
//         })
//         return false
//     }
//     if(formField.lastName === "" ){
//         context.setMessage({
//         open: true,
//         type: "error",
//         text: "please fill in last name"
//         })
//         return false
//     }
//     if(formField.country === "" ){
//         context.setMessage({
//         open: true,
//         type: "error",
//         text: "please select in country"
//         })
//         return false
//     }
//     if(formField.streetAddress === "" ){
//         context.setMessage({
//         open: true,
//         type: "error",
//         text: "please fill in street address"
//         })
//         return false
//     }
//     if(formField.city === "" ){
//         context.setMessage({
//         open: true,
//         type: "error",
//         text: "please fill in Town/City"
//         })
//         return false
//     }
//     if(formField.zipCode === "" ){
//         context.setMessage({
//         open: true,
//         type: "error",
//         text: "please fill in zip Code"
//         })
//         return false
//     }
//     if(formField.phone === "" ){
//         context.setMessage({
//         open: true,
//         type: "error",
//         text: "please fill in phone"
//         })
//         return false
//     }
//     if(formField.email === "" ){
//         context.setMessage({
//         open: true,
//         type: "error",
//         text: "please fill in email"
//         })
//         return false
//     }
//     const cartTotal = cartData?.map((item) => parseInt(item.price) * item.quantity)
//   .reduce((total, value) => total + value, 0)
//   .toFixed(2);

// //     const addressInfo = {
// //     name: formField.firstName + " " + formField.lastName,
// //     phoneNumber: formField.phone,
// //     address: formField.streetAddress,
// //     pincode: formField.zipCode,
// //     email: formField.email,
// //     date: new Date().toLocaleString("en-us", {
// //       month: "short",
// //       day: "2-digit",
// //       year: "numeric",
// //     }),
// //   };
// const user = JSON.parse(localStorage.getItem("user"));
// const payload = {
//     tran_id: "T" + new Date().getTime(),
//     amount: cartTotal,
//     userId:user?.userId,
//     address: {
//       name: formField.firstName + " " + formField.lastName,
//       phone: formField.phone,
//       email: formField.email,
//       street: formField.streetAddress,
//       city: formField.city,
//       country: formField.country,
//       zip: formField.zipCode,
//     },
//     cartItems: cartData,
//   };

//     try {
//     const res = await APIpostData("/order/create", payload);
//     console.log(res)
//     // ABA return redirect_url
//     // const redirectUrl = res.data.redirect_url;
//     // window.location.href = redirectUrl;

//   } catch (err) {
//     console.error("Checkout failed:", err);
//     context.setMessage({
//       open: true,
//       type: "error",
//       text: "Something went wrong during checkout!",
//     });
//   }

//   console.log(payload)
// }

//   return (
//     <section className="section">
//       <div className="container">
//         <h2 className="hd">Checkout</h2>
//             <form onSubmit={checkout} >
//         <div className="row">
//           <div className="col-md-8 p-2">
//             <div className="billingContainer p-3 mb-4  card shadow border-1 border-white">
//               <h2 className="mb-0 fs-6 fw-bold">Billing Details</h2>
//               <hr className="mt-1"></hr>

//                 <div className="row">
//                   <div className="col-md-6 mb-2">
//                     <div className="form-group">
//                       <TextField
//                         id="outlined-basic"
//                         label="first name"
//                         variant="outlined"
//                         className="w-100"
//                         name="firstName"
//                         onChange={changInput}

//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6 mb-2">
//                     <div className="form-group">
//                       <TextField
//                         id="outlined-basic"
//                         label="last name"
//                         variant="outlined"
//                         className="w-100"
//                         name="lastName"
//                         onChange={changInput}

//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6 mb-3 mt-2">
//                     <div className="form-group">
//                       <FormControl fullWidth>
//                         <InputLabel id="demo-simple-select-label">
//                           Country/Region
//                         </InputLabel>

//                         <Select
//                           labelId="demo-simple-select-label"
//                           id="demo-simple-select"
//                           value={formField.country}
//                           label="Country/Region"
//                           name="country"
//                           onChange={changInput}

//                         //   onChange={handleChangeCountry}
//                         >
//                           {context.countryList?.length !== 0 &&
//                             context.countryList?.map((item, index) => {
//                               return (
//                                 <MenuItem key={index} value={item.country}>
//                                   {item.country}
//                                 </MenuItem>
//                               );
//                             })}
//                         </Select>
//                       </FormControl>
//                     </div>
//                   </div>
//                   <div className="col-md-6  mb-3 mt-2">
//                     <div className="form-group">
//                       <TextField
//                         id="outlined-basic"
//                         label="Street address "
//                         variant="outlined"
//                         className="w-100"
//                         name="streetAddress"
//                         onChange={changInput}

//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6  mb-3 mt-2">
//                     <div className="form-group">
//                       <TextField
//                         id="outlined-basic"
//                         label="Town / City "
//                         variant="outlined"
//                         className="w-100"
//                         name="city"
//                         onChange={changInput}

//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6  mb-3 mt-2">
//                     <div className="form-group">
//                       <TextField
//                         id="outlined-basic"
//                         label="ZIP Code "
//                         variant="outlined"
//                         className="w-100"
//                         name="zipCode"
//                         onChange={changInput}

//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6  mb-3 mt-2">
//                     <div className="form-group">
//                       <TextField
//                         id="outlined-basic"
//                         label="Phone"
//                         variant="outlined"
//                         className="w-100"
//                         name="phone"
//                         onChange={changInput}

//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6  mb-3 mt-2">
//                     <div className="form-group">
//                       <TextField
//                         id="outlined-basic"
//                         label="Email"
//                         variant="outlined"
//                         className="w-100"
//                         name="email"
//                         onChange={changInput}

//                       />
//                     </div>
//                   </div>
//                 </div>

//             </div>
//           </div>
//           <div className="col-md-4 p-2">
//             <div className="yourOrder ">
//               <div className="card shadow-sm p-3">
//                 <h2 className="fs-6 fw-bold mb-0 ">YOUR ORDER</h2>
//                 <hr className="mt-1"></hr>
//                 <div className="table-responsive">
//                   <table className="table table-borderless w-100">
//                     <thead>
//                       <tr>
//                         <th>Product</th>
//                         <th>Subtotal</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                         {cartData?.length !== 0 &&
//                       cartData?.map((item, index) => {
//                         return (
//                                 <tr key={index}>
//                             <td>{item.productTitle} <b>x {item.quantity}</b> </td>
//                             <td>${item.subTotal}</td>
//                         </tr>
//                         )
//                       })
//                     }

//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <td>Total</td>
//                             <td>$ {cartData?.length > 0 && cartData.map(item=> parseInt(item.price) * item.quantity).reduce((total,value)=> total+ value,0).toFixed(2)}</td>
//                         </tr>
//                     </tfoot>
//                   </table>
//                 </div>
//                 <Button className="addcart" type="submit" >Check out</Button>

//               </div>
//             </div>
//           </div>
//         </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default CheckoutPage;

// import React, { useContext, useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import Button from "@mui/material/Button";
// import { MyContext } from "../../App";
// import { APIpostData, getData } from "../../util/api";

// // Import Stripe
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// // Load Stripe with your public key
// const stripePromise = loadStripe("pk_test_51RqQpDPfKB5g48gSAA5ty1FDiwE2UY0Vd2OAjfhzFtIAFrFPgdFeZoGNwRCztp2lWTkZXX9Hd5XPx4Y1PwOb3QRe00CK6zp29B");

// // Style for CardElement
// const CARD_ELEMENT_OPTIONS = {
//   style: {
//     base: {
//       fontSize: "16px",
//       color: "#424770",
//       "::placeholder": {
//         color: "#aab7c4",
//       },
//       fontFamily: "Arial, sans-serif",
//     },
//     invalid: {
//       color: "#9e2146",
//     },
//   },
// };

// const CheckoutForm = ({ formField, cartData, onSuccess, context }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   // Calculate total amount in cents (Stripe needs amount in cents)
//   const cartTotalCents = Math.round(
//     cartData
//       .map((item) => parseFloat(item.price) * item.quantity)
//       .reduce((total, value) => total + value, 0) * 100
//   );

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       setLoading(false);
//       return;
//     }

//     try {
//       // Create payment intent on backend
//       const { clientSecret } = await APIpostData("/order/create-payment-intent", {
//         amount: cartTotalCents,
//       });

//       // Confirm card payment
//       const cardElement = elements.getElement(CardElement);

//       const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: formField.firstName + " " + formField.lastName,
//             email: formField.email,
//             phone: formField.phone,
//             address: {
//               line1: formField.streetAddress,
//               city: formField.city,
//               postal_code: formField.zipCode,
//               country: formField.country,
//             },
//           },
//         },
//       });

//       if (paymentResult.error) {
//         context.setMessage({
//           open: true,
//           type: "error",
//           text: paymentResult.error.message,
//         });
//         setLoading(false);
//         return;
//       }

//       if (paymentResult.paymentIntent.status === "succeeded") {
//         context.setMessage({
//           open: true,
//           type: "success",
//           text: "Payment successful!",
//         });

//         // Build order payload including tran_id from Stripe paymentIntent.id
//         const user = JSON.parse(localStorage.getItem("user"));
//         const payload = {
//           tran_id: paymentResult.paymentIntent.id,
//           amount: cartTotalCents / 100,
//           userId: user?.userId,
//           address: {
//             name: formField.firstName + " " + formField.lastName,
//             phone: formField.phone,
//             email: formField.email,
//             street: formField.streetAddress,
//             city: formField.city,
//             country: formField.country,
//             zip: formField.zipCode,
//           },
//           cartItems: cartData,
//           paymentStatus: "paid",
//         };

//         // Send order to backend
//         await APIpostData("/order/create", payload);

//         onSuccess(); // Clear form or navigate
//       }
//     } catch (err) {
//       console.error("Payment error:", err);
//       context.setMessage({
//         open: true,
//         type: "error",
//         text: "Payment failed. Please try again.",
//       });
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement options={CARD_ELEMENT_OPTIONS} />
//       <Button
//         variant="contained"
//         color="primary"
//         type="submit"
//         disabled={!stripe || loading}
//         sx={{ mt: 2 }}
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </Button>
//     </form>
//   );
// };

// const CheckoutPage = () => {
//   const context = useContext(MyContext);
//   const [formField, setFormField] = useState({
//     firstName: "",
//     lastName: "",
//     country: "",
//     streetAddress: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//   });
//   const [cartData, setCartData] = useState([]);

//   const fetchCart = async () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (!user) return;
//     const res = await getData(`/cart/user/${user.userId}`);
//     setCartData(res);
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const changInput = (e) => {
//     setFormField(() => ({
//       ...formField,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // This function will be called after successful payment + order create
//   const onPaymentSuccess = () => {
//     setFormField({
//       firstName: "",
//       lastName: "",
//       country: "",
//       streetAddress: "",
//       city: "",
//       zipCode: "",
//       phone: "",
//       email: "",
//     });
//     setCartData([]);
//     context.setMessage({
//       open: true,
//       type: "success",
//       text: "Order placed successfully!",
//     });
//   };

//   // Validation simplified for demo
//   const isFormValid =
//     formField.firstName &&
//     formField.lastName &&
//     formField.country &&
//     formField.streetAddress &&
//     formField.city &&
//     formField.zipCode &&
//     formField.phone &&
//     formField.email &&
//     cartData.length > 0;

//   return (
//     <section className="section">
//       <div className="container">
//         <h2 className="hd">Checkout</h2>
//         <form>
//           <div className="row">
//             <div className="col-md-8 p-2">
//               <div className="billingContainer p-3 mb-4 card shadow border-1 border-white">
//                 <h2 className="mb-0 fs-6 fw-bold">Billing Details</h2>
//                 <hr className="mt-1"></hr>
//                 <div className="row">
//                   {/* Your form inputs here */}
//                   <div className="col-md-6 mb-2">
//                     <TextField
//                       label="First Name"
//                       variant="outlined"
//                       fullWidth
//                       name="firstName"
//                       value={formField.firstName}
//                       onChange={changInput}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-2">
//                     <TextField
//                       label="Last Name"
//                       variant="outlined"
//                       fullWidth
//                       name="lastName"
//                       value={formField.lastName}
//                       onChange={changInput}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3 mt-2">
//                     <FormControl fullWidth required>
//                       <InputLabel>Country/Region</InputLabel>
//                       <Select
//                         value={formField.country}
//                         label="Country/Region"
//                         name="country"
//                         onChange={changInput}
//                       >
//                         {context.countryList?.map((item, index) => (
//                           <MenuItem key={index} value={item.country}>
//                             {item.country}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </div>
//                   <div className="col-md-6 mb-3 mt-2">
//                     <TextField
//                       label="Street Address"
//                       variant="outlined"
//                       fullWidth
//                       name="streetAddress"
//                       value={formField.streetAddress}
//                       onChange={changInput}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3 mt-2">
//                     <TextField
//                       label="Town / City"
//                       variant="outlined"
//                       fullWidth
//                       name="city"
//                       value={formField.city}
//                       onChange={changInput}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3 mt-2">
//                     <TextField
//                       label="ZIP Code"
//                       variant="outlined"
//                       fullWidth
//                       name="zipCode"
//                       value={formField.zipCode}
//                       onChange={changInput}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3 mt-2">
//                     <TextField
//                       label="Phone"
//                       variant="outlined"
//                       fullWidth
//                       name="phone"
//                       value={formField.phone}
//                       onChange={changInput}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3 mt-2">
//                     <TextField
//                       label="Email"
//                       variant="outlined"
//                       fullWidth
//                       name="email"
//                       value={formField.email}
//                       onChange={changInput}
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 p-2">
//               <div className="yourOrder">
//                 <div className="card shadow-sm p-3">
//                   <h2 className="fs-6 fw-bold mb-0">YOUR ORDER</h2>
//                   <hr className="mt-1"></hr>
//                   <div className="table-responsive">
//                     <table className="table table-borderless w-100">
//                       <thead>
//                         <tr>
//                           <th>Product</th>
//                           <th>Subtotal</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {cartData.length > 0 &&
//                           cartData.map((item, index) => (
//                             <tr key={index}>
//                               <td>
//                                 {item.productTitle} <b>x {item.quantity}</b>
//                               </td>
//                               <td>${item.subTotal}</td>
//                             </tr>
//                           ))}
//                       </tbody>
//                       <tfoot>
//                         <tr>
//                           <td>Total</td>
//                           <td>
//                             $
//                             {cartData.length > 0 &&
//                               cartData
//                                 .map((item) => parseInt(item.price) * item.quantity)
//                                 .reduce((total, val) => total + val, 0)
//                                 .toFixed(2)}
//                           </td>
//                         </tr>
//                       </tfoot>
//                     </table>
//                   </div>

//                   {/* Stripe Payment Form */}
//                   <Elements stripe={stripePromise}>
//                     <CheckoutForm
//                       formField={formField}
//                       cartData={cartData}
//                       onSuccess={onPaymentSuccess}
//                       context={context}
//                     />
//                   </Elements>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default CheckoutPage;

// ✅ Already cleaned version (no outer <form>)
import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { MyContext } from "../../App";
import { APIpostData, deleteData, getData } from "../../util/api";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RqQpDPfKB5g48gSAA5ty1FDiwE2UY0Vd2OAjfhzFtIAFrFPgdFeZoGNwRCztp2lWTkZXX9Hd5XPx4Y1PwOb3QRe00CK6zp29B"
);
const countryCodeMap = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  Andorra: "AD",
  Angola: "AO",
  "Antigua and Barbuda": "AG",
  Argentina: "AR",
  Armenia: "AM",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bhutan: "BT",
  Bolivia: "BO",
  "Bosnia and Herzegovina": "BA",
  Botswana: "BW",
  Brazil: "BR",
  Brunei: "BN",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  "Cape Verde": "CV",
  "Central African Republic": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  Colombia: "CO",
  Comoros: "KM",
  "Congo (Brazzaville)": "CG",
  "Congo (Kinshasa)": "CD",
  "Costa Rica": "CR",
  Croatia: "HR",
  Cuba: "CU",
  Cyprus: "CY",
  "Czech Republic": "CZ",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Republic": "DO",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Greece: "GR",
  Grenada: "GD",
  Guatemala: "GT",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  Honduras: "HN",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Ireland: "IE",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  Laos: "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  "Marshall Islands": "MH",
  Mauritania: "MR",
  Mauritius: "MU",
  Mexico: "MX",
  Micronesia: "FM",
  Moldova: "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  Netherlands: "NL",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  "North Korea": "KP",
  "North Macedonia": "MK",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  "Palestine State": "PS",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  Poland: "PL",
  Portugal: "PT",
  Qatar: "QA",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Korea": "KR",
  "South Sudan": "SS",
  Spain: "ES",
  "Sri Lanka": "LK",
  Sudan: "SD",
  Suriname: "SR",
  Sweden: "SE",
  Switzerland: "CH",
  Syria: "SY",
  Taiwan: "TW",
  Tajikistan: "TJ",
  Tanzania: "TZ",
  Thailand: "TH",
  "Timor-Leste": "TL",
  Togo: "TG",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  "Vatican City": "VA",
  Venezuela: "VE",
  Vietnam: "VN",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
};

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": { color: "#aab7c4" },
      fontFamily: "Arial, sans-serif",
    },
    invalid: { color: "#9e2146" },
  },
};

const CheckoutForm = ({ formField, cartData, onSuccess, context }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const cartTotalCents = Math.round(
    cartData
      .map((item) => parseFloat(item.price) * item.quantity)
      .reduce((total, value) => total + value, 0) * 100
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    try {
      const { clientSecret } = await APIpostData(
        "/order/create-payment-intent",
        {
          amount: cartTotalCents,
        }
      );

      const cardElement = elements.getElement(CardElement);
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: `${formField.firstName} ${formField.lastName}`,
            email: formField.email,
            phone: formField.phone,
            address: {
              line1: formField.streetAddress,
              city: formField.city,
              postal_code: formField.zipCode,
              country: formField.country,
            },
          },
        },
      });

      if (paymentResult.error) {
        context.setMessage({
          open: true,
          type: "error",
          text: paymentResult.error.message,
        });
        setLoading(false);
        return;
      }

      if (paymentResult.paymentIntent.status === "succeeded") {
        context.setMessage({
          open: true,
          type: "success",
          text: "Payment successful!",
        });

        const user = JSON.parse(localStorage.getItem("user"));
        const payload = {
          tran_id: paymentResult.paymentIntent.id,
          amount: cartTotalCents / 100,
          userId: user?.userId,
          address: {
            name: `${formField.firstName} ${formField.lastName}`,
            phone: formField.phone,
            email: formField.email,
            street: formField.streetAddress,
            city: formField.city,
            country: formField.country,
            zip: formField.zipCode,
          },
          cartItems: cartData,
          paymentStatus: "pending",
        };

        await APIpostData("/order/create", payload);
        onSuccess();
        context.setMessage({
          open: true,
          type: "success",
          text: "success.",
        });
      }
    } catch (err) {
      console.error("Payment error:", err);
      context.setMessage({
        open: true,
        type: "error",
        text: "Payment failed. Please try again.",
      });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={!stripe || loading}
        sx={{ mt: 2 }}
        fullWidth
      >
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
};

const CheckoutPage = () => {
  const context = useContext(MyContext);
  const [formField, setFormField] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [cartData, setCartData] = useState([]);

  const fetchCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const res = await getData(`/cart/user/${user.userId}`);
    setCartData(res);
    console.log("cartd",res)
  };

  useEffect(() => {
    fetchCart();
  }, []);

  

  const changInput = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };

  const clearUserCart = async (userId) => {
  try {
    await deleteData(`/cart/user/${userId}`);
    // បង្ហាញ message ឬ update state
  } catch (error) {
    console.error("Failed to clear cart", error);
  }
};

  const onPaymentSuccess = () => {
    setFormField({
      firstName: "",
      lastName: "",
      country: "",
      streetAddress: "",
      city: "",
      zipCode: "",
      phone: "",
      email: "",
    });
    setCartData([]);
    context.setMessage({
      open: true,
      type: "success",
      text: "Order placed successfully!",
    });
    const user = JSON.parse(localStorage.getItem("user"));
  if(user?.userId) {
    clearUserCart(user.userId);
  }
  fetchCart();
  context.fetchCart();
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="hd">Checkout</h2>
        <div className="row">
          <div className="col-md-8 p-2">
            <div className="billingContainer p-3 mb-4 card shadow border-1 border-white">
              <h2 className="mb-0 fs-6 fw-bold">Billing Details</h2>
              <hr className="mt-1" />
              <div className="row">
                <div className="col-md-6 mb-2">
                  <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    required
                    value={formField.firstName}
                    onChange={changInput}
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    required
                    value={formField.lastName}
                    onChange={changInput}
                  />
                </div>
                <div className="col-md-6 mb-3 mt-2">
                  {/* <FormControl fullWidth required>
                    <InputLabel>Country/Region</InputLabel>
                    <Select name="country" value={formField.country} onChange={changInput}>
                      {context.countryList?.map((item, index) => (
                        <MenuItem key={index} value={item.country.code}>{item.country.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl> */}

                  <FormControl fullWidth required>
                    <InputLabel>Country/Region</InputLabel>
                    <Select
                      name="country"
                      value={formField.country} // សម្រាប់កូដ 2 អក្សរ
                      onChange={changInput}
                    >
                      {context.countryList.map((item, index) => (
                        <MenuItem
                          key={index}
                          value={countryCodeMap[item.country] || ""}
                        >
                          {item.country} {/* បង្ហាញជាឈ្មោះ country */}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-6 mb-3 mt-2">
                  <TextField
                    label="Street Address"
                    name="streetAddress"
                    fullWidth
                    required
                    value={formField.streetAddress}
                    onChange={changInput}
                  />
                </div>
                <div className="col-md-6 mb-3 mt-2">
                  <TextField
                    label="City"
                    name="city"
                    fullWidth
                    required
                    value={formField.city}
                    onChange={changInput}
                  />
                </div>
                <div className="col-md-6 mb-3 mt-2">
                  <TextField
                    label="ZIP Code"
                    name="zipCode"
                    fullWidth
                    required
                    value={formField.zipCode}
                    onChange={changInput}
                  />
                </div>
                <div className="col-md-6 mb-3 mt-2">
                  <TextField
                    label="Phone"
                    name="phone"
                    fullWidth
                    required
                    value={formField.phone}
                    onChange={changInput}
                  />
                </div>
                <div className="col-md-6 mb-3 mt-2">
                  <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    required
                    value={formField.email}
                    onChange={changInput}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 p-2">
            <div className="yourOrder">
              <div className="card shadow-sm p-3">
                <h2 className="fs-6 fw-bold mb-0">YOUR ORDER</h2>
                <hr className="mt-1" />
                <div className="table-responsive">
                  <table className="table table-borderless w-100">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData.map((item, index) => (
                        <tr key={index}>
                          <td>
                            {item.productTitle} <b>x {item.quantity}</b>
                          </td>
                          <td>${item.subTotal}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>Total</td>
                        <td>
                          $
                          {cartData
                            .reduce(
                              (total, item) =>
                                total + item.quantity * item.price,
                              0
                            )
                            .toFixed(2)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    formField={formField}
                    cartData={cartData}
                    onSuccess={onPaymentSuccess}
                    context={context}
                  />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
