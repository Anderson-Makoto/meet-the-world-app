import { PermissionsAndroid } from "react-native"

const storageReadPermission = async (funcYes, funcNo = () => {}) => {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Permissão",
          message:
            "Permitir que o aplicativo acesse seu armazenamento pra vocẽ fazer upload de suas belas fotos de viagens.",
          buttonNegative: "Cancelar",
          buttonPositive: "Ok"
        }
      );
    
    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        funcYes()
    } else {
        funcNo()
    }
}

export { storageReadPermission }