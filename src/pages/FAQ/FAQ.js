import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FAQ.css";

// 더미 데이터
export const tempCategories = [
    {
        name: "자주 묻는 질문",
        value: "all",
    },
    {
        name: "매치 진행",
        value: "category1",
    },
    {
        name: "구장 예약",
        value: "category2",
    },
    {
        name: "캐시",
        value: "category3",
    },
];

const tempList = [
    {
        faqId: 1,
        category: "category1",
        question: "what is that ? 1",
        answer: "this is react. 1",
        show: false
    },
    {
        faqId: 2,
        category: "category2",
        question: "what is that ? 2",
        answer: "this is react. 2",
        show: false
    },
    {
        faqId: 3,
        category: "category3",
        question: "what is that ? 3",
        answer: "this is react. 3",
        show: false
    },
    {
        faqId: 4,
        category: "category1",
        question: "what is that ? 4",
        answer: "this is react. 4",
        show: false
    },
    {
        faqId: 5,
        category: "category2",
        question: "what is that ? 5",
        answer: "this is react. 5",
        show: false
    },
    {
        faqId: 6,
        category: "category3",
        question: "what is that ? 6",
        answer: "this is react. 6",
        show: false
    },
];

const FAQ = () => {
     // DB에 저장되어 있는 FAQ 및 카테고리 리스트 가져오기 위한 변수
     const [FAQList, setFAQList] = useState([]);
     const [categoryList, setCategoryList] = useState([]);
 
     // 우선 더미데이터로 들어감 => 백이랑 연동 후, tempList => noticeList
     const [cardOnOff, setCardOnOff] = useState(tempList);
     const [showList, setShowList] = useState(tempList);
     const [category, setCatecory] = useState("all");
    //  showList.sort((a, b) => b.faqId - a.faqId); // id순 정렬 (생성 날짜순으로 id 생성되므로 내림차순)
 
     /* [POST / notice]: FAQ 목록 가져오기 */
     const loadNoticeList = async () => {
 
        //  await axios.post('http://gotchy.site/FAQList')
        //      .then((res) => {
        //          console.log("[FAQList.js] useEffect() 성공");
        //          console.log(res.data);
        //          setFAQList(res.data);
        //      })
        //      .catch((err) => {
        //          console.log("[FAQList.js] useEffect() 실패");
        //          console.log(err);
        //      });
     }
 
     useEffect(() => {
         loadNoticeList();
     }, []);

     /* [POST / notice]: FAQ 카테고리 목록 가져오기 */
     const loadCategoryList = async () => {
 
        // await axios.post('http://gotchy.site/categoryList')
        //     .then((res) => {
        //         console.log("[categoryList] useEffect() 성공");
        //         console.log(res.data);
        //         setCategoryList(res.data);
        //     })
        //     .catch((err) => {
        //         console.log("[categoryList] useEffect() 실패");
        //         console.log(err);
        //     });
    }
    useEffect(() => {
        loadCategoryList();
    }, []);

    const getQnACard = (item, index) => {
        return (
            <div className="faq-card" key={index}>
                <div
                    className="faq-card-title"
                    onClick={() => {
                        let tempCard = cardOnOff;
                        tempCard[index].show = !tempCard[index].show;
                        setCardOnOff([...tempCard]);
                    }}
                >
                    <span className="question-mark">Q.</span>
                    <span>{item.question}</span>
                </div>
                <div
                    className={
                        tempList[index].show
                            ? "faq-card-answer"
                            : "faq-card-answer faq-card-none"
                    }
                >
                    <span className="answer-mark">A.</span>
                    <span className="FAQ-card-answer">{item.answer}</span>
                </div>
            </div>
        );
    };

    useEffect(() => {
        setShowList(
            tempList.filter((item) => {
                if (category === "all") return true;
                if (category === item.category) return true;
                return false;
            })
        );
    }, [category]);

    const categoryClickEvent = e => {
        setCatecory(e.target.value);
    }

    return (
        <div className="faq-title-parent">
            <div className="faq-title">FAQ</div>
            
            <div className="categoryButtons-parent">
                {tempCategories.map((item, index) =>
                    <button className="categoryButtons" name="name" value={item.value}
                        onClick={e => categoryClickEvent(e)}>{item.name}</button>)}
            </div>

            <div className="faq-parent">
                <div className="faq-list">
                    {showList.map((item, index) => getQnACard(item, index))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;