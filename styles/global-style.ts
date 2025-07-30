import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
    },
    mainResult: {
        fontSize: 48,
        fontWeight: '400',
        fontFamily: 'SpaceMono',
        color: Colors.textPrimary,
        textAlign: 'right',
    },
    subResult: {
        fontSize: 24,
        fontWeight: '400',
        fontFamily: 'SpaceMono',
        color: Colors.textSecondary,
        textAlign: 'right',
    }
});