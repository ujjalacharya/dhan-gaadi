import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePickerModal = ({
  showDatePickerModal,
  pickedDateForPicker,
  handleCustomPicker,
}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    handleCustomPicker(event, selectedDate, () => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios");
      setDate(currentDate);
    });
  };

  return (
    <>
      {showDatePickerModal && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={pickedDateForPicker || date}
          mode={mode}
          is24Hour={true}
          display="default"
          minimumDate={new Date()}
          onChange={onChange}
          // mode="time"
          // display="clock"
        />
      )}
    </>
  );
};

export default DatePickerModal;
