import { StyleSheet } from "react-native"
import { colors } from "../../helpers/constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_COLOR_1
    },
    page: {
        flex: 8
    },
    menu: {
        flexDirection: "row",
        flex: 1
    },
    posts: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    create: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    profile: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles