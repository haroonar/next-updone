import { RefObject, SetStateAction } from "react";

// staff-listing components props
export interface Staff {
  id: number;
  name: string;
  city: string;
  country: string;
  hourRate: number;
  totalJobs: number;
  services: string[];
  img: string;
}
//booking calander componets props
type SetDateType = React.Dispatch<React.SetStateAction<Date>>;
type ScrollRef = RefObject<HTMLDivElement>
type SetSelectedTimeId = React.Dispatch<SetStateAction<string | null>>

export interface BookingCalanderProps {
  date: Date;
  setWorkingTimes?:any
  workingTimes?:any
  setDate: SetDateType;
  setSelectedTimeId: SetSelectedTimeId
  scrollRef: ScrollRef
  availableTimesMap: { [date: string]: { id: string; time: string; disabled: boolean, isAvailable: boolean }[] };
  handleTimeSelection: (timeId: string, disabled: boolean) => void;
  selectedTimeId: string | null;
  scrollUp: () => void
  scrollDown: () => void
  timessss?: { date: string; times: string[] }[];
  handleAddToBooking: () => void
  selectedTimes?: any
  isCalander?: boolean;
  isStaffListerFilter?: boolean;
  selectedServiceId?: any
  handleServiceClick?: any
  isHeroFilterCalander?: boolean
  highlightedDatesNotAvailable?: any
  highlightedDatesAvailable?: any
  isStepOneCalander?:boolean;
}