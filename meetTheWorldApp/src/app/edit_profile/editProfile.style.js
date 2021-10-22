import { StyleSheet } from "react-native"
import { colors } from "../../helpers/constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.BACKGROUND_COLOR_1,
        paddingVertical: "5%"
    },
    categoryName: {
        width: "100%",
        color: colors.BUTTON_TEXT_COLOR_WHITE
    },
    textInput: {
        color: colors.BUTTON_TEXT_COLOR_WHITE,
        backgroundColor: colors.BACKGROUND_COLOR_2,
        marginTop: "1%",
        marginBottom: "4%"
    },
    picker: {
        color: colors.BUTTON_TEXT_COLOR_WHITE,
        backgroundColor: colors.BACKGROUND_COLOR_2,
        marginTop: "1%",
        marginBottom: "4%"
    },
    buttons: {
        flexDirection: "row",
        height: "30%",
        justifyContent: "space-around",
        alignItems: "flex-end"
    },
    buttons_button: {
        borderWidth: 1,
        borderRadius: 15,
        height: "25%",
        width: "25%",
        borderColor: colors.BUTTON_BORDER_COLOR_GRAY,
        justifyContent: "center",
        alignItems: "center"
    },
    buttons_button_text: {
        color: colors.BUTTON_TEXT_COLOR_WHITE
    }
})

export default styles