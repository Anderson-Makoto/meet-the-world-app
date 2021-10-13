import { StyleSheet } from "react-native"
import { colors } from "../../helpers/constants"

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BACKGROUND_COLOR_1,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    options: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
    },
    options_label: {
        width: "85%",
        color: "white"
    },
    options_picker: {
        width: "85%",
        color: "white",
        backgroundColor: colors.BACKGROUND_COLOR_2
    },
    options_budget: {
        width: "85%",
        color: "white",
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    buttonView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    buttonView_button: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 25,
        width: "25%",
        height: "15%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles