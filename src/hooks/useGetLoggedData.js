import { useState, useEffect } from 'react'
import { getLoggedData } from '../api/apiGetLoggedData';
import { forEach } from 'lodash';


const useGetLoggedData = () => {

    // eslint-disable-next-line no-unused-vars
    const [loadingLogged, setLoadingLogged] = useState(true);
    const [errorLogged, setErrorLogged] = useState('');
    const [loggedData, setLoggedData] = useState([]);
    const [parameterApiLogged, setParameterApiLogged] = useState({
        point: 9473,
        site: undefined,
        startDT: '2015-10-01T10:30:00',
        finishDT: '2015-10-01T10:45:00',
    })
    
    const createArrayGraph = (array) => {
        array.forEach(element => {
            setLoggedData((prevArray) => [...prevArray, {name: element.Name, uv: 2500+Math.floor() * 20, pv: 2500+Math.floor() * 20 }])
        });
    }

    let queryParams = new URLSearchParams();
    const getLoggedDataList = async (btoa) => {
        queryParams.delete('Point');
        queryParams.delete('Site');
        queryParams.delete('StartDT');
        queryParams.delete('FinishDT');

        if (parameterApiLogged.point !== undefined && parameterApiLogged.point !== null) {
            queryParams.append('Point', parameterApiLogged.point);
        }

        if (parameterApiLogged.site !== undefined && parameterApiLogged.site !== null) {
            queryParams.append('Site', parameterApiLogged.site);
        }

        if (parameterApiLogged.startDT !== undefined && parameterApiLogged.startDT !== null) {
            queryParams.append('StartDT', parameterApiLogged.startDT);
        }

        if (parameterApiLogged.finishDT !== undefined && parameterApiLogged.finishDT !== null) {
            queryParams.append('FinishDT', parameterApiLogged.finishDT);
        }

        try {
            setLoadingLogged(true);
            const response = await getLoggedData(btoa, queryParams);
            createArrayGraph(response)
            setErrorLogged('')
        } catch (error) {
            setErrorLogged(error.message);
        } finally {
            setLoadingLogged(false);
        }
    }

    useEffect(() => {
        getLoggedDataList(localStorage.getItem('token'))
        
        const intervalId = setInterval(() => {
            // Tu lógica aquí, este código se ejecutará cada 5 segundos
            console.log("Se realiza consutla cada 5 minutos para Logged");
            /* getLoggedDataList(localStorage.getItem('token')) */
        }, 5000 /* 300000 */);

        return () => clearInterval(intervalId);
    }, [parameterApiLogged])


    return {
        loadingLogged,
        loggedData,
        parameterApiLogged,
        setParameterApiLogged,
        errorLogged
    }
}

export default useGetLoggedData;