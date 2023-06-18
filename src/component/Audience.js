import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../service/api';

const Audience = () => {
    const [audience, setAudience] = useState();
    const [message, setMessage] = useState("");
    const [group, setGroup] = useState(undefined);
    const [shelter, setShelter] = useState({});
    const [statusData, setStatusData] = useState(false);

    useEffect(() => {
        fetchAlarmData();
    }, []);

    useEffect(() => {
        if (undefined !== group) {
            fetchShelterData();
        }
    }, [group]);

    useEffect(() => {
        messageConfig();
    }, [shelter])

    const changeText = (inputText) => {
        setAudience(inputText);
    }

    const endEditing = () => {
        if (parseInt(audience / 100) !== 0 &&
            parseInt(audience / 100) === 1 ||
            parseInt(audience / 100) === 2 &&
            parseInt(audience / 100) % 10 > 0 &&
            parseInt(audience / 100) % 10 < 5) {
            fetchFromStorage();
        } else {
            console.log("Error typing, try again!")
            setMessage("Помилка введення номеру аудиторії, певно ви помилились, спробуйте ще раз!")
        }
    }

    const fetchFromStorage = async () => {
        try {
            const value = await AsyncStorage.getItem('@group')
            if (value !== null) {
                const group = JSON.parse(value);
                fetchGroupData(group.key);
            }
        } catch (e) {
            console.log(e)
        }
    }

    const fetchGroupData = async (groupKey) => {
        try {
            const response = await api.get(`/fake_api/groups/${groupKey}`);
            setGroup(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    const fetchShelterData = async () => {
        try {
            const response = await api.get(`/fake_api/undergrounds/${group.underground}`);
            setShelter(response.data);
            //messageConfig();
        } catch (e) {
            console.error(e);
        }
    }

    const fetchAlarmData = async () => {
        try {
            const response = await api.get('/fake_api/alarmstate');
            setStatusData(response.data[0]);
        } catch (err) {
            console.error(err);
        }
    };

    const messageConfig = () => {
        if (undefined !== shelter.corps) {
            let code = "";
            if (parseInt(audience / 100) === shelter.corps) code += "1";
            else code += "0";
            if (parseInt(audience / 10) % 10 === 1) code += "1";
            else code += "0";
            //console.log(shelter.corps);
            switch (code) {
                case "00": setMessage(`Спустіться на перший поверх, перейдіть у корпус номер ${shelter.corps} та прямуйте в напрямку укриття, що позначене на карті червоним кольором!`); break;
                case "01": setMessage(`Ви знаходитесь на потрібному поверсі, тому лише перейдіть у корпус номер ${shelter.corps} та прямуйте в напрямку укриття, що позначене на карті червоним кольором!`); break;
                case "10": setMessage(`Ви знаходитесь у потрібному корпусі, тому лише спустіться на перший поверх та прямуйте в напрямку укриття, що позначене на карті червоним кольором!`); break;
                case "11": setMessage(`Ви знаходитесь у потрібному корпусі та на потрібному поверсі, прямуйте в напрямку укриття, що позначене на карті червоним кольором!`); break;
                default: setMessage("Не вдалося знайти аудиторію, будь ласка, спробуйте ще раз");
            }
        }
    }

    return (
        <View style={styles.viewInput}>
            <Text style={styles.audienceText}>Введіть номер аудиторії</Text>
            <TextInput
                style={styles.audienceInput}
                editable={statusData.status ? true : false}
                maxLength={3}
                placeholder='Номер аудиторії'
                placeholderTextColor={'#cfcfcf'}
                keyboardType='numeric'
                returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
                onChangeText={changeText}
                onEndEditing={endEditing}
            />
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    audienceText: {
        display: 'flex',
        color: "white",
        fontWeight: 'bold',
        paddingBottom: 10
    },

    audienceInput: {
        color: 'white',
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },

    viewInput: {
        display: 'flex',
        paddingTop: 10
    },

    message: {
        display: 'flex',
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 10
    }
});

export default Audience;
