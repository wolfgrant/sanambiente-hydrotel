import { useState, useEffect } from 'react'
import { getLastValue } from '../api/apiGetLastValue';

const useGetLastValue = () => {

    // eslint-disable-next-line no-unused-vars
    const [lastItems, setLastItems] = useState();
    const [loading, setLoading] = useState(true);
    const [errorLast, setErrorLast] = useState(null)
    const [parameterApi, setParameterApi] = useState({
        point: 10,
        limit: null, // This parameter is not being used right now
    })

    let queryParams = new URLSearchParams();



    const  getLastValueItem  = async (btoa) => {
        queryParams.delete('Point');
        queryParams.delete('Limit');// This parameter is not being used right now
        const pointValue = typeof parameterApi.point === 'number' ? parameterApi.point : '';

        if (parameterApi.point !== undefined && parameterApi.point !== null) {
            queryParams.append('Point', pointValue);
        }

        // This parameter is not being used right now
        if (parameterApi.limit !== undefined && parameterApi.limit !== null) {
            queryParams.append('Limit', parameterApi.limit);
        }

        try {
            setLoading(true);
            const response = await getLastValue(btoa, queryParams);
            setLastItems(response)
            setErrorLast('')
        } catch (error) {
            setErrorLast(error.message)
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        /* getLastValueItem(localStorage.getItem('token')) */
        const intervalId = setInterval(() => {
            // Tu lógica aquí, este código se ejecutará cada 5 segundos
            console.log("Se realiza consutla cada 5 minutos para Last");
            /* getLastValueItem(localStorage.getItem('token')) */
        }, 5000 /* 300000 */);

        return () => clearInterval(intervalId);
    }, [parameterApi])


    return {
        errorLast,
        lastItems,
        loading,
        setParameterApi,
        parameterApi
    }
}

export default useGetLastValue;