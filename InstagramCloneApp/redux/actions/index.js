import { firebase } from "../../src/firebase/config";
import { USER_STATE_CHANGE } from "../constants/index";

export default fetchUser = () => {
    return ((dispatch) => {
        firebase.firestore()
            .collection('user')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot)=>{
                if(snapshot.exists){
                    dispatch({type : USER_STATE_CHANGE, currentUser : snapshot.data()})
                }else{
                    console.log('snapshot does not exists')
                }
            })
    })
}