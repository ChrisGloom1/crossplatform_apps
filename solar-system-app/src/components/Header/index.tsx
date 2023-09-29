import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Assets from "../../Assets";
import { Fonts } from "../../Styles/StyleGuide";


const Header = () => {

  const handleSettingsPress = () => {
    console.log("Settings pressed");
  }



  return(
    <View style={styles.container}>

      <View>
        <View style={styles.helloBlock}>
          <Text style={[Fonts.homeTitle(), styles.textWhite]}>Velkommen, </Text>
          <Text style={[Fonts.homeTitle(), styles.textPink]}>Noob</Text>
        </View>
        <Text style={styles.textWhite}>Hva skarru lære i dag?</Text>
      </View>

      <TouchableOpacity onPress={handleSettingsPress}>
        <Assets.icons.Settings/>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40
  },
  helloBlock: {
    flexDirection: "row",
  },
  textWhite: {
    color: "white"
  },
  textPink: {
    color: "hotpink"
  },
})

export default Header;