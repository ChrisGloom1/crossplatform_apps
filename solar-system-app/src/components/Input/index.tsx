import { useState } from "react"
import { NativeSyntheticEvent, StyleSheet, Text, TextInputChangeEventData, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Colors, Fonts } from "../../Styles/StyleGuide"

type InputProps = {
  onTextChange?: (text: string) => void
}


const Input: React.FC<InputProps> = ({ onTextChange }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInputValue(event.nativeEvent.text)
    onTextChange && onTextChange(event.nativeEvent.text)
  }

  return(
    <View style={styles.container}>
      <TextInput value={inputValue} onChange={handleInputChange} placeholder="Search..." style={[styles.input, Fonts.paragraph()]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: Colors.brandBackground,
    height: 50,
    borderRadius: 25
  },
  input: {
    flex: 1,
    color: "white",
    opacity: 0.6,
    fontSize: 20
  }
})

export default Input;