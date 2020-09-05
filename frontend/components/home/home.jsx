import React from 'react';
import { Link } from 'react-router-dom';
// import '../home/home.scss'

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout()
            .then(() => {
                this.props.history.push('/login')
            });
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div className="splash-body">
                <nav className="splash-nav">
                    <a href="">LOGO</a>
                    <div className="auth-container">
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </nav>
                <header className="splash-content">
                    Splash Content
                    <div className="inner-content">
                        <div className="splash-pitch">
                            <div className="heading">
                                <h1>Investing for Everyone</h1>
                            </div>
                            <div className="short-intro">
                                <span className="paragraph">
                                    "Quiche Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat ante libero, quis ultrices ligula aliquet vehicula. Vivamus"
                                </span>
                            </div>
                            <div className="splash-signup">
                                <Link to="/signup">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Home;

// return (
//     <nav className="nav-bar">
//         <div className='container'>
//             <div className='logo'>
//                 <Link to={'/'}>Quiche (Logo)</Link>
//             </div>
//             {navBar}
//         </div>
//     </nav>
// )