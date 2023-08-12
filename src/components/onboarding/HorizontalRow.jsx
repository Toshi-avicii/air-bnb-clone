function HorizontalRow({ formStep }) {
  return (
    <div>
        {
            (formStep === 1 || formStep === 2) &&
            <div className="flex items-center">
                <hr className="w-full" />
                <span className="inline-block mx-6">or</span>
                <hr className="w-full" />
            </div>
        }
    </div>
  )
}

export default HorizontalRow