# 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [기능 요약](#기능-요약)
3. [진행 상황](#진행상황-25-6-14-기준)
4. [기술 스택](#-기술-스택)
5. [디렉터리 구조](#-디렉터리-구조)
6. [Contributing](docs/onboarding.md)

# 📌 프로젝트 개요
- 디자이너의 개인 작업물을 소개하는 정적 웹사이트입니다.
- 프론트엔드 중심으로 설계되었으며, 페이지별로 동적인 테마와 인터랙션을 제공합니다.

# 🛠 기능 요약
- 페이지 별 테마 전환
- Slug 기반 프로젝트 상세 페이지 렌더링
- 로컬 JSON 기반 데이터 관리 (CMS 확장 고려)
- 반응형 디자인 & 모바일 최적화
- 다국어 지원

# 🎯 진행상황 ('25. 6. 14. 기준)
## ✅ DONE
- 커스텀 도메인 배포 테스트
- 기초 구조 설계
- 페이지 기초 구현 및 라우팅

## 🟧 TO-DO
- 공통 컴포넌트 설계 및 개발
- 상세 페이지 데이터 구조 설계
- image viewer 컴포넌트 개발
- Sharing 기능 개발
- 등등...

# 💻 기술 스택
분야|스택
---|---
프레임워크|React 19, Vite
언어|TypeScript
상태 관리|React Context API
스타일링|SCSS, CSS Modules
라우팅|React Router (HashRouter)
번역|react-i18next

# 📁 디렉터리 구조
```
public
    images
    locales
src
    ㄴ@types         # 타입 정의 
    ㄴassets
        ㄴdata       # JSON 데이터 
        ㄴfonts      # 폰트
        ㄴimages     # 이미지
    ㄴcomponents     # 재사용 가능한 컴포넌트
        ㄴcommon     # 공통 컴포넌트
        ㄴlayout
    ㄴconstants      # 상수 관리
    ㄴcontexts       # context API
    ㄴhooks          # custom hook
    ㄴpages          # 페이지 단위 컴포넌트
    ㄴstyle          # 스타일 정의
        ㄴcss        # scss 파일
```

```ts
// 프로젝트(포트폴리오)에 대한 모델링
type Project = {
	slug: string;             // 포트폴리오의 슬러그
	tags: tag[];              // 해당 포트폴리오의 태그 목록
	representative?: string;  // 포트폴리오의 대표 이미지 경로
}
```

# Contributing
- [온보딩 문서](docs/onboarding.md)
