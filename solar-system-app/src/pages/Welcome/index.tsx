import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Assets from "../../Assets";
import { Colors, Fonts } from "../../Styles/StyleGuide";
import Button from "../../components/Button";

const Welcome: React.FC = () => {

  return(
    <View style={styles.container}>
      <Assets.images.BackgroundApp style={styles.background}/>

      <Text style={[styles.welcome, Fonts.paragraph()]}>Velkommen</Text>
      <Text style={[styles.title, Fonts.homeTitle()]}>La oss utforske verdensrommet</Text>

      <Text style={[styles.title, Fonts.paragraph(), styles.bottomMargin]}>Trykk på knappen for å fortsette</Text>
      <Button title="Fortsett" Icon={Assets.icons.Forward}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandBackground,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    zIndex: 0
  },
  welcome: {
    color: "white",
    opacity: 0.7,
    textAlign: "center",
  },
  title: {
    color: "white",
    maxWidth: "85%",
    textAlign: "center",
  },
  bottomMargin: {
    marginTop: "50%"
  }
})

export default Welcome;