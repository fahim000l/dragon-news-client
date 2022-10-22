import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h1>Just kidding buddy! There is no terms and conditions.</h1>
            <h3>Go ahead <Link to={'/signup'}>Sign Up</Link>  </h3>
        </div>
    );
};

export default TermsAndCondition;