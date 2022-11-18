import axios from "axios";
export const loadUser = async () => {
    try {
        const res = await axios.get("/user");

        return res.data;
    } catch (err) {
        console.log(err.message);
    }
};
