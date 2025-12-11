import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "@/components/Input";

type SectionProps = {
    children: React.ReactNode;
    nameIcon: any,
    title: string,
}

export function Section({children, title, nameIcon}: SectionProps){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name={nameIcon} size={20} color="#6A46EB"></MaterialIcons>
                <Text style={styles.label}>{title}</Text>
            </View>
            <View style={styles.content}>
                {children}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: "#E6E5E5",
        borderWidth: 1,
        borderBottomWidth: 1,
    },
    header: {
        flexDirection: "row",
        gap: 8,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderBottomColor: "#E6E5E5",
        borderBottomWidth: 1,
    },
    content: {
        padding: 16,
        gap: 12,
    },
    label:{
        color: "#676767"
    }

})