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
        color: colors.BUTTON_TEXT_COLOR_WHITE,
        borderBottomWidth: 1,
        borderColor: colors.BUTTON_BORDER_COLOR_GRAY,
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
        borderColor: colors.BUTTON_BORDER_COLOR_GRAY,
        width: "25%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles