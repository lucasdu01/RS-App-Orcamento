import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
  nameIcon?: keyof typeof MaterialIcons.glyphMap;
};

export function Button({ children, nameIcon, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
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
      <Text style={{ color: "white", fontFamily: "Lato", fontSize: 18 }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
