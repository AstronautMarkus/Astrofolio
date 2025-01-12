import React, { useState, useEffect } from 'react';
import './CookiesAlert.css';

interface CookiesAlertProps {
  onAccept: () => void;
  onReject: () => void;
}

const CookiesAlert: React.FC<CookiesAlertProps & { locale: any }> = ({ onAccept, onReject, locale }) => {
  const [visible, setVisible] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const rejectedUntil = localStorage.getItem('cookiesRejectedUntil');
    if (!rejectedUntil || new Date() > new Date(rejectedUntil)) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    onAccept();
    setFade(false);
    setTimeout(() => setVisible(false), 1000);
  };

  const handleReject = () => {
    onReject();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    localStorage.setItem('cookiesRejectedUntil', tomorrow.toISOString());
    setFade(false);
    setTimeout(() => setVisible(false), 1000);
  };

  const handleClose = () => {
    setFade(false);
    setTimeout(() => setVisible(false), 1000);
  };

  if (!visible) return null;

  return (
  <div className={`cookies-alert ${fade ? 'visible' : ''}`}>
    <div className="cookies-header">
      <button onClick={handleClose} className="btn-close">X</button>
    </div>
    <div className="cookies-body">
      <p>{locale.cookiesLanguageInfo}</p>
    </div>
    <div className="cookies-footer btn-container">
      <button onClick={handleAccept} className="btn-accept">{locale.cookiesAccept}</button>
      <button onClick={handleReject} className="btn-reject">{locale.cookiesDecline}</button>
    </div>
  </div>
  );
};

export default CookiesAlert;
