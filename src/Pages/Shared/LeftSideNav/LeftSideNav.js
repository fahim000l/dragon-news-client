import { Link } from 'react-router-dom';

const LeftSideNav = ({ categories }) => {

    return (
        <div>
            <h4>All Categories : {categories.length}</h4>
            <div className='mt-5'>
                {
                    categories.map(category => <p
                        className='text-start fw-bold'
                        key={category.id}>
                        <Link>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;