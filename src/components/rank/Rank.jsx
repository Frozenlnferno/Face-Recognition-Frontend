import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div className="">
            <p className="text-lg text-white">
                {`${name}, your entries count is...`}
            </p>
            <p className="text-xl text-white">
                {entries}
            </p>
        </div>
    )
}

export default Rank;