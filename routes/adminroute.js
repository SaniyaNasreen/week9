const express = require("express");
    const admin_route = express.Router();
    const auth = require("../miidleware/adminauth");
    const admincontroller = require("../controllers/admincontroller");
    const session = require("express-session");
    // const config = require("config");
    // const path = require("path");

    // Middleware configuration
    // admin_route.use(
    //   session({
    //     secret: config.sessionsecret,
    //     resave: false,
    // //     saveUninitialized: true
    // //   })
    // // );

    // admin_route.use(express.json());
    // admin_route.use(express.urlencoded({ extended: true }));

    // admin_route.set("view engine", "ejs");
    // admin_route.set("views", path.join(__dirname, "../views/admin"));

    // Routes with middleware
    // admin_route.get("/", auth.isLogout, admincontroller.loadLogin);
    admin_route.get("/indexhome", admincontroller.loadindex);
    admin_route.get("/products", admincontroller.loadproducts);
    admin_route.get("/categories",admincontroller.loadcategory)
    admin_route.get("/categories",admincontroller.fetchCategories)

    admin_route.get("/customers", admincontroller.loadcustomer);
    admin_route.get("/register", admincontroller.loadregister);
    admin_route.post("/register", admincontroller.insertUser);
    admin_route.get('/',admincontroller.loadLogin)
    admin_route.get('/login',admincontroller.loadLogin)
    admin_route.post("/", admincontroller.verifyLogin);
    admin_route.get("/home", auth.isLogin, admincontroller.loadDashboard);
    admin_route.get("/logout", auth.isLogin, admincontroller.logout);
    admin_route.get("/dashboard", auth.isLogin, admincontroller.admindashboard);
    admin_route.get("/addproduct", admincontroller.newproductLoad);
    admin_route.post("/addproduct", admincontroller.addproduct);
    admin_route.get("/addcategory", admincontroller.newcategoryLoad);
    admin_route.post("/addcategory", admincontroller.addcategory);
    admin_route.get("/newuser", admincontroller.newuserLoad);
    admin_route.post("/newuser", admincontroller.addUser);
    admin_route.get("/edit-user",  admincontroller.edituserLoad);
    admin_route.post("/edit-user", admincontroller.updateUsers);
    admin_route.get("/edit-product",  admincontroller.editproductLoad);
    admin_route.post("/edit-product", admincontroller.updateproduct);
    admin_route.get("/edit-category",  admincontroller.editcategoryLoad);
    admin_route.post("/edit-category", admincontroller.updatecategory);
    admin_route.get("/delete-user", admincontroller.deleteUser);
    admin_route.get("/unlist-category", admincontroller.unlistCategory);
    admin_route.get("/unlist-product", admincontroller.unlistProduct);
    admin_route.get("/search-user",  admincontroller.searchUser);
    admin_route.get("/search-category",  admincontroller.searchcategory);
    admin_route.get("/search-product",  admincontroller.searchproduct);

    // Catch-all route - Redirects all other routes to /admin
    // admin_route.get("*", function (req, res) {
    //   res.redirect("/admin");
    // });
// In your Node.js route handler or controller where you render edit-user.ejs

    module.exports = admin_route;