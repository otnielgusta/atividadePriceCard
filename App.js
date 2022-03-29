import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Janela2 from './lib/janelas/janela2/janela2';
import Janela3 from './lib/janelas/janela3/janela3';
import Produtos from './lib/janelas/produtos/produtos';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{
            title:"Produtos",
            headerStyle:{
              backgroundColor: '#633BBC',              
            },
            headerTintColor:"#fff",
            headerTitleAlign:'center',
            headerTitleStyle:{

              fontWeight:'bold'
            },
            headerShadowVisible: false
            
          }}
          
        />
  
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
