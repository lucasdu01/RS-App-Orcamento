import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type FilterComponentProps = {
  onOpenModal: () => void;
}

export function FilterComponent({ onOpenModal }: FilterComponentProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 24,
        gap: 8,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <MaterialIcons
          name="search"
          color="#4A4A4A"
          size={20}
          style={{
            position: "absolute",
            left: 20,
            zIndex: 1,
          }}
        />
        <TextInput
          style={{
            height: 48,
            borderWidth: 1,
            backgroundColor: "#FAFAFA",
            borderColor: "#E6E5E5",
            borderRadius: 50,
            paddingLeft: 50,
            paddingRight: 16,
          }}
          placeholder="Título ou cliente"
          placeholderTextColor="#676767"
        />
      </View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 50,
          padding: 12,
          backgroundColor: "#FAFAFA",
          borderColor: "#E6E5E5",
        }}
        onPress={onOpenModal}
      >
        <MaterialIcons
          name="filter-list"
          color="#6A46EB"
          size={24}
        ></MaterialIcons>
      </TouchableOpacity>
    </View>
  );
}
