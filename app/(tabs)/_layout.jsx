import { View, Text, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icons, color, name, focused }) => {
  return (
    <View>
      <Image
        source={icons}
        resizeMode="contain"
        tintColor={color}
        style= {{
          width: 24,
          height: 24,
        }}
        />  
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name = "home"
          options = {{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.home}
                  color = {color}
                  name = "Home"
                  focused = {focused}
                />
              );
            }
          }}
        />

<Tabs.Screen
          name = "menu"
          options = {{
            title: 'Menu',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.menu}
                  color = {color}
                  name = "Menu"
                  focused = {focused}
                />
              );
            },
          }}
          />
        <Tabs.Screen
          name = "addtocart"
          options = {{
            title: 'Addtocart',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.addtocart}
                  color = {color}
                  name = "Addtocart"
                  focused = {focused}
                />
              );
            },
          }}
        />
<Tabs.Screen
          name = "profileuser"
          options = {{
            title: 'Profileuser',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icons = {icons.profileuser}
                  color = {color}
                  name = "Profileuser"
                  focused = {focused}
                />
              );
            },
          }}
        />
     </Tabs>
    </>
  );
};


export default TabsLayout