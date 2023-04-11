import { useEffect, useState } from "react";
import './Commit.css';

function Commit() {
    const [listCommit, setListCommit] = useState([]);

    const handleGetRepos = async () => {
        const path = window.location.pathname;
        const user_location = path.indexOf('un');
        const repo_location = path.lastIndexOf('rn');
        // const symbol = path.indexOf('&');

        const user_name = path.slice(user_location + 3, repo_location);
        const repo_name = path.slice(repo_location + 3, path.length);

        console.log(user_name, repo_name);

        await fetch(`https://api.github.com/repos/${user_name}/${repo_name}/commits`)
                .then((response) => response.json())
                .then((data) => {
                    setListCommit(data.slice(0, 10));
                })
    }

    useEffect(() => {
        handleGetRepos();
    }, []);

    console.log(listCommit);

    return (
        <div className='commit-page'>
            <span>Commits</span>

            {listCommit.length > 0 ?
                (
                    <div className='commits'>
                        {
                            listCommit.map(commit => {
                                return (
                                    <div
                                        className='commit'
                                        key={commit.sha}
                                        onClick={() => {
                                            window.open(commit.html_url);
                                        }}
                                    >
                                        <h3><i>Author: </i>{commit.commit.author.name}</h3>
                                        <h3><i>Commit message: </i>{commit.commit.message}</h3>
                                        <h3><i>Commit id: </i>{commit.sha}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : <div className="loader"></div>
            }
        </div>
    )
}

export default Commit;