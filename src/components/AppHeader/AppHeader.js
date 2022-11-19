import './AppHeader.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
          <h1>React Twit App</h1>
          <h2>{allPosts} posts, {liked} likes</h2>
        </div>
    )
}

export default AppHeader