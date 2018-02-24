import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    let loggedIn = !!JSON.parse(localStorage.getItem('user'));   
    return (
        <header className='App-header'>
            <h1 className='App-title navigation--link'><Link to='/'>GOTHEORY</Link></h1>
            <nav>
                <ul className='navigation--link-list'>
                    {/* <li className='navigation--link'>
                        <Link to='/'>home</Link>
                    </li> */}
                    <li className='navigation--link'>
                        <Link to='/theories'>theories</Link>
                    </li>
                    {loggedIn ?
                    <li className='navigation--link'>
                        <Link to='/add-theory'>add theory</Link>
                    </li> :
                    null}
                    <li className='navigation--link'>
                        {!loggedIn ? <Link to='/login'>join</Link> : <button>logout</button>}
                    </li> 
                </ul>
            </nav>
        </header>
    );
}

export default Header;