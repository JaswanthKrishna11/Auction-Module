import React, { useContext } from 'react';
import Countdown from 'react-countdown';
import { AuthContext } from '../../context/AuthContext';

const renderer = ({ days, hours, minutes, seconds, completed, props }) => {
  if (completed) {
    return null;
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div
          style={{
            height: '320px',
            backgroundImage: `url(${props.item.imgUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="w-100"
        />

        <div className="card-body">
          <p className="lead display-6">{props.item.title}</p>
          <div className="d-flex jsutify-content-between align-item-center">
            <h5>
              {days * 24 + hours} hr: {minutes} min: {seconds} sec
            </h5>
          </div>
          <p className="card-text">{props.item.desc}</p>
          <div className="d-flex justify-content-between align-item-center">
            <div>
              {!props.owner ? (
                <>
                <div
                  onClick={() => props.bidAuction()}
                  className="btn btn-outline-secondary"
                >
                  ₹100
                </div>
                <div
                  onClick={() => props.bidAuction()}
                  className="btn btn-outline-secondary"
                  style={{marginLeft:`2px`}}
                >
                  ₹500
                </div>
                <div
                  onClick={() => props.bidAuction()}
                  className="btn btn-outline-secondary"
                  style={{marginLeft:`2px`}}
                >
                  ₹2000
                </div>
                </>
              ) : props.owner.email === props.item.email ? (
                <div
                  onClick={() => props.endAuction(props.item.id)}
                  className="btn btn-outline-secondary"
                >
                  Cancel Auction
                </div>
              ) : props.owner.email === props.item.curWinner ? (
                <p className="display-6">Highest Bid</p>
              ) : (
                <>
                  <div onClick={() => props.bidAuction(props.item.id, props.item.curPrice)} style={{marginLeft:`2px`}} className="btn btn-outline-secondary">
                      ₹100
                  </div>
                  <div onClick={() => props.bidAuction1(props.item.id, props.item.curPrice)} style={{marginLeft:`2px`}} className="btn btn-outline-secondary">
                      ₹500
                  </div>
                  <div onClick={() => props.bidAuction2(props.item.id, props.item.curPrice)} style={{marginLeft:`2px`}} className="btn btn-outline-secondary">
                      ₹2000
                  </div>
                
                 
                </>
              )}
            </div>
            <p className="display-6">Rs. {props.item.curPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AuctionCard = ({ item }) => {
  let expiredDate = item.duration;
  const { currentUser, bidAuction, bidAuction1,bidAuction2, endAuction } = useContext(AuthContext);

  return (
    <Countdown
      owner={currentUser}
      date={expiredDate}
      bidAuction={bidAuction}
      endAuction={endAuction}
      bidAuction1={ bidAuction1}
      bidAuction2={ bidAuction2}
      item={item}
      renderer={renderer}
    />
  );
};
