import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";
import Assets from "../../Assets";
import { Colors } from "react-native/Libraries/NewAppScreen";

type PlanetCardProps = {
  label: string,
  PlanetImage: React.FC<SvgProps>
}


const PlanetCard: React.FC<PlanetCardProps> = ({label, PlanetImage}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <PlanetImage style={styles.image} width={164} height={164}/>
        <View style={styles.footer}>
          <Text style={styles.label}>{label}</Text>
          <Assets.icons.Forward style={styles.icon} width={15} height={15}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandBackground,
    borderRadius: 8,
    width: 140,
    height: 190,
    overflow: "hidden",
  },
  label: {
    color: "white",
    marginLeft: 16
  },
  image: {
    right: 35,
    bottom: 20,
  },
  icon: {
    marginRight: 16,
    
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    alignItems: "center",
  }
})

export default PlanetCard;