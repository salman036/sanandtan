import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  AuthContainer,
  SignInContainer,
  HomeContainer,
  HandBraceletsContainer,
  NecklaceContainer,
  SunBlockCreamContainer,
  BikiniContainer,
  ScarfContainer,
  WaistBarceletsContainer,
  WaistOfBundleContainer,
  HatsContainer,
  FlipFlopContainer,
  AnkletsContainer,
  TanningCreamContainer,
  CartContainer,
  CategoriesContainer,
  JhonSmithContainer,
  AccountSettingContainer,
  MyProfileContainer,
  ChangePasswordContainer,
  ShippingAddressContainer,
  AddressContainer,
  ActiveOrderContainer,
  CompleteOrderContainer,
  PaymentMethodContainer,
  HandBraceletSecondContainer,
  MannequinContainer,
  SigninSignupTabsContainer,
  ResetPasswordContainer,
  VerifyPinContainer,
  ForgetPasswordContainer,
  AuthLoaderContainer,
  CreateShippingContainer,
  ActiveOrderDetailContainer,
  RecentProductContainer,
  AllProductsContainer,
  SingleManniquinContainer,
} from '../Containers';
import {AuthTabsContainer} from '../Screens';
import {bottomTabColor, robotoMedium} from './theme';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {DrawerContent} from '../Components';

const AuthStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName="AuthLoader">
      <Stack.Screen
        component={AuthTabsContainer}
        name="AuthTabs"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={AuthLoaderContainer}
        name="AuthLoader"
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="AuthMain"
        component={AuthContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={SignInContainer}
        name="SignIn"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ResetPasswordContainer}
        name="ResetPassword"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={VerifyPinContainer}
        name="VerifyPin"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={ForgetPasswordContainer}
        name="ForgetPassword"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={MyDrawer}
        name="Tabs"
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        component={HomeContainer}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={CategoriesContainer}
        name="Categories"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={HandBraceletsContainer}
        name="HandBracelets"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={NecklaceContainer}
        name="Necklace"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={SunBlockCreamContainer}
        name="SunBlockCream"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={BikiniContainer}
        name="Bikini"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ScarfContainer}
        name="Scarf"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={WaistOfBundleContainer}
        name="WaistOfBundle"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={HatsContainer}
        name="Hats"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={WaistBarceletsContainer}
        name="WaistBarcelets"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={FlipFlopContainer}
        name="FlipFlop"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={AnkletsContainer}
        name="Anklets"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={TanningCreamContainer}
        name="TanningCream"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={CartContainer}
        name="Cart"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={JhonSmithContainer}
        name="JhonSmith"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={AccountSettingContainer}
        name="AccountSetting"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={MyProfileContainer}
        name="MyProfile"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ChangePasswordContainer}
        name="ChangePassword"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ShippingAddressContainer}
        name="ShippingAddress"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={AddressContainer}
        name="Address"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ActiveOrderContainer}
        name="ActiveOrder"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={CompleteOrderContainer}
        name="CompleteOrder"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={PaymentMethodContainer}
        name="PaymentMethod"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={HandBraceletSecondContainer}
        name="HandBraceletSecond"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={MannequinContainer}
        name="Mannequin"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={MyTabs}
        name="Tabs"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={SigninSignupTabsContainer}
        name="SigninSignupTabs"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={CreateShippingContainer}
        name="CreateShipping"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ActiveOrderDetailContainer}
        name="ActiveOrderDetail"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={RecentProductContainer}
        name="RecentProducts"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={AllProductsContainer}
        name="AllProducts"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={SingleManniquinContainer}
        name="SingleMannique"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: bottomTabColor,
          paddingBottom: 10,
          paddingTop: 20,

          height: Platform.OS === 'ios' ? 60 : 60,
        },
      }}>
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View style={{justifyContent: 'center'}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="home"
                    size={22}
                    color="rgba(0,0,0,0.9)"
                  />
                  <Text style={styles.bottomActiveText}>Home</Text>
                </View>
              ) : (
                <View style={{justifyContent: 'center'}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="home"
                    size={22}
                    color="rgba(0,0,0,0.6)"
                  />
                  <Text style={styles.bottomUnActiveText}>Home</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="HomeRoute"
        component={HomeContainer}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View style={{justifyContent: 'center'}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="align-center"
                    size={20}
                    color="rgba(0,0,0,0.9)"
                  />
                  <Text style={styles.bottomActiveText}>Category</Text>
                </View>
              ) : (
                <View style={{justifyContent: 'center'}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="align-center"
                    size={22}
                    color="rgba(0,0,0,0.6)"
                  />
                  <Text style={styles.bottomUnActiveText}>Category</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="Category"
        component={CategoriesContainer}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View style={{justifyContent: 'center'}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="shopping-cart"
                    size={22}
                    color="rgba(0,0,0,0.9)"
                  />
                  <Text style={styles.bottomActiveText}>Cart</Text>
                </View>
              ) : (
                <View style={{justifyContent: 'center'}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="shopping-cart"
                    size={22}
                    color="rgba(0,0,0,0.6)"
                  />
                  <Text style={styles.bottomUnActiveText}>Cart</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="Cart"
        component={CartContainer}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View style={{justifyContent: 'center'}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="user"
                    size={22}
                    color="rgba(0,0,0,0.9)"
                  />
                  <Text style={styles.bottomActiveText}>Account</Text>
                </View>
              ) : (
                <View style={{justifyContent: 'center'}}>
                  <Icon
                    style={{textAlign: 'center'}}
                    name="user"
                    size={22}
                    color="rgba(0,0,0,0.6)"
                  />
                  <Text style={styles.bottomUnActiveText}>Account</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="Account"
        component={JhonSmithContainer}
      />
    </Tab.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={(props) => {
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen name="Home" component={App} />
    </Drawer.Navigator>
  );
};

const MainScreen = createSwitchNavigator(
  {
    Home: {
      screen: Auth,
    },
    Tabs: {
      screen: MyTabs,
    },
    MyDrawer: {
      screen: MyDrawer,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const styles = ScaledSheet.create({
  bottomActiveText: {
    fontSize: '13@s',
    lineHeight: '15@s',
    color: 'rgba(0,0,0,0.9)',
  },

  bottomUnActiveText: {
    fontSize: '13@s',
    lineHeight: '15@s',
    color: 'rgba(0,0,0,0.6)',
    fontFamily: robotoMedium,
  },
});

export default createAppContainer(MainScreen);
