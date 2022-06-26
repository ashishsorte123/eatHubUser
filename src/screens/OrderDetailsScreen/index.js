import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import orders from "../../../assets/data/orders.json";
import styles from './styles';
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from '../../components/DishListItem';
import OrderListItem from '../../components/OrderListItem';
import BasketDishItem from '../../components/BasketDishItem';

const order = orders[0];

const OrderDetailsHeader = ({ order }) => {
  return (
    <View>
      <View style={styles.page}>
            <Image source={{uri: order.Restaurant.image}} style={styles.image} resizeMode="repeat" />
            <View style={styles.container}>
                <Text style={styles.title}>{order.Restaurant.name}</Text>
                <Text style={styles.subTitle}>{order.status} &#8226; 2 days ago</Text>
                <Text style={styles.menuTitle}>Your Orders</Text>
            </View>
        </View>
    </View>
  );
};

const orderDetails = () => {
    return (
        <FlatList
        ListHeaderComponent={OrderDetailsHeader}
        data={restaurants[0].dishes} 
        renderItem={({item}) => <BasketDishItem basketDish={item} />} 
        />
    )
}

export default orderDetails;