import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import MyBookingList from './MyBookingList';

const mybookingsPromise = email => {
    return fetch(`http://localhost:3000/events?enail=${email}`)
        .then(res => res.json())
}

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    // const [bookings, setBookings] = useState([]);

    // useEffect(()=>{
    //     if(user && user.email)


    // },[])
    return (
        <div>
            <Suspense fallback={"Loading...."}>
                <MyBookingList
                    mybookingsPromise={mybookingsPromise(user.email)}>

                </MyBookingList>
            </Suspense>
        </div>
    );
};

export default MyBookings;