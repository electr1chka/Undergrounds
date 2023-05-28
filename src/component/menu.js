import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Menu = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.menuContainer}>
           <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('MapPage')}>
                <Text style={styles.textStyle}>Map</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('AboutPage')}>
                <Text style={styles.textStyle}>About</Text>
           </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent:"center",
        
    },

    buttonStyle: {
        backgroundColor: 'grey',
        padding: 20,
        borderRadius: 5,
        elevation: 2,
        width: 200,
        height: 60,
        alignContent: 'center',
    },

    textStyle:{
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Menu;