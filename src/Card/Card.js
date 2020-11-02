import React from 'react'
import './Card.css'
import data from '../colleges.json'
import InfiniteScroll from "react-infinite-scroll-component";

function Card() {
    const collegeData = data.colleges;
    const [count, setCount] = React.useState(1);
    const [slicedData, setSlicedData] = React.useState(collegeData.slice(0, 10));

    return (
        <InfiniteScroll
            dataLength={slicedData.length}
            next={() => {
                fetchMoreData()
            }}
            hasMore={count < parseInt(collegeData.length / 10)}
            loader={<h4>Loading...</h4>}
        >
            <div className="container">
                <div className="row">
                    {slicedData.map((item) =>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-top">
                                    <div className="card-top-overly"></div>
                                    <div className="college-st">
                                        <strong>
                                            {item.rating}<small>/5</small>
                                        </strong>
                                        <span>{item.rating_remarks}</span>
                                    </div>
                                    <div className="college-info">
                                        <ul>
                                            <li>{item.tags[0]}</li>
                                            <li>{item.tags[1]}</li>
                                        </ul>
                                        <p>{item.ranking}</p>
                                    </div>

                                </div>

                                <div className="card-detail">
                                    <div className="college-detail">
                                        <h3>{item.college_name}
                                        </h3>
                                        <p className="college-add">{item.nearest_place[0]} <span>{item.nearest_place[1]}</span></p>
                                        <p className="college-distance"><strong> <span className="green-text">93% Match : </span> {item.famous_nearest_places}</strong> </p>
                                    </div>
                                    <div className="college-price">
                                        <strong className="price">{item.discounted_fees}</strong>
                                        <span>{item.fees_cycle}</span>
                                    </div>
                                </div>
                                <div className="college-card-footer">
                                    <p className="flat-price">
                                        <strong>{item.offertext}</strong>
                                    </p>
                                    <ul className="cancellation">
                                        <li>{item.amenties[0]}</li>
                                        <li>,</li>
                                        <li>{item.amenties[1]}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </InfiniteScroll>
    );

    function fetchMoreData() {
        setTimeout(() => {
            let newArray = [...slicedData]
            let data = collegeData.slice(count * 10, count * 10 + 10);
            newArray.push.apply(newArray, data);
            setSlicedData(newArray)
            setCount(count + 1);
        }, 3000);
    }
}
export default Card;