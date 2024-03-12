function Header(){

    const handleClick = (name) => {
        console.log(`${name} clicked`);
    }
    
    return(
        <>
        <header>
        <h1>Parallelline</h1>
            <nav className="navbar">
                
                <ul>
                    <li><a href="" onClick = {() =>handleClick("you")}>Home</a></li>
                    <li><a href="">Gallary</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
                
            </nav>
        </header>
        </>
    );
}

export default Header