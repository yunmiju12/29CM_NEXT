import Link from "next/link";

// _app 은 서버로 요청이 들어왔을때 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { CardProvider } from "@/context/CardContext";

export default function App({ Component, pageProps }) {
  // 스크롤이벤트
  // 우선 state에 상태 저장
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect 를 쓰는 경우는 여러가지가 있는데 우리는 부수효과(side effect) 를 처리할때 사용함
  // 좀 더 쉽게 표현하면 DOM 관련 작업이나 이벤트 등록 등 렌더랑 외의 작업을 처리할때 사용
  // onClick 이벤트같은 경우는 특정요소에 처리하지만 scroll 이벤트는 window 전체 스크롤을 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollYData = window.scrollY;
      if (scrollYData > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    // 전역에 다시 호출헤서 컴포넌트가 로드될때 스크롤 위치 확인해서 헤더 class 붙여서 출력

    window.addEventListener(`scroll`, handleScroll);

    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
    // 컴포넌트가 언마운트(화면에서 사라짐)될때 이벤트 리스너 제거
    // 이유: window 에 이벤트 리스너를 추가하면 그 컴포넌트가 화면에서 사라져도 윈도우에 등록된 이벤트 리스너는 남아있어 불필요하게 메모리를 차지하거나 이벤트 핸들러가 계속 작동할 수 있음
  }, []); // -> 여기서 대괄호는 의존성 배열임 / useEffect 에 의존성 배열을 추가하지 않으면 안쪽 코드를 컴포넌트가 매번 렌더링 될때마다 실행시킴 -> 성능저하 올 수 있음

  // ------------------------------------
  // 필터링 -> useState 를 이용해 카테고리 상태를 _app.js 에서 전역으로 관리
  // 상태를 배열로 설정
  const categories = ["전체", "가구", "조명", "홈데코", "아트"];

  const [selectedCategory, setSelectedCategory] = useState("전체");
  // 선택된 카테고리만 상태로 관리

  return (
    <>
      <CardProvider>
        {/* 전체적으로 들어가는 헤더는 공통부분에 입력 */}
        <header className={isScrolled ? "header_area scroll" : "header_area"}>
          <div className="top">
            {/* Link 로 변경 */}
            <Link href="/" className="logo">
              {/* 홈으로 돌아가려면 href="/" 로 설정 */}
              <img
                src="https://img.29cm.co.kr/next-contents/2023/06/08/3f8131682d124d16b336774ba51c4a3e_20230608162823.png"
                alt=""
              />
            </Link>

            <div className="user_box">
              <div className="user_nav mypage">
                <div className="user_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    color="black"
                    className="css-19xi8mz"
                  >
                    <g id="weight=bold, fill=true">
                      <g id="vector">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9999 3.25V2.25H10.9999V3.25V8.25V9.25H12.9999V8.25V3.25Z"
                          fill="black"
                        ></path>
                        <path
                          d="M20.9999 21.75H2.99994V11.9992C2.99994 11.3045 3.56393 10.75 4.24994 10.75H19.7499C20.4403 10.75 20.9999 11.3096 20.9999 12V21.75Z"
                          fill="black"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>

                <span>my page</span>
              </div>
              <div className="user_nav mylike">
                <div className="user_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    color="black"
                    className="css-19xi8mz"
                  >
                    <g id="weight=bold, fill=true">
                      <path
                        id="vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0001 6.41677C11.1926 4.696 9.48906 3.5 7.5 3.5C4.72132 3.5 2.5 5.83496 2.5 8.672C2.5 9.79894 2.96136 10.8146 3.39443 11.5251C3.61364 11.8847 3.83255 12.1775 3.99731 12.3812C4.07986 12.4832 4.14931 12.5635 4.19906 12.6193C4.22395 12.6472 4.24396 12.669 4.25826 12.6844L4.27534 12.7025L4.2805 12.708L4.28219 12.7097L12 20.7207L19.7169 12.7106L19.7178 12.7097L19.7195 12.708L19.7246 12.7026L19.7417 12.6844C19.756 12.669 19.776 12.6472 19.8009 12.6193C19.8507 12.5635 19.9201 12.4832 20.0027 12.3812C20.1674 12.1775 20.3864 11.8847 20.6056 11.5251C21.0386 10.8146 21.5 9.79895 21.5 8.672C21.5 5.83395 19.2786 3.5 16.5 3.5C14.5111 3.5 12.8077 4.69631 12.0001 6.41677Z"
                        fill="black"
                      ></path>
                    </g>
                  </svg>
                </div>

                <span>my like</span>
              </div>
              <div className="user_nav cart">
                <div className="user_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    color="black"
                    className="css-19xi8mz"
                  >
                    <g id="weight=bold, fill=true">
                      <path
                        id="vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1C10.6739 1 9.40215 1.52678 8.46447 2.46447C7.76608 3.16285 7.29564 4.04656 7.101 5H4.202C3.5272 5 3 5.54425 3 6.2V20.8121L3.00029 20.8243C3.00786 21.1357 3.13575 21.4321 3.35713 21.6513C3.5785 21.8705 3.87616 21.9954 4.18766 21.9999L4.19483 22H19.798C20.4728 22 21 21.4557 21 20.8V14.5H12V12.5H21V6.2C21 5.55334 20.4709 5 19.798 5H16.899C16.7044 4.04656 16.2339 3.16285 15.5355 2.46447C14.5979 1.52678 13.3261 1 12 1ZM14.1213 3.87868C14.4407 4.19808 14.6807 4.5821 14.8284 5H9.17157C9.31933 4.5821 9.55927 4.19808 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868Z"
                        fill="black"
                      ></path>
                    </g>
                  </svg>
                </div>

                <span>shopping bag</span>
              </div>
              <div className="user_nav login">
                <div className="user_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    color="black"
                    className="css-19xi8mz"
                  >
                    <g id="weight=bold, fill=true">
                      <path
                        id="vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 10H19.25C19.6642 10 20 10.3358 20 10.75V21.25C20 21.6642 19.6642 22 19.25 22H4.75C4.33579 22 4 21.6642 4 21.25V10.75C4 10.3358 4.33579 10 4.75 10H6V8C6 4.68629 8.68629 2 12 2C13.9985 2 15.7688 2.97712 16.8593 4.47969L15.307 5.749C14.5869 4.69318 13.3744 4 12 4C9.79086 4 8 5.79086 8 8V10ZM12 12.5C12.5523 12.5 13 12.9477 13 13.5V15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5V13.5C11 12.9477 11.4477 12.5 12 12.5Z"
                        fill="black"
                      ></path>
                    </g>
                  </svg>
                </div>

                <span>logout</span>
              </div>
            </div>
          </div>
          <div className="center">
            <div className="headtext">Special-Order Showcase PT 29Magazine</div>
            <a href="#none" className="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                color="black"
                className="css-14za774"
              >
                <g id="weight=bold, fill=true">
                  <path
                    id="vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.9 4.5C7.36538 4.5 4.5 7.36538 4.5 10.9C4.5 14.4346 7.36538 17.3 10.9 17.3C12.6636 17.3 14.2589 16.588 15.4175 15.4334C16.5815 14.2735 17.3 12.6716 17.3 10.9C17.3 7.36538 14.4346 4.5 10.9 4.5ZM2.5 10.9C2.5 6.26081 6.26081 2.5 10.9 2.5C15.5392 2.5 19.3 6.26081 19.3 10.9C19.3 12.8628 18.6258 14.6695 17.4979 16.0993L21.2056 19.7914L19.7944 21.2086L16.0818 17.5116C14.6548 18.6313 12.8548 19.3 10.9 19.3C6.26081 19.3 2.5 15.5392 2.5 10.9Z"
                    fill="black"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="bottom">
            <ul className="tab">
              {/* <li
              className="tab_list"
              onClick={() => setSelectedCategory("전체")}
            >
              <a href="#none">전체</a>
            </li>
            <li
              className="tab_list"
              onClick={() => setSelectedCategory("가구")}
            >
              <a href="#none">가구</a>
            </li>
            <li
              className="tab_list"
              onClick={() => setSelectedCategory("조명")}
            >
              <a href="#none">조명</a>
            </li>
            <li
              className="tab_list"
              onClick={() => setSelectedCategory("홈데코")}
            >
              <a href="#none">홈데코</a>
            </li>
            <li
              className="tab_list"
              onClick={() => setSelectedCategory("아트")}
            >
              <a href="#none">아트,디자인</a>
            </li> */}
              {/* 위처럼 작성하면 필터링 함수 하드코딩 -> map으로 사용해보자 */}
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="tab_list"
                  onClick={() => setSelectedCategory(category)}
                >
                  <a href="#none">{category}</a>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <div className="marginbox"></div>

        <Component {...pageProps} selectedCategory={selectedCategory} />

        <footer className="footer_area">
          <div className="footer_content footer_top">
            <p className="service_number">고객센터 1644-0560</p>
            <div className="service_hours">
              운영시간 : 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00 제외)
            </div>
          </div>
          <div className="footer_content footer_bottom">
            <div className="btn_box">
              <a href="#none" className="btn">
                FAQ
              </a>
              <a href="#none" className="btn">
                1:1 문의
              </a>
            </div>

            <div className="sns_box">
              <div className="sns_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 30 30"
                >
                  <circle cx="15" cy="15" r="15" fill="#000"></circle>
                  <path
                    fill="#E4E4E4"
                    d="M11.894 7.552c-.798.038-1.343.165-1.82.353a3.67 3.67 0 00-1.326.867 3.674 3.674 0 00-.863 1.33c-.185.477-.31 1.022-.345 1.82-.035.8-.043 1.056-.04 3.092.005 2.037.014 2.292.053 3.093.038.797.165 1.342.352 1.819.192.493.45.91.867 1.326a3.67 3.67 0 001.33.863c.477.184 1.023.31 1.821.345.799.035 1.056.043 3.092.04 2.036-.005 2.292-.014 3.092-.052.8-.038 1.342-.165 1.819-.352.493-.193.91-.45 1.327-.867.415-.419.671-.837.862-1.331.185-.479.31-1.024.345-1.822.035-.8.043-1.056.04-3.092-.005-2.037-.014-2.292-.052-3.092-.038-.8-.165-1.343-.352-1.82a3.683 3.683 0 00-.867-1.326 3.662 3.662 0 00-1.331-.863c-.479-.184-1.024-.31-1.822-.345-.799-.034-1.055-.043-3.092-.04-2.037.005-2.292.013-3.092.052zm.087 13.559c-.73-.03-1.127-.153-1.391-.254a2.32 2.32 0 01-.865-.56 2.31 2.31 0 01-.563-.86c-.102-.266-.226-.662-.26-1.393-.038-.79-.045-1.028-.05-3.03-.004-2.003.004-2.24.038-3.03.031-.731.154-1.129.255-1.393.135-.35.298-.6.56-.864.261-.263.511-.425.86-.562.265-.103.662-.226 1.393-.26.79-.038 1.028-.046 3.03-.05 2.002-.005 2.24.003 3.03.038.732.031 1.13.153 1.393.255.352.135.601.297.865.56.263.261.426.51.563.86.103.264.226.66.26 1.392.038.79.047 1.027.05 3.03.004 2.001-.003 2.239-.038 3.03-.032.73-.153 1.128-.255 1.393-.135.35-.298.6-.56.863a2.317 2.317 0 01-.861.562c-.264.104-.661.227-1.392.261-.79.037-1.028.044-3.03.049-2.003.003-2.24-.005-3.03-.04m6.114-10.119a.9.9 0 101.798 0 .9.9 0 00-1.798.002zm-6.947 4.017a3.85 3.85 0 107.7-.014 3.85 3.85 0 00-7.7.014zm1.35-.002a2.5 2.5 0 115-.01 2.5 2.5 0 01-5 .01z"
                  ></path>
                </svg>
              </div>
              <div className="sns_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 30 30"
                >
                  <circle cx="15" cy="15" r="15" fill="#000"></circle>
                  <path
                    fill="#E4E4E4"
                    d="M22.188 11.423a1.898 1.898 0 00-1.326-1.353C19.69 9.75 15 9.75 15 9.75s-4.69 0-5.86.32a1.898 1.898 0 00-1.326 1.353C7.5 12.616 7.5 15.107 7.5 15.107s0 2.49.314 3.684c.172.66.68 1.178 1.326 1.354 1.17.32 5.86.32 5.86.32s4.69 0 5.86-.32a1.898 1.898 0 001.326-1.353c.314-1.192.314-3.683.314-3.683s0-2.49-.314-3.684h.002zm-8.688 5.98v-4.591l3.897 2.295-3.897 2.296z"
                  ></path>
                </svg>
              </div>
              <div className="sns_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 30 30"
                >
                  <circle cx="15" cy="15" r="15" fill="#000"></circle>
                  <path
                    fill="#E4E4E4"
                    d="M18.987 14.643a3.41 3.41 0 011.625-2.862 3.492 3.492 0 00-2.751-1.486c-1.157-.122-2.28.692-2.87.692-.6 0-1.509-.68-2.486-.66a3.665 3.665 0 00-3.084 1.88c-1.333 2.308-.339 5.7.938 7.566.64.914 1.386 1.935 2.363 1.898.957-.04 1.314-.61 2.469-.61 1.142 0 1.477.61 2.474.587 1.026-.016 1.673-.917 2.29-1.84.458-.65.811-1.37 1.046-2.131a3.297 3.297 0 01-2.013-3.033z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M17.104 9.067c.56-.672.835-1.535.768-2.406a3.417 3.417 0 00-2.21 1.145 3.193 3.193 0 00-.79 2.317 2.826 2.826 0 002.232-1.055z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </footer>
      </CardProvider>
    </>
  );
}
