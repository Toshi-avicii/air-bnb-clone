import { useForm } from "react-hook-form"
import DialogModal from "../general/DialogModal"
import CreateProfileView from "./CreateProfileView"
import FormHeader from "./FormHeader"
import FormTitle from "./FormTitle"
import HorizontalRow from "./HorizontalRow"
import OnBoardingForm from "./OnBoardingForm"
import OtherSignupOptions from "./OtherSignupOptions"
import { useState } from "react"
import { DevTool } from '@hookform/devtools';
import ConfirmPhoneNumber from "./profile/ConfirmPhoneNumber"
import ProfilePicUploader from "./profile/ProfilePicUploader"

function OnBoardingDialog({ isOpen, closeModal }) {
    const [formStep, setFormStep] = useState(1);
    const form = useForm();

    const { control } = form;

    const backModal = () => {
        if(formStep === 3) {
            setFormStep(2);
        }

        if(formStep >= 5) {
            setFormStep((prev) => prev - 1);
        }
    }

    // useEffect(() => {
    //     if(!isOpen) {
    //         setFormStep(1);
    //     }
    // }, [isOpen, setFormStep]);


  return (
    <DialogModal isOpen={isOpen} closeModal={closeModal}>
        <FormHeader backModal={backModal} closeModal={closeModal} formStep={formStep} />
        <CreateProfileView closeModal={closeModal} formStep={formStep} backModal={backModal} />

        <div className="px-8">
            {/* form title */}
            <FormTitle formStep={formStep} />
                
            <OnBoardingForm formStep={formStep} setFormStep={setFormStep} closeModal={closeModal} />
            <HorizontalRow formStep={formStep} />

            {/* other signup options */}
            <OtherSignupOptions formStep={formStep} />

            {/* create profile form */}
            <ConfirmPhoneNumber formStep={formStep} setFormStep={setFormStep} />

            {/* upload profile pic */}
            <ProfilePicUploader formStep={formStep} setFormStep={setFormStep} closeModal={closeModal} />
        </div>
        <DevTool control={control} />
    </DialogModal>
  )
}

export default OnBoardingDialog