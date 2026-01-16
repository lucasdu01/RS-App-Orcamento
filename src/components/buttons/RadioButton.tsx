import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";

interface RadioButtonProps {
    options?: string[];
    children?: ReactNode;
    onChangeSelect: (option: string | number, index: number) => void;
    selectedRadio: number;
    index?: number
}

export const RadioButton = ({
    options, 
    children,
    onChangeSelect,
    selectedRadio,
    index = 0, 
}: RadioButtonProps) => {
    // Se tiver children, renderiza com children
    if (children) {
        return (
            <TouchableOpacity 
                onPress={() => onChangeSelect("", index)}
                style={styles.containerWithChildren}
            >
                <View style={styles.outlineCircle}>
                    {selectedRadio === index && <View style={styles.innerCircle}/>}
                </View>
                {children}
            </TouchableOpacity>
        );
    }

    // Se tiver options, renderiza lista vertical
    return(
        <View>
            {options?.map((opt, index) => (
                <TouchableOpacity 
                    key={index}
                    onPress={() => onChangeSelect(opt, index)}
                    style={styles.container}
                >
                    <View style={styles.outlineCircle}>
                        {selectedRadio === index && <View style={styles.innerCircle}/>}
                    </View>
                    <Text style={styles.label}>{opt}</Text>
                </TouchableOpacity>  
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        marginBottom: 8,
        alignSelf: "flex-start",
    },
    containerWithChildren: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    label: {
        fontSize: 15,
    },
    outlineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: "#A1A2A1",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#6A46EB",
    },
})