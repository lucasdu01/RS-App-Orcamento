import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type RadioProps = {
    children: React.ReactNode;
}

export function RadioButton({children}: RadioProps){
    const [isChecked, setIsChecked] = useState(false);
    return(
        <View>
            <TouchableOpacity onPress={() => setIsChecked(true)} style={styles.container}>
                {!isChecked ? (<MaterialIcons name="radio-button-unchecked" size={20} color="#A1A2A1"></MaterialIcons>) : (<MaterialIcons name="radio-button-checked" size={20} color="#6A46EB"></MaterialIcons>)}
                <Text style={styles.label}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center"
    },
    label: {
        fontSize: 15,
    }
})