import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { Home } from "@/app/Home";
import { NovoOrcamento } from "@/app/NovoOrcamento";

export type StackRoutesList = {
    home: undefined;
    novoOrcamento: undefined;
}

const Stack = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
    return(
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                name="home"
                component={Home}
            />
            <Stack.Screen
                name="novoOrcamento"
                component={NovoOrcamento}
            />
            {/* <Stack.Screen
                name="orcamento"
                //component={Orcamento}
            /> */}
        </Stack.Navigator>
    );
}