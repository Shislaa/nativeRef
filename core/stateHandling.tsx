
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    Button,
    Linking,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

export const stateHandlingScreen = () => {
    const [name, setName] = useState('I am legal, trust me!');
    const [count, setCount] = useState(0);

    const styles = StyleSheet.create({
        body: {
          flex: 1,
          backgroundColor: '#ff00ff',
          alignItems: 'center',
          justifyContent: 'center'
        },
        text: {
          color: '#ffffff',
          fontSize: 20,
          fontStyle: 'italic',
          margin: 10
        },
        safeAreaStyle: {
          backgroundColor: '#ffffff'
        }
      });

    useEffect(() => {
        if (count < 10) {
            return;
        }
        setName((pre) => {
            return 'Free will is a myth, your tax money does nothing to the current state of society except for making the rich and powerful have even more control over your life'
        });
    }, [count])

    const handlePress = () => {
        setCount((pre) => {
            if (pre < 10) {
                return pre + 1;
            }
            console.log("Mon Lình", pre)
            return pre + 1
        });

    }
    const onPressResetState = () => {
        setName('I am legal, trust me!');
        setCount(0);
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>{name}</Text>
            <Button title='Click on me daddy' onPress={handlePress}></Button>
            <Text style={styles.text}>You clicked on me {count} times already DIFF</Text>
            <Button title='Wanna go another round?' onPress={onPressResetState}></Button>
        </View>
    );
}