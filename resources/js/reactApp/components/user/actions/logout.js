import axios from "axios";
import { useContext } from "react";
import UserContext from "../UserContext";

export const logout = async () => {
    const { setUser } = useContext(UserContext);
    try {
        const res = await axios.post("/logout");
        setUser(null);
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err.message);
    }
};
