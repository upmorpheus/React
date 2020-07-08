import firebase from 'gatsby-plugin-firebase';
import React, { createContext, useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import { isFileImage } from '../utils';
import { useDispatch, useSelector } from './ResumeContext';
import UserContext from './UserContext';

const defaultState = {
  uploadPhotograph: async () => {},
};

const StorageContext = createContext(defaultState);

const StorageProvider = ({ children }) => {
  const toastId = useRef(null);

  const { user } = useContext(UserContext);

  const id = useSelector((state) => state.id);
  const dispatch = useDispatch();

  const uploadPhotograph = async (file) => {
    if (!isFileImage(file)) {
      toast.error(
        "You tried to upload a file that was not an image. That won't look good on your resume. Please try again.",
      );
      return null;
    }

    const uploadTask = firebase
      .storage()
      .ref(`/users/${user.uid}/photographs/${id}`)
      .put(file);

    let progress = 0;
    toastId.current = toast('Firing up engines...', {
      progress,
    });

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        toast.update(toastId.current, {
          render: 'Uploading...',
          progress,
          hideProgressBar: false,
        });
      },
      (error) => toast.error(error),
      async () => {
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        dispatch({
          type: 'on_input',
          payload: {
            path: 'profile.photograph',
            value: downloadURL,
          },
        });

        toast.update(toastId.current, {
          render:
            'Your photograph was uploaded successfully... and you look great!',
          progress,
          autoClose: 5000,
          hideProgressBar: true,
        });

        toastId.current = null;
      },
    );
  };

  return (
    <StorageContext.Provider
      value={{
        uploadPhotograph,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageContext;

export { StorageProvider };
