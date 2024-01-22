import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import {
  CalendarContainer,
  DropdownButton,
  CalendarWrapper,
} from './styles/Calander';

interface CustomCalendarProps {
  onChange: (date: Date) => void;
  value: Date;
}

export default function CustomCalendar({
  onChange,
  value,
}: CustomCalendarProps) {
  const [nowDate, setNowDate] = useState<string>('날짜');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (selectedDate: Date) => {
    onChange(selectedDate);
    setIsOpen(false);
    setNowDate(moment(selectedDate).format('YYYY년 MM월 DD일'));
  };

  return (
    <CalendarContainer>
      <DropdownButton onClick={handleToggleCalendar}>{nowDate}</DropdownButton>
      <CalendarWrapper isOpen={isOpen}>
        <Calendar onChange={handleDateChange} value={value} />
      </CalendarWrapper>
    </CalendarContainer>
  );
}
