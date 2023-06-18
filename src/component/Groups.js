import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../service/api';

export const Groups = () => {

    const [groupsData, setGroupsData] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [defaultGroup, setDefaultGroup] = useState(undefined);

    useEffect(() => {
        (async () => {
            await fetchFromStorage();
            await fetchData();
        })();
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

        await api.get('/fake_api/groups/')
            .then((response) => {
                let newArray = response.data.map((item) => {
                    return { key: item.id, value: item.name}
                })
                setGroupsData(newArray);
            }).catch((err) => { });
    };

    const storeData = async () => {
        try {
            const group = groupsData[selectedGroup - 1];
            if (null != group) {
                await AsyncStorage.setItem('@group', JSON.stringify(group));
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View>
            <Text style={styles.groupText}>Обреіть потрібну групу!</Text>
            <SelectList
                inputStyles={styles.groupList}
                dropdownTextStyles={styles.groupList}
                setSelected={setSelectedGroup}
                data={groupsData}
                defaultOption={defaultGroup}
                onSelect={async () => storeData()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    groupText: {
        display: 'flex',
        color: "white",
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    },

    groupList: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Groups;
