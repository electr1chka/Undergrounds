import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { SelectList } from 'react-native-dropdown-select-list'

export const Groups = () => {

  // const [groupsData, setGroupsData] = useState([]);
  // const [selectedGroup, setSelectedGroup] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/groups')
  //   .then((response) => {
  //     console.log(response);
  //     /*let newArray = response.data.map((item) => {
  //       return {key: item.id, value: item.name}
  //     })
  //     setGroupsData(newArray);*/
  //   }).catch((err) => { });
  // };

  return(
    // <SelectList 
    //     setSelected={setSelectedGroup} 
    //     data={groupsData} 
    //     onSelect={() => alert(selectedGroup)}
    // />
    <></>
  )
}

const Status = () => {
  const [statusData, setStatusData] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const response = axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/alarmstate');
    response.then((result) => {
      setStatusData(result.data);
    }).catch((err) => { });
  };

  return (
    <Image
      style={styles.headerImage}
      resizeMode="contain"
      source={statusData.status ? require("../../assets/alarm_icon.png") : require("../../assets/chill_icon.png")}
    />
  );
};

const styles = StyleSheet.create({
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
});


export default Status;
