import '../navs.css'
 import pic  from '../images/railway-station.png'

function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className='log'>
                <img src={pic}  className="logimg"/>
                <i className="logtext"> Railway</i>
            </div>
            <ul className="navs">
                <li className="navitems">
                    <a href="">Home</a>
                </li>
                <li className="navitems">
                    <a href="">About</a>
                </li>
                <li className="navitems">
                    <a href="">Contact</a>
                </li>
            </ul>

        </nav>
        </>
    );
}
export default Navbar