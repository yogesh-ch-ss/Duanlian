import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    {/* <span class="material-symbols-outlined">
                        sports_martial_arts
                    </span> */}
                    <div>
                        <h1>D u a n l i a n .</h1>
                        <h4>Personal Workout Tracker</h4>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Navbar