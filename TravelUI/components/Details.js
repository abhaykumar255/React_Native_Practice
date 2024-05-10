import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from "react-native";
import colors from "../assets/colors/colors";
import Entypo from 'react-native-vector-icons/Entypo'
import styles from "./DetailsStyle";


const Height = Dimensions.get('window').height


const Details = ({ route, navigation }) => {
    const { item } = route.params
    return (
        <View >
            <ScrollView >
                <ImageBackground
                    source={item.imageBig}
                    style={styles.backgroundImage}>
                    <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                        <Entypo name='chevron-left' size={32} color={colors.white} />
                    </TouchableOpacity>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.itemTitle}>{item.topic}</Text>
                        <View style={styles.locationWrapper}>
                            <Entypo name='location-pin' size={24} color={colors.white} />
                            <Text style={styles.loactionText}>{item.location}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.descriptionWrapper}>
                    <View style={styles.heartWrapper} >
                        <Entypo name='heart' size={32} color={colors.orange} />
                    </View>
                    <View style={styles.discriptionWrapper}>
                        <Text style={styles.discriptionTitle} >Description</Text>
                        <Text style={styles.discriptionText} >{item.description}</Text>
                    </View>
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoTitle} >PRICCE</Text>
                            <View style={styles.infoTextWrapper}>
                                <Text style={styles.infoText}>${item.price}</Text>
                                <Text style={styles.infoSubText}>/person</Text>
                            </View>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoTitle} >RATING</Text>
                            <View style={styles.infoTextWrapper}>
                                <Text style={styles.infoText}>{item.rating}</Text>
                                <Text style={styles.infoSubText}>/5 </Text>
                            </View>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoTitle} >DURATION</Text>
                            <View style={styles.infoTextWrapper}>
                                <Text style={styles.infoText}>{item.duration}</Text>
                                <Text style={styles.infoSubText}> hours</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonWrapper} onPress={() => Alert.alert('You booked a trip')} >
                        <Text style={styles.buttonText} >Book Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}


export default Details 