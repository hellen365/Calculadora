import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, TouchableOpacity, TextInput} from 'react-native';



export default function App(){

const [currentNumber, setCurrentNumber] = useState("")
const [lastNumber, setLastNumber] = useState("")

function calculator(){
  const splitNumber = currentNumber.split(' ')
  const fistNumber = parseFloat(splitNumber[0])
  const lastNumber = parseFloat(splitNumber[2])
  const operator = splitNumber[1]

  switch(operator){
    case '+':
      setCurrentNumber((fistNumber + lastNumber).toString())
      return
    case '-':
      setCurrentNumber((fistNumber - lastNumber).toString())
      return
   case '*':
      setCurrentNumber((fistNumber * lastNumber).toString())
      return
    case '/':
     setCurrentNumber((fistNumber / lastNumber).toString())
      return

  }
}

function handerInput(buttonPressed){
   if(buttonPressed === '+' | buttonPressed === '*' | buttonPressed === '-' |
   buttonPressed === '/' ){
      setCurrentNumber(currentNumber+ " " + buttonPressed + " ")
      return
   }

   switch(buttonPressed){
     case 'C':
     setCurrentNumber(currentNumber.substring(0, currentNumber.length -1))
     setLastNumber("")
     return
     case '=':
      setLastNumber(currentNumber + " = ")
      calculator()
      return
    
   }
    setCurrentNumber(currentNumber + buttonPressed )
}

 
  return(
  <View style={styles.container}>

<View style={styles.resultContainer}>
  <Text style={styles.resultText}>{currentNumber}</Text>
  <Text style={styles.result}>{lastNumber}</Text>
      </View>
      <View style={styles.inputContainer}>
      <View style={styles.containner}>
      <TouchableOpacity style = {styles.box}><Text style={styles.text} onPress={() => handerInput(7)}> 7</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.box}><Text style={styles.text} onPress={() => handerInput(8)}> 8</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.box}><Text style={styles.text} onPress={() => handerInput(9)}> 9</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.sinais}><Text style={styles.text} onPress={() => handerInput('C')}> C</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.box}><Text style={styles.text} onPress={() => handerInput(4)}> 4</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.box}><Text style={styles.text} onPress={() => handerInput(5)}> 5</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.box}><Text style={styles.text} onPress={() => handerInput(6)}> 6</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.sinais}><Text style={styles.text} onPress={() => handerInput("/")}> /</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.box}><Text style={styles.text} onPress={() => handerInput(1)}> 1</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.box}><Text style={styles.text} onPress={() => handerInput(2)}> 2</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.box}><Text style={styles.text} onPress={() => handerInput(3)}> 3</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.sinais}><Text style={styles.text} onPress={() => handerInput('-')}> -</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.box}><Text style={styles.text} onPress={() => handerInput(0)}> 0</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.sinais}><Text style={styles.text} onPress={() => handerInput('*')}> *</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.sinais}><Text style={styles.text} onPress={() => handerInput("=")}> =</Text></TouchableOpacity>
      <TouchableOpacity style = {styles.sinais}><Text style={styles.text} onPress={() => handerInput("+")}> +</Text></TouchableOpacity>
    </View>

      </View>

      
  </View>
    
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1
  
 },
  containner:{
      flexDirection: "row",
      flexWrap:'wrap'
  },

  box:{
    flex: 1,
    minHeight:100,
    minWidth:90,
    padding: 25,
    borderColor: 'white',
    backgroundColor: '#ff9980',
    borderWidth: 0.3,
    margin: 0
    
  },
  resultContainer:{
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#ffff'
  },

  inputContainer:{
    flex: 2,
    backgroundColor: '#ff9980'
  },
  resultText:{
     color: 'black',
     fontSize: 40,
     padding: 20,
     textAlign: "right"
  },
  result:{
    color: '#7c7c7c',
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "right"
  },

  input:{
    textAlign: "center",
    alignSelf: "stretch",
    marginHorizontal: 20,
    fontSize: 30,
    height: 50,
    backgroundColor: '#FFF',
    marginTop: 20
  },
  text:{
    textAlign: "center",
    fontSize: 30,
    color: 'white'

  },
  sinais:{
    flex: 1,
    minHeight:100,
    minWidth:90,
    padding: 25,
    borderColor: 'white',
    backgroundColor: '#ff5c33',
    borderWidth: 0.3,
    margin: 0
  }

});