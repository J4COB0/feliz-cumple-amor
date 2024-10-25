import React from 'react';

const HanniaMessage = ({tittle,text,image,color,handleMessage}) => {
    return (
        <div className='main-container'>
            <div className='card'>
                <section className='container-message'>
                    <i className="fas fa-star"></i>
                    <section className='main-message'>
                        <h2 className='message-tittle'>{tittle}</h2>
                        <img src={image} alt="" />
                        <h3 className='message-text'>{text}</h3>
                    </section>
                </section>
                <button onClick={handleMessage} className='button-next' style={{background:color}}><i className="fas fa-angle-right fa-2x"></i></button>
            </div>
        </div>
    );
};

export default HanniaMessage;