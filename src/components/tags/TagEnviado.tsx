import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";


export function TagEnviado(){
    return(
        <View style={styles.container}>
            <MaterialIcons name="circle" color="#2AA1D9"></MaterialIcons>
            <Text style={styles.label}>Enviado</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 6,
        backgroundColor: "#CEEFFF",
        fontWeight: "bold",
        borderRadius: 6,
        padding: 6,
        alignItems: "center",
    },
    label:{
        color: "#1D7096",
        fontWeight: "bold",
    }
});