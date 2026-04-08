import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'plan', icon: 'fa-clipboard-list', ko: '비상조치 계획', en: 'Emergency Action Plan' },
  { id: 'fire', icon: 'fa-fire', ko: '화재 대피', en: 'Fire Evacuation' },
  { id: 'chemical', icon: 'fa-flask-vial', ko: '화학물질 누출', en: 'Chemical Spill' },
  { id: 'firstaid', icon: 'fa-kit-medical', ko: '응급처치 기본', en: 'Basic First Aid' },
  { id: 'cpr', icon: 'fa-heart-pulse', ko: 'CPR과 AED', en: 'CPR & AED' },
  { id: 'report', icon: 'fa-file-pen', ko: '사고 보고 절차', en: 'Accident Reporting' },
];

export default function EmergencyResponse(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('plan');
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
        title={isKo ? '비상대응과 응급처치' : 'Emergency Response & First Aid'}
        description={isKo
          ? '비상 상황 대응 절차와 기본 응급처치법을 익힙니다.'
          : 'Learn emergency response procedures and basic first aid techniques.'}
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
            {activeSection === 'plan' && <PlanSection isKo={isKo} />}
            {activeSection === 'fire' && <FireSection isKo={isKo} />}
            {activeSection === 'chemical' && <ChemicalSection isKo={isKo} />}
            {activeSection === 'firstaid' && <FirstAidSection isKo={isKo} />}
            {activeSection === 'cpr' && <CPRSection isKo={isKo} />}
            {activeSection === 'report' && <ReportSection isKo={isKo} />}

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

function PlanSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '비상조치 계획' : 'Emergency Action Plan'}</h1>
        <p>{isKo
          ? '사업장 비상조치 계획의 수립과 운영 방법을 학습합니다.'
          : 'Learn about establishing and operating workplace emergency action plans.'}</p>
      </div>

      <h2>{isKo ? '비상조치 계획의 구성' : 'Components of Emergency Action Plan'}</h2>
      <ul>
        <li>{isKo ? '비상 연락 체계 및 비상 연락처' : 'Emergency contact system and emergency contacts'}</li>
        <li>{isKo ? '대피 경로 및 집결지' : 'Evacuation routes and assembly points'}</li>
        <li>{isKo ? '비상 장비 위치 (소화기, AED, 비상약품)' : 'Emergency equipment locations (fire extinguishers, AED, first aid kits)'}</li>
        <li>{isKo ? '역할 분담 (대피 유도원, 응급처치원)' : 'Role assignments (evacuation guides, first aiders)'}</li>
        <li>{isKo ? '훈련 계획 (반기 1회 이상)' : 'Training plan (at least once every 6 months)'}</li>
      </ul>

      <h2>{isKo ? '비상 대피 훈련' : 'Emergency Evacuation Drill'}</h2>
      <p>{isKo
        ? '비상 대피 훈련은 반기 1회 이상 실시해야 하며, 모든 근로자가 참여해야 합니다. 훈련 후에는 반드시 문제점을 분석하고 개선하여 비상조치 계획을 갱신합니다.'
        : 'Emergency evacuation drills must be conducted at least once every 6 months, and all workers must participate. After drills, analyze problems and make improvements to update the emergency action plan.'}</p>

      <TipBox type="important">
        {isKo
          ? '비상조치 계획은 만들어만 두면 의미가 없습니다. 정기적인 훈련을 통해 모든 근로자가 비상 시 행동 요령을 숙지하고 있어야 합니다. 훈련 시에는 실제 상황처럼 진지하게 임하세요.'
          : 'Emergency action plans are meaningless if just created and filed away. Through regular drills, all workers must be familiar with emergency procedures. Take drills as seriously as real situations.'}
      </TipBox>
    </div>
  );
}

function FireSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '화재 대피' : 'Fire Evacuation'}</h1>
        <p>{isKo
          ? '화재 발생 시 올바른 대피 절차를 학습합니다.'
          : 'Learn proper evacuation procedures in case of fire.'}</p>
      </div>

      <h2>{isKo ? '화재 발생 시 행동 요령' : 'Fire Action Steps'}</h2>
      <ol>
        <li><strong>{isKo ? '발견' : 'Discover'}</strong> - {isKo ? '화재를 발견하면 큰 소리로 "불이야!" 외쳐 주변에 알림' : 'When you discover a fire, shout "Fire!" loudly to alert others'}</li>
        <li><strong>{isKo ? '신고' : 'Report'}</strong> - {isKo ? '119에 신고하고, 사내 비상 연락망에 통보' : 'Call 119 and notify the internal emergency network'}</li>
        <li><strong>{isKo ? '초기 진화' : 'Initial Response'}</strong> - {isKo ? '초기 단계이면 소화기로 진화 시도' : 'If in early stage, attempt to extinguish with fire extinguisher'}</li>
        <li><strong>{isKo ? '대피' : 'Evacuate'}</strong> - {isKo ? '진화 불가능 시 즉시 지정된 경로로 대피' : 'If unable to extinguish, evacuate immediately via designated routes'}</li>
        <li><strong>{isKo ? '집결' : 'Assemble'}</strong> - {isKo ? '집결지에 모여 인원 확인' : 'Gather at assembly point for headcount'}</li>
      </ol>

      <h2>{isKo ? '대피 시 주의사항' : 'Evacuation Precautions'}</h2>
      <ul>
        <li>{isKo ? '엘리베이터 사용 금지, 반드시 계단 이용' : 'Never use elevators, always use stairs'}</li>
        <li>{isKo ? '연기가 가득한 곳은 자세를 낮추고 이동' : 'Move in a low position through smoke-filled areas'}</li>
        <li>{isKo ? '문을 열기 전 손등으로 온도 확인' : 'Check door temperature with the back of your hand before opening'}</li>
        <li>{isKo ? '젖은 수건으로 코와 입을 막고 대피' : 'Cover nose and mouth with a wet towel when evacuating'}</li>
      </ul>

      <TipBox type="warning">
        {isKo
          ? '화재 시 가장 중요한 것은 신속한 대피입니다. 소지품을 챙기려다 대피 시간을 놓치는 경우가 많습니다. 사람의 생명이 가장 중요하므로, 즉시 대피하세요.'
          : 'The most important thing in a fire is swift evacuation. Many delays occur when trying to gather belongings. Human life is the top priority, so evacuate immediately.'}
      </TipBox>
    </div>
  );
}

function ChemicalSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '화학물질 누출' : 'Chemical Spill Response'}</h1>
        <p>{isKo
          ? '화학물질 누출 사고 시 대응 절차를 학습합니다.'
          : 'Learn response procedures for chemical spill incidents.'}</p>
      </div>

      <h2>{isKo ? '누출 대응 절차' : 'Spill Response Procedure'}</h2>
      <ol>
        <li>{isKo ? '즉시 누출 지역에서 대피' : 'Immediately evacuate from the spill area'}</li>
        <li>{isKo ? '바람이 부는 방향의 반대쪽(풍상)으로 이동' : 'Move upwind (opposite to wind direction)'}</li>
        <li>{isKo ? '관계자에게 즉시 보고 및 119 신고' : 'Report immediately to relevant personnel and call 119'}</li>
        <li>{isKo ? 'MSDS 확인하여 물질 특성 파악' : 'Check MSDS to identify substance characteristics'}</li>
        <li>{isKo ? '적절한 보호장비 착용 후 누출 차단' : 'Stop the leak after wearing appropriate protective equipment'}</li>
        <li>{isKo ? '오염 확산 방지 (방제턱, 흡수제 활용)' : 'Prevent contamination spread (containment barriers, absorbents)'}</li>
      </ol>

      <TipBox type="danger">
        {isKo
          ? '화학물질 누출 시 물질의 종류를 모르면 절대로 맨손으로 접촉하지 마세요. 일부 화학물질은 피부 접촉만으로도 심각한 화상이나 중독을 일으킬 수 있습니다.'
          : 'Never touch spilled chemicals with bare hands if you do not know what the substance is. Some chemicals can cause severe burns or poisoning through skin contact alone.'}
      </TipBox>
    </div>
  );
}

function FirstAidSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '응급처치 기본' : 'Basic First Aid'}</h1>
        <p>{isKo
          ? '기본적인 응급처치의 원칙과 방법을 학습합니다.'
          : 'Learn the principles and methods of basic first aid.'}</p>
      </div>

      <h2>{isKo ? '응급처치의 원칙' : 'Principles of First Aid'}</h2>
      <ol>
        <li><strong>{isKo ? '현장 안전 확인' : 'Check Scene Safety'}</strong> - {isKo ? '구조자 자신의 안전을 먼저 확보' : 'Ensure your own safety first'}</li>
        <li><strong>{isKo ? '의식 확인' : 'Check Consciousness'}</strong> - {isKo ? '환자의 반응 확인 (어깨를 두드리며 "괜찮으세요?")' : "Check patient's response (tap shoulder and ask 'Are you okay?')"}</li>
        <li><strong>{isKo ? '119 신고' : 'Call 119'}</strong> - {isKo ? '의식이 없으면 즉시 119에 신고' : 'If unconscious, call 119 immediately'}</li>
        <li><strong>{isKo ? '응급처치 실시' : 'Provide First Aid'}</strong> - {isKo ? '상황에 맞는 응급처치 실시' : 'Provide appropriate first aid'}</li>
      </ol>

      <h2>{isKo ? '상황별 응급처치' : 'First Aid by Situation'}</h2>
      <ul>
        <li><strong>{isKo ? '출혈' : 'Bleeding'}</strong> - {isKo ? '깨끗한 천으로 상처 부위를 직접 압박' : 'Apply direct pressure with a clean cloth'}</li>
        <li><strong>{isKo ? '화상' : 'Burns'}</strong> - {isKo ? '흐르는 찬물에 20분 이상 냉각' : 'Cool under running cold water for 20+ minutes'}</li>
        <li><strong>{isKo ? '골절' : 'Fractures'}</strong> - {isKo ? '부목 고정, 무리한 이동 금지' : 'Splint immobilization, avoid unnecessary movement'}</li>
        <li><strong>{isKo ? '감전' : 'Electric Shock'}</strong> - {isKo ? '전원 차단 후 구조, 의식·호흡 확인' : 'Disconnect power before rescue, check consciousness and breathing'}</li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '응급처치에서 가장 중요한 것은 전문 의료진이 도착할 때까지 환자의 상태를 악화시키지 않는 것입니다. 자신이 할 수 있는 범위 내에서 처치하고, 무리한 시도는 삼가세요.'
          : "The most important thing in first aid is not to worsen the patient's condition until professional medical help arrives. Provide care within your capabilities and avoid risky attempts."}
      </TipBox>
    </div>
  );
}

function CPRSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? 'CPR과 AED' : 'CPR & AED'}</h1>
        <p>{isKo
          ? '심폐소생술(CPR)과 자동심장충격기(AED) 사용법을 학습합니다.'
          : 'Learn how to perform CPR and use an AED (Automated External Defibrillator).'}</p>
      </div>

      <h2>{isKo ? 'CPR 실시 방법' : 'How to Perform CPR'}</h2>
      <ol>
        <li>{isKo ? '환자를 단단한 바닥에 눕히고 의식 확인' : 'Lay the patient on a firm surface and check consciousness'}</li>
        <li>{isKo ? '119 신고 및 AED 요청' : 'Call 119 and request AED'}</li>
        <li>{isKo ? '가슴 압박 30회 (깊이 5cm, 분당 100~120회)' : '30 chest compressions (depth 5cm, 100-120 per minute)'}</li>
        <li>{isKo ? '인공호흡 2회 (훈련받은 경우)' : '2 rescue breaths (if trained)'}</li>
        <li>{isKo ? '30:2 비율로 반복' : 'Repeat at 30:2 ratio'}</li>
      </ol>

      <h2>{isKo ? 'AED 사용법' : 'How to Use AED'}</h2>
      <ol>
        <li>{isKo ? '전원 켜기' : 'Turn on power'}</li>
        <li>{isKo ? '패드 부착 (오른쪽 쇄골 아래, 왼쪽 겨드랑이 아래)' : 'Attach pads (below right collarbone, below left armpit)'}</li>
        <li>{isKo ? '심장 리듬 분석 (환자에게서 손 떼기)' : 'Heart rhythm analysis (hands off patient)'}</li>
        <li>{isKo ? '쇼크 버튼 누르기 (음성 안내에 따라)' : 'Press shock button (following voice instructions)'}</li>
        <li>{isKo ? 'CPR 재개' : 'Resume CPR'}</li>
      </ol>

      <TipBox type="important">
        {isKo
          ? '심정지 후 4분 이내에 CPR을 시작하면 생존율이 3배 이상 높아집니다. AED는 일반인도 사용할 수 있도록 설계되어 있으므로, 주저하지 말고 즉시 사용하세요. 선의의 응급처치에 대해서는 법적 책임이 면제됩니다(선한 사마리아인법).'
          : 'Starting CPR within 4 minutes of cardiac arrest triples survival rates. AEDs are designed for use by anyone, so do not hesitate to use one immediately. Good Samaritan laws provide legal protection for well-intentioned first aid.'}
      </TipBox>
    </div>
  );
}

function ReportSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '사고 보고 절차' : 'Accident Reporting Procedure'}</h1>
        <p>{isKo
          ? '산업재해 발생 시 보고 절차와 조사 방법을 학습합니다.'
          : 'Learn about reporting procedures and investigation methods when industrial accidents occur.'}</p>
      </div>

      <h2>{isKo ? '사고 보고 단계' : 'Accident Reporting Steps'}</h2>
      <ol>
        <li><strong>{isKo ? '즉시 보고' : 'Immediate Report'}</strong> - {isKo ? '사고 발생 시 관리감독자에게 즉시 보고' : 'Report to supervisor immediately when accident occurs'}</li>
        <li><strong>{isKo ? '응급 조치' : 'Emergency Measures'}</strong> - {isKo ? '부상자 응급처치, 추가 피해 방지' : 'First aid for injured, prevent further damage'}</li>
        <li><strong>{isKo ? '현장 보존' : 'Scene Preservation'}</strong> - {isKo ? '사고 현장을 가능한 한 원래 상태로 보존' : 'Preserve the accident scene as much as possible'}</li>
        <li><strong>{isKo ? '사고 조사' : 'Investigation'}</strong> - {isKo ? '원인 분석, 목격자 진술 확보' : 'Cause analysis, secure witness statements'}</li>
        <li><strong>{isKo ? '공식 보고' : 'Official Report'}</strong> - {isKo ? '산업재해 발생 보고서 작성 및 제출' : 'Prepare and submit industrial accident report'}</li>
      </ol>

      <h2>{isKo ? '법적 보고 의무' : 'Legal Reporting Obligations'}</h2>
      <p>{isKo
        ? '중대재해(사망 1인 이상, 3개월 이상 치료 부상 2인 이상, 직업병 10인 이상) 발생 시 즉시 고용노동부에 보고해야 합니다. 일반 산업재해도 발생일로부터 1개월 이내에 산업재해 조사표를 제출해야 합니다.'
        : 'Serious accidents (1+ deaths, 2+ injuries requiring 3+ months treatment, 10+ occupational diseases) must be reported immediately to the Ministry of Employment and Labor. General industrial accidents require submission of an accident investigation form within 1 month.'}</p>

      <TipBox type="warning">
        {isKo
          ? '산업재해를 은폐하거나 허위 보고하면 1,500만원 이하의 과태료가 부과되며, 중대재해 은폐 시에는 형사 처벌까지 받을 수 있습니다. 사고 발생 시 즉시, 정확하게 보고하는 것이 최선의 대응입니다.'
          : 'Concealing or falsely reporting industrial accidents results in fines up to 15 million won. Concealing serious accidents may lead to criminal prosecution. Immediate and accurate reporting is the best response.'}
      </TipBox>
    </div>
  );
}
