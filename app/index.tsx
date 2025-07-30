import { globalStyle } from '@/styles/global-style'
import React from 'react'
import { Text, View } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={globalStyle.calculatorContainer}>
            <Text style={globalStyle.mainResult}>50 x 50</Text>
            <Text style={globalStyle.subResult}>2500</Text>
        </View>
    )
}

export default CalculatorApp