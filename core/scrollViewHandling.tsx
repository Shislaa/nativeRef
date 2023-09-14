import { useState } from "react";
import { View, Text } from "react-native";

export const scrollViewHandler = (styles?: any) => {
    const [Item, setItems] = useState([
        { key: 1, item: 'Item 1' },
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 6' },
        { key: 7, item: 'Item 7' },
        { key: 8, item: 'Item 8' },
        { key: 27, item: 'Item 27' },
        { key: 9, item: 'Item 10' },
        { key: 10, item: 'Item 11' },
        { key: 11, item: 'Item 12' },
        { key: 12, item: 'Item 13' },
        { key: 13, item: 'Item 14' },
        { key: 14, item: 'Item 15' },
        { key: 15, item: 'Item 16' },
        { key: 16, item: 'Item 17' },
        { key: 17, item: 'Item 18' },
        { key: 18, item: 'Item 19' },
        { key: 19, item: 'Item 20' },
        { key: 20, item: 'Item 21' },
        { key: 21, item: 'Item 22' },
        { key: 22, item: 'Item 23' },
        { key: 23, item: 'Item 24' },
        { key: 24, item: 'Item 25' },
        { key: 25, item: 'Item 26' },
        { key: 26, item: 'Item 9' }
      ]);
      const items = () => {
        return Item.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
    
          );
        });
      }
};