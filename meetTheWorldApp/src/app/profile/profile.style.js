import { StyleSheet } from "react-native"
import { colors } from "../../helpers/constants"

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: colors.BACKGROUND_COLOR_1,
        flexDirection: "column",
    },
    sairButton: {
        height: "10%",
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    sairButton_text: {
        color: "red",
        fontSize: 20
    }
})

export default styles