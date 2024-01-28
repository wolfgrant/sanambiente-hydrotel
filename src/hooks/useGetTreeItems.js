import {  useState, useEffect } from 'react'
import { getTreeItems } from '../api/apiGetTreeItems';


const useGetTreeItems = () => {

    // eslint-disable-next-line no-unused-vars
    const [loadingTree, setLoadingTree] = useState(true);
    const [treeItems, setTreeItems] = useState({});
    const [errorTree, setErrorTree] = useState('');
    const [parameterApiTree, setParameterApiTree] = useState({
        level: 'Site',
        parentID: 10,
    })

    let queryParams = new URLSearchParams();
    const getTreeItemsList = async (btoa) => {
        queryParams.delete('Level');
        queryParams.delete('ParentID');
        
        if (parameterApiTree.level !== undefined && parameterApiTree.level !== null) {
            queryParams.append('Level', parameterApiTree.level);
        }

        if (parameterApiTree.parentID !== undefined && parameterApiTree.parentID !== null) {
            queryParams.append('ParentID', parameterApiTree.parentID);
        }

        try {
            setLoadingTree(true);
            const response = await getTreeItems(btoa, queryParams);
            setTreeItems(response)
        } catch (error) {
            setErrorTree(error)
        } finally {
            setLoadingTree(false);
        }
    }

    useEffect(() => {
        /* getTreeItemsList(localStorage.getItem('token')) */
        const intervalId = setInterval(() => {
            // Tu lógica aquí, este código se ejecutará cada 5 segundos
            console.log("Se realiza consutla cada 5 minutos para Tree");
            /* getTreeItemsList(localStorage.getItem('token')) */
        }, 5000 /* 300000 */);

        return () => clearInterval(intervalId);
    }, [parameterApiTree])


    return {
        loadingTree,
        treeItems,
        parameterApiTree,
        setParameterApiTree,
        errorTree
    }
}

export default useGetTreeItems;