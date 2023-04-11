import { useEffect, useState } from "react";
import RepositoryItem from "../../components/RepositoryItem";

import './SearchResult.css';

function SearchResult() {

    const [listRepo, setListRepo] = useState([]);

    const handleGetRepos = async () => {
        const user_name = window.location.pathname.slice(6);

        await fetch(`https://api.github.com/users/${user_name}/repos`)
                .then((response) => response.json())
                .then((data) => setListRepo(data))
    }

    useEffect(() => {
        handleGetRepos();
    }, []);

    console.log(listRepo);

    return (
        <div className="search-result-page">
            <span>User <b>{window.location.pathname.slice(6)}'s</b> repositories:</span>

            {listRepo.length > 0 ?
                (
                    <div className="repositories">
                        {listRepo.map(repo => {
                            return (
                                <RepositoryItem
                                    key={repo.id}
                                    name_repo={repo.name}
                                    des_repo={repo.description}
                                    star_repo={repo.stargazers_count}
                                    issues_number={repo.open_issues_count}
                                />
                            )
                        })}
                    </div>
                ) : <div className="loader"></div>
            }
        </div>
    );
}

export default SearchResult;