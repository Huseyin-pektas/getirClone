import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import AntDesign from "react-native-vector-icons/dist/AntDesign"

const HeaderMain = () => {
    const { height } = Dimensions.get('window') * (0.064)
    return (
        <View style={styles.headerMain}>
            <View style={styles.leftContainer}>
                <Image style={styles.image}
                    source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }} />

                <View style={styles.leftContainerIn}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", padding: 5 }}>Ev</Text>
                    <Text style={{ fontSize: 15, padding: 5 }}>Yeni mah. Ahmet Uyan Cad</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#5D3FBD"
                }}>TVS</Text>
                <Text style={{
                    fontSize: 25, fontWeight: "bold",
                    color: "#5D3FBD"
                }}>13<Text style={{ fontSize: 20 }}>dk</Text> </Text>
            </View>
        </View>
    )
}

export default HeaderMain

const styles = StyleSheet.create({

    headerMain: {
        width: "100%",
        backgroundColor: "#FFD301",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftContainer: {
        width: "80%",
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center", 
        alignItems: "center",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,

    },
    image: {
        width: 30,
        height: 30
    },
    leftContainerIn: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rightContainer: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    }
})