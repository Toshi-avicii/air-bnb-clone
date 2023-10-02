import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addMonths, format, addDays } from "date-fns";

function DayPickerComponent({ modifiersClassNames, modifiersStyles, setDateRange }) {
  const today = new Date();
  const defaultSelected = {
    from: today,
    to: addDays(today, 0)
  };

  const [range, setRange] = useState(defaultSelected);
  const nextThreeMonths = addMonths(new Date(), 3);
  let footer = <p className="p-4 my-4 lg:my-6 text-lg text-neutral-500 font-medium">Please pick a day.</p>;

  useEffect(() => {
    if(range) {
      console.log(range);
      setDateRange({
        from: format(range?.from ? range?.from : new Date(), "PP"), 
        to: format(range?.to ? range?.to : new Date(), "PP")
      })
    }
  }, [range])

  if (range?.from) {
    if (!range.to) {
      footer = <p className="p-4 my-4 lg:my-8 text-lg text-neutral-500 font-medium">{format(range.from, "PP")}</p>;
    } else if (range.to) {
        if(range.to !== today) {
          console.log('another date selected');
        }
      console.log(format(range.from, "PP"), format(range.to, "PP"));


      footer = (
        <div className="my-8 p-4">
            <h1 className="text-xl lg:text-2xl font-semibold mb-4">
              {Math.abs(new Date(range.to).getDate() - new Date(range.from).getDate() + 1)} nights in Sau Paulo
            </h1>
            <p className="text-lg text-neutral-500 font-medium">
              {format(range.from, "PP")} – {format(range.to, "PP")}
            </p>
        </div>
      );
    }
  }

  const clearDates = () => {
    setRange(defaultSelected);
  }

  return (
    <div>
        {footer}
        <DayPicker
          mode="range"
          min={2}
          max={15}
          selected={range}
          onSelect={setRange}
          fromDate={new Date()}
          toDate={nextThreeMonths}
          numberOfMonths={window.innerWidth <= 768 ? 1 : 2}
          pagedNavigation
          required
          modifiersClassNames={modifiersClassNames}
          modifiersStyles={modifiersStyles}
        />
        <div className="flex my-6 justify-end">
            <button onClick={clearDates} className="underline font-semibold py-3 px-6">Clear Dates</button>
        </div>
    </div>
  );
}

export default DayPickerComponent;