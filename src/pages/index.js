import Image from "next/image";
import { styled } from "styled-components";
import CountdownTimer from "./countdown";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Carousel from "./Carousel";

export default function Home() {
  const [openMoney1, setOpenMoney1] = useState(true);
  const [openMoney2, setOpenMoney2] = useState(true);
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  const handleOpenMoeny1 = () => {
    setOpenMoney1(!openMoney1);
  };

  const handleOpenMoeny2 = () => {
    setOpenMoney2(!openMoney2);
  };

  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(36.99528, 127.927598),
          level: 3,
        };

        var map = new window.kakao.maps.Map(container, options);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  useEffect(() => {
    if (kakaoLoaded) {
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          center: new window.kakao.maps.LatLng(36.99528, 127.927598),
          level: 3,
        };

        var map = new window.kakao.maps.Map(container, options);
      });
    }
  }, [kakaoLoaded]);

  const handleLinkShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(window && window.location.href)
        .then(() => {
          alert("링크가 복사되었습니다.");
        })
        .catch(() => {
          alert("복사를 다시 시도해주세요.");
        });
    }
  };

  // const shareKakao = () => {
  //   Kakao.Share.sendDefault({
  //     objectType: "feed",
  //     content: {
  //       title: "모바일 청첩장",
  //       description: "김상연 최은빈 결혼합니다.",
  //       imageUrl:
  //         "https://user-images.githubusercontent.com/73007012/259082689-ba6eb18d-b20b-426c-82c9-69b11de79a60.png",
  //       link: {
  //         mobileWebUrl: "https://mobile-marriage.vercel.app",
  //       },
  //     },
  //     buttons: [
  //       {
  //         title: "나도 테스트 하러가기",
  //         link: {
  //           mobileWebUrl: "https://mobile-marriage.vercel.app",
  //         },
  //       },
  //     ],
  //   });
  // };

  return (
    <Container>
      <Header>
        <div>
          김상연,
          <br />
          최은빈
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src="/calendar.svg" width={47} height={52} alt="date" />
        </div>
      </Header>
      <hr style={{ color: "#C2C2C2", marginTop: "22px", width: "49px" }} />
      <HeaderDesc>
        2023년 9월 16일 토요일 오후 1시 30분
        <br />
        네스트웨딩홀1층 시에나홀
      </HeaderDesc>
      <MainImage />
      <MarryContainer>
        <MarryInfo>
          <div className="line">결혼합니다</div>
          <div className="desc">
            두 사람이 하나가 된 새 인생을 시작합니다.
            <br />
            사랑으로 가득 채워
            <br />
            즐거움은 나누고 어려움은 이겨내는 함께
            <br />
            나아가는 삶을 꾸리겠습니다.
            <br />
            부디 걸음하시어 축복하여 주시면 더 없는
            <br />
            기쁨이 되겠습니다.
          </div>
          <hr
            style={{
              width: "80%",
              margin: "25px auto",
              backgroundColor: "#D1C5AD",
            }}
          />
          <div className="baby">
            김도영 · 임현미의&nbsp;&nbsp;&nbsp;장남&nbsp;&nbsp;&nbsp;&nbsp;상연
          </div>
          <div className="baby">
            최종덕 · 김혜정의&nbsp;&nbsp;&nbsp;장녀&nbsp;&nbsp;&nbsp;&nbsp;은빈
          </div>
        </MarryInfo>
      </MarryContainer>
      <CalendarWrap>
        <div className="title">2023년 09월 16일</div>
        <div style={{ marginTop: "5px" }}>토요일 오후 1시 30분</div>
        <CalendarContainer>
          <Image src="/calendar.png" width={249} height={183} alt="flower" />
        </CalendarContainer>
        <CountdownTimer />
      </CalendarWrap>
      <GalaryWrap>
        <div className="title" style={{ marginBottom: "20px" }}>
          갤러리
        </div>
        <Carousel />
      </GalaryWrap>
      <ComeonWrap>
        <div className="title">오시는 길</div>
        <KakaoMap>
          <div id="map" style={{ width: "100%", height: "237px" }}></div>
        </KakaoMap>
        <div className="desc">
          네스트 웨딩홀
          <br />
          충청북도 충주시 금릉동 25-5
        </div>
      </ComeonWrap>
      <MindWrap>
        <Image src="/mind.svg" width={28} height={28} alt="flower" />
        <div className="title">마음 전하실 곳</div>
        <div style={{ marginTop: "38px" }}>
          <Money onClick={handleOpenMoeny1}>
            <div>신랑측 계좌번호</div>
          </Money>
          {openMoney1 && (
            <MoneyOpen1>
              <MoneyIndividual>
                <div>신랑 &nbsp;&nbsp;&nbsp;김상연</div>
                <CopyToClipboard
                  text="우리 1002859241223"
                  onCopy={() => alert("클립보드에 복사되었습니다.")}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ lineHeight: "32px" }}>우리 1002859241223</div>
                    <CopyButton>복사</CopyButton>
                  </div>
                </CopyToClipboard>
              </MoneyIndividual>
              <MoneyIndividual>
                <div>아버님 김도영</div>
                <CopyToClipboard
                  text="농협 33602008602"
                  onCopy={() => alert("클립보드에 복사되었습니다.")}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ lineHeight: "32px" }}>농협 33602008602</div>
                    <CopyButton>복사</CopyButton>
                  </div>
                </CopyToClipboard>
              </MoneyIndividual>
              <MoneyIndividual>
                <div>어머님 임현미</div>
                <CopyToClipboard
                  text="농협 17908356017531"
                  onCopy={() => alert("클립보드에 복사되었습니다.")}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ lineHeight: "32px" }}>
                      농협 17908356017531
                    </div>
                    <CopyButton>복사</CopyButton>
                  </div>
                </CopyToClipboard>
              </MoneyIndividual>
            </MoneyOpen1>
          )}
          <Money onClick={handleOpenMoeny2} style={{ marginTop: "35px" }}>
            <div>신부측 계좌번호</div>
          </Money>
          {openMoney2 && (
            <MoneyOpen1>
              <MoneyIndividual>
                <div>신부 &nbsp;&nbsp;&nbsp;최은빈</div>
                <CopyToClipboard
                  text="신한 110310916440"
                  onCopy={() => alert("클립보드에 복사되었습니다.")}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ lineHeight: "32px" }}>신한 110310916440</div>
                    <CopyButton>복사</CopyButton>
                  </div>
                </CopyToClipboard>
              </MoneyIndividual>
              <MoneyIndividual>
                <div>아버님 최종덕</div>
                <CopyToClipboard
                  text="국민 17390104172743"
                  onCopy={() => alert("클립보드에 복사되었습니다.")}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ lineHeight: "32px" }}>
                      국민 17390104172743
                    </div>
                    <CopyButton>복사</CopyButton>
                  </div>
                </CopyToClipboard>
              </MoneyIndividual>
              <MoneyIndividual>
                <div>어머님 김혜정</div>
                <CopyToClipboard
                  text="하나 38281042104507"
                  onCopy={() => alert("클립보드에 복사되었습니다.")}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ lineHeight: "32px" }}>
                      하나 38281042104507
                    </div>
                    <CopyButton>복사</CopyButton>
                  </div>
                </CopyToClipboard>
              </MoneyIndividual>
            </MoneyOpen1>
          )}
        </div>
      </MindWrap>
      <FooterWrap>
        <div>
          간소하게 결혼식을 진행하고자합니다.
          <br />
          축하 화환은 정중히 사양합니다.
          <br />
          좋은 마음만 감사히 받겠습니다.
        </div>
        <ButtonWrap>
          <div>
            <Image src="/btn_kakao.svg" width={54} height={54} alt="kakao" />
            <span>카카오톡 공유하기</span>
          </div>
          <div onClick={handleLinkShare}>
            <Image src="/btn_share.svg" width={54} height={54} alt="share" />
            <span>링크 공유하기</span>
          </div>
        </ButtonWrap>
      </FooterWrap>
    </Container>
  );
}

const MoneyIndividual = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 22px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    > span {
      margin-top: 10px;
    }
  }
`;

const FooterWrap = styled.div`
  font-family: "Cafe24";
  font-size: 18px;
  text-align: center;
  background: #f6f5f5;
  margin: 0 -1rem -2rem -1rem;
  padding: 23px 0 40px;
`;

const CopyButton = styled.button`
  background: url("/copy.png") no-repeat 10px center;
  background-size: 16px;
  border: 1px solid #e1e1e1;
  border-radius: 3px;
  padding: 6px 10px 6px 30px;
  margin-left: 20px;
  cursor: pointer;
`;

const MoneyOpen1 = styled.div`
  > div {
    margin-top: 25px;
    font-family: "Cafe24";
    font-size: 18px;
    display: flex;
    align-items: center;
  }
`;

const Money = styled.div`
  border-radius: 5px;
  background: #f2eeee;
  padding: 17px 0;
  font-family: "Cafe24";
  font-size: 18px > div {
    background: url("/chevron_up.svg") no-repeat right;
    background-size: 10px;
  }
`;

const MindWrap = styled.div`
  text-align: center;
  padding: 33px 0 44px;
  > div {
    &.title {
      margin-top: 10px;
      font-style: normal;
      font-size: 23px;
      font-weight: 400;
    }
  }
`;

const KakaoMap = styled.div`
  margin: 33px 0;
`;

const ComeonWrap = styled.div`
  margin: 0 -1rem;
  background: #f6f5f5;
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
`;

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
`;

const CalendarContainer = styled.div`
  border-top: 1px solid #e8dfdf;
  border-bottom: 1px solid #e8dfdf;
  margin: 28px 0 17px;
  padding: 30px 0;
`;

const CalendarWrap = styled.div`
  background: #f6f5f5;
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
`;

const MarryInfo = styled.div`
  border: 1px solid #d1c5ad;
  position: relative;
  padding-bottom: 37px;
  > div {
    &.line {
      position: absolute;
      width: 150px;
      top: -20px;
      left: 50%;
      z-index: 2;
      background: #efe2d5;
      transform: translateX(-50%); /* 가운데 정렬을 위해 이동 */
      font-size: 25px;
      margin: 8px 0px;
    }
    &.desc {
      padding-top: 45px;
      font-family: "Cafe24";
      font-size: 18px;
      line-height: 28px; /* 155.556% */
    }
    &.baby {
      font-family: "Cafe24";
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
    }
  }
`;

const MarryContainer = styled.div`
  margin-top: 20px;
  background: #efe2d5;
  text-align: center;
  padding: 55px 20px;
  text-align: center;
  margin: 20px -1rem;
`;

const MainImage = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 15px;
  background: url("/main.png") no-repeat;
  background-size: cover;
`;

const HeaderDesc = styled.div`
  margin-top: 18px;
  color: #a68658;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: #000;
  font-size: 25px;
  font-weight: 400;
  line-height: 34px;
`;

const Container = styled.main`
  padding: 2rem 1rem;
`;
