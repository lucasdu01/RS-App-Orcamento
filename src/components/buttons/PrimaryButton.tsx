import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function PrimaryButton({ children, nameIcon = null, ...rest }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#6A46EB",
        flexDirection: "row",
        gap: 5,
        justifyContent: "space-between",
        borderRadius: 50,
        padding: 15,
        alignItems: "center",
      }}
    >
      <MaterialIcons name={nameIcon} color="white" size={24}></MaterialIcons>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
