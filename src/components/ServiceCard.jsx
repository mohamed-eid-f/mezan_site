import React from 'react';
import { useTranslation } from 'react-i18next';

function ServiceCard({ title, description }) {
  const { i18n } = useTranslation();
  
  // التحقق مما إذا كانت اللغة الحالية هي العربية لضبط الاتجاه
  const isRtl = i18n.language === 'ar';

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '25px',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      textAlign: isRtl ? 'right' : 'left',
      transition: 'transform 0.3s ease',
      
      // إعداد الخط الذهبي الجانبي الديناميكي:
      // إذا كانت اللغة عربية، يوضع على اليمين. وإذا كانت أجنبية، يوضع على اليسار.
      borderRight: isRtl ? '5px solid var(--accent-color)' : 'none',
      borderLeft: !isRtl ? '5px solid var(--accent-color)' : 'none'
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
        margin: 0, 
        lineHeight: '1.7',
        fontSize: '1.05rem',
        textAlign: 'justify'
      }}>
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;