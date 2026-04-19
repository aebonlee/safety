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
      <div className="auth-page">
        <div className="auth-card">
          {/* 산업안전 일러스트 */}
          <div className="login-illustration">
            <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* 배경 원형 장식 */}
              <circle cx="140" cy="80" r="70" fill="currentColor" opacity="0.05" />
              <circle cx="140" cy="80" r="50" fill="currentColor" opacity="0.05" />

              {/* 안전모 쓴 작업자 */}
              <g transform="translate(60, 30)">
                {/* 몸체 */}
                <rect x="12" y="70" width="36" height="50" rx="8" fill="currentColor" opacity="0.15" />
                {/* 머리 */}
                <circle cx="30" cy="55" r="14" fill="currentColor" opacity="0.2" />
                {/* 안전모 */}
                <path d="M14 50 Q30 28 46 50" fill="var(--primary)" />
                <rect x="10" y="48" width="40" height="5" rx="2" fill="var(--primary)" />
                {/* 눈 */}
                <circle cx="25" cy="56" r="2" fill="var(--bg-white)" />
                <circle cx="35" cy="56" r="2" fill="var(--bg-white)" />
                {/* 클립보드 */}
                <rect x="44" y="78" width="16" height="22" rx="2" fill="currentColor" opacity="0.12" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
                <rect x="47" y="84" width="10" height="2" rx="1" fill="currentColor" opacity="0.25" />
                <rect x="47" y="88" width="8" height="2" rx="1" fill="currentColor" opacity="0.25" />
                <rect x="47" y="92" width="10" height="2" rx="1" fill="currentColor" opacity="0.25" />
              </g>

              {/* 방패 + 체크마크 (중앙) */}
              <g transform="translate(125, 25)">
                <path d="M30 0 L55 12 L55 38 Q55 58 30 68 Q5 58 5 38 L5 12 Z"
                      fill="var(--primary)" opacity="0.12" stroke="var(--primary)" strokeWidth="2" />
                <path d="M20 34 L27 42 L42 26" stroke="var(--primary)" strokeWidth="3.5"
                      strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>

              {/* 차트/그래프 요소 (우측) */}
              <g transform="translate(190, 55)">
                <rect x="0" y="40" width="12" height="30" rx="3" fill="var(--primary)" opacity="0.2" />
                <rect x="18" y="25" width="12" height="45" rx="3" fill="var(--primary)" opacity="0.35" />
                <rect x="36" y="10" width="12" height="60" rx="3" fill="var(--primary)" opacity="0.5" />
                <rect x="54" y="0" width="12" height="70" rx="3" fill="var(--primary)" opacity="0.65" />
                {/* 상승 화살표 */}
                <path d="M6 38 L24 24 L42 10 L60 -2" stroke="var(--primary)" strokeWidth="2"
                      strokeLinecap="round" strokeDasharray="4 3" fill="none" />
                <polygon points="62,-6 56,2 64,1" fill="var(--primary)" opacity="0.7" />
              </g>

              {/* 하단 안전 아이콘들 */}
              <g transform="translate(35, 130)" opacity="0.3">
                {/* 경고 삼각형 */}
                <polygon points="10,0 0,16 20,16" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <line x1="10" y1="5" x2="10" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="13.5" r="1" fill="currentColor" />
              </g>
              <g transform="translate(130, 135)" opacity="0.3">
                {/* 기어/설정 */}
                <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                <line x1="8" y1="0" x2="8" y2="3" stroke="currentColor" strokeWidth="1.5" />
                <line x1="8" y1="13" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="8" x2="3" y2="8" stroke="currentColor" strokeWidth="1.5" />
                <line x1="13" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
              </g>
              <g transform="translate(220, 130)" opacity="0.3">
                {/* 체크 원 */}
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M5 10 L8.5 13.5 L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </svg>
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
        </div>
      </div>
    </>
  );
}
