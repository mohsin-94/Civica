import React, {useState} from 'react';
import Data from '../server/data/personnel.json'
import BasicTable from './component/BasicTable';
import './style.css'
export default function App() {
    const [q, setQ] = useState('');
    const [dataFilter,setDataFilter] = useState(Data);
    const [rootData, setRootData] = useState(Data);
    
    const changeHandler = (e) => {
        setQ(e.target.value);
    }
    const search = (rows) => {
        return rows.filter(row => row.GivenName.toLowerCase().indexOf(q) !== -1)
    }
    let tableValue = search(dataFilter)
    
    return <>
            <label>Search By Given Name: </label>
            <input type="text" 
                placeholder='Search Data'
                value={q} 
                onChange={changeHandler}
                className='inputData' />
            
            <BasicTable data={q.length ? tableValue : rootData} setFilter={setDataFilter} setRoot={setRootData} rootData={rootData} />
        </>
}