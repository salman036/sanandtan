import React from 'react';

import {View, Image, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {white} from '../Utils/theme';
import {AuthContainer, SignInContainer} from '../Containers';
import HeaderLogo from '../Images/sanandtanLogo.png';

const FirstRoute = () => (
  <View style={styles.scene}>
    <AuthContainer />
  </View>
);

const SecondRoute = () => (
  <View style={styles.sceneOne}>
    <SignInContainer />
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};
const TabsComponent = ({navigate}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'SignUp', title: 'SignUp'},
    {key: 'SignIn', title: 'SignIn'},
  ]);

  const renderScene = SceneMap({
    SignUp: FirstRoute,
    SignIn: SecondRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      // {...props}
      indicatorStyle={{backgroundColor: white}}
      style={{backgroundColor: white}}
      activeColor="black"
      labelStyle={{fontSize: 20, fontWeight: 'bold'}}
      inactiveColor="#858585"
      tabStyle={{borderBottomColor: 'red', borderBottomWidth: 1}}
      //   renderLabel={({route, focused, color}) =>
      //     focused ? (
      //       <View style={{borderBottomColor: 'green', borderBottomWidth: 10}}>
      //         <Text style={{color}}>SignUp</Text>
      //       </View>
      //     ) : (
      //       <Text style={{color}}>SignIn</Text>
      //     )
      //   }
    />
  );

  return (
    <View style={styles.Container}>
      <View style={styles.headerLogo}>
        <Image source={HeaderLogo} />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.Container}
        tabBarPosition="top"
        lazy={true}
        navigate={navigate}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  Container: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
  sceneOne: {
    flex: 1,
  },
  headerLogo: {
    alignItems: 'center',
    padding: '10@s',
  },
});

export default TabsComponent;
