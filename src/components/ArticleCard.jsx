// import React from 'react';
import { useTranslation } from 'react-i18next';

function ArticleCard({ title, summary, onClick }) {
  const { i18n, t } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '25px',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      textAlign: isRtl ? 'right' : 'left',
      borderRight: isRtl ? '5px solid var(--accent-color)' : 'none',
      borderLeft: !isRtl ? '5px solid var(--accent-color)' : 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'between'
    }}>
      <h3 className="main-heading" style={{ 
        color: 'var(--primary-color)', 
        marginTop: 0, 
        marginBottom: '10px',
        fontSize: '1.3rem' 
      }}>
        {title}
      </h3>
      <p style={{ 
        color: 'var(--text-light)', 
        margin: '0 0 15px 0', 
        lineHeight: '1.7',
        fontSize: '1.05rem',
        textAlign: 'justify'
      }}>
        {summary}
      </p>
      <div>
        <button 
          onClick={onClick}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-color)',
            fontWeight: 'bold',
            cursor: 'pointer',
            padding: 0,
            fontSize: '1rem',
            textDecoration: 'underline'
          }}
        >
          {t('read_more')} &larr;
        </button>
      </div>
    </div>
  );
}

export default ArticleCard;