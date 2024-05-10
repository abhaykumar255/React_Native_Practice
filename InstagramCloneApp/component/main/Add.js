import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid, Platform , Button, ViewPropTypes, StyleSheet} from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll'
import { RNCamera } from 'react-native-camera'

// const Add = () => {
//   const [hasPermission, setHasPermission] = useState(false);

//   useEffect(() => {
//     const checkPermission = async () => {
//       const getCheckPermissionPromise = () => {
//         if (Platform.Version >= 33) {
//           return Promise.all([
//             PermissionsAndroid.check(
//               PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
//             ),
//             PermissionsAndroid.check(
//               PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO
//             ),
//           ]).then(
//             ([
//               hasReadMediaImagesPermission,
//               hasReadMediaVideoPermission,
//             ]) =>
//               hasReadMediaImagesPermission &&
//               hasReadMediaVideoPermission
//           );
//         } else {
//           return PermissionsAndroid.check(
//             PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
//           );
//         }
//       };

//       const hasPermission = await getCheckPermissionPromise();
//       setHasPermission(hasPermission);
//     };

//     checkPermission();
//   }, []);

//   const getRequestPermissionPromise = async () => {
//     if (Platform.Version >= 33) {
//       const statuses = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
//         PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
//       ]);

//       return (
//         statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
//           PermissionsAndroid.RESULTS.GRANTED &&
//         statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
//           PermissionsAndroid.RESULTS.GRANTED
//       );
//     } else {
//       const status = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
//       );

//       return status === PermissionsAndroid.RESULTS.GRANTED;
//     }
//   };

//   const savePicture = async () => {
//     if (Platform.OS === "android" && !hasPermission) {
//       return;
//     }

//     if (cameraRef.current) {
//       const options = { quality: 0.5, base64: true };
//       const data = await cameraRef.current.takePictureAsync(options);
//       CameraRoll.save(data.uri, { type: "photo", album: "MyAlbum" });
//     }
//   };

//   const cameraRef = React.createRef();

//   return (
//     <View style={ViewPropTypesStyle.flex}>
//       <RNCamera
//         ref={cameraRef}
//         style={ViewPropTypesStyle.flex}
//         type={RNCamera.Constants.Type.back}
//         captureAudio={false}
//       />
//       <Button title="Save Picture" onPress={savePicture} />
//     </View>
//   );
// };

// const ViewPropTypesStyle = StyleSheet.create({
//     flex : {
//         flex : 1
//     }
// })

// export default Add;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

const App = () => {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      const getCheckPermissionPromise = () => {
        if (Platform.Version >= 33) {
          return Promise.all([
            PermissionsAndroid.check(
              PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
            ),
            PermissionsAndroid.check(
              PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO
            ),
          ]).then(
            ([
              hasReadMediaImagesPermission,
              hasReadMediaVideoPermission,
            ]) =>
              hasReadMediaImagesPermission &&
              hasReadMediaVideoPermission
          );
        } else {
          return PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
          );
        }
      };

      const hasPermission = await getCheckPermissionPromise();
      setHasPermission(hasPermission);
    };

    checkPermission();
  }, []);

  const savePicture = async () => {
    if (Platform.OS === "android" && !hasPermission) {
      return;
    }

    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      
      const saveOptions = {
        type: "photo",
        album: "MyAlbum", // Replace with the desired album name
      };
      CameraRoll.save(data.uri, saveOptions);
    }
  };

  const cameraRef = useRef(null);

  return (
    <View style={styles.flex}>
      <RNCamera
        ref={cameraRef}
        style={styles.flex}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <Button title="Save Picture" onPress={savePicture} />
    </View>
  );
};

export default App;



