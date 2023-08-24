import express  from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controlles/userController.js';

const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

// Update user
router.put("/:id", verifyUser, updateUser);

// Delete user
router.delete("/:id", verifyUser, deleteUser);

// Get single user
router.get("/:id", verifyUser, getSingleUser);

// Get all user
router.get("/", verifyAdmin, getAllUser);


export default router;