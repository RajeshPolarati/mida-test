import React, { useEffect, useState } from 'react'
import link from "../../assets/images/link.png";
import QRCode from "react-qr-code";
import adidas from "../../assets/images/adidas.png";

const SingleDiscount = ({zkAppAdress,employeeHash,merklePath,code, showQr,setShowQr,setQrData}) => {
  const [isExpanded, setExpanded] = useState(false);  
  const[isUsed,setIsUsed] = useState(false)
  return (
    <div className="discount-main" style={{display:`${showQr? "none" : "block"}`,minHeight:`${isExpanded?"460px":""}`}} >
          <div className={`discount ${isUsed?'discount-used':''}`} 
          onClick={()=>{
            if(!isUsed){
              setExpanded(true)
            }
          }}
          style={{display:`${isExpanded? "none" : "flex"}`}}>
            <div className="brand-logo">
              <img src={adidas} />
            </div>
            <div className="discount-details">
              <div className="offer-percent">10% OFF</div>
              <div className="brand-name">adidas</div>
              <div className="expires">Expires in 15 days</div>
            </div>
          </div>

          <div className="discount-expand" style={{display:`${isExpanded? "flex" : "none"}`}}>
            <div className="offer-details" onClick={()=>{setExpanded(false)}} >
              <div className="brand-image">
                <img src={adidas} />
              </div>
              <div className="offer-percent">
                Get <b>10% OFF</b> on your nearest adidas showroom
              </div>
              <ul className="rules">
                <li>Avail at all adidas showrooms in the USA</li>
                <li>
                  This offer cannot be used in conjunction with any other
                  discount or promotional offer
                </li>
                <li>
                  Scan at the store before payment to avail the discount on your
                  purchase
                </li>
                <li>No cash value</li>
              </ul>
            </div>
            <div className="qr-details">
                <div className="qr">
                <QRCode
                  size={300}
                  style={{ height: "100px", width: "100px" }}
                  value={`${zkAppAdress} ${employeeHash} ${JSON.stringify(merklePath)} ${code}}`}
                  viewBox={`0 0 300 300`}
                />
                </div>
                <div className="options">
                    <div className="expand-qr"><img src={link} onClick={()=>{setIsUsed(true);setExpanded(false);setShowQr(true);setQrData(`${zkAppAdress} ${employeeHash} ${JSON.stringify(merklePath)} ${code}}`) }}/></div>
                    <div className="expiry-time">Expires in 15 days</div>
                </div>
            </div>
          </div>
        </div>
  )
}

export default SingleDiscount
