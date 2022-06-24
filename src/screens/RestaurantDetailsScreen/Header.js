import { Image, StyleSheet, Text, View } from "react-native"
import restaurants from "../../../assets/data/restaurants.json";
import styles from "./styles";

const restaurant = restaurants[0];

const RestaurantHeader = ({ restaurant }) => {
    return (
        <View style={styles.page}>
            <Image source={{uri: restaurant.image}} style={styles.image} resizeMode="repeat" />
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subTitle}>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes</Text>
                <Text style={styles.menuTitle}>Menu</Text>
            </View>
        </View>
    );
};



export default RestaurantHeader;