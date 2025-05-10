import { useState } from "react";

export default function Order() {
  // 상품갯수 추가하는 useState
  const [count, setCount] = useState(0);

  return (
    <div className="order">
      <div className="brandinfo">
        <div className="infoImage">
          <img
            src="https://img.29cm.co.kr/next-brand/2023/03/08/4f46d8948beb4fd7bffe71850093ee57_20230308125613.jpg?width=100"
            alt=""
          />
        </div>

        <div className="infoText">
          <span className="brandName">프리츠한센</span>
          <span className="explain">
            세계적인 클래식 & 컨템포러리 가구, 조명, 소품으로 구성된 인터내셔널
            디자인 브랜드입니다.
          </span>
          <button className="brandBtn">brand home</button>
        </div>
      </div>

      <div className="productbox">
        <div className="product productImage">
          <img
            src="https://img.29cm.co.kr/next-product/2023/03/13/6df115b934da4129a4a154606084bfdd_20230313145108.jpg?width=700"
            alt=""
          />
        </div>

        <div className="product productOrder">
          <div className="protop">
            <div className="nameLike">
              <span className="proname">프리츠한센 - IKEBANA SMALL(BRASS)</span>
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
                  <span className="discount">8%</span>
                  <span className="discountprice">163,760원</span>
                </div>

                <span className="originalprice">178,000원</span>
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
  );
}
