import React from 'react';
import { useTranslation } from 'react-i18next';

// أضفنا خاصية اختيارية جديدة اسمها articlesUrl
// لو موجودة، هيظهر زرار "مقالات ذات صلة" تحت وصف الخدمة يودي لصفحة المقالات بتاعت التخصص ده
function ServiceCard({ title, description, articlesUrl }) {
  const { i18n, t } = useTranslation();
  
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

      {/* زرار المقالات - يظهر فقط لو تم تمرير رابط للقسم ده */}
      {/* بيفتح في نفس التاب (من غير target="_blank") عشان زرار الرجوع في المتصفح يشتغل طبيعي */}
      {articlesUrl && (
        <a
          href={articlesUrl}
          style={{
            display: 'inline-block',
            marginTop: '16px',
            color: 'var(--primary-color)',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            textDecoration: 'none',
            borderBottom: '2px solid var(--accent-color)',
            paddingBottom: '2px'
          }}
        >
          📚 {isRtl ? 'مقالات ذات صلة' : 'Related Articles'}
        </a>
      )}
    </div>
  );
}

export default ServiceCard;
