import { ResponsivePie } from '@nivo/pie'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./Manage.css"

function UserStatistic() {
    const [manData, setManData] = useState([1, 2])
    const [womanData, setWomanData] = useState([1])

    /* 남자 유저 정보 로드하기 */
    useEffect(() => {
        axios.post('http://gotchy.site/users')
            .then(function (response) {
                console.log(response.data);
                setManData(response.data.filter(function (el, idx) {
                    if (el.gender === "남자") {
                        return el;
                    }
                }));
            }).catch(function (reason) {
                console.log(reason);
            });
    }, []);

    /* 여자 유저 정보 로드하기 */
    useEffect(() => {
        axios.post('http://gotchy.site/users')
            .then(function (response) {
                console.log(response.data);
                setWomanData(response.data.filter(function (el, idx) {
                    if (el.gender === "여자") {
                        return el;
                    }
                }));
            }).catch(function (reason) {
                console.log(reason);
            });
    }, []);

    return (
        // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
        <div style={{ width: '750px', height: '500px', margin: '0 auto' }}>
            <div className="static-title">가치 회원들의 통계입니다!</div>
            <ResponsivePie
                data={[
                    { id: '남자', value: manData.length },
                    { id: '여자', value: womanData.length }
                ]}

                /**
                 * chart margin
                 */
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                /**
                 * chart 중간 빈공간 반지름
                 */
                innerRadius={0.5}
                /**
                 * pad 간격
                 */
                padAngle={1.8}
                /**
                 * pad radius 설정 (pad별 간격이 있을 시 보임)
                 */
                cornerRadius={8}
                /**
                 * chart 색상
                 */
                colors={['#CE9FFC', '#7367F0']} // 커스터하여 사용할 때
                // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
                /**
                 * pad border 두께 설정
                 */
                borderWidth={2}
                /**
                 * link label skip할 기준 각도
                 */
                arcLinkLabelsSkipAngle={0}
                /**
                 * link label 색상
                 */
                arcLinkLabelsTextColor="#000000"
                /**
                 * link label 연결되는 선 두께
                 */
                arcLinkLabelsThickness={2}
                /**
                 * link label 연결되는 선 색상
                 */
                arcLinkLabelsColor={{ from: 'color' }} // pad 색상에 따라감
                /**
                 * label (pad에 표현되는 글씨) skip할 기준 각도
                 */
                arcLabelsSkipAngle={10}
                theme={{
                    /**
                     * label style (pad에 표현되는 글씨)
                     */
                    labels: {
                        text: {
                            fontSize: 15,
                            fill: '#000000',
                        },
                    },
                    /**
                     * legend style (default로 하단에 있는 색상별 key 표시)
                     */
                    legends: {
                        text: {
                            fontSize: 15,
                            fill: '#000000',
                        },
                    },
                }}

                /**
                 * legend 설정 (default로 하단에 있는 색상별 key 표시)
                 */
                legends={[
                    {
                        anchor: 'bottom', // 위치
                        direction: 'row', // item 그려지는 방향
                        justify: false, // 글씨, 색상간 간격 justify 적용 여부
                        translateX: 0, // chart와 X 간격
                        translateY: 56, // chart와 Y 간격
                        itemsSpacing: 0, // item간 간격
                        itemWidth: 100, // item width
                        itemHeight: 18, // item height
                        itemDirection: 'left-to-right', // item 내부에 그려지는 방향
                        itemOpacity: 1, // item opacity
                        symbolSize: 18, // symbol (색상 표기) 크기
                        symbolShape: 'circle', // symbol (색상 표기) 모양
                        effects: [
                            {
                                // 추가 효과 설정 (hover하면 textColor를 olive로 변경)
                                on: 'hover',
                                style: {
                                    itemTextColor: '#a000c8',
                                },
                            },
                        ]
                    },
                ]}
            />
        </div>
    )

}

export default UserStatistic
