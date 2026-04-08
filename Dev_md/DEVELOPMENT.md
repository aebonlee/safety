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
| sharp | - | OG 이미지 생성 (devDependency) |
| GitHub Pages | - | 호스팅 및 배포 |

## 프로젝트 구조

```
safety/
├── public/
│   ├── CNAME              # 커스텀 도메인 설정
│   ├── favicon.svg         # 파비콘 (안전 경고 아이콘)
│   ├── og-image.png        # Open Graph 미리보기 이미지 (1200×630)
│   ├── robots.txt          # SEO 크롤러 설정
│   ├── sitemap.xml         # 사이트맵
│   └── 404.html            # SPA 리다이렉트 (GitHub Pages용)
├── scripts/
│   ├── generate-og-image.mjs  # OG 이미지 생성 스크립트 (sharp 기반)
│   └── supabase-setup.sql     # Supabase DB 테이블/RLS/트리거 설정 SQL
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # 네비게이션 바
│   │   │   └── Footer.tsx      # 푸터
│   │   ├── SEOHead.tsx         # SEO 메타 태그 (OG, Twitter Card)
│   │   ├── HeroBackground.tsx  # 히어로 배경 효과
│   │   ├── HeroCarousel.tsx    # 히어로 캐러셀
│   │   ├── FeatureCard.tsx     # 기능 카드
│   │   └── TipBox.tsx          # 팁 박스 (tip/warning/important/danger)
│   ├── config/
│   │   ├── site.ts             # 사이트 설정 & 학습 경로 정의
│   │   └── admin.ts            # 관리자 설정
│   ├── contexts/
│   │   ├── ThemeContext.tsx     # 컬러 테마 (darkblue/safety/forest/sunset/cherry)
│   │   ├── LanguageContext.tsx  # 한국어/영어 전환
│   │   ├── AuthContext.tsx      # 인증 상태 관리 (safety_ 접두사 테이블)
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
│   │   ├── base.css           # 기본 스타일, CSS 변수 (기본 다크블루)
│   │   ├── navbar.css         # 네비게이션 바
│   │   ├── hero.css           # 히어로 섹션
│   │   ├── home.css           # 메인 페이지
│   │   ├── guide-pages.css    # 학습 가이드 페이지 + 출처 스타일
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
│   │   └── auth.ts            # 인증 유틸리티 (safety_ 접두사)
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
├── .env                        # 환경 변수 (git 제외)
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
- **기본 컬러: 다크블루 (#1D4ED8)**
- 5가지 컬러 테마: DarkBlue(다크블루, 기본), Safety(빨강), Forest(초록), Sunset(주황), Cherry(분홍)
- 다크 모드 지원 (auto/light/dark 전환)
- 쿠키 기반 테마 기억

### 인증 (Supabase)
- Google OAuth 로그인
- Kakao OAuth 로그인
- Supabase 기반, 테이블 접두사: `safety_`
- DB 테이블: `safety_user_profiles`
- 설정 SQL: `scripts/supabase-setup.sql`

### 학습 페이지 패턴
- 좌측 사이드바 목차 내비게이션
- 섹션별 콘텐츠 전환
- 이전/다음 내비게이션 버튼
- TipBox 컴포넌트 (tip, warning, important, danger)
- 비교 테이블
- **출처 및 참고자료 섹션** (모든 학습 페이지 하단)

### SEO & Open Graph
- 페이지별 SEO 메타 태그
- **Open Graph 메타 태그** (og:title, og:description, og:image, og:url, og:type, og:site_name, og:locale)
- **Twitter Card** (summary_large_image)
- **OG 이미지** (`public/og-image.png`, 1200×630, 다크블루 디자인)
- 카카오톡 공유 미리보기 지원
- 사이트맵 (sitemap.xml)
- robots.txt
- 404 SPA 리다이렉트

### 반응형 디자인
- 데스크톱, 태블릿, 모바일 대응
- 브레이크포인트: 1280px, 1024px, 768px, 480px
- 모바일 햄버거 메뉴

## 출처 및 참고자료 (페이지별)

각 학습 페이지 하단에 해당 주제에 맞는 출처 및 참고자료가 표시됩니다.

| 페이지 | 주요 출처 |
|--------|-----------|
| 산업안전보건법 | 산업안전보건법(제19611호), 시행령/시행규칙, 고용노동부, KOSHA, 중대재해처벌법(제17907호) |
| 안전관리 | KOSHA 안전관리 기술지침, 산업안전보건기준 규칙, 고용노동부 가이드, KOSHA GUIDE |
| 보건관리 | 산업안전보건법 제129~134조, 유해물질 관리 규칙, KOSHA 직업건강 가이드, 산업안전보건연구원, 근골격계 고시 |
| 위험성평가 | 산업안전보건법 제36조, 위험성평가 지침(고시 제2023-19호), KOSHA KRAS, KOSHA GUIDE X-001-2012, ISO 45001:2018 |
| 산업재해 예방 | 산업안전보건법 제57~65조, 재해 통계, KOSHA 재해사례, Heinrich(1931), 보호구 기준 |
| 안전보건교육 | 산업안전보건법 제29~33조, 시행규칙 별표4·5, KOSHA 교육자료실, 안전보건교육원 |
| 작업환경 관리 | 산업안전보건법 제125~128조, 작업환경측정 고시, KOSHA GUIDE H-80-2022, ACGIH, 소음진동관리법 |
| 비상대응과 응급처치 | 산업안전보건법 제51~56조, 화학물질관리법, 소방청, 대한적십자사, 대한심폐소생협회, KOSHA |

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

# OG 이미지 재생성
node scripts/generate-og-image.mjs
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

## Supabase 설정

- **프로젝트 URL**: `.env` 파일에 설정
- **테이블 접두사**: `safety_`
- **주요 테이블**: `safety_user_profiles`
- **RLS**: 사용자 본인 프로필만 조회/수정 가능
- **트리거**: 회원가입 시 자동 프로필 생성 (`safety_handle_new_user`)
- **인증 제공자**: Google OAuth, Kakao OAuth
- **설정 SQL**: `scripts/supabase-setup.sql` 실행

## 변경 이력 (Changelog)

### 2026-04-09

| 커밋 | 설명 |
|------|------|
| `fb0d319` | Initial commit (리포지토리 생성) |
| `f71381c` | Create CNAME (safety.dreamitbiz.com 도메인 설정) |
| `a6a5509` | **feat: 안전보건관리 학습 사이트 전체 구현** — 57개 파일, 8,008줄 |
| `2f4655d` | fix: 가이드 페이지 사이드바 레이아웃 수정 |
| `927186a` | fix: 로고 호버 시 밑줄 제거 |
| `4c95f46` | docs: 개발 문서에 변경 이력 및 버그 수정 내역 추가 |
| `70d3b5b` | **feat: OG 이미지 생성, 다크블루 테마 적용, Supabase 연동, 출처 추가** — 20개 파일, +931줄 |

### 주요 변경 사항

#### 1. OG 이미지 및 Open Graph 메타 태그 (`70d3b5b`)
- `scripts/generate-og-image.mjs` — sharp 기반 OG 이미지 생성 스크립트
- `public/og-image.png` — 1200×630 다크블루 디자인 OG 이미지
- `index.html` — og:image, og:image:width, og:image:height, og:locale 메타 태그 추가
- `src/components/SEOHead.tsx` — og:type, og:site_name, og:image, twitter:image 등 전체 OG 태그 추가
- 카카오톡 디버거 (https://developers.kakao.com/tool/debugger/sharing) 검증 완료

#### 2. 기본 컬러 다크블루 변경 (`70d3b5b`)
- `src/styles/base.css` — `:root` 기본 컬러를 `#DC2626`(빨강) → `#1D4ED8`(다크블루)로 변경
- `src/styles/base.css` — `html[data-color="ocean"]` 제거, `html[data-color="safety"]` 추가 (빨강을 선택 옵션으로 전환)
- `src/contexts/ThemeContext.tsx` — 기본 컬러 `'safety'` → `'darkblue'`로 변경, COLOR_OPTIONS 순서 재배치
- `index.html` — theme-color 메타 태그 `#DC2626` → `#1D4ED8`로 변경

#### 3. Supabase 연동 (`70d3b5b`)
- `.env` — Supabase URL 및 Anon Key 설정
- `src/utils/auth.ts` — 테이블명 `user_profiles` → `safety_user_profiles`로 변경
- `src/contexts/AuthContext.tsx` — 테이블명 접두사 적용
- `scripts/supabase-setup.sql` — DB 스키마 생성 SQL (테이블, RLS 정책, 트리거, 함수)

#### 4. 학습 페이지 출처 추가 (`70d3b5b`)
- 전체 8개 학습 페이지에 "출처 및 참고자료" 섹션 추가
- `src/styles/guide-pages.css` — `.guide-references` 스타일 추가
- 각 페이지별 주제에 맞는 법령, 기관, 가이드라인 출처 표기
- 한국어/영어 이중 언어 지원

### 주요 버그 수정 내역

1. **사이드바 레이아웃 문제** (`2f4655d`)
   - 파일: `guide-pages.css`, `responsive.css`
   - 증상: 학습 페이지의 좌측 사이드바가 뷰포트 왼쪽 끝에 마진/패딩 없이 붙어서 표시
   - 원인: `.guide-layout`에 `max-width`와 `margin: 0 auto`가 누락
   - 해결: `max-width: var(--container-max)`, `margin: 0 auto` 추가

2. **로고 호버 밑줄** (`927186a`)
   - 파일: `navbar.css`
   - 증상: 네비게이션 로고에 마우스를 올리면 빨간색 밑줄이 표시
   - 원인: `base.css`의 전역 `a:hover { text-decoration: underline }` 규칙이 로고 링크에도 적용
   - 해결: `.navbar-logo:hover { text-decoration: none }` 추가
