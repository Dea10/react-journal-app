import React from 'react';

const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://media.istockphoto.com/photos/travel-during-the-covid19-pandemic-airplane-model-with-face-mask-and-picture-id1268257924?b=1&k=20&m=1268257924&s=170667a&w=0&h=kviE-Bd4sAaGuHXJqdzxk__-URPKAZV6Zj7VpnuXges=)'
                }}
            >
            </div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    A new day
                </p>
                <p className='journal__entry-content'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
}

export default JournalEntry;