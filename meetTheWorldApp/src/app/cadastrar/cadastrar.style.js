import { StyleSheet } from "react-native";
import { colors } from "../../helpers/constants"

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BACKGROUND_COLOR_1,
        flex: 1,
        
    },
    textInput: {
        flex: 3,
        alignItems: "center",
        justifyContent: "space-around"
    },
    textInput_text: {
        color: "white",
        borderBottomWidth: 1,
        borderColor: "gray",
        width: "90%"
    },
    buttonSpace: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonSpace_button: {
        borderWidth: 1,
        borderRadius: 25,
        height: "20%",
        borderColor: "gray",
        width: "25%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles