import React, { Component } from 'react'
import { Modal, View, StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Button, Text, Icon } from 'native-base';

const PlaceDetail = props => {
    let modalContent = null;  

    if (props.selectedPlace) {
        modalContent = ( 
            <View>
                <Image source={props.selectedPlace.image}  style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        )
    }

    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.containerModal}>
                {modalContent}
                <View>
                    <Button color="red" onPress={props.onItemDeleted}>
                        <Text>DELETE</Text>
                    </Button>
                    <Button onPress={props.onModalClosed}>
                        <Text>CLOSE</Text>
                    </Button>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    containerModal: {
        marginTop: 28,
        padding: 20,
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
        marginTop: 20,
    }
})

export default PlaceDetail;