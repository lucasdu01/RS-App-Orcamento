import { View, Text, TextProps } from "react-native";

export function Title({ children, ...rest}: TextProps){
    return (
        <View>
            <Text style={{color:"#6A46EB", fontSize:20, fontWeight:"bold", }}>
                {children}
            </Text>
            <Text style={{fontSize:12, color:"#676767"}} >Você tem X item em rascunho</Text>
        </View>
    )
}