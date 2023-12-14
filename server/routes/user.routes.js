const router = require("express").Router();
const {
  login,
  getAllUsers,
  register,
  getUserById,
  UpdateProfile,
} = require("../controllers/user.controller");

// auth for all
router.post("/login", login);
router.get("/allUsers", getAllUsers);
router.post("/registeruser", register);
router.get("/getUser/:id", getUserById);
router.put("/update/:id", UpdateProfile);

module.exports = router;
