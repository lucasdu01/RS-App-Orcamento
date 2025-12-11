import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

type CheckboxProps = {
    children: React.ReactNode;
}

export function Checkbox({ children }: CheckboxProps){
    const [isChecked, setIsChecked] = useState(false);
    return(
        <View >
            <TouchableOpacity style={styles.container} onPress={() => setIsChecked(!isChecked)}>
                {isChecked ? (<MaterialIcons name="check-box" size={30} color={"#6A46EB"}></MaterialIcons>) : (<MaterialIcons name="check-box-outline-blank" size={30} color={"#A1A2A1"}></MaterialIcons>)}
                <Text>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: "row",
        gap: 12,
         alignItems: "center"
    }
});