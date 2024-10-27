import commonAPI from "./commonapi"
import SERVERURL from "./severURL"


//REG CALLED BY Auth
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}