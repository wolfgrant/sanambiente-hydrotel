/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import useGetLastItems from '../../hooks/useGetLastItems';
import './Dashboard.scss'


function Dashboard() {

    const { loading, treeItems, getLastItemsList } = useGetLastItems();

    useEffect(() => {
        getLastItemsList(localStorage.getItem('token'))
        const intervalId = setInterval(() => {
            // Tu lógica aquí, este código se ejecutará cada 5 segundos
            console.log("Se realiza consutla cada 5 minutos");
            getLastItemsList(localStorage.getItem('token'))
        }, 5000 /* 300000 */);

        return () => clearInterval(intervalId);
    }, [])
    const encripted = localStorage.getItem('token')
    return (
        <h1>{encripted}</h1>
    );
}

export default Dashboard;