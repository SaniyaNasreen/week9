const express = require("express");
const user_route = express.Router();
const auth = require("../miidleware/auth");
const usercontroller = require("../controllers/usercontroller");
const User = require("../models/usermodel");
const ordercontroller = require("../controllers/ordercontroller");
const couponcontroller = require("../controllers/couponcontroller");
const PDFDocument = require("pdfkit");

user_route.get("/", auth.isUserBlocked, usercontroller.loadIndex);
user_route.get("/shop-details/:id", usercontroller.loadSingleProduct);
user_route.get(
  "/shop-list",
  auth.isUserBlocked,
  usercontroller.loadProductList
);

// user management
user_route.get("/register", usercontroller.loadRegister);
user_route.post("/register", usercontroller.insertUser);
user_route.get("/verify", auth.isUser, usercontroller.verifyMail);
user_route.get("/login", usercontroller.loginLoad);
user_route.post("/login", usercontroller.verifyLogin);
user_route.get("/logout", auth.isUser, usercontroller.userLogout);
user_route.get("/edituser", auth.isUser, usercontroller.userProfile);
user_route.get("/addAddress", auth.isUser, usercontroller.loadAddAddress);
user_route.post("/addAddress", auth.isUser, usercontroller.addAddress);
user_route.get(
  "/users/editAddress/:id",
  auth.isUser,
  usercontroller.loadEditAddress
);
user_route.post(
  "/users/editAddress/:id",
  auth.isUser,
  usercontroller.updateAddress
);
user_route.post("/saveUserProfile", auth.isUser, usercontroller.updateUser);
user_route.get("/address", auth.isUser, usercontroller.userAddress);

// Route for sending OTP via email
user_route.get("/forgotpassword", usercontroller.sendEmailOtp);
user_route.post("/forgotPassword", usercontroller.loginOtp);
user_route.get("/send-email-otp", usercontroller.sendEmailOtp);
user_route.get("/enter-otp", usercontroller.enterOtpForm);
user_route.post("/verify-otp", usercontroller.verifyOtp);
user_route.post("/resend-otp", usercontroller.resendOtp);
//get forgetpassword page
user_route.get("/forget-password", usercontroller.loadForget);
user_route.post("/forget-password", usercontroller.verifyForgetPassword);
user_route.get("/forgetPassword", usercontroller.loadForgetPassword);
user_route.post("/forgetPassword", usercontroller.resetPassword);

//Product Related
user_route.get("/search-product", usercontroller.searchProduct);
// user_route.get("/product-pagination", usercontroller.productPagination);

// Cart Related
user_route.get("/add-to-cart/:id", auth.isUser, usercontroller.addCart);
user_route.get("/shop-cart", auth.isUser, usercontroller.loginCart);
user_route.get("/remove-from-cart/:id", auth.isUser, usercontroller.removeCart);
user_route.post("/update-cart", auth.isUser, usercontroller.updateCart);

//order
user_route.get("/order", auth.isUser, usercontroller.orderInfo);
user_route.post(
  "/users/orderInfo/cancel-order/:id",
  auth.isUser,
  usercontroller.removeOrder
);
user_route.get(
  "/users/orderInfo/:id",
  auth.isUser,
  ordercontroller.loadOrderDetails
);
//Checkout
user_route.get("/checkout", auth.isUser, usercontroller.checkoutCart);
user_route.post("/saveAddress", auth.isUser, usercontroller.saveOrder);
user_route.post("/saveOrder", auth.isUser, usercontroller.saveOrder);

user_route.post(
  "/checkout/applyCoupon",
  auth.isUser,
  couponcontroller.applyCoupon
);

module.exports = user_route;
