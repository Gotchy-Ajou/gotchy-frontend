import React, { useEffect, useState } from "react";

import "./FAQ.css";

const categories = [
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

const qnaList = [
    {
        category: "category1",
        question: "what is that ? 1",
        answer: "this is react. 1",
        show: false
    },
    {
        category: "category2",
        question: "what is that ? 2",
        answer: "this is react. 2",
        show: false
    },
    {
        category: "category3",
        question: "what is that ? 3",
        answer: "this is react. 3",
        show: false
    },
    {
        category: "category1",
        question: "what is that ? 4",
        answer: "this is react. 4",
        show: false
    },
    {
        category: "category2",
        question: "what is that ? 5",
        answer: "this is react. 5",
        show: false
    },
    {
        category: "category3",
        question: "what is that ? 6",
        answer: "this is react. 6",
        show: false
    },
];

const FAQ = () => {
    const [category, setCatecory] = useState("all");
    const [cardOnOff, setCardOnOff] = useState(qnaList);
    const [showList, setShowList] = useState(qnaList);

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
                        qnaList[index].show
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
            qnaList.filter((item) => {
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
                {categories.map((item, index) =>
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