import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function ItemOrcamento() {
    return( 
        <View style={styles.container}>
            <View style={styles.containerDescription}>
                <Text style={styles.title}>Nome do Orçamento</Text>
                <Text style={styles.client}>Nome do cliente</Text>
            </View>
            <View style={{justifyContent: "space-between", gap: 10}}>
                <View style={styles.containerStatus}>
                    <MaterialIcons name="circle" color="#4BB84A"></MaterialIcons>
                    <Text style={styles.status}>Aprovado</Text>
                </View>
                <View style={styles.containerPrice}>
                    <Text style={{color: "#0F0F0F", alignSelf: "flex-end", margin: 2}}>R$</Text>
                    <Text style={styles.price}>22.300,00</Text>
                </View>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#FAFAFA",
        borderColor: "#E6E5E5",
        paddingBottom: 16,
        paddingLeft: 16,
    },
    containerDescription: {
        gap: 8,
        marginTop: 16,
        maxWidth: "50%",
        flex: 1,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0F0F0F",
    },
    client: {
        color: "#4A4A4A",
    },
    containerStatus: {
        flexDirection: "row",
        marginTop: 8,
        marginRight: 8,
        gap: 6,
        backgroundColor: "#BFF7BE",
        color: "#30752F",
        fontWeight: "bold",
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignItems: "center",
        alignSelf: "flex-end",
    },
    status: {
        color: "#30752F",
        fontWeight: "bold",
    },
    containerPrice: {
        flexDirection: "row", 
        gap: 4, 
        marginRight: 16,
    },
    price: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0F0F0F", 
    }
})