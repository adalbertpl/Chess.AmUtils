export default class StringUtils {
    isNullOrEmpty(str) {
        if (str == null 
            || str == "") {
                return true
        }

        return false
    }
}