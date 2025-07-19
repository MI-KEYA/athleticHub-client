import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Loading from '../Loading';
import userIcon from '/user.png';
import { Helmet } from 'react-helmet';

const Profile = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />
    }
    return (
        <div className=' flex items-center justify-center py-15 md:py-0 px-5 md:min-h-screen'>
            <Helmet>
                <title>AthleticHub | Profile</title>
            </Helmet>

            <div className='
               bg-white w-full max-w-md rounded-2xl p-8 
               shadow-[0_4px_25px_rgba(59,130,246,0.3)]
               transition-all duration-300 
               hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] 
                hover:scale-[1.02]
                border border-transparent hover:border-blue-400'
            >
                <div className='flex flex-col items-center gap-4 '>
                    <div className='w-24 h-24 rounded-full overflow-hidden p-1 border-4 border-blue-500'>
                        <img src={user?.photoURL || userIcon}
                            alt="User"
                            className='w-full h-full rounded-full object-cover' />
                    </div>
                    <h1> {user?.displayName}</h1>
                    <p>{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;