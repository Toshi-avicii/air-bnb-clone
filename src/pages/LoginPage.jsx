import { useSelector } from "react-redux";
import FormHeader from "../components/onboarding/FormHeader"
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import BottomBar from "../components/mobile/BottomBar";
import FormTitle from "../components/onboarding/FormTitle";
import OnBoardingForm from "../components/onboarding/OnBoardingForm";
import CreateProfileView from "../components/onboarding/CreateProfileView";
import OtherSignupOptions from "../components/onboarding/OtherSignupOptions";
import ConfirmPhoneNumber from "../components/onboarding/profile/ConfirmPhoneNumber";
import ProfilePicUploader from "../components/onboarding/profile/ProfilePicUploader";

function LoginPage() {
    const [formStep, setFormStep] = useState(1);
    const form = useForm();
    const loginPhone = useSelector(state => state.appReducers.profile.phoneNumber);

    const { control } = form;

    useEffect(() => {
        if(!loginPhone) {
            setFormStep(1);
        } 
    }, [setFormStep, loginPhone]);

  return (
    <div>
        <div>
            <FormHeader formStep={formStep} isMobileView={true} />
            <CreateProfileView formStep={formStep} isMobileView={true}  />

            <div className="p-4">
                <FormTitle formStep={formStep} isMobileView={true} />
                <OnBoardingForm formStep={formStep} isMobileView={true} setFormStep={setFormStep} />
                <OtherSignupOptions formStep={formStep} />

                <ConfirmPhoneNumber formStep={formStep} setFormStep={setFormStep} />
                <ProfilePicUploader formStep={formStep} setFormStep={setFormStep} isMobileView={true} />

            </div>
            <BottomBar />
        </div>
    </div>
  )
}

export default LoginPage