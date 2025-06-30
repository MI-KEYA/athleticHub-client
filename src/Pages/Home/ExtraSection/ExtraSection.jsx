import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; // ✅ Correct import
import Football from './Football';
import Cricket from './Cricket';
import Loading from '../../../Components/Loading';

const ExtraSection = ({ events }) => {
    const [footballEvents, setFootballEvents] = useState([]);
    const [cricketEvents, setCricketEvents] = useState([]);
    const [loading, setLoading] = useState(true); // loading flag

    useEffect(() => {
        if (!events || events.length === 0) {
            setLoading(true);
            return;
        }

        const footballEventFilter = events.filter(event => event.event.toLowerCase() === "football");
        const cricketEventFilter = events.filter(event => event.event.toLowerCase() === "cricket");

        setFootballEvents(footballEventFilter);
        setCricketEvents(cricketEventFilter);
        setLoading(false);
    }, [events]);

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <Football footballEvents={footballEvents} />
            <Cricket cricketEvents={cricketEvents} />
        </div>
    );
};

export default ExtraSection;
