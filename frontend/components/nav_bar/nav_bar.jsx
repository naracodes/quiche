import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyDown = this.handleKeyDown(this);
    }

    handleClick(e) {
        e.preventDefault();
        // debugger
        this.props.logout()
            .then(() => {
                this.props.history.push('/login')
            })
    }

  handleKeyDown(e) {
    return e => {
      if (e.keyCode === 13) {
        this.props.history.push(`/dashboard/${e.currentTarget.value.toUpperCase()}`);
      } else {
        return;
      }
    }
  }

    render() {
        // debugger
        const { currentUser, logout } = this.props;
        const { history } = this.props.history;

        let navBar;
        if (currentUser) {
            navBar = (
              <nav className="logout-container">
                <div className="search-outer">
                  <form className="search-container">
                    <input
                      type="text"
                      id="search-bar"
                      onKeyDown={this.handleKeyDown}
                      tabIndex="0"
                    />
                    <img
                      className="search-icon"
                      src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                    />
                  </form>
                </div>
                <div className="dropdown-trigger">
                  <h4 className="dropdown-btn">Account</h4>
                  <ul className="dropdown-list">
                    <li>
                      {currentUser.firstName} {currentUser.lastName}
                    </li>
                    <li>
                      <button onClick={this.handleClick}>Log Out</button>
                    </li>
                  </ul>
                </div>
              </nav>
            );
        } else if (this.props.history.location.pathname === '/signup' || this.props.history.location.pathname === '/login' || this.props.history.location.pathname === '/dashboard') {
            navBar = null;
        } else {
            navBar = (
                <div className='nav-master'>
                    <nav className="nav-bar">
                        <div className='container'>
                            <div className='logo'>
                                <Link to={'/'}>Quiche (Logo)</Link>
                            </div>
                            <div className='spacer'>

                            </div>
                            <div className="user-entry">
                                <ul className='navLinks'>
                                    <li><Link to={'/login'}>Log In</Link></li>
                                    <li><Link id='sign-up' to={'/signup'}>Sign Up</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
        return (
            
                <div>
                { navBar }
                </div>
            
        )
    }
}

export default NavBar;

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