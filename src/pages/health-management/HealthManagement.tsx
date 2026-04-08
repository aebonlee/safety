import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'disease', icon: 'fa-virus', ko: '직업병의 이해', en: 'Understanding Occupational Disease' },
  { id: 'measurement', icon: 'fa-flask', ko: '작업환경 측정', en: 'Work Environment Measurement' },
  { id: 'checkup', icon: 'fa-stethoscope', ko: '건강진단', en: 'Health Examination' },
  { id: 'hazardous', icon: 'fa-skull-crossbones', ko: '유해물질 관리', en: 'Hazardous Substance Management' },
  { id: 'musculoskeletal', icon: 'fa-bone', ko: '근골격계 질환', en: 'Musculoskeletal Disorders' },
  { id: 'stress', icon: 'fa-brain', ko: '직무스트레스', en: 'Job Stress' },
];

export default function HealthManagement(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('disease');
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
        title={isKo ? '보건관리' : 'Health Management'}
        description={isKo
          ? '직업병 예방과 근로자 건강관리의 핵심을 학습합니다.'
          : 'Learn the essentials of occupational disease prevention and worker health management.'}
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
            {activeSection === 'disease' && <DiseaseSection isKo={isKo} />}
            {activeSection === 'measurement' && <MeasurementSection isKo={isKo} />}
            {activeSection === 'checkup' && <CheckupSection isKo={isKo} />}
            {activeSection === 'hazardous' && <HazardousSection isKo={isKo} />}
            {activeSection === 'musculoskeletal' && <MusculoskeletalSection isKo={isKo} />}
            {activeSection === 'stress' && <StressSection isKo={isKo} />}

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
          </main>
        </div>
      </div>
    </>
  );
}

function DiseaseSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '직업병의 이해' : 'Understanding Occupational Disease'}</h1>
        <p>{isKo
          ? '직업병의 정의, 종류, 발생 원인에 대해 체계적으로 학습합니다.'
          : 'Systematically learn about the definition, types, and causes of occupational diseases.'}</p>
      </div>

      <h2>{isKo ? '직업병이란?' : 'What is Occupational Disease?'}</h2>
      <p>{isKo
        ? '직업병은 작업환경에서의 유해·위험요인에 장기간 노출되어 발생하는 질병입니다. 직업성 질환이라고도 하며, 산업재해의 한 유형입니다.'
        : 'Occupational disease refers to illnesses caused by long-term exposure to harmful and dangerous factors in the work environment. Also called work-related diseases, they are a type of industrial accident.'}</p>

      <h2>{isKo ? '주요 직업병 분류' : 'Major Occupational Disease Categories'}</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>{isKo ? '분류' : 'Category'}</th>
              <th>{isKo ? '주요 질환' : 'Major Diseases'}</th>
              <th>{isKo ? '원인 물질/요인' : 'Causative Factors'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '화학적 요인' : 'Chemical Factors'}</td>
              <td>{isKo ? '중금속 중독, 유기용제 중독' : 'Heavy metal poisoning, solvent poisoning'}</td>
              <td>{isKo ? '납, 수은, 벤젠, 톨루엔' : 'Lead, mercury, benzene, toluene'}</td>
            </tr>
            <tr>
              <td>{isKo ? '물리적 요인' : 'Physical Factors'}</td>
              <td>{isKo ? '소음성 난청, 진동 장해' : 'Noise-induced hearing loss, vibration disorder'}</td>
              <td>{isKo ? '소음, 진동, 방사선' : 'Noise, vibration, radiation'}</td>
            </tr>
            <tr>
              <td>{isKo ? '생물학적 요인' : 'Biological Factors'}</td>
              <td>{isKo ? '감염성 질환' : 'Infectious diseases'}</td>
              <td>{isKo ? '세균, 바이러스, 곰팡이' : 'Bacteria, viruses, fungi'}</td>
            </tr>
            <tr>
              <td>{isKo ? '인체공학적 요인' : 'Ergonomic Factors'}</td>
              <td>{isKo ? '근골격계 질환' : 'Musculoskeletal disorders'}</td>
              <td>{isKo ? '반복작업, 부적절한 자세' : 'Repetitive work, improper posture'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="important">
        {isKo
          ? '직업병은 즉각적으로 발생하지 않고 장기간에 걸쳐 서서히 발생하므로, 초기 증상을 무시하기 쉽습니다. 정기적인 건강진단을 통해 조기에 발견하는 것이 매우 중요합니다.'
          : 'Occupational diseases develop gradually over long periods, making early symptoms easy to ignore. Early detection through regular health examinations is crucial.'}
      </TipBox>
    </div>
  );
}

function MeasurementSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '작업환경 측정' : 'Work Environment Measurement'}</h1>
        <p>{isKo
          ? '작업환경 측정의 법적 근거와 실시 방법을 학습합니다.'
          : 'Learn about the legal basis and methods for work environment measurement.'}</p>
      </div>

      <h2>{isKo ? '측정 대상' : 'Measurement Targets'}</h2>
      <p>{isKo
        ? '유해인자에 노출되는 근로자가 있는 작업장은 6개월에 1회 이상 작업환경 측정을 실시해야 합니다. 측정 대상 유해인자는 화학적 인자, 물리적 인자, 분진 등 190여 종입니다.'
        : 'Workplaces where workers are exposed to harmful factors must conduct work environment measurements at least once every 6 months. Target harmful factors include approximately 190 types of chemical, physical factors, and dust.'}</p>

      <h2>{isKo ? '측정 결과 활용' : 'Using Measurement Results'}</h2>
      <p>{isKo
        ? '측정 결과가 노출기준을 초과하면 즉시 개선 대책을 수립하고 시행해야 합니다. 또한 근로자에게 측정 결과를 알리고, 건강진단과 연계하여 관리해야 합니다.'
        : 'If measurement results exceed exposure limits, improvement measures must be established and implemented immediately. Workers must be informed of results, and management should be linked with health examinations.'}</p>

      <TipBox type="tip">
        {isKo
          ? '작업환경 측정은 전문 지정 측정기관에 의뢰하여 실시합니다. 측정 결과는 5년간 보존해야 하며, 발암물질 관련 기록은 30년간 보존해야 합니다.'
          : 'Work environment measurements are conducted by designated measurement agencies. Results must be preserved for 5 years, and carcinogen-related records for 30 years.'}
      </TipBox>
    </div>
  );
}

function CheckupSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '건강진단' : 'Health Examination'}</h1>
        <p>{isKo
          ? '근로자 건강진단의 종류와 실시 기준을 학습합니다.'
          : 'Learn about types and standards of worker health examinations.'}</p>
      </div>

      <h2>{isKo ? '건강진단의 종류' : 'Types of Health Examinations'}</h2>
      <ul>
        <li><strong>{isKo ? '일반건강진단' : 'General Health Exam'}</strong> - {isKo ? '사무직 2년 1회, 비사무직 1년 1회' : 'Office workers: once every 2 years, Non-office: annually'}</li>
        <li><strong>{isKo ? '특수건강진단' : 'Special Health Exam'}</strong> - {isKo ? '유해인자 노출 근로자 대상, 6개월~1년 1회' : 'For workers exposed to harmful factors, every 6 months to 1 year'}</li>
        <li><strong>{isKo ? '배치전건강진단' : 'Pre-placement Health Exam'}</strong> - {isKo ? '유해업무 배치 전 실시' : 'Before assignment to hazardous work'}</li>
        <li><strong>{isKo ? '수시건강진단' : 'Occasional Health Exam'}</strong> - {isKo ? '직업성 질환 의심 시 실시' : 'When occupational disease is suspected'}</li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '건강진단 결과 직업병 유소견자(D1, D2)로 판정되면, 사업주는 작업 전환, 근로시간 단축, 작업환경 개선 등 적절한 사후관리 조치를 해야 합니다.'
          : 'When health examination results indicate occupational disease findings (D1, D2), employers must take appropriate follow-up measures such as job reassignment, reduced working hours, or work environment improvement.'}
      </TipBox>
    </div>
  );
}

function HazardousSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '유해물질 관리' : 'Hazardous Substance Management'}</h1>
        <p>{isKo
          ? '유해화학물질의 분류, 표시, 관리 방법을 학습합니다.'
          : 'Learn about classification, labeling, and management of hazardous chemicals.'}</p>
      </div>

      <h2>{isKo ? 'GHS 분류 체계' : 'GHS Classification System'}</h2>
      <p>{isKo
        ? 'GHS(Globally Harmonized System)는 전 세계적으로 통일된 화학물질 분류 및 표시 체계입니다. 한국도 GHS를 도입하여 MSDS(물질안전보건자료)를 작성·비치하도록 하고 있습니다.'
        : 'GHS (Globally Harmonized System) is a globally unified chemical classification and labeling system. Korea has adopted GHS, requiring preparation and display of MSDS (Material Safety Data Sheets).'}</p>

      <h2>{isKo ? 'MSDS의 16개 항목' : '16 Sections of MSDS'}</h2>
      <p>{isKo
        ? 'MSDS에는 화학제품 정보, 유해·위험성, 응급조치 요령, 취급 및 저장 방법, 노출방지 및 개인보호구 등 16개 항목이 포함됩니다.'
        : 'MSDS includes 16 sections covering product information, hazard identification, first aid measures, handling and storage, exposure controls and PPE, etc.'}</p>

      <TipBox type="danger">
        {isKo
          ? '유해화학물질을 취급할 때는 반드시 MSDS를 확인하고, 적절한 개인보호구를 착용해야 합니다. 화학물질을 다른 용기에 옮겨 담을 때도 경고 표시를 반드시 부착하세요.'
          : 'Always check the MSDS and wear appropriate PPE when handling hazardous chemicals. Warning labels must be affixed even when transferring chemicals to other containers.'}
      </TipBox>
    </div>
  );
}

function MusculoskeletalSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '근골격계 질환' : 'Musculoskeletal Disorders'}</h1>
        <p>{isKo
          ? '근골격계 질환의 원인과 예방 방법을 학습합니다.'
          : 'Learn about causes and prevention of musculoskeletal disorders.'}</p>
      </div>

      <h2>{isKo ? '근골격계 부담작업' : 'Musculoskeletal Risk Work'}</h2>
      <p>{isKo
        ? '고용노동부 고시에서 정한 11가지 근골격계 부담작업에 해당하는 경우, 사업주는 3년마다 유해요인 조사를 실시해야 합니다.'
        : 'For the 11 types of musculoskeletal risk work specified by the Ministry of Employment and Labor, employers must conduct risk factor surveys every 3 years.'}</p>

      <h2>{isKo ? '예방 관리 프로그램' : 'Prevention Management Program'}</h2>
      <ul>
        <li>{isKo ? '작업 자세 개선 및 인체공학적 설계' : 'Improving work posture and ergonomic design'}</li>
        <li>{isKo ? '적절한 휴식 시간 제공' : 'Providing adequate rest periods'}</li>
        <li>{isKo ? '스트레칭 및 운동 프로그램' : 'Stretching and exercise programs'}</li>
        <li>{isKo ? '작업 도구 및 장비 개선' : 'Improving work tools and equipment'}</li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? '사무직 근로자도 근골격계 질환에 주의해야 합니다. 장시간 컴퓨터 사용 시 매 50분마다 10분씩 휴식을 취하고, 올바른 자세를 유지하세요.'
          : 'Office workers should also be aware of musculoskeletal disorders. Take 10-minute breaks every 50 minutes of computer use and maintain proper posture.'}
      </TipBox>
    </div>
  );
}

function StressSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '직무스트레스' : 'Job Stress'}</h1>
        <p>{isKo
          ? '직무스트레스의 원인과 관리 방법을 학습합니다.'
          : 'Learn about causes and management of job stress.'}</p>
      </div>

      <h2>{isKo ? '직무스트레스의 원인' : 'Causes of Job Stress'}</h2>
      <ul>
        <li>{isKo ? '과도한 업무량과 시간 압박' : 'Excessive workload and time pressure'}</li>
        <li>{isKo ? '업무 자율성 부족' : 'Lack of job autonomy'}</li>
        <li>{isKo ? '직장 내 갈등과 괴롭힘' : 'Workplace conflicts and bullying'}</li>
        <li>{isKo ? '직업 불안정성' : 'Job insecurity'}</li>
        <li>{isKo ? '보상 부적절' : 'Inadequate compensation'}</li>
      </ul>

      <h2>{isKo ? '스트레스 관리 방법' : 'Stress Management Methods'}</h2>
      <p>{isKo
        ? '사업주는 직무스트레스 요인을 평가하고, 조직적 차원에서 스트레스 관리 프로그램(EAP)을 운영해야 합니다. 근로자 개인 차원에서도 적극적인 스트레스 관리가 필요합니다.'
        : 'Employers should evaluate job stress factors and operate stress management programs (EAP) at the organizational level. Active stress management at the individual worker level is also necessary.'}</p>

      <TipBox type="important">
        {isKo
          ? '만성적인 직무스트레스는 뇌심혈관계 질환(뇌출혈, 심근경색 등)의 주요 위험 요인입니다. 장시간 근로를 줄이고, 정기적인 건강 체크와 스트레스 관리가 필수적입니다.'
          : 'Chronic job stress is a major risk factor for cerebrovascular and cardiovascular diseases. Reducing long working hours and regular health checks and stress management are essential.'}
      </TipBox>
    </div>
  );
}
