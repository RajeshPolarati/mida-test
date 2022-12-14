import React, { useEffect, useState } from "react";
import adidas from "../../assets/images/adidas.png";
// import qr from "../../assets/images/qr.png";
import link from "../../assets/images/link.png";
import useCollapse from "react-collapsed";
import QRCode from "react-qr-code";
import SingleDiscount from "./singleDiscount";
import axios from "axios";
const Discounts = () => {
  const [showQr, setShowQr] = useState(false);
  const [zkAppAdress, setZkAppAdress] = useState("");
  const [employeeHash, setEmployeeHash] = useState("");
  const [merklePath, setMerklePath] = useState({});
  const [discountCodes, setDiscountCodes] = useState([]);
  const [isPopupOpened, setPopUpOpened] = useState(false);
  const [qrData, setQrData] = useState("");

  const getQrDetails = async () => {
    const response = await axios.get("/be/api/v1/qr-code-info", {
      withCredentials: true,
    });
    const data = response?.data;
    setZkAppAdress(response?.data?.zk_app_address);
    setEmployeeHash(response?.data?.employee_hash);
    setMerklePath(response?.data?.merkle_path);
    if (typeof response?.data?.discount_code === "string") {
      setDiscountCodes([response?.data?.discount_code]);
    }
    if (typeof response?.data?.discount_code === "Array") {
      setDiscountCodes(response?.data?.discount_code);
    }
  };

  useEffect(() => {
    getQrDetails();
  }, []);
  return (
    <div className="discounts-main">
      <div className={`discounts ${isPopupOpened ? "discounts-fade" : ""}`}>
        <div className="logo">Logo</div>
        <div className="user-details">
          <div> My discounts</div>
        </div>
        <div className="all-discounts">
          {discountCodes &&
            discountCodes.map((code, key) => {
              return (
                <SingleDiscount
                  zkAppAdress={zkAppAdress}
                  employeeHash={employeeHash}
                  merklePath={merklePath}
                  code={code}
                  showQr={showQr}
                  setShowQr={setShowQr}
                  setQrData={setQrData}
                  key={key}
                />
              );
            })}

          {showQr && (
            <div className="expanded-qr">
              <QRCode
                size={300}
                style={{ height: "300px", width: "300px" }}
                value={qrData}
                viewBox={`0 0 300 300`}
              />
              <button
                className="scan-completed"
                onClick={() => {
                  setPopUpOpened(true);
                }}
              >
                Scan Completed
              </button>
              <div className="expiry-time">Expires in 15 days</div>
            </div>
          )}
        </div>
      </div>

      {isPopupOpened && (
        <div className="success-message">
          <div className="success-data">
            <div className="sucess-header">Congratulations</div>
            <div className="success-body">
              You have successfully applied the discount
            </div>
            <div className="success-footer">Enjoy your purchase</div>
            <button
              className="close-qr"
              onClick={() => {
                setShowQr(false);
                setPopUpOpened(false);
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discounts;
