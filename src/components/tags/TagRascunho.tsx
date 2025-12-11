import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";


export function TagRascunho(){
    return(
        <View style={styles.container}>
            <MaterialIcons name="circle" color="#A1A2A1"></MaterialIcons>
            <Text style={styles.label}>Rascunho</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 6,
        backgroundColor: "#E6E5E5",
        fontWeight: "bold",
        borderRadius: 6,
        padding: 6,
        alignItems: "center",
    },
    label:{
        color: "#676767",
        fontWeight: "bold",
    }
});