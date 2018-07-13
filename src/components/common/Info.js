import React from 'react';
import {Link} from 'react-router-dom';
import Privacy from './Privacy';

const SiteInfo = () => {
    return (
        <div className="site-info">
            <h1>About GOTHEORY</h1>
            GoTheory was created as a side project by a very bored and GoT deprived person, waiting for the final season. The point is to share our craziest and funniest theories and predictions and have a little laugh before Game of Thrones returns.
            <br /><br /><hr />
            <p>
                <strong>Legal disclaimer:</strong> This website and its creators are not affiliated with Game of Thrones or any affiliated corporation. All characters, and brands mentioned on this website are the respective trademarks and copyrights of their owners.
            </p>
            <Link to='/privacy'>Privacy Statement</Link>
        </div>
    )
};

export default SiteInfo;


// https://www.tronalddump.io/privacy