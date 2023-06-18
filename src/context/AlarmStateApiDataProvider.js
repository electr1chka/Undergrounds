import {useEffect, useState} from "react";
import {AlarmStateApiDataContext} from "./AlarmStateApiDataContext";
import {api} from "../service/api";

const refreshInterval = 5000; // 5 sec

export const AlarmStateApiDataProvider = ({ children }) => {
    const [data, setData] = useState({status: false});

    useEffect(() => {
        const fetchData = async () => {
            await api.get('/fake_api/alarmstate')
                .then((response) => {
                    setData(response.data[0]);
                    console.log('alarm status:', response.data[0].status);
                })
                .catch(((err) => console.error(err)))
            ;
        }

        fetchData();

        const interval = setInterval(fetchData, refreshInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <AlarmStateApiDataContext.Provider value={data}>
            {children}
        </AlarmStateApiDataContext.Provider>
    );
};
