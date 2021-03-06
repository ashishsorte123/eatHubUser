import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 30,
    },
    image: {
        width: '100%',
        aspectRatio: 5/3
    },
    title :{
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 15,
        color: 'grey'
    },
    container: {
        margin: 10
    },
    menuTitle: {
        marginTop: 20,
        fontSize: 18,
        letterSpacing: 0.7
    }
});

export default styles;