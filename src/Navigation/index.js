import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasketScreen from '../screens/BasketScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import OrderScreen from '../screens/OrdersScreen';
import RestaurantDetailsPage from '../screens/RestaurantDetailsScreen';
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeTabs} />
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: 'white'}}>
            <Tab.Screen 
            name='HomeTabs' 
            component={HomeStackNavigator}
            options = {{
                tabBarIcon: ({ color}) => <Foundation name='home' size={24} color={color} />
            }}/>
            <Tab.Screen 
            name='Orders' 
            component={OrderStackNavigator} 
            options = {{
                tabBarIcon: ({ color}) => <MaterialIcons name= 'list-alt' size={24} color={color} />
            }}/>
            <Tab.Screen 
            name='Profile' 
            component={OrderScreen} 
            options = {{
                tabBarIcon: ({ color}) => <FontAwesome5 name='user-alt' size={24} color={color} />
            }}/>
        </Tab.Navigator>
    );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Restaurants' component={HomeScreen}/>
            <HomeStack.Screen name='Restaurant' component={RestaurantDetailsPage}/>
            <HomeStack.Screen name='Dish' component={DishDetailsScreen}/>
            <HomeStack.Screen name='Basket' component={BasketScreen}/>
        </HomeStack.Navigator>
    );
    
};

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen name='Orders' component={OrderScreen}/>
            <OrderStack.Screen name='Order' component={OrderDetailsScreen}/>
        </OrderStack.Navigator>
    );
    
};

export default RootNavigator;