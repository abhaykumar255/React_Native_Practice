// src/Camera.js
import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  Camera,
  CameraCaptureQuality,
  CameraRecordingQuality,
//   CameraZoomPinchGesture,
  CameraAuthorizationStatus,
  CameraWhiteBalancePreset,
  CameraFocusMode,
} from 'react-native-vision-camera';

const CameraComponent = () => {
  const cameraRef = useRef();
  const [isRecording, setIsRecording] = useState(false);
  useEffect(() => {
    const setupCamera = async () => {
      try {
        await Camera.requestCameraPermissions();
        await Camera.requestMicrophonePermission();
      } catch (e) {
        console.error('Error setting up camera:', e);
      }
    };

    setupCamera();
  }, []);

  useEffect(() => {
    return () => {
      Camera.release();
    };
  }, []);
//   useEffect(() => {
//     const setupCamera = async () => {
//       try {
//         await Camera.requestCameraPermissions();
//         await Camera.requestMicrophonePermission();
//       } catch (e) {
//         console.error('Error setting up camera:', e);
//       }
//     };

//     setupCamera();
//   }, []);

  const handleCapturePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto({
        quality: CameraCaptureQuality.High,
      });

      console.log('Captured photo:', photo);
      // Handle the captured photo as needed
    }
  };

  const handleToggleRecording = async () => {
    if (cameraRef.current) {
      if (isRecording) {
        await cameraRef.current.stopRecording();
      } else {
        const video = await cameraRef.current.record({
          quality: CameraRecordingQuality['720p'],
        });

        console.log('Recorded video:', video);
        // Handle the recorded video as needed
      }

      setIsRecording(!isRecording);
    }
  };

  const handleZoomPinchGesture = (event) => {
    if (cameraRef.current) {
      cameraRef.current.setZoom(event.nativeEvent.scale);
    }
  };

  const handleSwitchCamera = () => {
    if (cameraRef.current) {
      cameraRef.current.flipCamera();
    }
  };

  const handleSetWhiteBalance = () => {
    if (cameraRef.current) {
      cameraRef.current.setWhiteBalance(CameraWhiteBalancePreset.Auto);
    }
  };

  const handleSetFocusMode = () => {
    if (cameraRef.current) {
      cameraRef.current.setFocusMode(CameraFocusMode.Auto);
    }
  };

  const handleAuthorizationStatus = (status) => {
    console.log('Camera authorization status:', status);
    // Handle camera authorization status as needed
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        autoFocus="on"
        type={Platform.OS === 'android' ? 1 : 'back'} // Use 1 for Android and 'back' for iOS as the camera type
        ratio="16:9"
        zoom={0}
        flash="off"
        videoStabilizationMode={Platform.OS === 'ios' ? 'auto' : 'off'}
        onAuthorizationStatus={handleAuthorizationStatus}
      />

      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton} onPress={handleCapturePhoto}>
          <Text style={styles.controlText}>Capture Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton} onPress={handleToggleRecording}>
          <Text style={styles.controlText}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton} onPress={handleSwitchCamera}>
          <Text style={styles.controlText}>Switch Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton} onPress={handleSetWhiteBalance}>
          <Text style={styles.controlText}>Set White Balance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton} onPress={handleSetFocusMode}>
          <Text style={styles.controlText}>Set Focus Mode</Text>
        </TouchableOpacity>
      </View>

      {/* Pinch Gesture for Zoom */}
      {/* <CameraZoomPinchGesture
        style={{ flex: 1 }}
        onZoomPinchGesture={handleZoomPinchGesture}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  controlButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  controlText: {
    color: 'white',
  },
});

export default CameraComponent;
