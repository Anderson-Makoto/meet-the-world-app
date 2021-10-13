import { StyleSheet } from "react-native"
import { colors } from "../../helpers/constants"

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR_1,
        width: "100%"
    },
    image: {
        flex: 2,
        justifyContent: "center",
        width: "100%"
    },
    inputs: {
        paddingTop: "10%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        width: "65%"
    },
    inputs_button: {
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
    buttons: {
        paddingTop: "15%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "65%"
    },
    buttons_button: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        height: "30%",
        width: "30%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttons_button_text: {
        color: "white"
    }
})

export default styles