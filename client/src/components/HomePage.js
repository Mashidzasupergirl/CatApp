import React from 'react';
import { Link } from 'react-router-dom';


function HomePage(props) {


    return (
        <><div className='home-container'>
            <div className='side-of-home-container'>
                <div className='find-friend-container'>
                    <p>Cats are best</p>
                    <div className='button'><Link to='/allcats' disabled={props.isLoading}> Find friend</Link></div>
                </div>
            </div>
            <div className='side-of-home-container'>
                <div className='start-picture'>
                    pic
                </div>
            </div>
        </div><footer>
                footer
            </footer></>
    )
}

export default HomePage