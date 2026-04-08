import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'legal', icon: 'fa-gavel', ko: '교육의 법적 근거', en: 'Legal Basis' },
  { id: 'regular', icon: 'fa-calendar-check', ko: '정기교육', en: 'Regular Education' },
  { id: 'hiring', icon: 'fa-user-plus', ko: '채용 시 교육', en: 'Hiring Education' },
  { id: 'special', icon: 'fa-star', ko: '특별교육', en: 'Special Education' },
  { id: 'supervisor', icon: 'fa-user-tie', ko: '관리감독자 교육', en: 'Supervisor Education' },
  { id: 'evaluation', icon: 'fa-chart-line', ko: '교육 효과 평가', en: 'Education Evaluation' },
];

export default function SafetyEducation(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('legal');
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
        title={isKo ? '안전보건교육' : 'Safety & Health Education'}
        description={isKo
          ? '법정 안전보건교육의 종류와 효과적인 교육 방법을 알아봅니다.'
          : 'Learn about types of mandatory safety education and effective teaching methods.'}
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
            {activeSection === 'legal' && <LegalSection isKo={isKo} />}
            {activeSection === 'regular' && <RegularSection isKo={isKo} />}
            {activeSection === 'hiring' && <HiringSection isKo={isKo} />}
            {activeSection === 'special' && <SpecialSection isKo={isKo} />}
            {activeSection === 'supervisor' && <SupervisorSection isKo={isKo} />}
            {activeSection === 'evaluation' && <EvaluationSection isKo={isKo} />}

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

function LegalSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '교육의 법적 근거' : 'Legal Basis for Education'}</h1>
        <p>{isKo
          ? '산업안전보건법에 근거한 안전보건교육의 법적 요구사항을 학습합니다.'
          : 'Learn about the legal requirements for safety and health education under the Act.'}</p>
      </div>

      <h2>{isKo ? '법적 의무' : 'Legal Obligations'}</h2>
      <p>{isKo
        ? '산업안전보건법 제29조에 따라 사업주는 근로자에게 안전보건교육을 실시하여야 합니다. 교육을 실시하지 않으면 과태료가 부과됩니다.'
        : 'Under Article 29 of the Act, employers must provide safety and health education to workers. Failure to provide education results in administrative fines.'}</p>

      <h2>{isKo ? '교육 체계' : 'Education System'}</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>{isKo ? '교육 종류' : 'Education Type'}</th>
              <th>{isKo ? '대상' : 'Target'}</th>
              <th>{isKo ? '시간' : 'Hours'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '정기교육' : 'Regular'}</td>
              <td>{isKo ? '전 근로자' : 'All workers'}</td>
              <td>{isKo ? '매분기 6시간(사무직 3시간)' : '6hrs/quarter (3hrs office)'}</td>
            </tr>
            <tr>
              <td>{isKo ? '채용 시 교육' : 'Hiring'}</td>
              <td>{isKo ? '신규 채용자' : 'New hires'}</td>
              <td>{isKo ? '8시간 이상' : '8+ hours'}</td>
            </tr>
            <tr>
              <td>{isKo ? '작업내용 변경 시' : 'Job Change'}</td>
              <td>{isKo ? '작업 변경 근로자' : 'Workers changing jobs'}</td>
              <td>{isKo ? '2시간 이상' : '2+ hours'}</td>
            </tr>
            <tr>
              <td>{isKo ? '특별교육' : 'Special'}</td>
              <td>{isKo ? '유해·위험 작업자' : 'Hazardous workers'}</td>
              <td>{isKo ? '16시간 이상' : '16+ hours'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="warning">
        {isKo
          ? '안전보건교육 미실시 시 근로자 1인당 최대 500만원의 과태료가 부과됩니다. 교육 실시 기록은 반드시 보존하고, 교육 일지와 참석자 서명을 관리하세요.'
          : 'Failure to provide safety education may result in fines up to 5 million won per worker. Education records must be preserved, including training logs and attendee signatures.'}
      </TipBox>
    </div>
  );
}

function RegularSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '정기교육' : 'Regular Education'}</h1>
        <p>{isKo
          ? '분기별 정기 안전보건교육의 내용과 방법을 학습합니다.'
          : 'Learn about the content and methods of quarterly regular safety and health education.'}</p>
      </div>

      <h2>{isKo ? '교육 내용' : 'Education Content'}</h2>
      <ul>
        <li>{isKo ? '산업안전보건법 및 관련 법령' : 'Industrial Safety and Health Act and related laws'}</li>
        <li>{isKo ? '작업공정의 유해·위험과 재해 예방 대책' : 'Hazards in work processes and prevention measures'}</li>
        <li>{isKo ? '표준작업절차 및 지침' : 'Standard operating procedures and guidelines'}</li>
        <li>{isKo ? '보호구 착용 및 사용 방법' : 'PPE wearing and usage methods'}</li>
        <li>{isKo ? '직업병 예방 및 건강 증진' : 'Occupational disease prevention and health promotion'}</li>
      </ul>

      <h2>{isKo ? '효과적인 교육 방법' : 'Effective Education Methods'}</h2>
      <p>{isKo
        ? '단순히 강의만 진행하는 것보다 토론, 실습, 영상 교육, 사례 학습 등 다양한 방법을 활용하는 것이 효과적입니다.'
        : 'Using various methods such as discussions, hands-on practice, video training, and case studies is more effective than simple lectures.'}</p>

      <TipBox type="tip">
        {isKo
          ? '정기교육은 형식적으로 실시하면 효과가 없습니다. 실제 사업장에서 발생한 사고 사례, 최근 법령 개정 내용 등 실질적인 내용으로 구성하세요.'
          : 'Regular education is ineffective when conducted formally. Include practical content such as actual workplace accident cases and recent legal amendments.'}
      </TipBox>
    </div>
  );
}

function HiringSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '채용 시 교육' : 'Hiring Education'}</h1>
        <p>{isKo
          ? '신규 근로자를 위한 채용 시 안전보건교육의 내용과 방법을 학습합니다.'
          : 'Learn about safety and health education content and methods for new hires.'}</p>
      </div>

      <h2>{isKo ? '교육 시기 및 시간' : 'Timing and Duration'}</h2>
      <p>{isKo
        ? '신규 채용 시 작업 배치 전에 8시간 이상의 안전보건교육을 실시해야 합니다. 일용근로자의 경우 1시간 이상입니다.'
        : 'At least 8 hours of safety and health education must be provided before work assignment for new hires. For daily workers, at least 1 hour is required.'}</p>

      <h2>{isKo ? '필수 교육 항목' : 'Required Education Items'}</h2>
      <ul>
        <li>{isKo ? '사업장 내 안전보건 관련 규정' : 'Workplace safety and health regulations'}</li>
        <li>{isKo ? '작업 개시 전 점검사항' : 'Pre-work inspection items'}</li>
        <li>{isKo ? '위험 기계·기구의 안전 사용 방법' : 'Safe use of dangerous machines and equipment'}</li>
        <li>{isKo ? '비상시 행동 요령 및 대피 경로' : 'Emergency procedures and evacuation routes'}</li>
        <li>{isKo ? '사고 발생 시 보고 절차' : 'Accident reporting procedures'}</li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '신규 근로자는 산업재해 발생률이 가장 높은 그룹입니다. 특히 입사 후 1년 이내의 재해 비율이 높으므로, 채용 시 교육을 충실히 실시하고 초기 적응 기간에 각별한 관심을 기울이세요.'
          : 'New workers have the highest industrial accident rates. Accident rates are particularly high within the first year, so provide thorough hiring education and pay special attention during the initial adaptation period.'}
      </TipBox>
    </div>
  );
}

function SpecialSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '특별교육' : 'Special Education'}</h1>
        <p>{isKo
          ? '유해·위험 작업에 대한 특별안전보건교육의 대상과 내용을 학습합니다.'
          : 'Learn about targets and content of special safety education for hazardous work.'}</p>
      </div>

      <h2>{isKo ? '특별교육 대상 작업' : 'Work Requiring Special Education'}</h2>
      <ul>
        <li>{isKo ? '밀폐공간에서의 작업' : 'Work in confined spaces'}</li>
        <li>{isKo ? '허가대상 유해물질 취급 작업' : 'Handling licensed hazardous substances'}</li>
        <li>{isKo ? '크레인 사용 작업' : 'Crane operation work'}</li>
        <li>{isKo ? '방사선 관련 작업' : 'Radiation-related work'}</li>
        <li>{isKo ? '석면 해체·제거 작업' : 'Asbestos removal work'}</li>
        <li>{isKo ? '전기 활선 작업' : 'Live electrical work'}</li>
      </ul>

      <h2>{isKo ? '교육 시간' : 'Education Hours'}</h2>
      <p>{isKo
        ? '특별교육은 최초 작업 배치 전 16시간 이상(단기·간헐적 작업은 2시간 이상) 실시해야 하며, 이후 12개월 이내에 8시간 이상의 보충 교육을 실시합니다.'
        : 'Special education requires at least 16 hours before initial assignment (2+ hours for short-term/intermittent work), with at least 8 hours of supplementary education within 12 months.'}</p>

      <TipBox type="danger">
        {isKo
          ? '특별교육 대상 작업은 산업재해 사망 사고의 비율이 매우 높습니다. 반드시 교육을 이수한 근로자만 작업에 투입하고, 교육 내용을 현장에서 철저히 적용하세요.'
          : 'Work requiring special education has a very high fatality rate. Only workers who have completed education should be assigned, and education content must be thoroughly applied on site.'}
      </TipBox>
    </div>
  );
}

function SupervisorSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '관리감독자 교육' : 'Supervisor Education'}</h1>
        <p>{isKo
          ? '관리감독자를 위한 안전보건교육의 내용과 중요성을 학습합니다.'
          : 'Learn about the content and importance of safety and health education for supervisors.'}</p>
      </div>

      <h2>{isKo ? '교육 의무' : 'Education Obligation'}</h2>
      <p>{isKo
        ? '관리감독자는 연간 16시간 이상의 안전보건교육을 이수해야 합니다. 관리감독자는 현장의 안전을 직접 관리하는 사람으로, 교육 수준이 현장 안전에 직접적인 영향을 미칩니다.'
        : 'Supervisors must complete at least 16 hours of safety and health education annually. As they directly manage field safety, their education level directly impacts workplace safety.'}</p>

      <h2>{isKo ? '교육 내용' : 'Education Content'}</h2>
      <ul>
        <li>{isKo ? '작업공정의 유해·위험과 재해 예방 대책' : 'Hazards in work processes and prevention measures'}</li>
        <li>{isKo ? '관리감독자의 역할과 임무' : 'Roles and duties of supervisors'}</li>
        <li>{isKo ? '안전보건교육 능력 배양' : 'Developing safety education capabilities'}</li>
        <li>{isKo ? '산업보건 및 직업병 예방' : 'Occupational health and disease prevention'}</li>
        <li>{isKo ? '안전보건 관련 법령 및 산업재해 보상' : 'Safety laws and industrial accident compensation'}</li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? '관리감독자는 현장 근로자에게 가장 큰 영향력을 행사하는 사람입니다. 관리감독자가 안전을 중시하면 현장의 안전문화가 크게 향상됩니다.'
          : 'Supervisors have the greatest influence on field workers. When supervisors prioritize safety, the workplace safety culture improves significantly.'}
      </TipBox>
    </div>
  );
}

function EvaluationSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '교육 효과 평가' : 'Education Effectiveness Evaluation'}</h1>
        <p>{isKo
          ? '안전보건교육의 효과를 측정하고 개선하는 방법을 학습합니다.'
          : 'Learn how to measure and improve the effectiveness of safety and health education.'}</p>
      </div>

      <h2>{isKo ? '커크패트릭의 4단계 평가 모델' : "Kirkpatrick's 4-Level Evaluation Model"}</h2>
      <ol>
        <li><strong>{isKo ? '반응(Reaction)' : 'Reaction'}</strong> - {isKo ? '교육에 대한 만족도 조사' : 'Satisfaction survey about the education'}</li>
        <li><strong>{isKo ? '학습(Learning)' : 'Learning'}</strong> - {isKo ? '지식·기술 습득 정도 평가 (시험)' : 'Knowledge and skill acquisition assessment (tests)'}</li>
        <li><strong>{isKo ? '행동(Behavior)' : 'Behavior'}</strong> - {isKo ? '현장에서의 행동 변화 관찰' : 'Observation of behavioral changes in the field'}</li>
        <li><strong>{isKo ? '결과(Results)' : 'Results'}</strong> - {isKo ? '재해율 감소, 안전문화 개선 등 성과 측정' : 'Measuring outcomes like reduced accident rates and safety culture improvement'}</li>
      </ol>

      <h2>{isKo ? '교육 개선 방안' : 'Education Improvement Methods'}</h2>
      <p>{isKo
        ? '평가 결과를 바탕으로 교육 내용, 방법, 교재 등을 지속적으로 개선해야 합니다. 특히 근로자의 피드백을 적극 반영하고, 최신 재해 사례와 법령 변경 사항을 반영하는 것이 중요합니다.'
        : 'Based on evaluation results, continuously improve education content, methods, and materials. Actively incorporate worker feedback and reflect latest accident cases and legal changes.'}</p>

      <TipBox type="tip">
        {isKo
          ? '가장 효과적인 안전교육은 실제 현장에서 직접 위험요인을 확인하고 체험하는 체험형 교육입니다. VR/AR 기술을 활용한 안전 체험 교육도 점차 확대되고 있습니다.'
          : 'The most effective safety education is experiential learning where workers identify and experience risk factors on site. VR/AR technology-based safety experience training is also expanding.'}
      </TipBox>
    </div>
  );
}
