import { useState } from "react";

const LikeButton = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>좋아요 {count}</p>
            <button onClick={() => setCount(count + 1)}>👍</button>
        </div>
    )
}

export default LikeButton;