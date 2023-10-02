import { useState, useEffect } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import ProfileAvatar from '../../../assets/profile-avatar.png'
import FileUploadBtn from '../../general/FileUploadBtn';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProfilePic } from '../../../store/reducers/profileReducer';
import { useNavigate } from 'react-router-dom';

function ProfilePicUploader({ formStep, setFormStep, closeModal, isMobileView }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const dispatch = useDispatch();
    const profilePic = useSelector((state) => state.appReducers.profile?.profilePic)
    const navigate = useNavigate();

    useEffect(() => {
        console.log(uploadedImageUrl);
        dispatch(uploadProfilePic({
            profilePic: uploadedImageUrl
        }))
    }, [uploadedImageUrl, dispatch]);

    const redirect = (e) => {
        navigate('/');
    }

    return (
        <div>
            {
                (formStep === 8) &&
                <>
                    <div className="my-4">
                        <p className="font-bold text-center text-sm uppercase mb-2">Step 2 of 2</p>
                        <h2 className="font-semibold text-center text-2xl mb-2">
                            Add a profile photo
                        </h2>
                        <p className="text-lg text-center mb-2">
                            Pick an image that shows your face.Hosts won&apos;t be able to
                            see your profile photo until your reservation is confirmed.
                        </p>
                    </div>
                    <div className='flex justify-center items-center mt-4 mb-8 lg:mb-20 lg:my-8'>
                        <img
                            src={(uploadedImageUrl || profilePic) ? (uploadedImageUrl || profilePic) : ProfileAvatar}
                            className='w-[220px] h-[220px] rounded-full'
                        />
                    </div>
                    <div>
                        {
                            !profilePic &&
                            <FileUploadBtn
                                fileState={selectedFile}
                                fileUploaderFunc={setSelectedFile}
                                btnText="Upload a photo"
                                customFunc={setFormStep}
                                uploadedImageUrl={uploadedImageUrl}
                                setUploadedImageUrl={setUploadedImageUrl}
                                type="file"
                                customStyleClasses="px-4 py-3 my-4 bg-black font-semibold rounded-lg w-full flex items-center justify-center"
                                customLabelClasses="text-white font-semibold w-full text-center cursor-pointer"
                                shouldIconVisible
                            />

                        }

                        {
                            (profilePic && !isMobileView) &&
                            <button
                                className="px-4 py-3 my-2 bg-black font-semibold rounded-lg w-full text-white"
                                onClick={closeModal}
                            >
                                Done
                            </button>
                        }

                        {
                            (profilePic && isMobileView) &&
                            <button
                                className="px-4 py-3 my-2 bg-black font-semibold rounded-lg w-full text-white"
                                onClick={redirect}
                            >
                                Done
                            </button>   
                        }

                        {
                            !profilePic ?
                                <button 
                                    className='my-4 flex p-3 items-center border-2 w-full border-black rounded-lg'
                                >
                                    <AiFillFacebook className="self-start" style={{
                                        color: 'dodgerblue',
                                        fontSize: '24px'
                                    }} />
                                    <span className="font-semibold block w-full self-center text-black">Use Facebook photo</span>
                                </button> :
                                <FileUploadBtn
                                    fileState={selectedFile}
                                    fileUploaderFunc={setSelectedFile}
                                    btnText="Upload a photo"
                                    customFunc={setFormStep}
                                    uploadedImageUrl={uploadedImageUrl}
                                    setUploadedImageUrl={setUploadedImageUrl}
                                    type="file"
                                    customStyleClasses="my-4 border-2 w-full border-black rounded-lg text-center mb-20"
                                    customLabelClasses="text-black font-semibold w-full cursor-pointer inline-block p-3"
                                />
                        }


                        {
                            !profilePic &&
                            <button
                                type='submit'
                                className="text-lg my-4 underline font-semibold w-full"
                                onClick={() => setFormStep(9)}
                            >
                                I&apos;ll do it later
                            </button>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default ProfilePicUploader