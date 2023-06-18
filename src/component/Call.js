import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";

const Call = () => {
    const calling = (number) => {
        Linking.openURL(`tel:${number}`)
    }

    return (
        <View style={styles.menuContainer}>
            <Text style={styles.warningText} >Звертайтесь за цими номерами для виклику необхідної естренної служби! Будь ласка, не зловживайте викликами екстрених служб без необхідності. За це ви будете притягнуті до кримінальної відповідальності!</Text>
            <View>
                <View style={styles.viewPadding}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => calling("111")}>
                    <Text style={styles.textStyle}>🔴 Рятувальна служба 🚒</Text>
                </TouchableOpacity></View>
                <View style={styles.viewPadding}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => calling("222")}>
                    <Text style={styles.textStyle} >🔵 Національна поліція 🚓</Text>
                </TouchableOpacity></View>
                <View style={styles.viewPadding}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => calling("333")}>
                    <Text style={styles.textStyle}>⚪️ Швидка допомога 🚑</Text>
                </TouchableOpacity></View>
                <View style={styles.viewPadding}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => calling("444")}>
                    <Text style={styles.textStyle}>🟡 Газова служба 🚚</Text>
                </TouchableOpacity></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    menuContainer: {
        paddingTop: 10,
        justifyContent: "center",
    },

    buttonStyle: {
        display: 'flex',
        backgroundColor: '#1a1a1a',
        padding: 20,
        borderRadius: 10,
        height: 60,
    },

    textStyle: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    warningText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10
    },

    viewPadding: {
        paddingBottom: 15
    }
});

export default Call;