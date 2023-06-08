import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Notice.css";


const Notice = () => {
    // DB에 저장되어 있는 공지사항 리스트 가져오기 위한 변수
    const [noticeList, setNoticeList] = useState([
        
        // {
        //     postId: 1,
        //     title: "Notice 1",
        //     content: "Notice 1의 내용입니다.",
        //     createdDate: "2022-05-20"
        // },
        // {
        //     postId: 2,
        //     title: "Notice 2",
        //     content: "Notice 2의 내용입니다.",
        //     createdDate: "2022-08-20"
        // },
        // {
        //     postId: 3,
        //     title: "Notice 3",
        //     content: "Notice 3의 내용입니다.",
        //     createdDate: "2023-05-20"
        // }
    
    ]);

    // const [cardOnOff, setCardOnOff] = useState(noticeList);
    // const [showList, setShowList] = useState(noticeList);

    /* [POST / notice]: 공지사항 목록 가져오기 */
    const loadNoticeList = async () => {

        await axios.get('http://localhost:3000/api/v1/posts')
            .then(function (response) {
                setNoticeList(response.data.responseData.map(function (el, idx) {
                    console.log("[NoticeList.js] useEffect() 성공");
                    console.log(response.data);
                    var returnObj = {}

                    returnObj['postId'] = el.postId;
                    returnObj['title'] = el.title;
                    returnObj['content'] = el.content;
                    returnObj['createdDate'] = el.createdDate;
                    returnObj['show'] = false;

                    return returnObj;
                }));

            }).catch(function (reason) {
                console.log("[NoticeList.js] useEffect() 실패");
                console.log(reason);
            });
    }

    useEffect(() => {
        loadNoticeList();
    }, []);

    noticeList.sort((a, b) => b.postId - a.postId); // id순 정렬 (생성 날짜순으로 id 생성되므로 내림차순)


    const getQnACard = (item, index) => {
        return (
            <div className="notice-card" key={index}>
                <div
                    className="notice-card-title"
                // onClick={() => {
                //     let tempCard = cardOnOff;
                //     tempCard[index].show = !tempCard[index].show;
                //     setCardOnOff([...tempCard]);
                // }}
                >
                    <span className="notice-title-left">{item.title}</span>
                    <span className="notice-title-right">{item.createdDate}</span>
                </div>
                <div
                    className={
                        // noticeList[index].show
                        "notice-card-context"
                        // : "notice-card-context notice-card-none"
                    }
                >
                    <span className="notice-card-context">{item.content}</span>
                </div>
            </div>
        );
    };


    // useEffect(() => {
    //     setShowList(tempList);
    // }, []);

    return (
        <div className="notice-title-parent">
            <div className="notice-title">공지사항</div>

            <div className="notice-parent">
                <div className="notice-list">
                    {noticeList.map((item, index) => getQnACard(item, index))}
                </div>
            </div>
        </div>
    );
};


export default Notice;