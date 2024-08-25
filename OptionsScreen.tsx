import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

type RootStackParamList = {
    OptionsScreen: { selectedSchool: string };
    ServiceListings: undefined;
    BuySell: undefined;
    EventTickets: undefined;
};

type OptionsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OptionsScreen'>;
type OptionsScreenRouteProp = RouteProp<RootStackParamList, 'OptionsScreen'>;

type Props = {
    navigation: OptionsScreenNavigationProp;
    route: OptionsScreenRouteProp;
};

const OptionsScreen: React.FC<Props> = ({ navigation, route }) => {
    const { selectedSchool } = route.params;
    const [searchQuery, setSearchQuery] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = () => {
        setErrorMessage(''); // Reset the error message

        const searchKey = searchQuery.trim().toLowerCase();

        switch (searchKey) {
            case 'tutoring':
            case 'moving help':
            case 'event cleanup':
            case 'other':
                navigation.navigate('ServiceListings');
                break;
            case 'buy':
            case 'sell':
                navigation.navigate('BuySell');
                break;
            case 'event tickets':
                navigation.navigate('EventTickets');
                break;
            default:
                setErrorMessage('No options found');
        }
    };

    const handleReviewPress = () => {
        const reviewUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeTZSWmSIhq5o2kpMQoJecUyZSjXVDXL95T7spYPlXKa57wdA/viewform?usp=sf_link';
        Linking.openURL(reviewUrl);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Options for {selectedSchool}</Text>

            <TextInput
                style={styles.searchBar}
                placeholder="Search options..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
            />

            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ServiceListings')}>
                <Icon name="construct-outline" size={24} color="#1E90FF" />
                <Text style={styles.buttonText}>Service Listings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('BuySell')}>
                <Icon name="swap-horizontal-outline" size={24} color="#1E90FF" />
                <Text style={styles.buttonText}>Buy/Sell</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('EventTickets')}>
                <Icon name="ticket-outline" size={24} color="#1E90FF" />
                <Text style={styles.buttonText}>Event Tickets</Text>
            </TouchableOpacity>

            <View style={styles.reviewButtonContainer}>
                <TouchableOpacity onPress={handleReviewPress}>
                    <Text style={styles.reviewButtonText}>Leave us a review</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    searchBar: {
        width: '80%',
        padding: 10,
        borderColor: '#1E90FF',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        padding: 10,
        marginVertical: 10,
        width: '80%',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#1E90FF',
        marginLeft: 10,
    },
    reviewButtonContainer: {
        marginVertical: 20,
        width: '80%',
        position: 'absolute',
        bottom: 20,
    },
    reviewButtonText: {
        color: '#1E90FF',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});

export default OptionsScreen;
