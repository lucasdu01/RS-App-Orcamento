import { View, Text } from "react-native";

export function Header({ children }){
    return (
        <View 
            style={{
                width: "100%",
                flexDirection: "row",
                justifyContent:"space-between",
                marginBottom: 24,
                borderBottomColor: "#F0F0F0",
                borderBottomWidth: 2,
                padding: 20,
                alignItems: "center",
        }}>
            {children}

        </View>
    )
}