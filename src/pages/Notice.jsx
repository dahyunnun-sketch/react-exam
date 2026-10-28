import { useEffect, useState } from "react"

const Notice = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts?_limit=10"
                );
                setPosts(response.data);
            } catch (error) {
                console.error("데이터 불러오기 실패:", error);
            }
        }
        getPosts();
    }, []);

const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
);

    return(
        <div>
            <h2>공지 사항</h2>
            <input
                className="search" 
                type="text"
                placeholder="검색어 입력"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <p>검색 결과: {filteredPosts.length}건</p>

            <ul className="notice-list">
                {filteredPosts.map((post) => {
                    <li key={post.id}>
                        <span className="notice-id">{post.id}</span>
                        {post.title}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Notice;