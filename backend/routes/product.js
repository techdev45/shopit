const express = require("express");

const router = express.Router();

const {
  getProducts,
  getAdminProducts,
  getVendorProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/products").get(getProducts);
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.route("/product/:id").get(getSingleProduct);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
//for vendors

router
  .route("/vendor/products")
  .get(isAuthenticatedUser, authorizeRoles("vendor"), getVendorProducts);
router
  .route("/vendor/product/new")
  .post(isAuthenticatedUser, authorizeRoles("vendor"), newProduct);
router
  .route("/vendor/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("vendor"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("vendor"), deleteProduct);
//..................

router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/reviews").get(isAuthenticatedUser, getProductReviews);
router.route("/reviews").delete(isAuthenticatedUser, deleteReview);

module.exports = router;

// const express = require("express");
// const router = express.Router();

// const {
//   getProducts,
//   getAdminProducts,

//   newProduct,
//   getSingleProduct,
//   updateProduct,
//   deleteProduct,
//   createProductReview,
//   getProductReviews,
//   deleteReview,
// } = require("../controllers/productController");

// const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

// router.route("/products").get(getProducts);
// router
//   .route("/admin/products")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

// router.route("/product/:id").get(getSingleProduct);

// router
//   .route("/admin/product/new")
//   .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);

// router
//   .route("/admin/product/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
// //for vendors
// router
//   .route("/vendor/product/new")
//   .post(isAuthenticatedUser, authorizeRoles("vendor"), newProduct);
// //..................

// router.route("/review").put(isAuthenticatedUser, createProductReview);
// router.route("/reviews").get(isAuthenticatedUser, getProductReviews);
// router.route("/reviews").delete(isAuthenticatedUser, deleteReview);

// module.exports = router;
