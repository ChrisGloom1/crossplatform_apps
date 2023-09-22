import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";
import { Gradients } from "../../Styles/StyleGuide";

type CategoryButtonProps = {
  label: string,
  Icon: React.FC<SvgProps>,
  color: "blue" | "pink" | "yellow" | "cyan",
  // onPress: () => void,
}

const CategoryButton: React.FC<CategoryButtonProps> = ({label, Icon, color}) => {

  const Gradient = Gradients[color];

  return(
    <TouchableOpacity>
      <Gradient style={styles.container}>
        <Icon style={styles.icon}/>
        <Text style={styles.label}>{label}</Text>
      </Gradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: 75,
    height: 75,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: 5
  },
  label: {
    color: "white"
  }
})

export default CategoryButton;