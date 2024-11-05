import {View, Text, TouchableOpacity, Image} from "react-native"
import styles from "./popularjobcard.style"

const PopularJobCard = ({item,selectedJob,handleCardPress}) => {
    const checkImageURL = (URL) => {
        if(!URL) return false
        else{
            const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i')
            return pattern.test(URL)
        }
    }
    return(
        <TouchableOpacity style={styles.container(selectedJob,item)}>
            <Image
                source={checkImageURL(item?.employer_log)
                    ?{url : item.employer_log}
                    :require('../../../../../assets/favicon.png')
                }
                
            />
        </TouchableOpacity>
            
    )}

export default PopularJobCard