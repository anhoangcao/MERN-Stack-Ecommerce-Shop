import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../../server";

const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    if (
      typeof timeLeft.days === 'undefined' &&
      typeof timeLeft.hours === 'undefined' &&
      typeof timeLeft.minutes === 'undefined' &&
      typeof timeLeft.seconds === 'undefined'
    ) {
      axios.delete(`${server}/event/delete-shop-event/${data._id}`);
    }
    return () => clearTimeout(timer);
  });

  function convertDateFormat(inputDate) {
    if (inputDate) {
      const dateObject = new Date(inputDate);
      const month = (dateObject.getMonth() + 1).toString().padStart(1, "0"); // Thêm '0' nếu cần
      const day = dateObject.getDate().toString().padStart(1, "0"); // Thêm '0' nếu cần
      const year = dateObject.getFullYear();
      return `${month}-${day}-${year}`;
    } else {
      return null;
    }
  }

  // function calculateTimeLeft() {
  //   // Kiểm tra xem data tồn tại và có thuộc tính Finish_Date không
  //   if (data && data.Finish_Date) {

  //     // Chuyển đổi định dạng của Finish_Date
  //     const formattedFinishDate = convertDateFormat(data.Finish_Date);
  //     const difference = +new Date(formattedFinishDate) - +new Date();

  //     let timeLeft = {};

  //     if (difference > 0) {
  //       timeLeft = {
  //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //         hours: Math.floor(
  //           (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //         ),
  //         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
  //         seconds: Math.floor((difference % (1000 * 60)) / 1000),
  //       };
  //     }

  //     return timeLeft;
  //   } else {
  //     return null;
  //   }
  // }

  function calculateTimeLeft() {
    // Kiểm tra xem data tồn tại và có thuộc tính Finish_Date không
    if (data && data.Finish_Date) {
      // Chuyển đổi định dạng của Finish_Date
      const formattedFinishDate = convertDateFormat(data.Finish_Date);
      const difference = +new Date(formattedFinishDate) - +new Date();
  
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
  
        // Thêm định dạng "giờ:phút:giây"
        timeLeft.formattedTime = `${timeLeft.days} days ${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`;
      }
  
      return timeLeft;
    } else {
      return null;
    }
  }
  
  
  const timerComponent = timeLeft && timeLeft.formattedTime ? (
    <span className="text-[25px] text-[#475ad2]">
      {timeLeft.formattedTime}
    </span>
  ) : (
    <span className="text-[red] text-[25px]">Time's up</span>
  );
  
  return <div>{timerComponent}</div>;
  
};

export default CountDown;
