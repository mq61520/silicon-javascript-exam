import './SearchItem.css'

function SearchItem({image, name}) {
    return (
        <div className="search-item" onClick={() => window.location.pathname = `/user/${name}`}>
            <img src={image ? image : ""} alt="Ảnh người dùng" />

            <h3>{name ? name : 'Not found'}</h3>
        </div>
    )
}

export default SearchItem;