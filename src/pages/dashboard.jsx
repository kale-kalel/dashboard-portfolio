import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import WelcomeKpi from '../components/molecule/kpi.jsx';
import profilePic from '../assets/profile.png';
import Modal from '../components/organism/modal.jsx'; // <--- Make sure this path points to where you saved Modal.jsx!

const Dashboard = () => {
  const [sheetData, setSheetData] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    async function fetchTabData() {
      const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2ac1667HG1Yt8-W8iM2-3LWu8sk4feFzjiM-7gaNj67TG6NCpE_btbJZpfa7n6c5APb8oOAzs78wv/pub?gid=1374185899&single=true&output=csv';

      try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log("EXACT ROW 0 DATA:", results.data[0]);
            setSheetData(results.data);
          }
        });
      } catch (error) {
        console.error("Error reading Google Sheet tab:", error);
      }
    }

    fetchTabData();
  }, []);

  // OPENS MODAL
  const handleCardClick = (cardName) => {
    setActiveModal(cardName);
  };

  // CLOSES MODAL
  const closeModal = () => {
    setActiveModal(null);
  };

  // DL RESUME
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf';
    link.download = 'temp-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="dashboard-grid">
        <WelcomeKpi />
        <div className="dashboard-row">
          {/* PROFILE */}
          <div className="dash-card">
            <div className="dash-card image-card-wrapper">
              <img
                src={profilePic}
                alt="profile-pic"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'scale-down',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            </div>
          </div>

          {/* ABOUT ME */}
          <div
            className="dash-card image-card-wrapper"
            onClick={() => handleCardClick('About Me')}
            style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
          >
            {sheetData.length > 0 && sheetData[0].image ? (
              <img
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2ac1667HG1Yt8-W8iM2-3LWu8sk4feFzjiM-7gaNj67TG6NCpE_btbJZpfa7n6c5APb8oOAzs78wv/pubchart?oid=1832210207&amp;format=image"
                alt="Connect w me chart"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'scale-down',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
            ) : (
              <p style={{ color: 'white', padding: '15px', textAlign: 'center' }}>
                Loading sheet data...
              </p>
            )}
          </div>

          {/* CONNECT W ME */}
          <div
            className="dash-card image-card-wrapper"
            onClick={() => handleCardClick('Connect With Me')}
            style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
          >
            <img
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2ac1667HG1Yt8-W8iM2-3LWu8sk4feFzjiM-7gaNj67TG6NCpE_btbJZpfa7n6c5APb8oOAzs78wv/pubchart?oid=2070644908&amp;format=image"
              alt="Connect w me chart"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'scale-down',
                objectPosition: 'center',
                display: 'block'
              }}
            />
          </div>

          {/* RESUME */}
          <div
            className="dash-card"
            onClick={handleResumeDownload}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="dash-card image-card-wrapper"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
            >
              <svg
                style={{ color: '#262F50', width: '50%', height: '50%' }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <div className="dashboard-row">
          {/* PROJECT N EXP */}
          <div
            className="dash-card"
            onClick={() => handleCardClick('Projects and Experience')}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2ac1667HG1Yt8-W8iM2-3LWu8sk4feFzjiM-7gaNj67TG6NCpE_btbJZpfa7n6c5APb8oOAzs78wv/pubchart?oid=1718039937&amp;format=image"
              alt="Connect w me chart"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'scale-down',
                objectPosition: 'center',
                display: 'block'
              }}
            />
          </div>

          {/* TECH */}
          <div
            className="dash-card"
            onClick={() => handleCardClick('Tech')}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2ac1667HG1Yt8-W8iM2-3LWu8sk4feFzjiM-7gaNj67TG6NCpE_btbJZpfa7n6c5APb8oOAzs78wv/pubchart?oid=975020773&amp;format=image"
              alt="Connect w me chart"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'scale-down',
                objectPosition: 'center',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>

      {/* MODAL COMPONENT SITS HERE */}
      <Modal activeModal={activeModal} onClose={closeModal} />
    </>
  );
};

export default Dashboard;