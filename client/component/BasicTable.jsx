import React,{useState} from 'react'
import {format} from 'date-fns'
function BasicTable({data, setFilter, setRoot, rootData}) {
    const [check, setCheck] = useState();
    
    const deleteHandler = (id) => {
        const dataFilter = data.filter(ele => ele._id !== id)
        const filterRoot = rootData.filter(ele => ele._id !== id)
        setFilter(dataFilter)
        setRoot(filterRoot)
    }

    let sortedData = (sortedProducts) => {
        const sortData = sortedProducts.sort((a, b) => {
            if(check){
                setCheck(false)
                if (a.GivenName < b.GivenName) {
                    return -1;
                }
                return 0;
            }else{
                setCheck(true)
                if (a.GivenName > b.GivenName) {
                    return -1;
                }
                return 0;
            }
        });
        return sortData
    }
    let rootSortedData = (sortedProductsRoot) => {
        const sortDataRoot = sortedProductsRoot.sort((a, b) => {
            if(check){
                setCheck(false)
                if (a.GivenName < b.GivenName) {
                    return -1;
                }
                return 0;
            }else{
                setCheck(true)
                if (a.GivenName > b.GivenName) {
                    return -1;
                }
                return 0;
            }
        });
        return sortDataRoot
    }

    const sorting = () => {
        let sortedProducts = [...data];
        let sortedProductsRoot = [...rootData];
        let sortData = sortedData(sortedProducts)
        let sortDataRoot = rootSortedData(sortedProductsRoot)
        
        setFilter(sortData);
        setRoot(sortDataRoot)
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th onClick={sorting}>GivenName {!check ? ' ▲' : ' ▼'}</th>
                        <th>FamilyName</th>
                        <th>DateOfBirth</th>
                        <th>Reference</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? data.map((row) => {
                            return <tr key={row._id}>
                                    <td>{row.GivenName}</td>
                                    <td>{row.FamilyName}</td>
                                    <td>{format(new Date(row.DateOfBirth), 'dd/MM/yyyy')}</td>
                                    <td>{row.Reference}</td>
                                    <td><button onClick={() => deleteHandler(row._id)} className='btn_danger'>Delete</button></td>
                                </tr>
                        })
                    : <tr><td colSpan='5' className="noData">No Record Found</td></tr>}
                </tbody>
            </table>
        </>
    )
}

export default BasicTable
