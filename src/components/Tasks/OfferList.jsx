import React, { useState } from 'react';

const OfferList = ({ offers, onOfferDecision, isOwner, onSend, myRole }) => {
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');

    const submitOffer = (e) => {
        e.preventDefault();
        if (!price) return alert('Enter price');
        onSend(price, message);
        setPrice(''); setMessage('');
    };

    return (
        <div className="mt-3">
            <h4 className="font-semibold">Offers</h4>
            <div className="grid gap-2 mt-2">
                {offers.length === 0 && <div className="small">No offers yet</div>}
                {offers.map(o => (
                    <div key={o._id} className="p-2 border rounded flex justify-between items-center">
                        <div>
                            <div className="font-medium">{o.professionalName || 'Professional'}</div>
                            <div className="small">${o.price} • {o.message}</div>
                            <div className="small">Status: {o.status || 'pending'}</div>
                        </div>
                        <div className="flex gap-2">
                            {isOwner && o.status === 'pending' && (
                                <>
                                    <button onClick={() => onOfferDecision(o._id, 'accept')} className="btn">Accept</button>
                                    <button onClick={() => onOfferDecision(o._id, 'reject')} className="btn" style={{ background: '#9ca3af' }}>Reject</button>
                                </>
                            )}
                            {o.status && <div className="small">{o.status}</div>}
                        </div>
                    </div>
                ))}
            </div>

            {myRole === 'professional' && (
                <form onSubmit={submitOffer} className="mt-3 flex gap-2">
                    <input value={price}
                        onChange={e => setPrice(e.target.value)}
                        placeholder="Price" className="input w-24"
                    />
                    <input value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Message (optional)" className="input"
                    />
                    <button className="btn">Send Offer</button>
                </form>
            )}
        </div>
    );
};

export default OfferList;
