import { SafeAreaView } from 'react-native-safe-area-context';
import { Home } from "@/app/Home";
import { NovoOrcamento } from "@/app/NovoOrcamento";


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    	<NovoOrcamento />
    </SafeAreaView>
  );
}
