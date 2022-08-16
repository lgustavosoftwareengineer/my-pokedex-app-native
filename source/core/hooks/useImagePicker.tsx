import {useCallback, useState} from 'react';
import {
  launchImageLibrary,
  launchCamera,
  ImagePickerResponse,
  ImageLibraryOptions,
  CameraOptions,
} from 'react-native-image-picker';

export type UseImagePickerState = ImagePickerResponse;
export type UseImagePickerActions = {
  getImageFromLibrary(options: ImageLibraryOptions): void;
  getImageFromCamera(options: CameraOptions): void;
};

export type UseImagePicker = [UseImagePickerState, UseImagePickerActions];

export const useImagePicker = (): UseImagePicker => {
  const [image, setImage] = useState<ImagePickerResponse>({});

  const getImageFromLibrary = useCallback((options: ImageLibraryOptions) => {
    launchImageLibrary(options, setImage);
  }, []);
  const getImageFromCamera = useCallback((options: CameraOptions) => {
    launchCamera(options, setImage);
  }, []);

  return [image, {getImageFromCamera, getImageFromLibrary}];
};
