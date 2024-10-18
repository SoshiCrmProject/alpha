import React from 'react';

const ProgressBar = ({ bg='bg-blue-500', percentage='50', height = 'h-5' }) => {

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className={`${height} w-full bg-gray-200 rounded-full`}>
                <div
                    className={`h-full rounded-full transition-all duration-300 ${bg}`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
