import React from "react";
import { View, Text, Image } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function TabsLayout() {
  return (
   

   
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#5747E6", 
          paddingTop: 5, 
          height: 70,
          
          paddingBottom: 15, 
          borderTopLeftRadius: 15, 
          borderTopRightRadius: 15, 
          ...Platform.OS === "ios" ? {
            backgroundColor: "#5747E6", 
            paddingTop: 5, 
            height: 90,
            
            paddingBottom: 35, 
            borderTopLeftRadius: 0, 
            borderTopRightRadius: 0, 
          } : {},
        },
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#A0BFF5",
      }}
      tabBar={(props) =>
        Platform.OS === "ios" ? (
          <BlurView
            style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
            intensity={95}
          >
            <BottomTabBar {...props} />
          </BlurView>
        ) : (
          <BottomTabBar {...props} />
        )
      }
    >
      <Tabs.Screen
        name="index"
        
        options={{
          href: "/",
          
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              
              <Octicons name="home" size={20} color={color} />
              <Text className="font-psemibold" style={{ marginTop: 3, fontSize: 10, }}>
                
              </Text>
            </View>
          ),
        }}
      />
     
  

     

<Tabs.Screen
        name="settings"
        options={{
          href: {
            pathname: "/settings",
          },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <FontAwesome6 name="user-circle" size={20} color={color} />
              <Text style={{ marginTop: 3, paddingBottom: 10, fontSize: 10, opacity: 0.5 }}>
      
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  
  );
}

function TabBarIcon(props:any) {
  return (
    // <FontAwesome5
    //   size={props.size || 26}
    //   style={{ marginBottom: -3 }}
    //   {...props}
    // />
    <Ionicons name="home-outline" size={props.size || 26} color="black" style={{ marginBottom: -3 }} {...props}/>
  );
}
