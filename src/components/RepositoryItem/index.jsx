import './RepositoryItem.css'

function RepositoryItem({name_repo, des_repo, star_repo, issues_number}) {

    const user_name = window.location.pathname.slice(6);
    const payload = 'un='+user_name+'rn='+name_repo;

    return (
        <div className="repository-item" onClick={() => {
            window.open(`http://127.0.0.1:5173/user/repo/commits/${payload}`, '_self');
        }}>
            <div className="left-side">
                <h3><i>Name repo:</i> {name_repo}</h3>
                <h3><i>Desciption:</i> {des_repo}</h3>
            </div>

            <div className="right-side">
                <h3 style={{marginRight: '10px'}}><i>Star:</i> {star_repo}</h3>
                <h3><i>Issues number:</i> {issues_number}</h3>
            </div>
        </div>
    )
}

export default RepositoryItem;