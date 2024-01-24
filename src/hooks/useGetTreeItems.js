import {  useState } from 'react'
import { getTreeItems } from '../api/apiGetTreeItems';


const useGetTreeItems = () => {

    // eslint-disable-next-line no-unused-vars
    const [treeItems, setTreeItems] = useState();
    const [loading, setLoading] = useState(true);

    const getTreeItemsList = async () => {

        try {
            setLoading(true);
            const response = await getTreeItems();
            setTreeItems(response);
        } catch (error) {
            return error.message
        } finally {
            setLoading(false);
        }
    }


    return {
        getTreeItemsList,
        treeItems,
        loading
    }
}

export default useGetTreeItems;