const express = require("express");
const router = express.Router();

const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  allVendorOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/orders/")
  .get(isAuthenticatedUser, authorizeRoles("admin"), allOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

//vendors
router
  .route("/vendor/orders/")
  .post(isAuthenticatedUser, authorizeRoles("vendor"), allVendorOrders);
router
  .route("/vendor/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("vendor"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("vendor"), deleteOrder);

module.exports = router;

// const express = require("express");
// const router = express.Router();

// const {
//   newOrder,
//   getSingleOrder,
//   myOrders,
//   allOrders,
//   updateOrder,
//   deleteOrder,
// } = require("../controllers/orderController");

// const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

// router.route("/order/new").post(isAuthenticatedUser, newOrder);

// router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
// router.route("/orders/me").get(isAuthenticatedUser, myOrders);

// router
//   .route("/admin/orders/")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), allOrders);
// router
//   .route("/admin/order/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

// //vendors
// // router
// //   .route("/vendor/orders/")
// //   .get(isAuthenticatedUser, authorizeRoles("vendor"), allOrders);
// // router
// //   .route("/vendor/order/:id")
// //   .put(isAuthenticatedUser, authorizeRoles("vendor"), updateOrder)
// //   .delete(isAuthenticatedUser, authorizeRoles("vendor"), deleteOrder);

// module.exports = router;
