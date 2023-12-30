function NavBar() {

    return (  
        <>
        <nav className="navbar">
            <ul className="list">
                <li className="list-item">
                    <a href="/home">Home</a>
                </li>
                <li className="list-item">
                    <a href="/accounts">Account</a>
                </li>
                <li className="list-item">
                    <a href="/nft">NFT</a>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;