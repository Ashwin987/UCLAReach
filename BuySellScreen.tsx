import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

type RootStackParamList = {
    BuyItems: undefined;
    SellItems: undefined;
};

type BuySellNavigationProp = StackNavigationProp<RootStackParamList, 'BuySell'>;

type Props = {
    navigation: BuySellNavigationProp;
};

const BuySellScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buy/Sell</Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('BuyItems')}>
                <Icon name="cart-outline" size={24} color="#1E90FF" />
                <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SellItems')}>
                <Icon name="swap-horizontal-outline" size={24} color="#1E90FF" />
                <Text style={styles.buttonText}>Sell</Text>
            </TouchableOpacity>
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
});

export default BuySellScreen;
