import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

import WelcomeKpi from '../components/molecule/kpi.jsx';
import DashboardCard from '../components/molecule/card-dashboard.jsx';
import Modal from '../components/organism/modal.jsx';

import profilePic from '../assets/profile.png';

const DashboardPage = () => {
  const [sheetData, setSheetData] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  // FETCH GOOGLE SHEET DATA
  useEffect(() => {
    async function fetchTabData() {
      const csvUrl =
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2ac1667HG1Yt8-W8iM2-3LWu8sk4feFzjiM-7gaNj67TG6NCpE_btbJZpfa7n6c5APb8oOAzs78wv/pub?gid=1374185899&single=true&output=csv';

      try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log('EXACT ROW 0 DATA:', results.data[0]);
            setSheetData(results.data);
          },
        });
      } catch (error) {
        console.error('Error reading Google Sheet tab:', error);
      }
    }

    fetchTabData();
  }, []);

  // OPEN MODAL
  const handleCardClick = (cardName) => {
    setActiveModal(cardName);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setActiveModal(null);
  };

  // DOWNLOAD RESUME
  const handleResumeDownload = () => {
    const link = document.createElement('a');

    link.href = '../assets/JianKalelMarquez_Resume.pdf';
    link.download = 'temp-resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="dashboard-grid">

        <WelcomeKpi />

        {/* ==================== ROW 1 ==================== */}
        <div className="dashboard-row">

          {/* PROFILE */}
          <DashboardCard>
            <div className="dash-card image-card-wrapper">
              <img
                src={profilePic}
                alt="profile-pic"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'scale-down',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>
          </DashboardCard>

          {/* ABOUT ME */}
          <DashboardCard
            className="image-card-wrapper"
            onClick={() => handleCardClick('About Me')}
            style={{
              padding: 0,
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            {sheetData.length > 0 && sheetData[0].image ? (
              <img
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2ac1667HG1Yt8-W8iM2-3LWu8sk4feFzjiM-7gaNj67TG6NCpE_btbJZpfa7n6c5APb8oOAzs78wv/pubchart?oid=1832210207&format=image"
                alt="About Me"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'scale-down',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            ) : (
              <p
                style={{
                  color: 'white',
                  padding: '15px',
                  textAlign: 'center',
                }}
              >
                Loading sheet data...
              </p>
            )}
          </DashboardCard>

          {/* CONNECT WITH ME */}
          <DashboardCard
            className="image-card-wrapper"
            onClick={() => handleCardClick('Connect With Me')}
            style={{
              padding: 0,
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <img
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2ac1667HG1Yt8-W8iM2-3LWu8sk4feFzjiM-7gaNj67TG6NCpE_btbJZpfa7n6c5APb8oOAzs78wv/pubchart?oid=2070644908&format=image"
              alt="Connect With Me"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'scale-down',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </DashboardCard>

          {/* RESUME */}
          <DashboardCard
            onClick={handleResumeDownload}
            style={{
              cursor: 'pointer',
            }}
          >
            <div
              className="dash-card image-card-wrapper"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <svg
                style={{
                  color: '#262F50',
                  width: '50%',
                  height: '50%',
                }}
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
          </DashboardCard>

        </div>

        {/* ==================== ROW 2 ==================== */}
        <div className="dashboard-row">

          {/* PROJECTS & EXPERIENCE */}
          <DashboardCard
            onClick={() => handleCardClick('Projects and Experience')}
            style={{
              cursor: 'pointer',
            }}
          >
            <img
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2ac1667HG1Yt8-W8iM2-3LWu8sk4feFzjiM-7gaNj67TG6NCpE_btbJZpfa7n6c5APb8oOAzs78wv/pubchart?oid=1718039937&format=image"
              alt="Projects and Experience"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'scale-down',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </DashboardCard>

          {/* TECH */}
          <DashboardCard
            onClick={() => handleCardClick('Tech')}
            style={{
              cursor: 'pointer',
            }}
          >
            <img
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2ac1667HG1Yt8-W8iM2-3LWu8sk4feFzjiM-7gaNj67TG6NCpE_btbJZpfa7n6c5APb8oOAzs78wv/pubchart?oid=975020773&format=image"
              alt="Tech"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'scale-down',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </DashboardCard>

        </div>
      </div>

      {/* MODAL */}
      <Modal
        activeModal={activeModal}
        onClose={closeModal}
      />
    </>
  );
};

export default DashboardPage;