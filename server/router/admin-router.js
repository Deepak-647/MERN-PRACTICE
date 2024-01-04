const express = require("express");
const router = express.Router();
const {getAllUsers,getAllContacts, deleteUserById, getUsersById, updateUserById} = require("../controllers/admin-controller")
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.route('/users').get(authMiddleware,adminMiddleware,getAllUsers);
router.route('/users/:id').get(authMiddleware,adminMiddleware,getUsersById);
router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,updateUserById);
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,deleteUserById)
router.route('/contacts').get(authMiddleware,adminMiddleware,getAllContacts);

module.exports =router;