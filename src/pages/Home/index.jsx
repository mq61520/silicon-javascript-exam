import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import SearchItem from '../../components/SearchItem';
// import { useDebounce } from '../../hooks/useDebounce';

import './Home.css'

function Home() {
    const [listRessult, setListResult] = useState();

    const handleFind = async (user_name) => {
        if(user_name === '') {
            setListResult('');
            return;
        } else {
            return await fetch(`https://api.github.com/users/${user_name}`)
                .then((response) => response.json())
                .then((data) => setListResult(data));
        }
        
    }

    console.log(listRessult);

    return (
        <div className='home-page'>
            <div className="search-input">
                <TextField 
                    id='text-field' 
                    label="Tìm kiếm" 
                    variant="outlined" 
                    onChange={e => {
                            handleFind(e.target.value);
                        }
                    }
                />
    
            </div>
    
            <div className="search-item-list">
                {listRessult ?
                    <div className='search-results'>
                        <SearchItem image={listRessult.avatar_url} name={listRessult.login} />
                    </div> : <></>
                }
            </div>
        </div>
    )
}

export default Home;