/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import useGetLastValue from '../../hooks/useGetLastValue';
import './Dashboard.scss'
import useGetTreeItems from '../../hooks/useGetTreeItems';
import useGetLoggedData from '../../hooks/useGetLoggedData';


function Dashboard() {

    const { loading, lastValue, errorLast, parameterApi, setParameterApi } = useGetLastValue();
    const { loadingTree, treeItems, errorTree, parameterApiTree, setParameterApiTree } = useGetTreeItems();
    const { loadingLogged, loggedData, errorLogged, parameterApiLogged, setParameterApiLogged } = useGetLoggedData();

    const encripted = localStorage.getItem('token')
    
    return (
        <h1>{encripted}</h1>
    );
}

export default Dashboard;