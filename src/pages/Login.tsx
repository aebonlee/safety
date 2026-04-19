import { useLanguage } from '../contexts/LanguageContext';
import { signInWithGoogle, signInWithKakao } from '../utils/auth';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

export default function Login(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <SEOHead title={isKo ? '로그인' : 'Login'} path="/login" />
      <div className="login-page">
        {/* 좌측: 비주얼 영역 */}
        <div className="login-visual">
          <div className="login-visual-bg" />
          <div className="login-visual-content">
            <div className="login-visual-badge">
              <i className="fa-solid fa-shield-halved" />
              {isKo ? '산업안전보건 학습 플랫폼' : 'Industrial Safety Platform'}
            </div>
            <h2 className="login-visual-title">
              {isKo ? '안전한 사업장,\n건강한 근로자' : 'Safe Workplace,\nHealthy Workers'}
            </h2>
            <p className="login-visual-desc">
              {isKo
                ? '산업안전보건법부터 비상대응까지 — 체계적 안전관리 역량을 키우세요.'
                : 'From safety law to emergency response — build systematic safety management skills.'}
            </p>

            {/* 메인 일러스트 */}
            <div className="login-illustration">
              <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* 배경 장식 */}
                <circle cx="200" cy="110" r="100" fill="white" opacity="0.03" />
                <circle cx="200" cy="110" r="70" fill="white" opacity="0.04" />

                {/* 안전모 쓴 작업자 1 (좌측) */}
                <g transform="translate(40, 30)">
                  {/* 몸체 */}
                  <rect x="15" y="75" width="40" height="55" rx="10" fill="rgba(255,255,255,0.12)" />
                  <rect x="20" y="85" width="30" height="8" rx="4" fill="rgba(96,165,250,0.3)" />
                  {/* 머리 */}
                  <circle cx="35" cy="58" r="16" fill="rgba(255,255,255,0.15)" />
                  {/* 안전모 */}
                  <path d="M16 54 Q35 28 54 54" fill="#F59E0B" />
                  <rect x="12" y="51" width="46" height="6" rx="3" fill="#F59E0B" />
                  <rect x="30" y="45" width="10" height="8" rx="2" fill="#FBBF24" opacity="0.6" />
                  {/* 얼굴 */}
                  <circle cx="29" cy="60" r="2" fill="rgba(255,255,255,0.7)" />
                  <circle cx="41" cy="60" r="2" fill="rgba(255,255,255,0.7)" />
                  <path d="M30 66 Q35 69 40 66" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  {/* 클립보드 */}
                  <g transform="translate(52, 80)">
                    <rect x="0" y="0" width="20" height="28" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
                    <rect x="-2" y="-2" width="8" height="4" rx="2" fill="rgba(255,255,255,0.2)" transform="translate(7,0)" />
                    <rect x="4" y="7" width="12" height="2" rx="1" fill="rgba(96,165,250,0.5)" />
                    <rect x="4" y="12" width="10" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
                    <rect x="4" y="17" width="12" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
                    <rect x="4" y="22" width="8" height="2" rx="1" fill="rgba(96,165,250,0.3)" />
                  </g>
                </g>

                {/* 중앙: 큰 방패 + 체크마크 */}
                <g transform="translate(150, 15)">
                  {/* 방패 글로우 */}
                  <path d="M50 0 L95 18 L95 58 Q95 90 50 105 Q5 90 5 58 L5 18 Z"
                        fill="rgba(96,165,250,0.08)" />
                  {/* 방패 본체 */}
                  <path d="M50 5 L90 22 L90 56 Q90 85 50 98 Q10 85 10 56 L10 22 Z"
                        fill="rgba(59,130,246,0.15)" stroke="rgba(96,165,250,0.6)" strokeWidth="2" />
                  {/* 내부 방패 */}
                  <path d="M50 18 L78 30 L78 52 Q78 72 50 82 Q22 72 22 52 L22 30 Z"
                        fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
                  {/* 체크마크 */}
                  <path d="M34 50 L45 62 L68 38" stroke="#60A5FA" strokeWidth="5"
                        strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  {/* 별 장식 */}
                  <circle cx="50" cy="22" r="3" fill="rgba(251,191,36,0.6)" />
                </g>

                {/* 우측: 상승 차트 */}
                <g transform="translate(270, 40)">
                  {/* 차트 배경 */}
                  <rect x="-5" y="-5" width="105" height="100" rx="8" fill="rgba(255,255,255,0.04)" />
                  {/* 그리드 라인 */}
                  <line x1="0" y1="20" x2="90" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="0" y1="45" x2="90" y2="45" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="0" y1="70" x2="90" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  {/* 막대 */}
                  <rect x="5" y="55" width="14" height="35" rx="4" fill="rgba(96,165,250,0.25)" />
                  <rect x="27" y="40" width="14" height="50" rx="4" fill="rgba(96,165,250,0.4)" />
                  <rect x="49" y="25" width="14" height="65" rx="4" fill="rgba(96,165,250,0.55)" />
                  <rect x="71" y="8" width="14" height="82" rx="4" fill="rgba(96,165,250,0.75)" />
                  {/* 상승선 */}
                  <polyline points="12,52 34,38 56,22 78,6" stroke="#60A5FA" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  {/* 포인트 */}
                  <circle cx="12" cy="52" r="3" fill="#60A5FA" />
                  <circle cx="34" cy="38" r="3" fill="#60A5FA" />
                  <circle cx="56" cy="22" r="3" fill="#60A5FA" />
                  <circle cx="78" cy="6" r="4" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
                  {/* 화살표 */}
                  <path d="M80,4 L86,-2 L82,5" fill="#FBBF24" />
                </g>

                {/* 안전모 쓴 작업자 2 (우측 소형) */}
                <g transform="translate(280, 130)">
                  <rect x="8" y="35" width="24" height="30" rx="6" fill="rgba(255,255,255,0.08)" />
                  <circle cx="20" cy="25" r="10" fill="rgba(255,255,255,0.1)" />
                  <path d="M9 22 Q20 10 31 22" fill="#10B981" />
                  <rect x="7" y="20" width="26" height="4" rx="2" fill="#10B981" />
                  <circle cx="16" cy="26" r="1.5" fill="rgba(255,255,255,0.6)" />
                  <circle cx="24" cy="26" r="1.5" fill="rgba(255,255,255,0.6)" />
                </g>

                {/* 하단 장식 아이콘들 */}
                <g transform="translate(20, 180)" opacity="0.4">
                  <polygon points="12,0 0,20 24,20" stroke="rgba(251,191,36,0.8)" strokeWidth="1.5" fill="none" />
                  <line x1="12" y1="6" x2="12" y2="14" stroke="rgba(251,191,36,0.8)" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="12" cy="17" r="1.2" fill="rgba(251,191,36,0.8)" />
                </g>
                <g transform="translate(120, 185)" opacity="0.35">
                  <rect x="0" y="0" width="18" height="18" rx="3" stroke="rgba(96,165,250,0.7)" strokeWidth="1.3" fill="none" />
                  <path d="M4 9 L7.5 12.5 L14 6" stroke="rgba(96,165,250,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
                <g transform="translate(225, 182)" opacity="0.35">
                  <circle cx="10" cy="10" r="8" stroke="rgba(16,185,129,0.7)" strokeWidth="1.3" fill="none" />
                  <circle cx="10" cy="10" r="3" stroke="rgba(16,185,129,0.7)" strokeWidth="1.3" fill="none" />
                  <line x1="10" y1="0" x2="10" y2="4" stroke="rgba(16,185,129,0.7)" strokeWidth="1.3" />
                  <line x1="10" y1="16" x2="10" y2="20" stroke="rgba(16,185,129,0.7)" strokeWidth="1.3" />
                  <line x1="0" y1="10" x2="4" y2="10" stroke="rgba(16,185,129,0.7)" strokeWidth="1.3" />
                  <line x1="16" y1="10" x2="20" y2="10" stroke="rgba(16,185,129,0.7)" strokeWidth="1.3" />
                </g>
                <g transform="translate(340, 180)" opacity="0.35">
                  <path d="M10 0 L13 7 L20 7 L14 12 L16 20 L10 15 L4 20 L6 12 L0 7 L7 7 Z"
                        stroke="rgba(251,191,36,0.7)" strokeWidth="1.2" fill="none" />
                </g>
              </svg>
            </div>

            {/* 하단 특징 요약 */}
            <div className="login-features">
              <div className="login-feature-item">
                <i className="fa-solid fa-book-open" />
                <span>{isKo ? '8개 학습 과정' : '8 Learning Courses'}</span>
              </div>
              <div className="login-feature-item">
                <i className="fa-solid fa-certificate" />
                <span>{isKo ? '체계적 커리큘럼' : 'Systematic Curriculum'}</span>
              </div>
              <div className="login-feature-item">
                <i className="fa-solid fa-chart-line" />
                <span>{isKo ? '학습 진도 관리' : 'Progress Tracking'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 우측: 로그인 카드 */}
        <div className="login-form-area">
          <div className="auth-card">
            <div className="auth-card-icon">
              <i className="fa-solid fa-shield-halved" />
            </div>
            <h1>{isKo ? '로그인' : 'Sign In'}</h1>
            <p className="auth-subtitle">
              {isKo ? 'DreamIT Safety에 로그인하세요' : 'Sign in to DreamIT Safety'}
            </p>
            <div className="auth-buttons">
              <button className="auth-btn google" onClick={() => signInWithGoogle()}>
                <i className="fa-brands fa-google" />
                {isKo ? 'Google로 로그인' : 'Sign in with Google'}
              </button>
              <button className="auth-btn kakao" onClick={() => signInWithKakao()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.47 1.607 4.647 4.035 5.91l-.822 3.05a.5.5 0 0 0 .756.542l3.623-2.396c.787.104 1.59.157 2.408.157 5.523 0 10-3.477 10-7.763C22 6.477 17.523 3 12 3z"/></svg>
                {isKo ? '카카오로 로그인' : 'Sign in with Kakao'}
              </button>
            </div>
            <p className="auth-footer-text">
              {isKo
                ? '로그인 시 이용약관 및 개인정보처리방침에 동의합니다.'
                : 'By signing in, you agree to our Terms and Privacy Policy.'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
