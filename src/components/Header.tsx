import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type HeaderProps = {
    children: React.ReactNode;
    title?: string,
    id?: string,
    tag?: any
}

export function Header({children}, title="", id="", tag=null){
    return(
        <View style={styles.container}>
            <MaterialIcons name="arrow-back-ios" color="black" size={20}></MaterialIcons>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        borderBottomColor: "#F0F0F0",
        borderBottomWidth: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 16,
    }
})