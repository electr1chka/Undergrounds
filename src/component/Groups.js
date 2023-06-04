import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { SelectList } from 'react-native-dropdown-select-list'

export const Groups = () => {

  const [groupsData, setGroupsData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/groups')
    .then((response) => {
      console.log(response);
      let newArray = response.data.map((item) => {
        return {key: item.id, value: item.name}
      })
      setGroupsData(newArray);
    }).catch((err) => { });
  };

  return(
    <SelectList 
        setSelected={setSelectedGroup} 
        data={groupsData} 
        onSelect={() => alert(selectedGroup)}
    />
  )
}

export default Groups;
