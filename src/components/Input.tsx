import { View, Text, TextInput, StyleSheet } from "react-native";

export function Input({children}){
    return(
        <View>
            <TextInput placeholder={children} placeholderTextColor={"#676767"} style={styles.input}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor:"#E6E5E5",
        borderRadius: 50,
        backgroundColor: "#F0F0F0",
        padding: 16,
    }
})