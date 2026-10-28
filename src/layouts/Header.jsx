import {Link} from "react-router-dom"


const Header = () => {

    return(
        <header>
            <h1>SPACE SHOP</h1>
            <nav>
                <Link to="/">상품 목록</Link>
                <Link to="/notice">공지사항</Link>
            </nav>
        </header>
    )
}

export default Header;