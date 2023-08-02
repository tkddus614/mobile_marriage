import Image from "next/image";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const CountdownTimer = () => {
  // 종료 날짜를 Date 객체로 변환
  const endDate = new Date("2023-09-16 00:00:00");

  // 남은 시간 계산
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = endDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  // 상태 변수 설정
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // 1초마다 남은 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(timer);
  }, []);

  // 시간을 두 자리로 표시하는 함수
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <>
        <Container>
            <div>{timeLeft.days}<div>DAYS</div></div>&nbsp;&nbsp;<p>:</p>&nbsp;&nbsp;
            <div>{timeLeft.hours}<div>HOUR</div></div>&nbsp;&nbsp;<p>:</p>&nbsp;&nbsp;
            <div>{timeLeft.minutes}<div>MIN</div></div>&nbsp;&nbsp;<p>:</p>&nbsp;&nbsp;
            <div>{timeLeft.seconds}<div>SEC</div></div>
        </Container>
        <div style={{marginTop: '34px', fontSize: '18px'}}>상연 <Image src='/heart.svg' width={10} height={10} alt='heart' /> 은빈의 결혼식이 <span style={{color: '#9C7239'}}>{timeLeft.days}일</span> 남았습니다.</div>
    </>
    );
};

export default CountdownTimer;

const Container = styled.div`
    display: flex;
    justify-content: center;
    > div {
        padding: 12px 10px;
        border-radius: 6px;
        background: #F2EEEE;
        font-size: 20px;
        color: #9C7239;

        > div {
            font-size: 10px;
            color: #CE9B55;
        }
    }
    > p {
        display: inline-block;
        display: flex; 
        align-items: center; /* 수직 정렬을 위해 추가 */        
    }
`