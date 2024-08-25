import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListingsContext } from './ListingsContext';

const EventCleanupScreen = () => {
    const { listings } = useContext(ListingsContext);
    const eventCleanupListings = listings.filter(listing => listing.category === 'Event Cleanup');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event Cleanup Listings</Text>
            <FlatList
                data={eventCleanupListings}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.listingContainer}>
                        <Text>{item.details}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    listingContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default EventCleanupScreen;
