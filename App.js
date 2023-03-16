import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Ionicons } from "react-native-vector-icons";
import Onboarding from "./src/components/onboarding/Onboarding";
import SignIn from "./src/components/signIn/SignIn";
import Settings from "./src/components/settings/Settings";
import Menu from "./src/components/menu/Menu";
import Message from "./src/components/message/Message";
import Element from "./src/components/element/Element";
import Shoping from "./src/components/shoping/Shoping";
import SearchEkran from "./src/SearchScreen/SearchEkran";
import Order from "./src/components/order/Order";

const Tab = createBottomTabNavigator();

// BU DOSYA ROUTER.JS DOSYASIDIR

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function Side() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MainScreen" component={Main} />
      <Drawer.Screen name="Popular" component={Element} />
      <Drawer.Screen name="Categories" component={Element} />
      <Drawer.Screen name="Favourite" component={Element} />
      <Drawer.Screen name="Account" component={Element} />
      <Drawer.Screen name="Settings" component={Element} />
    </Drawer.Navigator>
  );
}
function Main() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "MenuScreen") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "SearchScreen") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          } else if (route.name === "SettingsScreen") {
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          } else if (route.name === "MessageScreen") {
            iconName = focused ? "ios-chatbox" : "ios-chatbox-outline";
          } else if (route.name === "ElementScreen") {
            iconName = focused ? "ios-rocket" : "ios-rocket-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="SearchScreen" component={SearchEkran} />
      <Tab.Screen name="MessageScreen" component={Message} />
      <Tab.Screen name="MenuScreen" component={Menu} />
      <Tab.Screen name="ElementScreen" component={Element} />
      <Tab.Screen name="SettingsScreen" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={Onboarding} />
        <Stack.Screen name="SignInScreen" component={SignIn} />
        <Stack.Screen name="MainScreen" component={Main} />
        <Stack.Screen name="ShopingScreen" component={Shoping} />
        <Stack.Screen name="OrderScreen" component={Order} />
        <Stack.Screen name="SideScreen" component={Side} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
