import React from "react";

const ShowUnfinished = ({ changeShowOnlyCompleted }) => {
    return (
        <div className="topMargin10">
            Show only unfinished
        <input type="checkbox" onChange={changeShowOnlyCompleted} />
        </div>

    )
}

export default ShowUnfinished;