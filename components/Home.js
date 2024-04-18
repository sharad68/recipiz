import { StyleSheet, View, Text, Image } from "react-native";
import RecipeCard from "./RecipeCard";


export default function HomeScreen({ navigation }) {

   
   

    
    
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
       <Image source = {require('./../assets/logo-recipiz.png')} style = {styles.homeImage} />
      <Text>Random recipe: </Text>
      <RecipeCard />
    </View>
  );
}


const styles = StyleSheet.create({
    homeImage: {
        "height": 200,
        resizeMode: 'contain',
        marginBottom: 20
    },
    homeTitle: {
      fontSize: 23,
    }
});

