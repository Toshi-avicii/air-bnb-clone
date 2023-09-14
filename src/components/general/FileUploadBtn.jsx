import { AiOutlineCloudUpload } from "react-icons/ai"

function FileUploadBtn({ 
    type, 
    customFunc, 
    btnText, 
    fileState, 
    fileUploaderFunc,
    uploadedImageUrl,
    setUploadedImageUrl,
    customStyleClasses,
    customLabelClasses,
    shouldIconVisible
  }) {

  const handleFileChange = (event) => {
    fileUploaderFunc(event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImageUrl(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // Implement your file upload logic here
    // You can use FormData or any other method to send the file to the server
    const formData = new FormData();
    formData.append('file', fileState);
  };


  return (
    <div
      className={customStyleClasses}
    >
      {
        shouldIconVisible && 
        <AiOutlineCloudUpload 
            className='text-white text-2xl justify-self-start'
        />
      }
        <input
            type={type ? type : 'button'}
            className="hidden"
            id="profilePic"
            onChange={handleFileChange}
        />
        <label 
            htmlFor="profilePic" 
            className={customLabelClasses}
            onClick={handleUpload}
        >
            {btnText}
        </label>
    </div>
  )
}

export default FileUploadBtn