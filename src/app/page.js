'use client'
import Image from "next/image"
import { styled } from "styled-components"
import CountdownTimer from "./countdown"
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const kakaoMapScript = document.createElement('script')
    kakaoMapScript.async = false
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`
    document.head.appendChild(kakaoMapScript)
  
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById('map')
        var options = {
          center: new window.kakao.maps.LatLng(36.995280, 127.927598),
          level: 3,
        }
  
        var map = new window.kakao.maps.Map(container, options)
      })
    }
  
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
  }, [])

  return (
    <Container>
      <Header>
        <div>김상연,<br />최은빈</div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image src='/calendar.svg' width={47} height={52} alt='date' />
        </div>
      </Header>
      <hr style={{color: '#C2C2C2', marginTop: '22px', width: '49px'}}/>
      <HeaderDesc>
      2023년 9월 16일 토요일 오후 1시 30분<br />네스트웨딩홀1층 시에나홀
      </HeaderDesc>
      <MainImage />
      <MarryContainer>
        <MarryInfo>
        <div className="line">결혼합니다</div>
        <div className="desc">두 사람이 하나가 된 새 인생을 시작합니다.<br />사랑으로 가득 채워<br />즐거움은 나누고 어려움은 이겨내는 함께<br />나아가는 삶을 꾸리겠습니다.<br />부디 걸음하시어 축복하여 주시면 더 없는<br />기쁨이 되겠습니다.</div>
        <hr style={{width: '80%', margin: '25px auto', backgroundColor: '#D1C5AD'}}/>
        <div className="baby">김도영 · 임현미의&nbsp;&nbsp;&nbsp;장남&nbsp;&nbsp;&nbsp;&nbsp;상연</div>
        <div className="baby">최종덕 · 김혜정의&nbsp;&nbsp;&nbsp;장녀&nbsp;&nbsp;&nbsp;&nbsp;은빈</div>
        </MarryInfo>
      </MarryContainer>
      <CalendarWrap>
        <div className="title">2023년 09월 16일</div>
        <div>토요일 오후 1시 30분</div>
        <CalendarContainer>
          asd
        </CalendarContainer>
        <CountdownTimer />
      </CalendarWrap>
      <GalaryWrap>
        <div className="title">갤러리</div>
      </GalaryWrap>
      <ComeonWrap>
        <div className="title">오시는 길</div>
        <KakaoMap>
          <div id="map" style={{width: '100%', height:'237px' }}></div>
        </KakaoMap>
        <div className="desc">네스트 웨딩홀<br />충청북도 충주시 금릉동 25-5</div>
      </ComeonWrap>
    </Container>
  )
}

const KakaoMap = styled.div`
  margin: 33px 0;
`

const ComeonWrap = styled.div`
  margin: 0 -1rem;
  background: #F6F5F5;
  padding: 30px 1rem;
  text-align: center;

  > div {
    &.title {
      font-size: 23px;
      font-style: normal;
      font-weight: 400;
    }
    &.desc {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
    }
  }
`

const GalaryWrap = styled.div`
  padding: 47px 0 30px;
  text-align: center;

  > div {
    &.title {
      font-size: 23px;
      font-style: normal;
      font-weight: 400;
    }
  }
`

const CalendarContainer = styled.div`
  border-top: 1px solid #E8DFDF;
  border-bottom: 1px solid #E8DFDF;
  margin: 28px 0 17px;
  padding: 27px 0 13px;
`

const CalendarWrap = styled.div`
  background: #F6F5F5;
  padding: 47px 20px;
  margin: -20px -1rem 0;
  text-align: center;
  > div {
    &.title {
      font-size: 23px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
    }
    &.sub_title {
      margin-top: 1rem;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
    }
  }
`

const MarryInfo = styled.div`
  border: 1px solid #D1C5AD;
  position: relative;
  padding-bottom: 37px;
  > div {
    &.line {
    position: absolute;
    width: 150px;
    top: -20px;
    left: 50%;
    z-index: 2;
    background: #EFE2D5;
    transform: translateX(-50%); /* 가운데 정렬을 위해 이동 */
    font-size: 25px;
    margin: 8px 0px;
    }
    &.desc {
    padding-top: 45px;
    font-family: 'Cafe24';
    font-size: 18px;
    line-height: 28px; /* 155.556% */
  }
  &.baby {
    font-family: 'Cafe24';
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
}
`

const MarryContainer = styled.div`
  margin-top: 20px;
  background: #EFE2D5;
  text-align: center;
  padding: 55px 20px;
  text-align: center;
  margin: 20px -1rem;
`;

const MainImage = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 15px;
  background: url('/main.png') no-repeat;
  background-size: contain;
`

const HeaderDesc = styled.div`
  margin-top: 18px;
  color: #A68658;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; 
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: #000;
  font-size: 25px;
  font-weight: 400;
  line-height: 34px; 
`

const Container = styled.main`
  padding: 2rem 1rem;
`