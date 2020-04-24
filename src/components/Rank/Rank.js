import React from 'react';

const Rank = ({name, entries}) => {
    console.log(name, entries);
    return (
        <div>
            <div className='black f3'>
                {`${name}, Your current entry count is ...`}
            </div>
            <div className='black f3'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;