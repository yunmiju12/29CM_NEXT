import { useEffect, useRef } from "react";
import { useCard } from "../context/CardContext";

import Card from "./Card";

const App = ({ selectedCategory }) => {
  // -----------------------------------------
  // 최하단 객체 생성시 이벤트를 위한 useRef
  const bottomRef = useRef(null);
  // useRef : 일반적으로 특정 DOM 을 지정해서 해당 속성값을 파악하거나 변경시키는 용도
  // 초기 렌더링 시점에 참조할 DOM 요소가 아직 생성되지 않았기때문에 null 값을 기존값으로 생성
  // -----------------------------------------
  // context 폴더 생성하면 CardContext 에서 관리 되도록 옮겨주기
  // 그리고 cardData, addCards 데이터 전역에서 가져오게 처리
  const { cardData, addCards } = useCard(); // 전역 데이터 가져오기
  // -------------------------------
  // 선택된 카테고리로 필터링
  // selectedCategory 값에 따라 cardData 배열을 필터링해서 새로운 배열을 생성하는 로직(삼항연산자)
  const filteredData =
    selectedCategory === "전체" // selectedCategory 가 " 전체 "인지 확인하고
      ? cardData // 참인경우 cardData 를 필터링하지 않고 그대로 출력
      : cardData.filter((data) => data.category === selectedCategory);
  // 거짓일 경우, cardData 필터링
  // filter 메서드 사용해서 cardData 배열에서 catgegory 가 selectedCategory 와 일치하는 항목만 남김

  // -------------------------------------------------------------
  // 무한스크롤 -> IntersectionObserver 사용해서 브라우저 최적화를 효율적으로 관리하게끔 처리(요소가 중간에만 보여도 작동 할 수 있음)
  useEffect(() => {
    const observer = new IntersectionObserver(
      // IntersectionObserver: 브라우저에서 내장된 API로, 엄떤 요소가 화면에 보여지는지 감지 할 수 있는 기능
      (entries) => {
        const [entry] = entries;
        // entries의 여러 요소 중 첫번째 요소만 받겠다 라는 뜻
        // const [entry] = entries[0] -> 근데 구조분해로 쓰면 코드가 간결
        if (entry.isIntersecting) {
          addCards(); // 요소가 화면에 들어오면 카드 추가
        }
      },
      {
        root: null,
        // root는 어떤 영역을 기준으로 감지할지 설정하는 아이
        // null은 viewport 기준
      }
    );
    const target = bottomRef.current;
    if (target) observer.observe(target); // target 요소가 화면에 나타나는지 감시(관찰) 시작

    // 관찰 끝내기
    return () => {
      // useEffect 훅 안에 return 문 함수를 넘기면, 컴포넌트가 언마운트될때, 또는 의존성 배열이 바뀔때 이 한수가 자동으로 실행됨
      if (target) observer.unobserve(target); // 컴포넌트가 사라지거나 리렌더링 될때 감시(관찰) 해제(메모리 누수 방지 + 성능 최적화)
    };
  }, [bottomRef, addCards]);
  // [bottomRef, addCards] -> 의존성 배열림
  // -> 배열 안에 있는 값이 변결될때 useEffect 안의 코드가 실해됨

  return (
    <>
      <div className="container_wrap">
        <div className="flex_box">
          {/* {cardData.map((data, index) => (
            <Card
              key={index}
              imgSrc={data.imgSrc}
              brandName={data.brandName}
              productName={data.productName}
              price={data.price}
              discount={data.discount}
              discountPrice={data.discountPrice}
              likes={data.likes}
              reviews={data.reviews}
            />
          ))} */}

          {/* 필터링을 하기 위해 설정해준 filteredData 를 cardData 에서 대체하면서 key 값도 고유 id 값으로 변경해주자 */}
          {filteredData.map((data) => (
            <Card
              key={data.id}
              // 필터링할때 cardData 정의한 id 로 설정변경
              // 리액트에서 리스트 렌더링 할 때는 각 항목마다 고유한 key 가 필요
              // 성능 최적화와 오류 방지를 위해 index 대신 data.id 를 사용함

              {...data}
              // 스프레드 전달로  filteredData 정보 모두 props 로 받음
              // 깔끔하고 유지보수 쉬움
              // props 명시가  상황이 아닐땐 스프레드 전달이 좋음
            />
          ))}

          {/* 빈 div 에 bottomRef 추가해서 스크롤될 위치 선정 */}
          <div ref={bottomRef}></div>
          {/* ref 는 DOM 요소나 react 컴포넌트에 직접 접근할 수 있게 도와주는 리액트의 기능 */}
        </div>

        {/* <button
          className="addbtn text-[#333] text-[20px] font-[800] w-[200px] h-[50px] rounded-[8px] border border-solid  border-[#333] flex justify-center items-center mx-auto mt-[50px]"
          onClick={addCards}
        >
          더보기
        </button> */}
      </div>
    </>
  );
};

export default App;
