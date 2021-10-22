import { StyleSheet } from "react-native"
import { colors } from "../../helpers/constants"

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: colors.BACKGROUND_COLOR_1,
        flexDirection: "column",
    },
    editarButton: {
        height: "10%",
        width: "30%",
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: "5%"
    },
    editarButton_text: {
        color: colors.BUTTON_TEXT_COLOR_WHITE,
        fontSize: 15
    },
    sairButton: {
        height: "10%",
        width: "20%",
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: "5%"
    },
    sairButton_text: {
        color: colors.BUTTON_TEXT_COLOR_RED,
        fontSize: 20
    }
})

export default styles