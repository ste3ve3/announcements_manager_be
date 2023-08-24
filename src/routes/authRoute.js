import express from "express";
import AuthController from "../controllers/AuthController.js";
import authentication from "../middlewares/authentication.js";

const router = express.Router();

router.post("/", AuthController.createNewUser);
router.get('/', AuthController.getAllUsers);
router.delete('/', AuthController.deleteUser);
router.get("/confirmUser", AuthController.confirmUser);
router.post('/login', AuthController.loginUser);
router.post( '/logout', authentication.authLogin, AuthController.logoutUser );
router.get( '/loggedInUser', authentication.authLogin, AuthController.loggedInUser);
router.patch('/assignUserRole', AuthController.assignUserRole);

export default router;