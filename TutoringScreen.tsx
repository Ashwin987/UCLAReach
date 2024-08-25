import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListingsContext } from './ListingsContext';

const TutoringScreen = () => {
    const { listings } = useContext(ListingsContext);
    const tutoringListings = listings.filter(listing => listing.category === 'Tutoring');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tutoring Listings</Text>
            <FlatList
                data={tutoringListings}
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

export default TutoringScreen;
