import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input type="text" placeholder='Some awesome title' className='notes__title-input' />
                <textarea placeholder='What happened today?' className='notes__textarea' ></textarea>
                <div className='notes__image'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp5XTsl29GosBFCx6f2KqmGiygLT2L1qe2A&usqp=CAU" alt="img" />
                </div>
            </div>
        </div>
    );
}

export default NoteScreen;