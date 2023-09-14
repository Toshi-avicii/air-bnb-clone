import { LuGraduationCap } from 'react-icons/lu';
import { LiaSuitcaseSolid } from 'react-icons/lia';
import { BiDish } from 'react-icons/bi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { PiGlobeStand } from 'react-icons/pi';
import { MdOutlineFreeBreakfast } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';

function HostFeatures({ hostDetails, grid }) {
    return (
        <div className={`${grid ? 'grid grid-cols-2 gap-4' : ''}`}>
            <div className="flex space-x-2 items-center my-2">
                <LuGraduationCap className="text-2xl" />
                <p className="leading-1">Where I went to school: {hostDetails?.school}</p>
            </div>
            <div className="flex space-x-2 items-center my-2">
                <LiaSuitcaseSolid className="text-2xl" />
                <p className="leading-1">My work: {hostDetails?.work}</p>
            </div>

            <div className="flex space-x-2 items-center my-2">
                <AiOutlineHeart className="text-2xl" />
                <p className="leading-1">I am obsessed with: {hostDetails?.obsessions && hostDetails?.obsessions.join(', ')}</p>
            </div>

            <div className="flex space-x-2 items-center my-2">
                <BiDish className="text-2xl" />
                <p className="leading-1">For guests, I always: {hostDetails?.tipsForGuests && hostDetails?.tipsForGuests.join(', ')}</p>
            </div>

            <div className="flex space-x-2 items-center my-2">
                <HiOutlineSparkles className="text-2xl" />
                <p className="leading-1">What makes my home unique: {hostDetails?.uniquePoints && hostDetails?.uniquePoints.join(', ')}</p>
            </div>

            <div className="flex space-x-2 items-center my-2">
                <GrLanguage className="text-xl" />
                <p>Speaks: {hostDetails?.languages && hostDetails?.languages.join(', ')}</p>
            </div>

            <div className="flex space-x-2 items-center my-2">
                <PiGlobeStand className="text-2xl" />
                <p className="leading-1">Lives in: {hostDetails?.info?.city}, {hostDetails?.info?.country}</p>
            </div>

            <div className="flex space-x-2 items-center my-2">
                <MdOutlineFreeBreakfast className="text-2xl" />
                <p className="leading-1">What&apos;s for breakfast:
                    {hostDetails?.offerBreakfast ? 'I offer breakfast' : "I don't offer breakfast"}
                </p>
            </div>
        </div>
    )
}

export default HostFeatures 