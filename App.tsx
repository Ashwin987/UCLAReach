import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListingsProvider } from './ListingsContext';  // Import the provider
import WelcomeScreen from './WelcomeScreen';
import SchoolSelectionScreen from './SchoolSelectionScreen';
import LoginScreen from './LoginScreen';
import OptionsScreen from './OptionsScreen';
import ServiceListingsScreen from './ServiceListingsScreen';
import BuySellScreen from './BuySellScreen';
import EventTicketsScreen from './EventTicketsScreen';
import PostListingScreen from './PostListingScreen';
import TutoringScreen from './TutoringScreen';
import MovingHelpScreen from './MovingHelpScreen';
import EventCleanupScreen from './EventCleanupScreen';
import OtherScreen from './OtherScreen';
import analytics from '@react-native-firebase/analytics';  // Import Firebase Analytics

type RootStackParamList = {
    WelcomeScreen: undefined;
    SchoolSelectionScreen: undefined;
    LoginScreen: { selectedSchool: string };
    OptionsScreen: { selectedSchool: string };
    ServiceListings: undefined;
    BuySell: undefined;
    EventTickets: undefined;
    PostListingScreen: undefined;
    Tutoring: undefined;
    MovingHelp: undefined;
    EventCleanup: undefined;
    Other: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
    useEffect(() => {
        // Log an event to test Firebase Analytics
        analytics().logEvent('app_open', {
            screen_name: 'App',
        }).then(() => {
            console.log("Logged the event successfully");
        }).catch(error => {
            console.log("Failed to log the event:", error);
        });
    }, []);

    return (
        <ListingsProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="WelcomeScreen">
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                    <Stack.Screen name="SchoolSelectionScreen" component={SchoolSelectionScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="OptionsScreen" component={OptionsScreen} />
                    <Stack.Screen name="ServiceListings" component={ServiceListingsScreen} />
                    <Stack.Screen name="BuySell" component={BuySellScreen} />
                    <Stack.Screen name="EventTickets" component={EventTicketsScreen} />
                    <Stack.Screen name="PostListingScreen" component={PostListingScreen} />
                    <Stack.Screen name="Tutoring" component={TutoringScreen} />
                    <Stack.Screen name="MovingHelp" component={MovingHelpScreen} />
                    <Stack.Screen name="EventCleanup" component={EventCleanupScreen} />
                    <Stack.Screen name="Other" component={OtherScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ListingsProvider>
    );
}

export default App;
