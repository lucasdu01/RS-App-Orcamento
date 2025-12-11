import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";


export function TagRecusado(){
    return(
        <View style={styles.container}>
            <MaterialIcons name="circle" color="#DB4D4D"></MaterialIcons>
            <Text style={styles.label}>Recusado</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 6,
        backgroundColor: "#FFD6D6",
        fontWeight: "bold",
        borderRadius: 6,
        padding: 6,
        alignItems: "center",
    },
    label:{
        color: "#9E4949",
        fontWeight: "bold",
    }
});