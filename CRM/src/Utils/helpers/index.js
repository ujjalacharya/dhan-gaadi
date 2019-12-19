import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../config"
import setAuthToken from "../setAuthToken";

export const checkIfTokenExpired = (token=null) => {
    const dec = jwt.decode(token, JWT_SECRET);
    if (Date.now() >= dec.exp * 1000) {
		console.log("new token generated")
      const payload = {
        _id: dec._id,
        name: dec.name,
        email: dec.email,
        role: dec.role,
        refresh_hash: dec.salt,
        avatar: dec.avatar || null
      };
      token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
    }
    setAuthToken(token);
    return token;
}