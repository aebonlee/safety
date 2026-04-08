import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'overview', icon: 'fa-binoculars', ko: '위험성평가 개요', en: 'Risk Assessment Overview' },
  { id: 'identify', icon: 'fa-magnifying-glass', ko: '유해·위험요인 파악', en: 'Hazard Identification' },
  { id: 'estimate', icon: 'fa-chart-bar', ko: '위험성 추정', en: 'Risk Estimation' },
  { id: 'determine', icon: 'fa-check-double', ko: '위험성 결정', en: 'Risk Determination' },
  { id: 'reduce', icon: 'fa-arrow-down', ko: '감소 대책', en: 'Risk Reduction Measures' },
  { id: 'record', icon: 'fa-file-lines', ko: '기록과 공유', en: 'Recording & Sharing' },
];

export default function RiskAssessment(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');
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
        title={isKo ? '위험성평가' : 'Risk Assessment'}
        description={isKo
          ? '위험성평가의 절차와 기법을 실무 중심으로 학습합니다.'
          : 'Learn risk assessment procedures and techniques with a practical focus.'}
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
            {activeSection === 'overview' && <OverviewSection isKo={isKo} />}
            {activeSection === 'identify' && <IdentifySection isKo={isKo} />}
            {activeSection === 'estimate' && <EstimateSection isKo={isKo} />}
            {activeSection === 'determine' && <DetermineSection isKo={isKo} />}
            {activeSection === 'reduce' && <ReduceSection isKo={isKo} />}
            {activeSection === 'record' && <RecordSection isKo={isKo} />}

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

function OverviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '위험성평가 개요' : 'Risk Assessment Overview'}</h1>
        <p>{isKo
          ? '위험성평가의 개념, 법적 근거, 기본 절차를 학습합니다.'
          : 'Learn the concept, legal basis, and basic procedures of risk assessment.'}</p>
      </div>

      <h2>{isKo ? '위험성평가란?' : 'What is Risk Assessment?'}</h2>
      <p>{isKo
        ? '위험성평가란 사업장의 유해·위험요인을 파악하고, 해당 유해·위험요인에 의한 부상 또는 질병의 발생 가능성(빈도)과 중대성(강도)을 추정·결정하고, 감소 대책을 수립하여 실행하는 일련의 과정입니다.'
        : 'Risk assessment is the process of identifying workplace hazards and risk factors, estimating and determining the likelihood (frequency) and severity (intensity) of injury or illness from those factors, and establishing and implementing reduction measures.'}</p>

      <h2>{isKo ? '위험성평가의 5단계' : '5 Steps of Risk Assessment'}</h2>
      <ol>
        <li><strong>{isKo ? '사전준비' : 'Preparation'}</strong> - {isKo ? '평가 대상, 방법, 팀 구성' : 'Target, method, team formation'}</li>
        <li><strong>{isKo ? '유해·위험요인 파악' : 'Hazard Identification'}</strong> - {isKo ? '작업별 위험 요소 도출' : 'Identifying risk factors by task'}</li>
        <li><strong>{isKo ? '위험성 추정' : 'Risk Estimation'}</strong> - {isKo ? '가능성과 중대성 판단' : 'Judging likelihood and severity'}</li>
        <li><strong>{isKo ? '위험성 결정' : 'Risk Determination'}</strong> - {isKo ? '허용 가능 여부 결정' : 'Determining acceptability'}</li>
        <li><strong>{isKo ? '위험성 감소 대책' : 'Risk Reduction'}</strong> - {isKo ? '개선 방안 수립·실행' : 'Establishing and implementing improvements'}</li>
      </ol>

      <TipBox type="important">
        {isKo
          ? '2023년부터 모든 사업장(5인 이상)에서 위험성평가가 의무화되었습니다. 위험성평가를 성실히 실시하면 산업재해 예방은 물론, 산재보험료 할인 혜택도 받을 수 있습니다.'
          : 'Since 2023, risk assessment has been mandatory for all workplaces (5+ employees). Diligent risk assessment not only prevents accidents but can also provide industrial accident insurance premium discounts.'}
      </TipBox>
    </div>
  );
}

function IdentifySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '유해·위험요인 파악' : 'Hazard Identification'}</h1>
        <p>{isKo
          ? '사업장의 유해·위험요인을 체계적으로 파악하는 방법을 학습합니다.'
          : 'Learn how to systematically identify workplace hazards and risk factors.'}</p>
      </div>

      <h2>{isKo ? '파악 방법' : 'Identification Methods'}</h2>
      <ul>
        <li><strong>{isKo ? '현장 순회 점검' : 'Field Patrol Inspection'}</strong> - {isKo ? '작업 현장을 직접 관찰하여 위험요인 발굴' : 'Direct observation of work sites to discover risk factors'}</li>
        <li><strong>{isKo ? '작업절차서 검토' : 'Work Procedure Review'}</strong> - {isKo ? '작업 단계별 위험요인 분석' : 'Analysis of risk factors at each work step'}</li>
        <li><strong>{isKo ? '재해 사례 분석' : 'Accident Case Analysis'}</strong> - {isKo ? '과거 재해 기록 검토' : 'Review of past accident records'}</li>
        <li><strong>{isKo ? '근로자 의견 청취' : 'Worker Input'}</strong> - {isKo ? '현장 근로자의 경험과 의견 수렴' : 'Gathering experiences and opinions from field workers'}</li>
      </ul>

      <h2>{isKo ? '유해·위험요인의 분류' : 'Classification of Hazards'}</h2>
      <p>{isKo
        ? '유해·위험요인은 크게 물리적, 화학적, 생물학적, 인체공학적, 심리사회적 요인으로 분류됩니다. 각 분류별로 체크리스트를 만들어 빠짐없이 파악하는 것이 중요합니다.'
        : 'Hazards are broadly classified into physical, chemical, biological, ergonomic, and psychosocial factors. Creating checklists for each category ensures thorough identification.'}</p>

      <TipBox type="tip">
        {isKo
          ? '위험요인 파악 시 가장 중요한 것은 현장 근로자의 참여입니다. 실제로 작업을 수행하는 근로자가 위험요인을 가장 잘 알고 있으므로, 반드시 의견을 수렴하세요.'
          : 'Worker participation is the most important aspect of hazard identification. Workers who actually perform the tasks know the risk factors best, so always gather their input.'}
      </TipBox>
    </div>
  );
}

function EstimateSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '위험성 추정' : 'Risk Estimation'}</h1>
        <p>{isKo
          ? '파악된 위험요인의 위험 수준을 추정하는 방법을 학습합니다.'
          : 'Learn methods for estimating the risk level of identified hazards.'}</p>
      </div>

      <h2>{isKo ? '위험성 = 가능성 x 중대성' : 'Risk = Likelihood x Severity'}</h2>
      <p>{isKo
        ? '위험성은 사고 발생 가능성(빈도)과 사고 발생 시 중대성(강도)을 조합하여 추정합니다. 가장 일반적으로 사용되는 방법은 빈도-강도법입니다.'
        : 'Risk is estimated by combining the likelihood (frequency) of an accident occurring and its severity (intensity). The most commonly used method is the frequency-severity method.'}</p>

      <h2>{isKo ? '위험성 매트릭스 (3x3)' : 'Risk Matrix (3x3)'}</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>{isKo ? '가능성 \\ 중대성' : 'Likelihood \\ Severity'}</th>
              <th>{isKo ? '상(사망/영구장해)' : 'High (Death/Permanent)'}</th>
              <th>{isKo ? '중(휴업재해)' : 'Medium (Lost Time)'}</th>
              <th>{isKo ? '하(응급조치)' : 'Low (First Aid)'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{isKo ? '상(빈번)' : 'High (Frequent)'}</strong></td>
              <td style={{ color: '#DC2626' }}><strong>{isKo ? '매우 높음' : 'Very High'}</strong></td>
              <td style={{ color: '#EA580C' }}><strong>{isKo ? '높음' : 'High'}</strong></td>
              <td style={{ color: '#CA8A04' }}><strong>{isKo ? '보통' : 'Medium'}</strong></td>
            </tr>
            <tr>
              <td><strong>{isKo ? '중(가끔)' : 'Medium (Occasional)'}</strong></td>
              <td style={{ color: '#EA580C' }}><strong>{isKo ? '높음' : 'High'}</strong></td>
              <td style={{ color: '#CA8A04' }}><strong>{isKo ? '보통' : 'Medium'}</strong></td>
              <td style={{ color: '#16A34A' }}><strong>{isKo ? '낮음' : 'Low'}</strong></td>
            </tr>
            <tr>
              <td><strong>{isKo ? '하(드묾)' : 'Low (Rare)'}</strong></td>
              <td style={{ color: '#CA8A04' }}><strong>{isKo ? '보통' : 'Medium'}</strong></td>
              <td style={{ color: '#16A34A' }}><strong>{isKo ? '낮음' : 'Low'}</strong></td>
              <td style={{ color: '#16A34A' }}><strong>{isKo ? '매우 낮음' : 'Very Low'}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="tip">
        {isKo
          ? '위험성 추정 시 과거 재해 데이터, 아차사고(Near-miss) 사례, 업계 통계 등을 참고하면 보다 객관적인 추정이 가능합니다.'
          : 'Referencing past accident data, near-miss cases, and industry statistics helps make more objective risk estimations.'}
      </TipBox>
    </div>
  );
}

function DetermineSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '위험성 결정' : 'Risk Determination'}</h1>
        <p>{isKo
          ? '추정된 위험성의 허용 가능 여부를 결정하는 기준을 학습합니다.'
          : 'Learn criteria for determining whether estimated risks are acceptable.'}</p>
      </div>

      <h2>{isKo ? '허용 가능 위험성' : 'Acceptable Risk'}</h2>
      <p>{isKo
        ? '추정된 위험성이 허용 가능한 수준인지 판단합니다. 허용 불가능한 위험성은 즉시 감소 대책을 수립해야 합니다.'
        : 'Determine whether estimated risks are at acceptable levels. Unacceptable risks require immediate reduction measures.'}</p>

      <h2>{isKo ? '위험성 등급별 조치' : 'Actions by Risk Level'}</h2>
      <ul>
        <li><strong style={{ color: '#DC2626' }}>{isKo ? '매우 높음' : 'Very High'}</strong> - {isKo ? '즉시 작업 중지, 긴급 대책 수립' : 'Immediate work stoppage, emergency measures'}</li>
        <li><strong style={{ color: '#EA580C' }}>{isKo ? '높음' : 'High'}</strong> - {isKo ? '단기간 내 개선 대책 실행' : 'Implement improvement measures in the short term'}</li>
        <li><strong style={{ color: '#CA8A04' }}>{isKo ? '보통' : 'Medium'}</strong> - {isKo ? '개선 계획 수립 및 이행' : 'Establish and implement improvement plan'}</li>
        <li><strong style={{ color: '#16A34A' }}>{isKo ? '낮음' : 'Low'}</strong> - {isKo ? '현재 관리 수준 유지' : 'Maintain current management level'}</li>
      </ul>

      <TipBox type="warning">
        {isKo
          ? '"허용 가능한 위험"이라 해도 완전히 안전하다는 의미는 아닙니다. 합리적으로 실행 가능한 범위에서 위험성을 최대한 낮추는 ALARP(As Low As Reasonably Practicable) 원칙을 적용해야 합니다.'
          : '"Acceptable risk" does not mean completely safe. Apply the ALARP (As Low As Reasonably Practicable) principle to reduce risk as much as reasonably possible.'}
      </TipBox>
    </div>
  );
}

function ReduceSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '감소 대책' : 'Risk Reduction Measures'}</h1>
        <p>{isKo
          ? '위험성을 효과적으로 감소시키기 위한 대책 수립 방법을 학습합니다.'
          : 'Learn how to establish measures for effective risk reduction.'}</p>
      </div>

      <h2>{isKo ? '위험성 감소 대책의 우선순위' : 'Priority of Risk Reduction Measures'}</h2>
      <ol>
        <li><strong>{isKo ? '제거(Elimination)' : 'Elimination'}</strong> - {isKo ? '위험 자체를 제거' : 'Remove the hazard itself'}</li>
        <li><strong>{isKo ? '대체(Substitution)' : 'Substitution'}</strong> - {isKo ? '덜 위험한 것으로 대체' : 'Replace with something less hazardous'}</li>
        <li><strong>{isKo ? '공학적 대책(Engineering)' : 'Engineering Controls'}</strong> - {isKo ? '방호장치, 환기 설비 설치' : 'Install guards, ventilation systems'}</li>
        <li><strong>{isKo ? '관리적 대책(Administrative)' : 'Administrative Controls'}</strong> - {isKo ? '작업 절차, 교육, 표지' : 'Work procedures, education, signage'}</li>
        <li><strong>{isKo ? '개인보호구(PPE)' : 'PPE'}</strong> - {isKo ? '마지막 수단으로 보호구 착용' : 'Wearing protective equipment as last resort'}</li>
      </ol>

      <TipBox type="important">
        {isKo
          ? '개인보호구는 위험성 감소 대책의 마지막 수단입니다. 항상 근본적인 대책(제거, 대체, 공학적 대책)을 먼저 검토한 후, 보충적으로 개인보호구를 적용하세요.'
          : 'PPE is the last resort for risk reduction. Always consider fundamental measures (elimination, substitution, engineering controls) first, then apply PPE as a supplement.'}
      </TipBox>
    </div>
  );
}

function RecordSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '기록과 공유' : 'Recording & Sharing'}</h1>
        <p>{isKo
          ? '위험성평가 결과의 기록 방법과 근로자 공유에 대해 학습합니다.'
          : 'Learn about recording risk assessment results and sharing with workers.'}</p>
      </div>

      <h2>{isKo ? '기록 항목' : 'Recording Items'}</h2>
      <ul>
        <li>{isKo ? '평가 대상 공정 및 작업' : 'Target processes and tasks'}</li>
        <li>{isKo ? '유해·위험요인' : 'Hazards and risk factors'}</li>
        <li>{isKo ? '위험성 추정 및 결정 결과' : 'Risk estimation and determination results'}</li>
        <li>{isKo ? '감소 대책 및 실행 계획' : 'Reduction measures and implementation plan'}</li>
        <li>{isKo ? '실행 결과 및 잔류 위험성' : 'Implementation results and residual risk'}</li>
      </ul>

      <h2>{isKo ? '근로자 공유' : 'Sharing with Workers'}</h2>
      <p>{isKo
        ? '위험성평가 결과는 반드시 해당 작업에 종사하는 근로자에게 알려야 합니다. 게시, 교육, 조회 등 다양한 방법을 활용하여 근로자가 자신의 작업에 대한 위험성을 인지할 수 있도록 합니다.'
        : 'Risk assessment results must be communicated to workers involved in the relevant work. Use various methods such as posting, education, and briefings to ensure workers are aware of risks in their tasks.'}</p>

      <TipBox type="tip">
        {isKo
          ? '위험성평가 기록은 3년간 보존해야 합니다. 디지털 시스템을 활용하면 기록 관리와 공유가 더욱 효율적입니다. 또한 정기적으로 평가를 갱신하여 최신 상태를 유지하세요.'
          : 'Risk assessment records must be preserved for 3 years. Digital systems make record management and sharing more efficient. Also, regularly update assessments to keep them current.'}
      </TipBox>
    </div>
  );
}
