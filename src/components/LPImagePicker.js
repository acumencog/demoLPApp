import {Alert} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {PROFILE_IMAGE_PICKER_CONFIGS} from '../statics/Enums';
import {COMPONENT_STATICS} from './statics/ComponentStatics';

const PICKER_STATICS = {
  ALERT: COMPONENT_STATICS.IMAGE_PICKER_STATICS.SELECTION_MODAL,
};

const openCamera = (resolve, reject) => {
  ImageCropPicker.openCamera({
    width: PROFILE_IMAGE_PICKER_CONFIGS.WIDTH,
    height: PROFILE_IMAGE_PICKER_CONFIGS.HEIGHT,
    cropping: true,
    includeBase64: true,
    cropperCircleOverlay: true,
    mediaType: 'photo',
  })
    .then(response => {
      return resolve(response);
    })
    .catch(e => {
      reject(e);
    });
};

const openGallery = (resolve, reject) => {
  ImageCropPicker.openPicker({
    width: PROFILE_IMAGE_PICKER_CONFIGS.WIDTH,
    height: PROFILE_IMAGE_PICKER_CONFIGS.HEIGHT,
    cropping: true,
    includeBase64: true,
    cropperCircleOverlay: true,
    mediaType: 'photo',
  })
    .then(response => {
      return resolve(response);
    })
    .catch(e => {
      reject(e);
    });
};

const onDismiss = (resolve, reject) => {
  reject({message: 'User cancelled image selection'});
};

const openPicker = () =>
  new Promise((resolve, reject) => {
    Alert.alert(
      PICKER_STATICS.ALERT.HEADER,
      PICKER_STATICS.ALERT.DESCRIPTION,
      [
        {
          text: PICKER_STATICS.ALERT.CAMERA,
          onPress: () => openCamera(resolve, reject),
        },
        {
          text: PICKER_STATICS.ALERT.GALLERY,
          onPress: () => openGallery(resolve, reject),
        },
        {
          text: PICKER_STATICS.ALERT.CANCEL,
          onPress: () => onDismiss(resolve, reject),
          style: 'cancel',
        },
      ],
      {cancelable: true, onDismiss: () => onDismiss(resolve, reject)},
    );
  });

export default {
  openPicker,
  openCamera,
};
