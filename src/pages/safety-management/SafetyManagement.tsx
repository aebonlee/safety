import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'organization', icon: 'fa-people-group', ko: '안전관리 조직', en: 'Safety Organization' },
  { id: 'inspection', icon: 'fa-clipboard-check', ko: '안전점검', en: 'Safety Inspection' },
  { id: 'permit', icon: 'fa-file-signature', ko: '안전작업 허가', en: 'Work Permit System' },
  { id: 'machinery', icon: 'fa-gears', ko: '기계·기구 안전', en: 'Machinery Safety' },
  { id: 'electrical', icon: 'fa-bolt', ko: '전기 안전', en: 'Electrical Safety' },
  { id: 'fire', icon: 'fa-fire-extinguisher', ko: '화재·폭발 예방', en: 'Fire & Explosion Prevention' },
];

export default function SafetyManagement(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('organization');
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
        title={isKo ? '안전관리' : 'Safety Management'}
        description={isKo
          ? '사업장 안전관리의 기본 원칙과 실무 기법을 배웁니다.'
          : 'Learn the fundamental principles and practical techniques of workplace safety management.'}
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
            {activeSection === 'organization' && <OrganizationSection isKo={isKo} />}
            {activeSection === 'inspection' && <InspectionSection isKo={isKo} />}
            {activeSection === 'permit' && <PermitSection isKo={isKo} />}
            {activeSection === 'machinery' && <MachinerySection isKo={isKo} />}
            {activeSection === 'electrical' && <ElectricalSection isKo={isKo} />}
            {activeSection === 'fire' && <FireSection isKo={isKo} />}

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

function OrganizationSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '안전관리 조직' : 'Safety Management Organization'}</h1>
        <p>{isKo
          ? '효과적인 안전관리를 위한 조직 구성과 역할 분담에 대해 학습합니다.'
          : 'Learn about organizational structure and role allocation for effective safety management.'}</p>
      </div>

      <h2>{isKo ? '안전관리 조직의 구성' : 'Safety Organization Structure'}</h2>
      <p>{isKo
        ? '안전관리 조직은 사업장의 규모와 업종에 따라 구성되며, 안전보건관리책임자를 중심으로 안전관리자, 보건관리자, 관리감독자 등으로 이루어집니다.'
        : 'The safety management organization is structured based on workplace size and industry type, centered around the safety and health manager with safety managers, health managers, and supervisors.'}</p>

      <h3>{isKo ? '안전관리자의 역할' : 'Role of Safety Manager'}</h3>
      <ul>
        <li>{isKo ? '사업장 순회 점검·지도·조언' : 'Workplace patrol inspection, guidance, and advice'}</li>
        <li>{isKo ? '산업재해 발생의 원인 조사·분석 및 재발 방지 대책 수립' : 'Investigation, analysis of accident causes, and establishment of recurrence prevention measures'}</li>
        <li>{isKo ? '안전보건교육계획의 수립 및 실시' : 'Planning and conducting safety and health education'}</li>
        <li>{isKo ? '안전에 관한 기술적 사항에 대한 보좌·지도' : 'Technical support and guidance on safety matters'}</li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? '안전관리자는 단순히 서류 작업만 하는 것이 아니라, 현장을 자주 방문하여 실질적인 안전 활동을 수행해야 합니다. 현장 밀착형 안전관리가 산업재해 예방의 핵심입니다.'
          : 'Safety managers should not just handle paperwork but must frequently visit the field to perform practical safety activities. Field-oriented safety management is key to accident prevention.'}
      </TipBox>
    </div>
  );
}

function InspectionSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '안전점검' : 'Safety Inspection'}</h1>
        <p>{isKo
          ? '체계적인 안전점검의 종류와 실시 방법을 학습합니다.'
          : 'Learn about types and methods of systematic safety inspections.'}</p>
      </div>

      <h2>{isKo ? '안전점검의 종류' : 'Types of Safety Inspections'}</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>{isKo ? '구분' : 'Type'}</th>
              <th>{isKo ? '주기' : 'Frequency'}</th>
              <th>{isKo ? '내용' : 'Contents'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '일상점검' : 'Daily Inspection'}</td>
              <td>{isKo ? '매일' : 'Daily'}</td>
              <td>{isKo ? '작업 전 장비·시설 상태 확인' : 'Pre-work equipment and facility check'}</td>
            </tr>
            <tr>
              <td>{isKo ? '정기점검' : 'Regular Inspection'}</td>
              <td>{isKo ? '주간/월간' : 'Weekly/Monthly'}</td>
              <td>{isKo ? '전반적인 안전상태 점검' : 'Overall safety condition check'}</td>
            </tr>
            <tr>
              <td>{isKo ? '특별점검' : 'Special Inspection'}</td>
              <td>{isKo ? '필요 시' : 'As needed'}</td>
              <td>{isKo ? '재해 발생 후, 설비 변경 시' : 'After accidents, equipment changes'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>{isKo ? '체크리스트 활용' : 'Using Checklists'}</h2>
      <p>{isKo
        ? '안전점검은 표준화된 체크리스트를 활용하여 체계적으로 실시해야 합니다. 점검 결과는 반드시 기록하고, 발견된 불안전 요소는 즉시 시정 조치해야 합니다.'
        : 'Safety inspections should be conducted systematically using standardized checklists. Results must be recorded, and identified unsafe conditions must be corrected immediately.'}</p>

      <TipBox type="important">
        {isKo
          ? '안전점검에서 가장 중요한 것은 발견된 위험요인에 대한 후속 조치입니다. 점검만 하고 개선하지 않으면 아무런 의미가 없습니다. 점검 → 발견 → 시정 → 확인의 사이클을 반드시 완결해야 합니다.'
          : 'The most important aspect of safety inspections is follow-up action on identified hazards. Inspecting without improving is meaningless. The cycle of inspect → identify → correct → verify must be completed.'}
      </TipBox>
    </div>
  );
}

function PermitSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '안전작업 허가' : 'Work Permit System'}</h1>
        <p>{isKo
          ? '위험 작업에 대한 안전작업 허가제도와 절차를 학습합니다.'
          : 'Learn about the work permit system and procedures for hazardous work.'}</p>
      </div>

      <h2>{isKo ? '안전작업 허가 대상' : 'Work Requiring Permits'}</h2>
      <ul>
        <li>{isKo ? '화기작업 (용접, 절단 등)' : 'Hot work (welding, cutting, etc.)'}</li>
        <li>{isKo ? '밀폐공간 작업' : 'Confined space work'}</li>
        <li>{isKo ? '고소작업 (2m 이상)' : 'Work at heights (2m or more)'}</li>
        <li>{isKo ? '전기작업 (활선 작업)' : 'Electrical work (live-line work)'}</li>
        <li>{isKo ? '굴착작업' : 'Excavation work'}</li>
      </ul>

      <h2>{isKo ? '허가 절차' : 'Permit Procedure'}</h2>
      <ol>
        <li>{isKo ? '작업 신청 및 위험성 평가' : 'Work application and risk assessment'}</li>
        <li>{isKo ? '안전 조치 확인 (보호구, 소화기 등)' : 'Safety measure verification (PPE, fire extinguishers, etc.)'}</li>
        <li>{isKo ? '안전작업 허가서 발급' : 'Issuance of work permit'}</li>
        <li>{isKo ? '작업 중 안전 모니터링' : 'Safety monitoring during work'}</li>
        <li>{isKo ? '작업 완료 후 확인 및 허가서 반납' : 'Post-work verification and permit return'}</li>
      </ol>

      <TipBox type="warning">
        {isKo
          ? '안전작업 허가 없이 위험작업을 실시하면 중대한 사고로 이어질 수 있습니다. 반드시 허가 절차를 준수하고, 허가 조건에 명시된 안전 조치를 철저히 이행하세요.'
          : 'Performing hazardous work without a work permit can lead to serious accidents. Always follow permit procedures and thoroughly implement the safety measures specified in permit conditions.'}
      </TipBox>
    </div>
  );
}

function MachinerySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '기계·기구 안전' : 'Machinery & Equipment Safety'}</h1>
        <p>{isKo
          ? '기계·기구 사용 시 안전관리 기법과 방호장치에 대해 학습합니다.'
          : 'Learn about safety management techniques and protective devices for machinery and equipment.'}</p>
      </div>

      <h2>{isKo ? '방호장치의 종류' : 'Types of Protective Devices'}</h2>
      <ul>
        <li><strong>{isKo ? '격리형 방호장치' : 'Enclosure Guards'}</strong> - {isKo ? '위험부위를 물리적으로 차단' : 'Physically blocks hazardous areas'}</li>
        <li><strong>{isKo ? '감응형 방호장치' : 'Presence-Sensing Devices'}</strong> - {isKo ? '광전자식, 초음파식 등 감지 장치' : 'Photoelectric, ultrasonic detection devices'}</li>
        <li><strong>{isKo ? '연동형 방호장치' : 'Interlocking Guards'}</strong> - {isKo ? '문 열림 시 기계 자동 정지' : 'Auto-stops machine when door opens'}</li>
      </ul>

      <h2>{isKo ? 'LOTO(잠금/태그) 시스템' : 'LOTO (Lockout/Tagout) System'}</h2>
      <p>{isKo
        ? '기계 정비·수리 시에는 반드시 전원을 차단하고, 잠금장치(Lock)와 표지판(Tag)을 부착하여 다른 작업자가 임의로 기계를 가동하지 못하도록 해야 합니다.'
        : 'During machine maintenance and repair, power must be disconnected and locks and tags must be applied to prevent other workers from operating the machine.'}</p>

      <TipBox type="danger">
        {isKo
          ? '기계에 끼임, 감김 사고는 산업재해 사망의 주요 원인입니다. 회전체, 물림점 등 위험부위에는 반드시 방호장치를 설치하고, 정비 시 LOTO를 철저히 시행하세요.'
          : 'Caught-in and entanglement accidents with machines are a leading cause of industrial fatalities. Always install guards on rotating parts and pinch points, and strictly implement LOTO during maintenance.'}
      </TipBox>
    </div>
  );
}

function ElectricalSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '전기 안전' : 'Electrical Safety'}</h1>
        <p>{isKo
          ? '전기로 인한 감전, 화재 위험을 예방하기 위한 안전관리를 학습합니다.'
          : 'Learn about safety management to prevent electric shock and fire hazards.'}</p>
      </div>

      <h2>{isKo ? '감전 재해 예방' : 'Electric Shock Prevention'}</h2>
      <ul>
        <li>{isKo ? '전기 기계·기구의 접지 실시' : 'Grounding of electrical machines and equipment'}</li>
        <li>{isKo ? '누전차단기 설치 및 정기 점검' : 'Installation and regular inspection of circuit breakers'}</li>
        <li>{isKo ? '절연용 보호구 착용' : 'Wearing insulating protective equipment'}</li>
        <li>{isKo ? '활선작업 시 안전 절차 준수' : 'Following safety procedures for live-line work'}</li>
      </ul>

      <h2>{isKo ? '전기화재 예방' : 'Electrical Fire Prevention'}</h2>
      <p>{isKo
        ? '전기화재의 주요 원인은 단락(합선), 과부하, 접촉불량, 누전 등입니다. 정기적인 전기 설비 점검과 적절한 용량의 차단기 사용이 중요합니다.'
        : 'Major causes of electrical fires include short circuits, overloading, poor contacts, and ground faults. Regular electrical equipment inspection and proper-capacity circuit breakers are essential.'}</p>

      <TipBox type="important">
        {isKo
          ? '젖은 손으로 전기 기기를 만지거나, 물 근처에서 전기 장비를 사용하는 것은 매우 위험합니다. 감전 사고 발생 시 먼저 전원을 차단한 후 구조해야 합니다.'
          : 'Touching electrical equipment with wet hands or using electrical equipment near water is extremely dangerous. In case of electric shock, disconnect the power first before rescue.'}
      </TipBox>
    </div>
  );
}

function FireSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '화재·폭발 예방' : 'Fire & Explosion Prevention'}</h1>
        <p>{isKo
          ? '사업장에서 발생할 수 있는 화재와 폭발을 예방하기 위한 관리 방법을 학습합니다.'
          : 'Learn management methods to prevent fires and explosions that can occur in workplaces.'}</p>
      </div>

      <h2>{isKo ? '화재의 3요소' : 'Fire Triangle'}</h2>
      <p>{isKo
        ? '화재가 발생하려면 가연물(연료), 산소(공기), 점화원(열) 세 가지 요소가 동시에 필요합니다. 이 중 하나라도 제거하면 화재를 예방하거나 진화할 수 있습니다.'
        : 'Fire requires three elements simultaneously: fuel (combustible material), oxygen (air), and ignition source (heat). Removing any one element can prevent or extinguish fire.'}</p>

      <h2>{isKo ? '소화기 사용법 (PASS)' : 'Fire Extinguisher Usage (PASS)'}</h2>
      <ol>
        <li><strong>P</strong> - {isKo ? 'Pull: 안전핀을 뽑는다' : 'Pull: Pull the pin'}</li>
        <li><strong>A</strong> - {isKo ? 'Aim: 노즐을 불의 밑부분에 겨냥한다' : 'Aim: Aim at the base of the fire'}</li>
        <li><strong>S</strong> - {isKo ? 'Squeeze: 손잡이를 누른다' : 'Squeeze: Squeeze the handle'}</li>
        <li><strong>S</strong> - {isKo ? 'Sweep: 좌우로 쓸듯이 뿌린다' : 'Sweep: Sweep side to side'}</li>
      </ol>

      <TipBox type="warning">
        {isKo
          ? '인화성 물질 취급 장소에서는 화기 사용을 엄격히 금지하고, 정전기 방지 대책을 수립해야 합니다. 가연성 가스 누출 감지기를 설치하고, 환기 시설을 갖추어야 합니다.'
          : 'Open flames must be strictly prohibited in areas handling flammable materials, and static electricity prevention measures must be established. Combustible gas leak detectors and ventilation systems must be installed.'}
      </TipBox>
    </div>
  );
}
