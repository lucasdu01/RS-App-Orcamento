import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";


export function TagAprovado(){
    return(
        <View style={styles.container}>
            <MaterialIcons name="circle" color="#4BB84A"></MaterialIcons>
            <Text style={styles.label}>Aprovado</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 6,
        backgroundColor: "#BFF7BE",
        fontWeight: "bold",
        borderRadius: 6,
        padding: 6,
        alignItems: "center",
    },
    label:{
        color: "#30752F",
        fontWeight: "bold",
    }
});