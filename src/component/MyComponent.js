import * as React from 'react';
import { View, ScrollView, StyleSheet } from "react-native"
import { BottomNavigation, Text, Card } from 'react-native-paper';
import data from '../../assets/data/data.json'


const MusicRoute = () => (

    <ScrollView>
        <Text style={{ fontSize: 30, margin: 10, marginStart: 20, fontWeight: "bold" }}>Home</Text>
        {data.map((element, key) => (
            <View style={{ flex: 1 }}>
                <Card style={styles.borderCard} key={key}>
                    <Card.Title title={element.date} subtitle={element.name} />
                    <Card.Title title={element.durée} subtitle={element.distance} />
                    <Card.Cover source={{ uri: element.image }} />
                </Card>
            </View>

        ))
        }
    </ScrollView>
)

const AlbumsRoute = () => <Text>Ajouter</Text>;

const RecentsRoute = () => <Text>Paramètres</Text>;

const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Accueil', icon: 'home-circle' },
        { key: 'albums', title: 'Ajouter', icon: 'comment-plus' },
        { key: 'recents', title: 'Paramètres', icon: 'power-settings' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default MyComponent;

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    borderCard: {
        flex: 0.3,
        backgroundColor: "white",
        borderWidth: 5,
        borderColor: "black",
        margin: 5,

    },
});