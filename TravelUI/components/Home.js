import React, { useState } from "react";
import { Button, StyleSheet, Text, View, ScrollView, SafeAreaView, Image, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import colors from "../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather'
import activitiesData from "../assets/data/activitiesData";
import discoverCategoriesData from "../assets/data/discoverCategoriesData";
import discoverData from "../assets/data/discoverData";
import learnMoreData from "../assets/data/learnMoreData";
import person from "../assets/images/myimage.png"
import Entypo from 'react-native-vector-icons/Entypo'
import styles from "./HomeStyle";


const Home = ({ navigation }) => {

    const [activeColor , setActiviColor] = useState('#F35D38')

    const renderDiscoverItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', {
                    item: item
                })}>
                <ImageBackground source={item.image}
                    style={[styles.discoverItem, { marginLeft: item.id === 'discover-1' ? 20 : 0 }]}
                    imageStyle={styles.discoverItemImage}>
                    <Text style={styles.discoverItemTitle}>{item.topic}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name='location-pin' style={18} color={colors.white} />
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderActivitiesItem = ({ item }) => {
        return (
            <View style={[styles.activityItemWrapper, { marginLeft: item.id === 'activities-1' ? 20 : 0 }]}>
                <Image source={item.image} style={styles.activityItemImage} />
                <Text style={styles.activityItemText}>{item.title}</Text>
            </View>
        )
    }

    const renderLearnMoreItem = ({ item }) => {
        return (
            <ImageBackground
                source={item.image}
                style={[styles.learnMoreItem,{marginLeft: item.id === 'learnMore-1' ? 20 : 0}]}
                imageStyle={styles.learnMoreItemImage}>
                <Text style={styles.learnMoreItemText}>{item.title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                        <Feather name="menu" size={32} color={colors.black} style={styles.menuIcon} />
                        <Image source={person} style={styles.profileImage} />
                    </View>
                </SafeAreaView>

                {/* Discover */}
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity><Text style={styles.discoverCategoriesTextWrapper}>All</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.discoverCategoriesTextWrapper}>Destinations</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.discoverCategoriesTextWrapper}>Cities</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.discoverCategoriesTextWrapper}>Experiences</Text></TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styles.discoverItemWrapper}>
                        <FlatList
                            data={discoverData}
                            renderItem={renderDiscoverItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                {/* Activities */}
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTtile}>Activities</Text>
                    <View style={styles.activitiesItemWrapper}>
                        <FlatList
                            data={activitiesData}
                            renderItem={renderActivitiesItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                {/* LearnMore */}
                <View style={styles.learnMoreWrapper}>
                    <Text style={styles.learnMoreText}>Learn More</Text>
                    <View style={styles.learnMoreItemWrapper}>
                        <FlatList
                            data={learnMoreData}
                            renderItem={renderLearnMoreItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


export default Home