import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'purpose', icon: 'fa-bullseye', ko: '법의 목적과 구조', en: 'Purpose & Structure' },
  { id: 'employer', icon: 'fa-building', ko: '사업주의 의무', en: 'Employer Obligations' },
  { id: 'worker', icon: 'fa-user-shield', ko: '근로자의 권리', en: 'Worker Rights' },
  { id: 'system', icon: 'fa-sitemap', ko: '안전보건관리체제', en: 'Safety Management System' },
  { id: 'subcontract', icon: 'fa-handshake', ko: '도급 시 안전보건', en: 'Subcontractor Safety' },
  { id: 'penalty', icon: 'fa-scale-balanced', ko: '벌칙과 과태료', en: 'Penalties & Fines' },
];

export default function SafetyLaw(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('purpose');
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
        title={isKo ? '산업안전보건법' : 'Industrial Safety & Health Act'}
        description={isKo
          ? '산업안전보건법의 주요 조항과 사업주·근로자의 의무를 체계적으로 학습합니다.'
          : 'Learn the key provisions of the Industrial Safety and Health Act.'}
      />

      <div className="guide-page">
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">
              {isKo ? '목차' : 'Contents'}
            </div>
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
            {activeSection === 'purpose' && <PurposeSection isKo={isKo} />}
            {activeSection === 'employer' && <EmployerSection isKo={isKo} />}
            {activeSection === 'worker' && <WorkerSection isKo={isKo} />}
            {activeSection === 'system' && <SystemSection isKo={isKo} />}
            {activeSection === 'subcontract' && <SubcontractSection isKo={isKo} />}
            {activeSection === 'penalty' && <PenaltySection isKo={isKo} />}

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

function PurposeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '법의 목적과 구조' : 'Purpose & Structure of the Act'}</h1>
        <p>{isKo
          ? '산업안전보건법은 산업 안전과 보건에 관한 기준을 확립하고, 근로자의 안전과 보건을 유지·증진하기 위한 목적으로 제정되었습니다.'
          : 'The Industrial Safety and Health Act was enacted to establish standards for industrial safety and health, and to maintain and promote worker safety and health.'}</p>
      </div>

      <h2>{isKo ? '법의 목적 (제1조)' : 'Purpose of the Act (Article 1)'}</h2>
      <p>{isKo
        ? '산업안전보건법은 산업 안전 및 보건에 관한 기준을 확립하고 그 책임의 소재를 명확하게 하여 산업재해를 예방하고 쾌적한 작업환경을 조성함으로써 노무를 제공하는 자의 안전 및 보건을 유지·증진함을 목적으로 합니다.'
        : 'The Act aims to establish standards for industrial safety and health, clarify responsibilities, prevent industrial accidents, and create pleasant working environments to maintain and promote the safety and health of workers.'}</p>

      <h2>{isKo ? '법의 구조' : 'Structure of the Act'}</h2>
      <p>{isKo
        ? '산업안전보건법은 총 13장 175조로 구성되어 있으며, 주요 구성은 다음과 같습니다:'
        : 'The Act consists of 13 chapters and 175 articles. The main structure is as follows:'}</p>
      <ol>
        <li><strong>{isKo ? '제1장 총칙' : 'Chapter 1: General Provisions'}</strong> - {isKo ? '목적, 정의, 적용 범위' : 'Purpose, definitions, scope of application'}</li>
        <li><strong>{isKo ? '제2장 안전보건관리체제' : 'Chapter 2: Safety & Health Management System'}</strong> - {isKo ? '안전보건 관리 조직' : 'Safety and health management organization'}</li>
        <li><strong>{isKo ? '제3장 안전보건관리규정' : 'Chapter 3: Safety & Health Management Rules'}</strong> - {isKo ? '사업장 자체 규정' : 'Workplace-specific regulations'}</li>
        <li><strong>{isKo ? '제4장 유해위험 방지 조치' : 'Chapter 4: Hazard Prevention Measures'}</strong> - {isKo ? '위험 기계, 물질 관리' : 'Dangerous machinery and substance management'}</li>
        <li><strong>{isKo ? '제5장 도급 시 산업재해 예방' : 'Chapter 5: Accident Prevention in Subcontracting'}</strong> - {isKo ? '도급인의 안전보건 조치' : 'Subcontractor safety and health measures'}</li>
      </ol>

      <TipBox type="important">
        {isKo
          ? '2024년 전면 개정된 중대재해처벌법과 연계하여 산업안전보건법의 사업주 의무가 대폭 강화되었습니다. 특히 50인 이상 사업장뿐 아니라 5인 이상 사업장까지 적용 범위가 확대되었습니다.'
          : 'Employer obligations under the Industrial Safety and Health Act have been significantly strengthened in connection with the Serious Accidents Punishment Act. The scope of application has been expanded to include workplaces with 5 or more employees.'}
      </TipBox>

      <h3>{isKo ? '주요 용어 정의' : 'Key Definitions'}</h3>
      <p>{isKo
        ? '산업안전보건법에서 사용하는 주요 용어를 이해하는 것이 중요합니다:'
        : 'It is important to understand key terms used in the Act:'}</p>
      <ul>
        <li><strong>{isKo ? '산업재해' : 'Industrial Accident'}</strong> - {isKo ? '근로자가 업무에 관계되는 건설물·설비·원재료·가스·증기·분진 등에 의하거나 작업 또는 그 밖의 업무로 인하여 사망 또는 부상하거나 질병에 걸리는 것' : 'Death, injury, or illness of a worker caused by structures, facilities, raw materials, gases, vapors, dust, or other work-related factors'}</li>
        <li><strong>{isKo ? '중대재해' : 'Serious Accident'}</strong> - {isKo ? '사망자 1명 이상, 3개월 이상 치료가 필요한 부상자 2명 이상, 또는 직업성 질병자 10명 이상 발생한 재해' : 'An accident resulting in 1 or more deaths, 2 or more injuries requiring 3+ months treatment, or 10+ cases of occupational disease'}</li>
        <li><strong>{isKo ? '안전보건관리책임자' : 'Safety & Health Manager'}</strong> - {isKo ? '사업장의 안전보건에 관한 업무를 총괄관리하는 사람' : 'A person who oversees all safety and health affairs at a workplace'}</li>
      </ul>
    </div>
  );
}

function EmployerSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '사업주의 의무' : 'Employer Obligations'}</h1>
        <p>{isKo
          ? '산업안전보건법은 사업주에게 근로자의 안전과 건강을 보호하기 위한 다양한 의무를 부과합니다.'
          : 'The Act imposes various obligations on employers to protect worker safety and health.'}</p>
      </div>

      <h2>{isKo ? '사업주의 일반적 의무' : 'General Employer Obligations'}</h2>
      <p>{isKo
        ? '사업주는 다음과 같은 일반적 의무를 가집니다:'
        : 'Employers have the following general obligations:'}</p>
      <ul>
        <li>{isKo ? '산업재해 예방을 위한 안전·보건 조치 이행' : 'Implement safety and health measures for accident prevention'}</li>
        <li>{isKo ? '안전보건관리체제 구축·운영' : 'Establish and operate a safety and health management system'}</li>
        <li>{isKo ? '안전보건교육 실시' : 'Conduct safety and health education'}</li>
        <li>{isKo ? '작업환경 측정 및 건강진단 실시' : 'Conduct work environment measurements and health examinations'}</li>
        <li>{isKo ? '산업재해 기록·보존 및 보고' : 'Record, preserve, and report industrial accidents'}</li>
      </ul>

      <h2>{isKo ? '안전조치 의무 (제38조)' : 'Safety Measure Obligations (Article 38)'}</h2>
      <p>{isKo
        ? '사업주는 기계·기구, 설비, 폭발성·발화성·인화성 물질, 전기, 열 등에 의한 위험을 예방하기 위해 필요한 조치를 하여야 합니다. 또한 굴착, 채석, 하역, 벌목 등의 작업에서 발생할 수 있는 위험을 방지하기 위한 조치도 필수적입니다.'
        : 'Employers must take necessary measures to prevent dangers from machinery, equipment, explosive/flammable substances, electricity, heat, etc. Prevention measures for risks from excavation, quarrying, loading/unloading, and logging operations are also mandatory.'}</p>

      <h2>{isKo ? '보건조치 의무 (제39조)' : 'Health Measure Obligations (Article 39)'}</h2>
      <p>{isKo
        ? '사업주는 원재료·가스·증기·분진·미스트·산소결핍·병원체 등에 의한 건강장해를 예방하기 위해 필요한 보건조치를 하여야 합니다.'
        : 'Employers must take necessary health measures to prevent health hazards from raw materials, gases, vapors, dust, mist, oxygen deficiency, pathogens, etc.'}</p>

      <TipBox type="warning">
        {isKo
          ? '사업주가 안전·보건 조치 의무를 위반하여 근로자를 사망에 이르게 한 경우, 7년 이하의 징역 또는 1억원 이하의 벌금에 처해질 수 있습니다. 중대재해처벌법 적용 시 처벌이 더욱 강화됩니다.'
          : 'If an employer violates safety/health obligations causing worker death, they may face up to 7 years imprisonment or fines up to 100 million won. Penalties are even more severe under the Serious Accidents Punishment Act.'}
      </TipBox>

      <h3>{isKo ? '안전보건관리규정 작성' : 'Safety & Health Management Rules'}</h3>
      <p>{isKo
        ? '상시근로자 100인 이상 사업장은 안전보건관리규정을 작성하여야 하며, 이를 근로자에게 알려야 합니다. 관리규정에는 안전보건 관리조직, 안전보건교육, 작업장 안전관리, 사고 조사 및 대책 등이 포함되어야 합니다.'
        : 'Workplaces with 100 or more regular employees must prepare safety and health management rules and inform workers. These rules must include safety management organization, safety education, workplace safety management, accident investigation and countermeasures.'}</p>
    </div>
  );
}

function WorkerSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '근로자의 권리' : 'Worker Rights'}</h1>
        <p>{isKo
          ? '근로자는 안전하고 건강한 작업환경에서 일할 권리가 있으며, 법적으로 다양한 보호를 받습니다.'
          : 'Workers have the right to work in a safe and healthy environment and receive various legal protections.'}</p>
      </div>

      <h2>{isKo ? '작업중지권 (제52조)' : 'Right to Stop Work (Article 52)'}</h2>
      <p>{isKo
        ? '근로자는 산업재해가 발생할 급박한 위험이 있는 경우 작업을 중지하고 대피할 수 있습니다. 사업주는 작업중지권을 행사한 근로자에 대하여 해고 등 불이익한 처우를 하여서는 안 됩니다.'
        : 'Workers may stop work and evacuate when there is imminent danger of an industrial accident. Employers must not take adverse actions such as dismissal against workers who exercise this right.'}</p>

      <TipBox type="important">
        {isKo
          ? '작업중지권은 근로자의 가장 중요한 권리 중 하나입니다. 위험이 있다고 판단되면 즉시 작업을 중지하고, 관리감독자에게 보고하세요. 이로 인한 불이익은 법으로 금지되어 있습니다.'
          : 'The right to stop work is one of the most important worker rights. If you perceive danger, stop work immediately and report to your supervisor. Adverse treatment for this is prohibited by law.'}
      </TipBox>

      <h2>{isKo ? '근로자의 의무' : 'Worker Obligations'}</h2>
      <p>{isKo
        ? '근로자도 산업재해 예방을 위해 다음과 같은 의무를 가집니다:'
        : 'Workers also have obligations for accident prevention:'}</p>
      <ul>
        <li>{isKo ? '안전보건 관련 법령과 사업장 규정 준수' : 'Comply with safety and health laws and workplace regulations'}</li>
        <li>{isKo ? '사업주가 실시하는 안전보건교육 참여' : 'Participate in safety and health education provided by the employer'}</li>
        <li>{isKo ? '보호구 착용 등 안전수칙 이행' : 'Wear protective equipment and follow safety rules'}</li>
        <li>{isKo ? '위험 상황 발견 시 즉시 보고' : 'Report immediately when hazardous situations are discovered'}</li>
      </ul>

      <h2>{isKo ? '안전보건 참여 권리' : 'Right to Safety Participation'}</h2>
      <p>{isKo
        ? '근로자는 산업안전보건위원회에 참여할 권리가 있으며, 사업장의 안전보건 정책 수립에 의견을 제시할 수 있습니다. 50인 이상 사업장에서는 노사 동수로 구성된 산업안전보건위원회를 운영해야 합니다.'
        : 'Workers have the right to participate in the Industrial Safety and Health Committee and voice opinions on workplace safety policies. Workplaces with 50+ employees must operate a committee composed of equal numbers of labor and management representatives.'}</p>
    </div>
  );
}

function SystemSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '안전보건관리체제' : 'Safety & Health Management System'}</h1>
        <p>{isKo
          ? '효과적인 안전보건관리를 위한 조직 체계와 역할을 학습합니다.'
          : 'Learn about organizational structures and roles for effective safety and health management.'}</p>
      </div>

      <h2>{isKo ? '안전보건관리책임자' : 'Safety & Health Manager'}</h2>
      <p>{isKo
        ? '안전보건관리책임자는 사업장의 안전보건에 관한 업무를 총괄관리하는 사람으로, 사업장을 실질적으로 총괄하는 사람이 지정됩니다. 주로 대표이사 또는 공장장이 해당됩니다.'
        : 'The Safety and Health Manager oversees all safety and health affairs at a workplace. This person is typically the CEO or plant manager who has overall control of the workplace.'}</p>

      <h2>{isKo ? '관리감독자' : 'Supervisors'}</h2>
      <p>{isKo
        ? '관리감독자는 작업과 소속 직원을 직접 지휘·감독하는 사람으로, 안전보건 관련 업무를 수행합니다. 현장의 안전보건 활동에서 가장 중요한 역할을 합니다.'
        : 'Supervisors directly command and oversee work and workers, performing safety and health duties. They play the most critical role in field-level safety activities.'}</p>

      <h3>{isKo ? '주요 직책별 역할' : 'Roles by Position'}</h3>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>{isKo ? '직책' : 'Position'}</th>
              <th>{isKo ? '선임 기준' : 'Appointment Criteria'}</th>
              <th>{isKo ? '주요 역할' : 'Key Roles'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '안전관리자' : 'Safety Manager'}</td>
              <td>{isKo ? '50인 이상' : '50+ employees'}</td>
              <td>{isKo ? '안전 점검, 교육, 개선' : 'Safety inspection, education, improvement'}</td>
            </tr>
            <tr>
              <td>{isKo ? '보건관리자' : 'Health Manager'}</td>
              <td>{isKo ? '50인 이상' : '50+ employees'}</td>
              <td>{isKo ? '건강진단, 작업환경 관리' : 'Health exams, work environment management'}</td>
            </tr>
            <tr>
              <td>{isKo ? '산업보건의' : 'Occupational Physician'}</td>
              <td>{isKo ? '50인 이상' : '50+ employees'}</td>
              <td>{isKo ? '건강상담, 직업병 예방' : 'Health counseling, occupational disease prevention'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="tip">
        {isKo
          ? '안전보건관리체제의 핵심은 최고경영자의 리더십입니다. CEO가 안전을 최우선 가치로 인식하고 적극적으로 참여할 때, 사업장 전체의 안전문화가 정착됩니다.'
          : 'The key to a safety management system is top management leadership. When the CEO recognizes safety as the top priority and actively participates, a safety culture takes root throughout the workplace.'}
      </TipBox>
    </div>
  );
}

function SubcontractSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '도급 시 안전보건' : 'Subcontractor Safety & Health'}</h1>
        <p>{isKo
          ? '도급, 하도급 관계에서의 안전보건 책임과 의무를 학습합니다.'
          : 'Learn about safety and health responsibilities in subcontracting relationships.'}</p>
      </div>

      <h2>{isKo ? '도급인의 안전보건 조치' : "Principal Contractor's Safety Measures"}</h2>
      <p>{isKo
        ? '도급인은 관계수급인 근로자가 도급인의 사업장에서 작업을 하는 경우 안전보건 조치를 하여야 합니다. 이는 산업재해 예방에서 매우 중요한 부분입니다.'
        : "When subcontractor's workers perform work at the principal contractor's workplace, the principal contractor must take safety and health measures. This is a critical part of accident prevention."}</p>

      <h2>{isKo ? '도급 금지 작업' : 'Prohibited Subcontracting'}</h2>
      <p>{isKo
        ? '다음과 같이 유해·위험한 작업은 도급이 금지됩니다:'
        : 'Subcontracting is prohibited for the following hazardous work:'}</p>
      <ul>
        <li>{isKo ? '도금 작업 (시안화수소 등 사용)' : 'Plating work (using hydrogen cyanide, etc.)'}</li>
        <li>{isKo ? '수은·납·카드뮴 등을 제련·주입·가공하는 작업' : 'Smelting, pouring, or processing mercury, lead, cadmium, etc.'}</li>
        <li>{isKo ? '허가대상 유해물질을 제조·사용하는 작업' : 'Manufacturing or using licensed hazardous substances'}</li>
      </ul>

      <TipBox type="danger">
        {isKo
          ? '도급 금지 작업을 위반하여 도급한 경우, 10년 이하의 징역 또는 1억원 이하의 벌금에 처해질 수 있습니다. 또한 도급인은 수급인 근로자의 산업재해에 대해서도 책임을 질 수 있습니다.'
          : 'Violating prohibited subcontracting rules may result in up to 10 years imprisonment or fines up to 100 million won. The principal contractor may also be liable for industrial accidents involving subcontractor workers.'}
      </TipBox>

      <h3>{isKo ? '적격 수급인 선정' : 'Selecting Qualified Subcontractors'}</h3>
      <p>{isKo
        ? '도급인은 산업재해 예방을 위한 능력이 있는 적격 수급인을 선정하여야 합니다. 수급인의 안전관리 능력, 산업재해 발생 이력, 안전보건관리체제 등을 종합적으로 평가하여 선정합니다.'
        : 'Principal contractors must select qualified subcontractors with capability for accident prevention. Selection should be based on comprehensive evaluation of safety management capability, accident history, and safety management systems.'}</p>
    </div>
  );
}

function PenaltySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '벌칙과 과태료' : 'Penalties & Fines'}</h1>
        <p>{isKo
          ? '산업안전보건법 위반 시 부과되는 벌칙과 과태료에 대해 알아봅니다.'
          : 'Learn about penalties and fines imposed for violations of the Act.'}</p>
      </div>

      <h2>{isKo ? '주요 벌칙 규정' : 'Major Penalty Provisions'}</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>{isKo ? '위반 사항' : 'Violation'}</th>
              <th>{isKo ? '벌칙' : 'Penalty'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '안전·보건 조치 위반 → 사망' : 'Safety measure violation → Death'}</td>
              <td>{isKo ? '7년 이하 징역 / 1억원 이하 벌금' : 'Up to 7 years / Up to 100M won'}</td>
            </tr>
            <tr>
              <td>{isKo ? '안전·보건 조치 미이행' : 'Failure to implement safety measures'}</td>
              <td>{isKo ? '5년 이하 징역 / 5천만원 이하 벌금' : 'Up to 5 years / Up to 50M won'}</td>
            </tr>
            <tr>
              <td>{isKo ? '도급 금지 작업 위반' : 'Prohibited subcontracting violation'}</td>
              <td>{isKo ? '10년 이하 징역 / 1억원 이하 벌금' : 'Up to 10 years / Up to 100M won'}</td>
            </tr>
            <tr>
              <td>{isKo ? '작업중지 명령 위반' : 'Work stoppage order violation'}</td>
              <td>{isKo ? '5년 이하 징역 / 5천만원 이하 벌금' : 'Up to 5 years / Up to 50M won'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>{isKo ? '과태료 부과 기준' : 'Administrative Fine Standards'}</h2>
      <p>{isKo
        ? '벌칙 외에도 행정적 제재로 과태료가 부과될 수 있습니다. 과태료는 위반 횟수에 따라 가중됩니다.'
        : 'In addition to criminal penalties, administrative fines may be imposed. Fines increase based on the number of violations.'}</p>
      <ul>
        <li>{isKo ? '안전보건교육 미실시: 500만원 이하' : 'Failure to provide safety education: Up to 5M won'}</li>
        <li>{isKo ? '산업재해 미보고: 1,500만원 이하' : 'Failure to report industrial accidents: Up to 15M won'}</li>
        <li>{isKo ? '작업환경 측정 미실시: 1,000만원 이하' : 'Failure to conduct work environment measurements: Up to 10M won'}</li>
      </ul>

      <TipBox type="warning">
        {isKo
          ? '산업재해를 은폐하면 처벌이 대폭 가중됩니다. 산업재해 발생 시 즉시 보고하고, 원인 조사와 재발 방지 대책을 수립하는 것이 법적으로도, 경영 측면에서도 올바른 대응입니다.'
          : 'Concealing industrial accidents results in significantly increased penalties. When accidents occur, immediate reporting, cause investigation, and establishing recurrence prevention measures is the correct response both legally and from a management perspective.'}
      </TipBox>
    </div>
  );
}
