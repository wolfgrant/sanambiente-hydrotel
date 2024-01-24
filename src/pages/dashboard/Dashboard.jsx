/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import useGetTreeItems from '../../hooks/useGetTreeItems';


function Dashboard() {

    const {loading, treeItems, getTreeItemsList} = useGetTreeItems();
    useEffect(() => {
        getTreeItemsList()
    }, [])
    const encripted = localStorage.getItem('token')
    return ( 
        <h1>{encripted}</h1>
     );
}

export default Dashboard;