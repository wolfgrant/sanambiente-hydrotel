import {  useState } from 'react'
import { getLogin } from '../api/apiGetLogin';


const useGetLoginAuth = () => {

    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);

    const getLoginAuth = async (btoa) => {

        try {
            setLoading(true);
            const response = await getLogin(btoa);
            return response
        } catch (error) {
            return(error.message);
        } finally {
            setLoading(false);
        }
    }


    return {
        getLoginAuth,
        loading
    }
}

export default useGetLoginAuth;