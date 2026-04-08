import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'statistics', icon: 'fa-chart-pie', ko: '재해 통계와 현황', en: 'Accident Statistics' },
  { id: 'analysis', icon: 'fa-microscope', ko: '재해 원인 분석', en: 'Cause Analysis' },
  { id: 'heinrich', icon: 'fa-layer-group', ko: '하인리히 법칙', en: "Heinrich's Law" },
  { id: 'rules', icon: 'fa-list-check', ko: '안전 수칙', en: 'Safety Rules' },
  { id: 'ppe', icon: 'fa-helmet-safety', ko: '보호구 착용', en: 'PPE Usage' },
  { id: 'cases', icon: 'fa-book-open', ko: '사례 연구', en: 'Case Studies' },
];

export default function AccidentPrevention(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('statistics');
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
        title={isKo ? '산업재해 예방' : 'Accident Prevention'}
        description={isKo
          ? '산업재해의 원인 분석과 예방 대책을 체계적으로 배웁니다.'
          : 'Systematically learn about cause analysis and prevention measures for industrial accidents.'}
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
            {activeSection === 'statistics' && <StatisticsSection isKo={isKo} />}
            {activeSection === 'analysis' && <AnalysisSection isKo={isKo} />}
            {activeSection === 'heinrich' && <HeinrichSection isKo={isKo} />}
            {activeSection === 'rules' && <RulesSection isKo={isKo} />}
            {activeSection === 'ppe' && <PPESection isKo={isKo} />}
            {activeSection === 'cases' && <CasesSection isKo={isKo} />}

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

function StatisticsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '재해 통계와 현황' : 'Accident Statistics & Status'}</h1>
        <p>{isKo
          ? '국내 산업재해의 통계와 최근 동향을 살펴봅니다.'
          : 'Review domestic industrial accident statistics and recent trends.'}</p>
      </div>

      <h2>{isKo ? '산업재해 발생 현황' : 'Industrial Accident Occurrence'}</h2>
      <p>{isKo
        ? '한국의 산업재해는 매년 약 10만 건 이상 발생하고 있으며, 사망자 수는 약 800~900명 수준입니다. 특히 건설업에서의 사고 사망이 전체의 약 50%를 차지합니다.'
        : 'South Korea experiences over 100,000 industrial accidents annually, with approximately 800-900 fatalities. Construction industry deaths account for about 50% of the total.'}</p>

      <h2>{isKo ? '주요 재해 유형' : 'Major Accident Types'}</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>{isKo ? '재해 유형' : 'Accident Type'}</th>
              <th>{isKo ? '비율' : 'Percentage'}</th>
              <th>{isKo ? '주요 원인' : 'Main Causes'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '떨어짐(추락)' : 'Falls'}</td>
              <td>{isKo ? '약 30%' : 'About 30%'}</td>
              <td>{isKo ? '안전난간 미설치, 안전대 미착용' : 'No guardrails, no safety harness'}</td>
            </tr>
            <tr>
              <td>{isKo ? '끼임' : 'Caught-in/between'}</td>
              <td>{isKo ? '약 15%' : 'About 15%'}</td>
              <td>{isKo ? '방호장치 미설치, LOTO 미이행' : 'No guards, LOTO not implemented'}</td>
            </tr>
            <tr>
              <td>{isKo ? '부딪힘' : 'Struck-by'}</td>
              <td>{isKo ? '약 12%' : 'About 12%'}</td>
              <td>{isKo ? '정리정돈 불량, 안전통로 미확보' : 'Poor housekeeping, no safe passage'}</td>
            </tr>
            <tr>
              <td>{isKo ? '넘어짐(전도)' : 'Slips/Trips'}</td>
              <td>{isKo ? '약 10%' : 'About 10%'}</td>
              <td>{isKo ? '바닥 미끄러움, 장애물' : 'Slippery floors, obstacles'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="important">
        {isKo
          ? '산업재해의 약 88%는 인적 요인(불안전한 행동)에 의해 발생합니다. 안전 의식 향상과 올바른 작업 습관이 재해 예방의 핵심입니다.'
          : 'Approximately 88% of industrial accidents are caused by human factors (unsafe acts). Improving safety awareness and proper work habits are key to accident prevention.'}
      </TipBox>
    </div>
  );
}

function AnalysisSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '재해 원인 분석' : 'Accident Cause Analysis'}</h1>
        <p>{isKo
          ? '산업재해의 직접 원인과 간접 원인을 분석하는 방법을 학습합니다.'
          : 'Learn methods for analyzing direct and indirect causes of industrial accidents.'}</p>
      </div>

      <h2>{isKo ? '직접 원인' : 'Direct Causes'}</h2>
      <ul>
        <li><strong>{isKo ? '불안전한 행동' : 'Unsafe Acts'}</strong> - {isKo ? '안전장치 무효화, 보호구 미착용, 위험장소 접근' : 'Disabling safety devices, not wearing PPE, approaching danger zones'}</li>
        <li><strong>{isKo ? '불안전한 상태' : 'Unsafe Conditions'}</strong> - {isKo ? '방호장치 결함, 정리정돈 불량, 조명 불량' : 'Guard defects, poor housekeeping, inadequate lighting'}</li>
      </ul>

      <h2>{isKo ? '간접 원인 (근본 원인)' : 'Indirect Causes (Root Causes)'}</h2>
      <ul>
        <li>{isKo ? '안전관리 조직 미비' : 'Inadequate safety management organization'}</li>
        <li>{isKo ? '안전교육 부족' : 'Insufficient safety education'}</li>
        <li>{isKo ? '안전 수칙 미확립' : 'Unestablished safety rules'}</li>
        <li>{isKo ? '작업환경 불량' : 'Poor work environment'}</li>
      </ul>

      <h3>{isKo ? '재해 분석 기법' : 'Accident Analysis Techniques'}</h3>
      <p>{isKo
        ? '재해 원인을 분석하는 대표적인 기법으로는 4M 분석(Man, Machine, Media, Management), FTA(결함수 분석), 특성요인도(Fish-bone) 등이 있습니다.'
        : 'Representative techniques for accident cause analysis include 4M analysis (Man, Machine, Media, Management), FTA (Fault Tree Analysis), and Fishbone diagrams.'}</p>

      <TipBox type="tip">
        {isKo
          ? '재해 원인 분석의 목적은 책임 추궁이 아니라 재발 방지입니다. 비난하지 않는 문화(Just Culture)를 조성해야 근로자들이 솔직하게 사고 원인을 보고합니다.'
          : 'The purpose of accident analysis is recurrence prevention, not blame. A Just Culture where workers are not blamed encourages honest reporting of accident causes.'}
      </TipBox>
    </div>
  );
}

function HeinrichSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '하인리히 법칙' : "Heinrich's Law"}</h1>
        <p>{isKo
          ? '산업 안전의 기본 원리인 하인리히 법칙(1:29:300)을 학습합니다.'
          : "Learn Heinrich's Law (1:29:300), a fundamental principle of industrial safety."}</p>
      </div>

      <h2>{isKo ? '1 : 29 : 300 법칙' : 'The 1:29:300 Rule'}</h2>
      <p>{isKo
        ? '하인리히(H.W. Heinrich)는 75,000건의 산업재해를 분석하여, 1건의 중대 재해가 발생하기 전에 29건의 경미한 재해와 300건의 무상해 사고(아차사고)가 있다는 법칙을 발견했습니다.'
        : 'H.W. Heinrich analyzed 75,000 industrial accidents and discovered that for every 1 serious accident, there are 29 minor accidents and 300 near-misses (no-injury incidents).'}</p>

      <h2>{isKo ? '아차사고(Near-miss)의 중요성' : 'Importance of Near-misses'}</h2>
      <p>{isKo
        ? '아차사고는 사고로 이어지지 않았지만, 잠재적으로 사고가 될 수 있었던 상황입니다. 아차사고를 적극적으로 보고하고 관리하면 중대 재해를 예방할 수 있습니다.'
        : 'Near-misses are situations that did not result in an accident but had the potential to. Actively reporting and managing near-misses can prevent serious accidents.'}</p>

      <TipBox type="important">
        {isKo
          ? '아차사고 300건을 무시하면, 29건의 경미한 재해를 거쳐 결국 1건의 중대 재해로 이어집니다. 아차사고 보고 체계를 구축하고, 사소한 위험도 관리하는 것이 핵심입니다.'
          : 'Ignoring 300 near-misses leads to 29 minor accidents and eventually 1 serious accident. Building a near-miss reporting system and managing even minor risks is essential.'}
      </TipBox>

      <h3>{isKo ? '버드의 개정 이론' : "Bird's Updated Theory"}</h3>
      <p>{isKo
        ? '프랭크 버드(Frank Bird)는 1969년 197만 건의 사고를 분석하여, 1:10:30:600의 비율(1건 중대 재해 : 10건 경상 : 30건 물적 손실 : 600건 무상해)을 제시했습니다. 이는 하인리히 법칙을 더욱 확장한 것입니다.'
        : "Frank Bird analyzed 1.97 million accidents in 1969 and proposed the ratio 1:10:30:600 (1 serious: 10 minor: 30 property damage: 600 near-misses). This expanded on Heinrich's Law."}</p>
    </div>
  );
}

function RulesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '안전 수칙' : 'Safety Rules'}</h1>
        <p>{isKo
          ? '사업장에서 반드시 지켜야 할 기본 안전 수칙을 학습합니다.'
          : 'Learn the basic safety rules that must be followed in the workplace.'}</p>
      </div>

      <h2>{isKo ? '10대 기본 안전 수칙' : '10 Basic Safety Rules'}</h2>
      <ol>
        <li>{isKo ? '작업 전 안전점검 실시' : 'Conduct pre-work safety inspection'}</li>
        <li>{isKo ? '개인보호구 올바르게 착용' : 'Wear PPE correctly'}</li>
        <li>{isKo ? '정해진 작업 절차 준수' : 'Follow established work procedures'}</li>
        <li>{isKo ? '위험 기계·기구 안전 수칙 준수' : 'Follow machine and equipment safety rules'}</li>
        <li>{isKo ? '작업장 정리정돈 유지' : 'Maintain workplace housekeeping'}</li>
        <li>{isKo ? '비상구와 통로 확보' : 'Keep emergency exits and passages clear'}</li>
        <li>{isKo ? '화기 취급 주의' : 'Handle fire sources with care'}</li>
        <li>{isKo ? '유해물질 안전 취급' : 'Handle hazardous materials safely'}</li>
        <li>{isKo ? '위험 상황 즉시 보고' : 'Report dangerous situations immediately'}</li>
        <li>{isKo ? '응급처치 방법 숙지' : 'Know first aid procedures'}</li>
      </ol>

      <TipBox type="tip">
        {isKo
          ? '안전 수칙은 알고만 있으면 의미가 없습니다. 매일 작업 전 TBM(Tool Box Meeting)을 통해 당일 작업의 위험요인과 안전 수칙을 확인하는 것이 효과적입니다.'
          : 'Simply knowing safety rules is not enough. Daily pre-work TBM (Tool Box Meetings) to review risk factors and safety rules for the day are effective.'}
      </TipBox>
    </div>
  );
}

function PPESection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '보호구 착용' : 'Personal Protective Equipment'}</h1>
        <p>{isKo
          ? '개인보호구의 종류와 올바른 착용 방법을 학습합니다.'
          : 'Learn about types and proper usage of personal protective equipment.'}</p>
      </div>

      <h2>{isKo ? '보호구의 종류' : 'Types of PPE'}</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>{isKo ? '부위' : 'Body Part'}</th>
              <th>{isKo ? '보호구' : 'PPE'}</th>
              <th>{isKo ? '용도' : 'Purpose'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '머리' : 'Head'}</td>
              <td>{isKo ? '안전모' : 'Hard Hat'}</td>
              <td>{isKo ? '낙하물, 충격 방호' : 'Protection from falling objects, impact'}</td>
            </tr>
            <tr>
              <td>{isKo ? '눈/얼굴' : 'Eyes/Face'}</td>
              <td>{isKo ? '보안경, 보안면' : 'Safety glasses, face shield'}</td>
              <td>{isKo ? '비산물, 화학물질 방호' : 'Protection from debris, chemicals'}</td>
            </tr>
            <tr>
              <td>{isKo ? '귀' : 'Ears'}</td>
              <td>{isKo ? '귀마개, 귀덮개' : 'Earplugs, earmuffs'}</td>
              <td>{isKo ? '소음 차단' : 'Noise protection'}</td>
            </tr>
            <tr>
              <td>{isKo ? '호흡기' : 'Respiratory'}</td>
              <td>{isKo ? '방진마스크, 방독마스크' : 'Dust mask, gas mask'}</td>
              <td>{isKo ? '분진, 유해가스 방호' : 'Protection from dust, toxic gas'}</td>
            </tr>
            <tr>
              <td>{isKo ? '손' : 'Hands'}</td>
              <td>{isKo ? '안전장갑' : 'Safety gloves'}</td>
              <td>{isKo ? '절단, 화학물질, 열 방호' : 'Protection from cuts, chemicals, heat'}</td>
            </tr>
            <tr>
              <td>{isKo ? '발' : 'Feet'}</td>
              <td>{isKo ? '안전화' : 'Safety shoes'}</td>
              <td>{isKo ? '낙하물, 찔림, 미끄러짐 방호' : 'Protection from drops, punctures, slips'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="warning">
        {isKo
          ? '보호구는 올바르게 착용해야만 효과가 있습니다. 안전모의 턱끈을 풀어 놓거나, 방진마스크를 턱에 걸쳐 놓는 것은 착용하지 않은 것과 같습니다.'
          : 'PPE is only effective when worn correctly. Leaving a hard hat chin strap unfastened or wearing a dust mask on the chin is the same as not wearing it.'}
      </TipBox>
    </div>
  );
}

function CasesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <div className="guide-section">
      <div className="guide-content-header">
        <h1>{isKo ? '사례 연구' : 'Case Studies'}</h1>
        <p>{isKo
          ? '실제 산업재해 사례를 통해 교훈을 학습합니다.'
          : 'Learn lessons through actual industrial accident case studies.'}</p>
      </div>

      <h2>{isKo ? '사례 1: 추락 사고' : 'Case 1: Fall Accident'}</h2>
      <p>{isKo
        ? '건설 현장에서 작업자가 안전난간이 미설치된 개구부에서 추락하여 사망한 사례입니다. 원인은 개구부 방호조치 미실시와 안전대 미착용이었습니다.'
        : 'A worker fell to death from an unguarded opening at a construction site. The causes were failure to install opening guards and not wearing a safety harness.'}</p>
      <p><strong>{isKo ? '교훈:' : 'Lesson:'}</strong> {isKo
        ? '2m 이상 높이에서 작업 시 반드시 안전난간을 설치하고, 안전대를 착용해야 합니다.'
        : 'When working at heights of 2m or more, guardrails must be installed and safety harnesses must be worn.'}</p>

      <h2>{isKo ? '사례 2: 끼임 사고' : 'Case 2: Caught-in Accident'}</h2>
      <p>{isKo
        ? '컨베이어 벨트 정비 중 전원을 차단하지 않은 상태에서 다른 작업자가 기계를 가동하여 끼임 사고가 발생한 사례입니다.'
        : 'A caught-in accident occurred when a worker was maintaining a conveyor belt without disconnecting power, and another worker started the machine.'}</p>
      <p><strong>{isKo ? '교훈:' : 'Lesson:'}</strong> {isKo
        ? '기계 정비 시 반드시 LOTO(잠금/태그) 절차를 준수해야 합니다.'
        : 'LOTO (Lockout/Tagout) procedures must always be followed during machine maintenance.'}</p>

      <TipBox type="important">
        {isKo
          ? '과거의 재해 사례는 최고의 교육 자료입니다. 유사 업종의 재해 사례를 정기적으로 학습하고, 자사 사업장에 적용할 수 있는 예방 대책을 수립하세요.'
          : 'Past accident cases are the best educational material. Regularly study cases from similar industries and establish prevention measures applicable to your workplace.'}
      </TipBox>
    </div>
  );
}
