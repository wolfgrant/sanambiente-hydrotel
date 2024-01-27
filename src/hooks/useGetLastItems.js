import { useState } from 'react'
import { getLastItems } from '../api/apiGetLastItems';

const useGetLastItems = () => {

    // eslint-disable-next-line no-unused-vars
    const [lastItems, setLastItems] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [parameterApi, setParameterApi] = useState({
        point: 10,
        limit: 5,
    })

    let queryParams = new URLSearchParams();



    const getLastItemsList = async (btoa, parameter) => {
        setParameterApi(parameter)
        queryParams.delete('Point');
        queryParams.delete('Limit');
        if (parameterApi.point !== undefined && parameterApi.point !== null) {
            queryParams.append('Point', parameterApi.point);
        }

        if (parameterApi.limit !== undefined && parameterApi.limit !== null) {
            queryParams.append('Limit', parameterApi.limit);
        }

        try {
            setLoading(true);
            const response = await getLastItems(btoa, queryParams);
            setLastItems(response)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }


    return {
        getLastItemsList,
        error,
        lastItems,
        loading
    }
}

export default useGetLastItems;