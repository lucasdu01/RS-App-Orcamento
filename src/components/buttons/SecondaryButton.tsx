import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function SecondaryButton({ children, nameIcon = null, ...rest }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#F0F0F0",
        flexDirection: "row",
        gap: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#E6E5E5",
        padding: 15,
        justifyContent: "center",
      }}
    >
      <MaterialIcons name={nameIcon} color="#6A46EB" size={24}></MaterialIcons>
      <Text style={{ color: "#6A46EB", fontWeight: "bold", fontSize: 18 }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}