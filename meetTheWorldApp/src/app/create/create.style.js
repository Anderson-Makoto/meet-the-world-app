import { StyleSheet } from "react-native"
import { colors } from "../../helpers/constants"

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        width: "85%",
        alignSelf: "center",
        // backgroundColor: "brown"
        // alignItems: 'center'
    },
    title: {
        width: "100%",
        height: "10%",
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    imageContainer: {
        height: "10%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.BACKGROUND_COLOR_2
    },
    uploadPhotosContainer: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        width: "40%",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
        alignSelf: "flex-start"
    },
    uploadPhotosContainer_text: {
        color: "white"
    },
    imageContainer_images: {
        flex: 1,
        height: "100%" 
    },
    imageContainer_delete: {
        flex: 3,
        alignItems: "flex-end",
        paddingRight: "10%",
        justifyContent: "center"
    },
    descrption: {
        marginTop: "5%",
        color: "white",
        height: "20%",
        width: "100%",
        backgroundColor: colors.BACKGROUND_COLOR_2
    },
    buttonsView: {
        width: "100%",
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        width: "40%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
        alignSelf: "flex-start"
    },
    saveButton: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        width: "40%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
        alignSelf: "flex-start"
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
        borderColor: "gray",
        marginTop: "5%"
    },
})

export default styles