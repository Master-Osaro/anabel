import disneyLogo from "../assets/Images/disney_logo.png" 
const Header = () => {
  return (
    <header>
        <div className="logo"><img src={disneyLogo} alt="" /></div>
        <nav className="nav-list">
        <ul>
            <li><a href="">Home</a> </li>
            <li><a href="">Episodes</a> </li>
            <li><a href="">Cast</a> </li>
            <li><a href="">Plot</a> </li>
            <li><a href="">Disney Club</a> </li>
            <li><a href="" className="btn btn-primary">Create Account</a> </li>
        </ul>
        </nav>
    </header>
  )
}

export default Header
