import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'measurement', icon: 'fa-gauge', ko: '작업환경 측정', en: 'Environment Measurement' },
  { id: 'ventilation', icon: 'fa-wind', ko: '환기와 조명', en: 'Ventilation & Lighting' },
  { id: 'noise', icon: 'fa-volume-high', ko: '소음과 진동', en: 'Noise & Vibration' },
  { id: 'dust', icon: 'fa-smog', ko: '분진 관리', en: 'Dust Management' },
  { id: 'confined', icon: 'fa-door-closed', ko: '밀폐 공간', en: 'Confined Spaces' },
  { id: 'thermal', icon: 'fa-temperature-half', ko: '온열 환경', en: 'Thermal Environment' },
];

export default function WorkEnvironment(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('measurement');
  const isKo = language === 'ko';

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveSection(SECTIONS[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title={isKo ? '작업환경 관리' : 'Work Environment Management'}
        description={isKo
          ? '쾌적한 작업환경 조성을 위한 관리 기법을 학습합니다.'
          : 'Learn management techniques for creating a pleasant work environment.'}
      />

      <div className="guide-page">
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(section.id)}
                  >
                    <i className={`fa-solid ${section.icon}`} />
                    <span>{isKo ? section.ko : section.en}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <main className="guide-content">
            {activeSection === 'measurement' && <MeasurementSection isKo={isKo} />}
            {activeSection === 'ventilation' && <VentilationSection isKo={isKo} />}
            {activeSection === 'noise' && <NoiseSection isKo={isKo} />}
            {activeSection === 'dust' && <DustSection isKo={isKo} />}
            {activeSection === 'confined' && <ConfinedSection isKo={isKo} />}
            {activeSection === 'thermal' && <ThermalSection isKo={isKo} />}

            <div className="guide-section-nav">
              <button className="guide-nav-btn prev" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-arrow-left" />
                <span>{currentIndex > 0 ? (isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en) : (isKo ? '이전' : 'Previous')}</span>
              </button>
              <button className="guide-nav-btn next" onClick={handleNext} disabled={currentIndex === SECTIONS.length - 1}>
                <span>{currentIndex < SECTIONS.length - 1 ? (isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en) : (isKo ? '다음' : 'Next')}</span>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>

            {/* References */}
            <div className="guide-references">
              <h4><i className="fa-solid fa-book" /> {isKo ? '출처 및 참고자료' : 'References'}</h4>
              <ul>
                <li>{isKo ? '산업안전보건법 제125조~제128조 (작업환경측정)' : 'Occupational Safety and Health Act, Articles 125-128 (Work Environment Measurement)'}</li>
                <li>{isKo ? '작업환경측정 및 지정측정기관 평가 등에 관한 고시 (고용노동부)' : 'Notice on Work Environment Measurement and Designated Measurement Agencies (MOEL)'}</li>
                <li>{isKo ? '한국산업안전보건공단(KOSHA) 작업환경 가이드 — ' : 'KOSHA Work Environment Guide — '}<a href="https://www.kosha.or.kr" target="_blank" rel="noopener noreferrer">www.kosha.or.kr</a></li>
                <li>{isKo ? '밀폐공간 보건작업 프로그램 수립 시행에 관한 기술지침 (KOSHA GUIDE H-80-2022)' : 'Technical Guidelines on Confined Space Health Work Program (KOSHA GUIDE H-80-2022)'}</li>
                <li>{isKo ? '산업환기공학 (ACGIH Industrial Ventilation Manual)' : 'ACGIH Industrial Ventilation: A Manual of Recommended Practice'}</li>
                <li>{isKo ? '소음 및 진동 관리법 (법률 제18469호)' : 'Noise and Vibration Control Act (Act No. 18469)'}</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

function MeasurementSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '작업환경 측정' : 'Work Environment Measurement'}</h1>
        <p>{isKo
          ? '작업환경 측정의 목적, 대상, 방법을 학습합니다.'
          : 'Learn about the purpose, targets, and methods of work environment measurement.'}</p>
      </div>

      <h2>{isKo ? '측정 목적' : 'Measurement Purpose'}</h2>
      <p>{isKo
        ? '작업환경 측정은 근로자가 노출되는 유해인자의 농도 또는 강도를 측정하여, 노출기준 초과 여부를 확인하고 적절한 개선 대책을 수립하기 위해 실시합니다.'
        : 'Work environment measurement is conducted to measure the concentration or intensity of harmful factors workers are exposed to, verify whether exposure limits are exceeded, and establish appropriate improvement measures.'}</p>

      <h2>{isKo ? '측정 주기' : 'Measurement Frequency'}</h2>
      <ul>
        <li>{isKo ? '최초 측정: 작업 개시 후 30일 이내' : 'Initial measurement: within 30 days of work commencement'}</li>
        <li>{isKo ? '정기 측정: 6개월에 1회 이상' : 'Regular measurement: at least once every 6 months'}</li>
        <li>{isKo ? '노출기준 초과 시: 3개월에 1회 이상' : 'When exceeding exposure limits: at least once every 3 months'}</li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '작업환경 측정은 고용노동부에 등록된 지정측정기관에 의뢰해야 합니다. 측정 시 근로자 대표가 참석할 수 있으며, 결과는 근로자에게 공지해야 합니다.'
          : 'Work environment measurements must be commissioned to agencies registered with the Ministry of Employment and Labor. Worker representatives may attend measurements, and results must be communicated to workers.'}
      </TipBox>
    </div>
  );
}

function VentilationSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '환기와 조명' : 'Ventilation & Lighting'}</h1>
        <p>{isKo
          ? '작업장의 적절한 환기와 조명 관리 방법을 학습합니다.'
          : 'Learn about proper ventilation and lighting management in workplaces.'}</p>
      </div>

      <h2>{isKo ? '환기의 종류' : 'Types of Ventilation'}</h2>
      <ul>
        <li><strong>{isKo ? '자연 환기' : 'Natural Ventilation'}</strong> - {isKo ? '창문, 문 등을 통한 자연적 공기 순환' : 'Natural air circulation through windows and doors'}</li>
        <li><strong>{isKo ? '전체 환기(일반 환기)' : 'General Ventilation'}</strong> - {isKo ? '작업장 전체의 공기를 교환' : 'Exchanging air throughout the entire workplace'}</li>
        <li><strong>{isKo ? '국소 배기' : 'Local Exhaust Ventilation'}</strong> - {isKo ? '오염원 발생 지점에서 직접 오염 공기를 배출' : 'Exhausting contaminated air directly from the source'}</li>
      </ul>

      <h2>{isKo ? '조명 기준' : 'Lighting Standards'}</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>{isKo ? '작업 구분' : 'Work Type'}</th>
              <th>{isKo ? '조도(럭스)' : 'Illuminance (Lux)'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '초정밀 작업' : 'Very Fine Work'}</td>
              <td>750 Lux</td>
            </tr>
            <tr>
              <td>{isKo ? '정밀 작업' : 'Fine Work'}</td>
              <td>300 Lux</td>
            </tr>
            <tr>
              <td>{isKo ? '보통 작업' : 'Normal Work'}</td>
              <td>150 Lux</td>
            </tr>
            <tr>
              <td>{isKo ? '기타 작업' : 'Other Work'}</td>
              <td>75 Lux</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="tip">
        {isKo
          ? '유해물질을 사용하는 작업장에서는 국소 배기 장치가 가장 효과적인 환기 방법입니다. 후드의 위치와 풍속을 적절히 설정하여 오염물질을 효율적으로 제거하세요.'
          : 'Local exhaust ventilation is the most effective method for workplaces using hazardous substances. Set the hood position and air velocity appropriately to efficiently remove contaminants.'}
      </TipBox>
    </div>
  );
}

function NoiseSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '소음과 진동' : 'Noise & Vibration'}</h1>
        <p>{isKo
          ? '소음과 진동으로 인한 건강장해 예방 방법을 학습합니다.'
          : 'Learn methods for preventing health hazards from noise and vibration.'}</p>
      </div>

      <h2>{isKo ? '소음 노출 기준' : 'Noise Exposure Standards'}</h2>
      <p>{isKo
        ? '1일 8시간 작업 기준 소음 노출 한계는 90dB(A)입니다. 5dB 증가할 때마다 허용 노출 시간이 절반으로 줄어듭니다.'
        : 'The noise exposure limit for 8 hours of work per day is 90dB(A). For every 5dB increase, the allowable exposure time is halved.'}</p>

      <h2>{isKo ? '소음 방지 대책' : 'Noise Prevention Measures'}</h2>
      <ol>
        <li>{isKo ? '음원 제거 또는 저소음 설비로 대체' : 'Remove noise source or replace with low-noise equipment'}</li>
        <li>{isKo ? '차음벽, 방음 커버 등 공학적 대책' : 'Engineering controls like sound barriers and acoustic covers'}</li>
        <li>{isKo ? '작업 시간 제한 (관리적 대책)' : 'Work time limitations (administrative controls)'}</li>
        <li>{isKo ? '청력 보호구 착용 (귀마개, 귀덮개)' : 'Wearing hearing protection (earplugs, earmuffs)'}</li>
      </ol>

      <TipBox type="warning">
        {isKo
          ? '소음성 난청은 한번 발생하면 회복이 불가능합니다. 85dB(A) 이상의 소음 작업장에서는 반드시 청력 보호구를 착용하고, 정기적으로 청력 검사를 받으세요.'
          : 'Noise-induced hearing loss is irreversible once it occurs. Always wear hearing protection in workplaces with noise levels above 85dB(A), and get regular hearing tests.'}
      </TipBox>
    </div>
  );
}

function DustSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '분진 관리' : 'Dust Management'}</h1>
        <p>{isKo
          ? '작업장 분진의 종류와 관리 방법을 학습합니다.'
          : 'Learn about types of workplace dust and management methods.'}</p>
      </div>

      <h2>{isKo ? '분진의 종류' : 'Types of Dust'}</h2>
      <ul>
        <li><strong>{isKo ? '유기 분진' : 'Organic Dust'}</strong> - {isKo ? '목분, 곡물분, 면분진 등' : 'Wood dust, grain dust, cotton dust, etc.'}</li>
        <li><strong>{isKo ? '무기 분진' : 'Inorganic Dust'}</strong> - {isKo ? '석면, 규사, 금속 분진 등' : 'Asbestos, silica, metal dust, etc.'}</li>
        <li><strong>{isKo ? '화학적 분진' : 'Chemical Dust'}</strong> - {isKo ? '농약, 의약품 분진 등' : 'Pesticide, pharmaceutical dust, etc.'}</li>
      </ul>

      <h2>{isKo ? '분진 관리 대책' : 'Dust Management Measures'}</h2>
      <p>{isKo
        ? '분진 관리의 기본은 발생원 억제, 환기, 개인보호구 착용입니다. 특히 국소배기장치를 설치하여 분진 발생원에서 바로 포집하는 것이 가장 효과적입니다.'
        : 'The basics of dust management are source suppression, ventilation, and PPE usage. Installing local exhaust ventilation to capture dust directly at the source is most effective.'}</p>

      <TipBox type="danger">
        {isKo
          ? '석면은 발암물질로 분류됩니다. 석면이 포함된 건축 자재를 해체·제거할 때는 반드시 전문 업체에 의뢰하고, 특별교육을 이수한 근로자만 작업해야 합니다.'
          : 'Asbestos is classified as a carcinogen. Demolition or removal of asbestos-containing building materials must be done by specialized companies, with only specially trained workers performing the work.'}
      </TipBox>
    </div>
  );
}

function ConfinedSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '밀폐 공간' : 'Confined Spaces'}</h1>
        <p>{isKo
          ? '밀폐 공간에서의 안전 작업 절차를 학습합니다.'
          : 'Learn about safe work procedures in confined spaces.'}</p>
      </div>

      <h2>{isKo ? '밀폐 공간이란?' : 'What is a Confined Space?'}</h2>
      <p>{isKo
        ? '밀폐 공간이란 산소 결핍, 유해가스로 인한 질식·중독 등의 위험이 있는 장소를 말합니다. 맨홀, 탱크, 사일로, 지하 피트 등이 해당됩니다.'
        : 'Confined spaces are locations where there is a risk of asphyxiation or poisoning from oxygen deficiency or toxic gases. Manholes, tanks, silos, and underground pits are examples.'}</p>

      <h2>{isKo ? '밀폐 공간 작업 절차' : 'Confined Space Work Procedures'}</h2>
      <ol>
        <li>{isKo ? '사전 산소 농도 및 유해가스 측정' : 'Pre-work oxygen and toxic gas measurement'}</li>
        <li>{isKo ? '적절한 환기 실시' : 'Conduct adequate ventilation'}</li>
        <li>{isKo ? '출입 허가 제도 시행' : 'Implement entry permit system'}</li>
        <li>{isKo ? '감시인 배치' : 'Station an attendant'}</li>
        <li>{isKo ? '비상시 구조 장비 준비' : 'Prepare emergency rescue equipment'}</li>
        <li>{isKo ? '작업 중 연속 가스 모니터링' : 'Continuous gas monitoring during work'}</li>
      </ol>

      <TipBox type="danger">
        {isKo
          ? '밀폐 공간 사고에서 가장 많은 사망자는 구조하러 들어간 사람입니다. 사고 발생 시 절대로 보호 장비 없이 구조에 나서지 마세요. 119에 신고하고 전문 구조 장비를 사용하세요.'
          : 'In confined space accidents, most fatalities occur among would-be rescuers. Never attempt rescue without protective equipment. Call emergency services and use professional rescue equipment.'}
      </TipBox>
    </div>
  );
}

function ThermalSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '온열 환경' : 'Thermal Environment'}</h1>
        <p>{isKo
          ? '고온·저온 작업환경에서의 건강장해 예방 방법을 학습합니다.'
          : 'Learn about preventing health hazards in hot and cold work environments.'}</p>
      </div>

      <h2>{isKo ? '고온 환경의 위험' : 'Heat Environment Risks'}</h2>
      <ul>
        <li><strong>{isKo ? '열사병' : 'Heatstroke'}</strong> - {isKo ? '체온 조절 기능 상실, 생명 위험' : 'Loss of body temperature regulation, life-threatening'}</li>
        <li><strong>{isKo ? '열탈진' : 'Heat Exhaustion'}</strong> - {isKo ? '과도한 땀 배출로 인한 탈수' : 'Dehydration from excessive sweating'}</li>
        <li><strong>{isKo ? '열경련' : 'Heat Cramps'}</strong> - {isKo ? '전해질 불균형으로 인한 근육 경련' : 'Muscle cramps from electrolyte imbalance'}</li>
      </ul>

      <h2>{isKo ? '고온 작업 예방 대책' : 'Heat Work Prevention Measures'}</h2>
      <ul>
        <li>{isKo ? '충분한 휴식 시간 제공 (매 시간 10~15분)' : 'Provide adequate rest time (10-15 minutes every hour)'}</li>
        <li>{isKo ? '시원한 음료 제공 (물, 이온 음료)' : 'Provide cool drinks (water, electrolyte drinks)'}</li>
        <li>{isKo ? '그늘진 휴식 장소 마련' : 'Provide shaded rest areas'}</li>
        <li>{isKo ? '가장 더운 시간대(오후 2~5시) 작업 자제' : 'Avoid work during hottest hours (2-5 PM)'}</li>
      </ul>

      <TipBox type="warning">
        {isKo
          ? '열사병은 발생 시 30분 이내에 체온을 낮추지 않으면 사망에 이를 수 있는 응급 상황입니다. 의식이 없거나 체온이 40°C 이상이면 즉시 119에 신고하고, 체온을 낮추는 응급처치를 실시하세요.'
          : 'Heatstroke is an emergency that can be fatal if body temperature is not lowered within 30 minutes. If unconscious or body temperature is above 40°C, call 119 immediately and perform first aid to lower body temperature.'}
      </TipBox>
    </div>
  );
}
