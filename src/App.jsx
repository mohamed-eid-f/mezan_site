import React from 'react';
import { useTranslation } from 'react-i18next';
import ServiceCard from './components/ServiceCard';

function App() {
  const { t, i18n } = useTranslation();
  const phoneNumber = "01288070525";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isRtl = i18n.language === 'ar';

  return (
    <div style={{ direction: isRtl ? 'rtl' : 'ltr', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* شريط اختيار اللغات العلوي */}
      <div style={{ backgroundColor: '#0b1329', padding: '12px 20px', textAlign: 'center', borderBottom: '1px solid #1c2541' }}>
        <button onClick={() => changeLanguage('ar')} style={{ margin: '0 10px', color: i18n.language === 'ar' ? '#d4af37' : '#fff', background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>العربية</button>
        <button onClick={() => changeLanguage('en')} style={{ margin: '0 10px', color: i18n.language === 'en' ? '#d4af37' : '#fff', background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>English</button>
        <button onClick={() => changeLanguage('de')} style={{ margin: '0 10px', color: i18n.language === 'de' ? '#d4af37' : '#fff', background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>Deutsch</button>
        <button onClick={() => changeLanguage('fr')} style={{ margin: '0 10px', color: i18n.language === 'fr' ? '#d4af37' : '#fff', background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>Français</button>
        <button onClick={() => changeLanguage('ru')} style={{ margin: '0 10px', color: i18n.language === 'ru' ? '#d4af37' : '#fff', background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>Русский</button>
        <button onClick={() => changeLanguage('zh')} style={{ margin: '0 10px', color: i18n.language === 'zh' ? '#d4af37' : '#fff', background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>中文</button>
      </div>

      {/* هيدر الموقع */}
      <header style={{ 
        backgroundColor: '#0b1329', 
        padding: '40px 20px', 
        textAlign: 'center',
        borderBottom: '5px solid var(--accent-color)',
        backgroundImage: 'linear-gradient(135deg, #0b1329 0%, #1c2541 100%)'
      }}>
        <div className="container">
          <img 
            src="/logo.png" 
            alt="Mezan Law Firm Banner" 
            style={{ 
              width: '100%',
              maxWidth: '550px',
              height: 'auto',
              objectFit: 'contain',
              display: 'inline-block'
            }}
            onError={(e)=>{e.target.style.display='none'}} 
          />
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="container" style={{ flex: 1, marginTop: '45px', marginBottom: '45px' }}>
        
        {/* عن المكتب */}
        <section style={{ backgroundColor: '#fff', padding: '35px', borderRadius: '12px', marginBottom: '35px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.02)' }}>
          <h2 className="main-heading" style={{ color: 'var(--primary-color)', margin: '0 0 20px 0', fontSize: '1.6rem', borderBottom: '2px solid #f1f5f9', paddingBottom: '12px' }}>
            {t('about_title')}
          </h2>
          <p style={{ lineHeight: '1.9', color: '#334155', fontSize: '1.1rem', margin: 0, textAlign: 'justify' }}>
            {t('about_desc')}
          </p>
        </section>

        {/* مجالات التخصص - الخدمات النشطة حالياً فقط، مرتبة حسب الأولوية */}
        <section style={{ marginBottom: '35px' }}>
          <h2 className="main-heading" style={{ color: 'var(--primary-color)', margin: '0 0 25px 0', fontSize: '1.6rem' }}>
            {t('services_title')}
          </h2>
          <div>
            {/* 1. تأسيس الشركات */}
            <ServiceCard
              title={t('service1_title')}
              description={t('service1_desc')}
              articlesUrl="/articles-companies.html"
            />
            {/* 2. الأحوال الشخصية */}
            <ServiceCard
              title={t('service2_title')}
              description={t('service2_desc')}
              articlesUrl="/articles-personal-status.html"
            />
            {/* 3. الجنائي */}
            <ServiceCard
              title={t('service3_title')}
              description={t('service3_desc')}
              articlesUrl="/articles-criminal.html"
            />
            {/* 4. القضايا المدنية */}
            <ServiceCard
              title={t('service4_title')}
              description={t('service4_desc')}
              articlesUrl="/articles-civil.html"
            />

            {/*
              خدمات مؤجلة مؤقتًا (زواج الأجانب - تسجيل الملكيات العقارية):
              النصوص بتاعتها لسه محفوظة في ملف الترجمة (locales) تحت مفاتيح
              _deferred_marriage_title/_desc و _deferred_realestate_title/_desc.
              لما تجهزوا محتوى ليها، رجعوا استخدموها هنا بنفس شكل الكارت اللي فوق.
            */}
          </div>
        </section>

       {/* كارت الاتصال */}
        <section style={{ 
          background: 'linear-gradient(135deg, #1c2541 0%, #0b1329 100%)', 
          color: 'white', 
          padding: '40px', 
          borderRadius: '12px', 
          textAlign: 'center', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
        }}>
          <h2 className="main-heading" style={{ color: 'var(--accent-color)', marginTop: 0, fontSize: '1.7rem' }}>
            {t('contact_title')}
          </h2>
          <p style={{ color: '#cbd5e1', marginBottom: '25px', fontSize: '1.1rem' }}>
            {t('contact_desc')}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a 
              href="https://wa.me/201288070525" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#25D366', 
                color: 'white', 
                padding: '16px 45px', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                fontWeight: 'bold', 
                fontSize: '1.2rem',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
              }}
            >
              💬 {t('btn_wa')}
            </a>
          </div>
          
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '25px', fontStyle: 'italic' }}>
            {t('note')}
          </p>
        </section>

      </main>

      <footer style={{ backgroundColor: '#0b1329', color: '#94a3b8', textAlign: 'center', padding: '25px 20px', fontSize: '0.9rem', borderTop: '1px solid #1c2541' }}>
        &copy; 2026 {t('title')}.
      </footer>

    </div>
  );
}

export default App;
