import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
    children: React.ReactNode;
    title?: string,
    id?: string,
    tag?: any
}

export function Header({children, title="", id="", tag=null}:HeaderProps){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back-ios" color="black" size={20}></MaterialIcons>
            </TouchableOpacity>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        borderBottomColor: "#E6E5E5",
        borderBottomWidth: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 16,
    }
})