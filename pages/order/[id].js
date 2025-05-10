// 동적 라우팅을 할 때는 폴더 안에 파일생성이 공식적인 방식
import { useRouter } from "next/router";
import { useState } from "react";
import { useCard } from "../../context/CardContext";
// .. → 한 폴더 위로 올라감
// ../.. → 두 번 올라가야 pages/ 밖으로 빠져나옴

export default function OrderDetail() {
  // 상품갯수 추가하는 useState
  const [count, setCount] = useState(0);

  // 동적라우팅을 위한 코드!
  const router = useRouter();
  // useRouter 는 Next.js 에서 제공하는 훅 : 현재 페이지의 라우팅 정보를 가져올 수 있음

  const { id } = router.query;
  // const id = router.query.id; <- 이 구문을 간결하게 구조분해할당으로 쓴거임
  // query 는 useRouter 속성임
  // Next.js 에서 useRouter 사용하면 현재페이지의 url 정보를 가져올 수 있음
  // query 는 현재 페이지 url 의 쿼리스트링 또는 동적 라우팅 파라미터를 담고 있음
  // 즉, query 객체에서 id 만 뽑아서 바로 id 라는 변수로 선언한다

  const { cardData } = useCard();
  // 전역에서 관리 중인 카드 목록 데이터 불러옴

  // cardData 배열에서 id 가 일치하는 상품 찾아내주는 로직
  const product = cardData.find((item) => item.id === Number(id));
  // find(): 배열을 왼쪽부터 오른쪽으로 순회하면서 조건을 만족하는 첫번째 요소를 찾음
  // item 은 배열을 순회할때마다 하나씩 꺼낸 각 요소를 의미

  if (!product) return <p>상품을 찾을 수 없습니다.</p>;
  // find() 로 상품을 못찾은 경우 (null 또는 undefined일때) 에러 방지 처리

  return (
    <div className="order">
      <div className="top_box">
        <div className="brandinfo">
          <div className="infoImage">
            <img src={product.imgSrc} alt={product.brandName} />
          </div>

          <div className="infoText">
            <span className="brandName">{product.brandName}</span>
            <span className="explain">{product.explain}</span>
            <button className="brandBtn">brand home</button>
          </div>
        </div>

        <div className="productbox">
          <div className="product productImage">
            <img src={product.imgSrc} alt={product.brandName} />
          </div>

          <div className="product productOrder">
            <div className="protop">
              <div className="nameLike">
                <span className="proname">{product.productName}</span>
                <div className="heartbox">
                  <svg
                    class="css-kglvp1 efn0ag41"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M9 6.088C9 3.831 10.791 2 13 2s4 1.83 4 4.088c0 1.743-1.46 3.23-1.46 3.23L9 16 2.46 9.318S1 7.83 1 6.088C1 3.831 2.791 2 5 2s4 1.83 4 4.088z"
                      fill="#ffffff"
                      fill-rule="evenodd"
                      stroke="#5d5d5d"
                      stroke-width="0.7"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="reviewBox">
                <div className="star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 13 12"
                  >
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      stroke="#000000"
                      stroke-width="0.7"
                      d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 13 12"
                  >
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      stroke="#000000"
                      stroke-width="0.7"
                      d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 13 12"
                  >
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      stroke="#000000"
                      stroke-width="0.7"
                      d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 13 12"
                  >
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      stroke="#000000"
                      stroke-width="0.7"
                      d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 13 12"
                  >
                    <path
                      fill="#000000"
                      fill-rule="evenodd"
                      stroke="#000000"
                      stroke-width="0.7"
                      d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
                    ></path>
                  </svg>
                </div>
                <div className="starText">241개 리뷰보기</div>
              </div>

              <div className="priceBox">
                <div className="priceLeft">
                  <div className="price">
                    <span className="discount">{product.discount}</span>
                    <span className="discountprice">
                      {product.discountPrice}
                    </span>
                  </div>

                  <span className="originalprice">{product.price}</span>
                </div>

                <div className="priceRight">
                  <a href="#none" className="coupon">
                    쿠폰받기
                    <svg class="css-qzxgwt e1glt8ud1" viewBox="0 0 9 9">
                      <g fill="#ffffff" fill-rule="evenodd">
                        <path fill="none" d="M0 0h9v9H0z"></path>
                        <path d="M7.284 4.243 4.625 6.695l-.292.275-.003-.003v.001l-.673-.626.002-.002-2.23-2.083.733-.582 1.665 1.607L3.828 0h.937v5.339l1.856-1.678.663.582zm.31 3.505v.943h-6.54v-.943h6.54z"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="packingInfo">
              <div className="packingFlex">
                <span className="category">구매 적립금</span>
                <span>최대 1,638 마일리지 적립 예정</span>
              </div>
              <div className="packingFlex">
                <span className="category">무이자 할부</span>
                <span>최대 7개월 무이자 할부 시 월 23,394원 결제</span>
              </div>
              <div className="packingFlex">
                <span className="category">배송정보</span>
                <span>3일 이내 출고</span>
              </div>
              <div className="packingFlex">
                <span className="category">배송비</span>
                <span>무료배송(제주/도서산간 추가 배송비 없음)</span>
              </div>
            </div>

            <div className="cartBox">
              <div className="countbox">
                {/* 과제 : 카운팅박스만들어오기~ */}
                <button
                  className="countui removebtn"
                  onClick={() => (count > 0 ? setCount(count - 1) : null)}
                >
                  -
                </button>
                <button className="countui incre_number">{count}</button>
                <button
                  className="countui addbtn"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>

              <div className="buybtnbox">
                <a href="#none" className="buybtn cartbtn">
                  장바구니 담기
                </a>
                <a href="#none" className="buybtn buyingbtn">
                  바로 구매하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_box">
        <div className="bottom_image">
          <img src={product.detailImgSrc} alt={product.brandName} />
        </div>
      </div>
    </div>
  );
}
