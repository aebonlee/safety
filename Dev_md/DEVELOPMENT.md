# DreamIT Safety - 안전보건관리 학습 사이트 개발 문서

## 프로젝트 개요

- **프로젝트명**: DreamIT Safety (안전보건관리)
- **도메인**: https://safety.dreamitbiz.com
- **리포지토리**: https://github.com/aebonlee/safety
- **개발일**: 2026-04-09
- **참고 프로젝트**: D:\dreamit-web\study (공부 잘하는 방법 학습 사이트)

## 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| React | 19.x | UI 프레임워크 |
| TypeScript | 5.8.x | 타입 안전성 |
| Vite | 7.x | 빌드 도구 |
| React Router | 7.x | 클라이언트 사이드 라우팅 |
| Supabase | 2.x | 인증 (Google/Kakao OAuth) |
| GitHub Pages | - | 호스팅 및 배포 |

## 프로젝트 구조

```
safety/
├── public/
│   ├── CNAME              # 커스텀 도메인 설정
│   ├── favicon.svg         # 파비콘 (안전 경고 아이콘)
│   ├── robots.txt          # SEO 크롤러 설정
│   ├── sitemap.xml         # 사이트맵
│   └── 404.html            # SPA 리다이렉트 (GitHub Pages용)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # 네비게이션 바
│   │   │   └── Footer.tsx      # 푸터
│   │   ├── SEOHead.tsx         # SEO 메타 태그
│   │   ├── HeroBackground.tsx  # 히어로 배경 효과
│   │   ├── HeroCarousel.tsx    # 히어로 캐러셀
│   │   ├── FeatureCard.tsx     # 기능 카드
│   │   └── TipBox.tsx          # 팁 박스 (tip/warning/important/danger)
│   ├── config/
│   │   ├── site.ts             # 사이트 설정 & 학습 경로 정의
│   │   └── admin.ts            # 관리자 설정
│   ├── contexts/
│   │   ├── ThemeContext.tsx     # 컬러 테마 (safety/ocean/forest/sunset/cherry)
│   │   ├── LanguageContext.tsx  # 한국어/영어 전환
│   │   ├── AuthContext.tsx      # 인증 상태 관리
│   │   └── ToastContext.tsx     # 토스트 알림
│   ├── layouts/
│   │   └── PublicLayout.tsx    # 공개 레이아웃 (Navbar + Routes + Footer)
│   ├── pages/
│   │   ├── Home.tsx                              # 메인 페이지
│   │   ├── Login.tsx                             # 로그인 페이지
│   │   ├── NotFound.tsx                          # 404 페이지
│   │   ├── safety-law/SafetyLaw.tsx              # 산업안전보건법
│   │   ├── safety-management/SafetyManagement.tsx # 안전관리
│   │   ├── health-management/HealthManagement.tsx # 보건관리
│   │   ├── risk-assessment/RiskAssessment.tsx     # 위험성평가
│   │   ├── accident-prevention/AccidentPrevention.tsx # 산업재해 예방
│   │   ├── safety-education/SafetyEducation.tsx   # 안전보건교육
│   │   ├── work-environment/WorkEnvironment.tsx   # 작업환경 관리
│   │   └── emergency-response/EmergencyResponse.tsx # 비상대응과 응급처치
│   ├── styles/
│   │   ├── base.css           # 기본 스타일, CSS 변수
│   │   ├── navbar.css         # 네비게이션 바
│   │   ├── hero.css           # 히어로 섹션
│   │   ├── home.css           # 메인 페이지
│   │   ├── guide-pages.css    # 학습 가이드 페이지
│   │   ├── footer.css         # 푸터
│   │   ├── auth.css           # 인증 페이지
│   │   ├── toast.css          # 토스트 알림
│   │   ├── dark-mode.css      # 다크 모드
│   │   ├── animations.css     # 애니메이션
│   │   └── responsive.css     # 반응형 디자인
│   ├── types/
│   │   └── index.ts           # TypeScript 타입 정의
│   ├── utils/
│   │   ├── translations.ts    # 다국어 번역 (ko/en)
│   │   ├── supabase.ts        # Supabase 클라이언트
│   │   └── auth.ts            # 인증 유틸리티
│   ├── App.tsx                # 앱 루트 (Provider 중첩)
│   ├── main.tsx               # 엔트리 포인트
│   ├── index.css              # 글로벌 CSS import
│   └── vite-env.d.ts          # Vite 타입 정의
├── Dev_md/
│   └── DEVELOPMENT.md         # 개발 문서 (현재 파일)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── .env.example
```

## 학습 콘텐츠 구성 (8개 카테고리, 48개 토픽)

### 1. 산업안전보건법 (Safety Law) - #DC2626
- 법의 목적과 구조
- 사업주의 의무
- 근로자의 권리
- 안전보건관리체제
- 도급 시 안전보건
- 벌칙과 과태료

### 2. 안전관리 (Safety Management) - #EA580C
- 안전관리 조직
- 안전점검
- 안전작업 허가
- 기계·기구 안전
- 전기 안전
- 화재·폭발 예방

### 3. 보건관리 (Health Management) - #16A34A
- 직업병의 이해
- 작업환경 측정
- 건강진단
- 유해물질 관리
- 근골격계 질환
- 직무스트레스

### 4. 위험성평가 (Risk Assessment) - #9333EA
- 위험성평가 개요
- 유해·위험요인 파악
- 위험성 추정
- 위험성 결정
- 감소 대책
- 기록과 공유

### 5. 산업재해 예방 (Accident Prevention) - #2563EB
- 재해 통계와 현황
- 재해 원인 분석
- 하인리히 법칙
- 안전 수칙
- 보호구 착용
- 사례 연구

### 6. 안전보건교육 (Safety Education) - #0891B2
- 교육의 법적 근거
- 정기교육
- 채용 시 교육
- 특별교육
- 관리감독자 교육
- 교육 효과 평가

### 7. 작업환경 관리 (Work Environment) - #059669
- 작업환경 측정
- 환기와 조명
- 소음과 진동
- 분진 관리
- 밀폐 공간
- 온열 환경

### 8. 비상대응과 응급처치 (Emergency Response) - #E11D48
- 비상조치 계획
- 화재 대피
- 화학물질 누출
- 응급처치 기본
- CPR과 AED
- 사고 보고 절차

## 주요 기능

### 다국어 지원
- 한국어/영어 전환 기능
- `useLanguage()` 훅을 통한 번역 접근
- 모든 콘텐츠가 이중 언어로 작성

### 테마 시스템
- 5가지 컬러 테마: Safety(빨강), Ocean(파랑), Forest(초록), Sunset(주황), Cherry(분홍)
- 다크 모드 지원
- 쿠키 기반 테마 기억

### 인증
- Google OAuth 로그인
- Kakao OAuth 로그인
- 이메일/비밀번호 로그인
- Supabase 기반

### 학습 페이지 패턴
- 좌측 사이드바 목차 내비게이션
- 섹션별 콘텐츠 전환
- 이전/다음 내비게이션 버튼
- TipBox 컴포넌트 (tip, warning, important, danger)
- 비교 테이블

### SEO
- 페이지별 SEO 메타 태그 (Open Graph, Twitter Card)
- 사이트맵 (sitemap.xml)
- robots.txt
- 404 SPA 리다이렉트

### 반응형 디자인
- 데스크톱, 태블릿, 모바일 대응
- 브레이크포인트: 1280px, 1024px, 768px, 480px
- 모바일 햄버거 메뉴

## DreamIT Biz 패밀리 사이트

| 사이트 | 도메인 | 설명 |
|--------|--------|------|
| Study | study.dreamitbiz.com | 공부 잘하는 방법 |
| Teaching | teaching.dreamitbiz.com | 교수법 |
| EIP | eip.dreamitbiz.com | 정보처리기사 |
| **Safety** | **safety.dreamitbiz.com** | **안전보건관리** |

## 개발 명령어

```bash
# 개발 서버 실행 (포트 5182)
npm run dev

# 타입 체크
npx tsc --noEmit

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# GitHub Pages 배포
npx gh-pages -d dist
```

## 배포

- **호스팅**: GitHub Pages
- **도메인**: safety.dreamitbiz.com (CNAME 설정)
- **빌드 출력**: dist/ 폴더
- **SPA 지원**: 404.html을 통한 클라이언트 사이드 라우팅

## 환경 변수

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 변경 이력 (Changelog)

### 2026-04-09

| 커밋 | 설명 |
|------|------|
| `fb0d319` | Initial commit (리포지토리 생성) |
| `f71381c` | Create CNAME (safety.dreamitbiz.com 도메인 설정) |
| `a6a5509` | **feat: 안전보건관리 학습 사이트 전체 구현** - 57개 파일, 8,008줄 |
| `2f4655d` | fix: 가이드 페이지 사이드바 레이아웃 수정 - `guide-layout`에 `max-width` 및 `margin: 0 auto` 추가 |
| `927186a` | fix: 로고 호버 시 밑줄 제거 - `.navbar-logo:hover`에 `text-decoration: none` 추가 |

### 주요 버그 수정 내역

1. **사이드바 레이아웃 문제** (`guide-pages.css`, `responsive.css`)
   - 증상: 학습 페이지의 좌측 사이드바가 뷰포트 왼쪽 끝에 마진/패딩 없이 붙어서 표시
   - 원인: `.guide-layout`에 `max-width`와 `margin: 0 auto`가 누락
   - 해결: study 프로젝트와 동일하게 `max-width: var(--container-max)`, `margin: 0 auto` 추가

2. **로고 호버 밑줄** (`navbar.css`)
   - 증상: 네비게이션 로고에 마우스를 올리면 빨간색 밑줄이 표시
   - 원인: `base.css`의 전역 `a:hover { text-decoration: underline }` 규칙이 로고 링크에도 적용
   - 해결: `.navbar-logo:hover { text-decoration: none }` 추가
