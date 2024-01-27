import {  useState } from 'react'
import { getLogin } from '../api/apiGetLogin';


const useGetLogin = () => {

    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);

    const getTreeItemsList = async (btoa) => {

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
        getTreeItemsList,
        loading
    }
}

export default useGetLogin;