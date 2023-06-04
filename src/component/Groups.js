import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SelectList } from 'react-native-dropdown-select-list'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Groups = () => {

    const [groupsData, setGroupsData] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [defaultGroup, setDefaultGroup] = useState(undefined);

    useEffect(() => {
        (async () => {
            await fetchFromStorage();
            await fetchData();
        }
        )();
    }, []);

    const fetchFromStorage = async () => {
        try {
            const value = await AsyncStorage.getItem('@group')
            if (value !== null) {
                setDefaultGroup(JSON.parse(value));
            }
        } catch (e) {
            console.log(e)
        }
    }

    const fetchData = async () => {
        await axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/groups')
            .then((response) => {
                let newArray = response.data.map((item) => {
                    return { key: item.id, value: item.name }
                })
                setGroupsData(newArray);
            }).catch((err) => { });
    };

    const storeData = async () => {
        try {
            const group = groupsData[selectedGroup - 1];
            if(null != group){
                await AsyncStorage.setItem('@group', JSON.stringify(group));
            }
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <SelectList        
            setSelected={setSelectedGroup}
            data={groupsData}
            defaultOption={defaultGroup}
            onSelect={async () => storeData()}
        />
    )
}

export default Groups;