# wanted-pre-onboarding-fe-refactor

# 프로젝트 소개

원티드 프리온보딩 선발과제 (Instagram)
리팩토링 및 추가 기능을 구현한 팀프로젝트 입니다.

# 팀원

| 이름   | 팀 구성             | 기능 구현 및 역할                                                                                                                                                                         |
| ------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김수빈 | 팀원 </br> Frontend | - Image Lazy Lodaing 기능 추가 </br> - Feed 메뉴 모달 생성                                                                                                                                |
| 이우정 | 팀원 </br> Frontend | - 댓글 삭제 기능 추가 </br> - 좋아요 버튼 추가                                                                                                                                            |
| 이상지 | 팀장 </br> Frontend | - Login form 유효성 확인 input border 수정 </br> - README 작성                                                                                                                            |
| 이혜림 | 팀원 </br> Frontend | - Header Throtling 구현 </br> - Fetched Data 랜덤 셔플 기능 추가 </br> - Feed Image accordion 구현 </br> - Main Pull to Refresh 구현                                                      |
| 홍승연 | 팀원 </br> Frontend | - Global layout 구현 </br> - Gnb 스타일 수정 </br> - routes 컴포넌트 구현 (Routing 및 Redirection 처리) </br> - User auth 처리 로직을 useAuth 훅으로 분리 </br> - 회원가입 처리 로직 구현 |

# 기술 스택

`JavaScript`
`React`
`SCSS`

## 라이브러리

`axios`
`classnames`
`react-simple-pull-to-refresh`
`react-icons`

# 디렉토리 구조

## src

```text
├── App.js
├── assets/
│   └── images/
├── components/
│   ├── Portal.jsx
│   ├── feed/
│   └── member/
├── constants/
│   └── routes.js
├── hooks/
│   ├── useAuth.js
│   ├── useLazyImageObserver.js
│   └── useThrottle.js
├── index.js
├── layout/
│   ├── AuthBtn.jsx
│   ├── Header.jsx
│   └── index.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── PreAssignmentGuide.jsx
│   └── SignUpModal.jsx
├── routes/
│   └── index.jsx
├── store/
│   └── auth/
├── styles/
│   ├── _mixin.scss
│   ├── _variable.scss
│   ├── common.scss
│   ├── globalStyles.js
│   ├── layout.scss
│   └── responsive.scss
└── util/
    ├── checkAccount.js
    └── checkAccount.jsx
```

## public

```
├── data/
│   └── feedData.json
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
└── robots.txt
```

# 상세 구현 사항

## 수빈

#### Img lazy loading

[상세설명](https://github.com/Wanted-Pre-Onboarding-Frontend-2/wanted-pre-onboarding-fe-refactor/pull/6)

#### delete feed

[상세설명](https://github.com/Wanted-Pre-Onboarding-Frontend-2/wanted-pre-onboarding-fe-refactor/pull/31)

</br>
</br>

## 우정

#### 댓글 컴포넌트 분리

[프리온보딩 #1 - 선별과제 리팩토링 - 댓글 컴포넌트 분리](https://velog.io/@eeeve/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-1-%EB%8C%93%EA%B8%80-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%B6%84%EB%A6%AC%ED%95%98%EA%B8%B0)

#### 댓글 삭제 구현

[프리온보딩 #1 - 선별과제 리팩토링 - 댓글 삭제 구현](https://velog.io/@eeeve/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-1-%EB%8C%93%EA%B8%80-%EC%82%AD%EC%A0%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)

#### 좋아요 기능 구현

[프리온보딩 #1 - 선별과제 리팩토링 - 좋아요 기능 구현](https://velog.io/@eeeve/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-1-%EC%A2%8B%EC%95%84%EC%9A%94-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)

</br>
</br>

## 상지

</br>
</br>

## 헤림

1. Header에 hrottling 구현
2. 각 feed에 image accordion
3. fetched Data에 random shuffle 추가
4. Pull to refresh 구현

</br>
</br>

## 승연

### global layout 구현 및 gnb 스타일 수정

#### main페이지 gnb

![gnb main](https://user-images.githubusercontent.com/69149030/177479896-b0f93f75-9254-4d89-ab3d-f765cbe337cd.png)

#### login페이지 gnb

![gnb login](https://user-images.githubusercontent.com/69149030/177479853-dec1a4bd-0cd9-49f7-937d-0045ee43f023.png)

[global layout PR](https://github.com/Wanted-Pre-Onboarding-Frontend-2/wanted-pre-onboarding-fe-refactor/pull/4)

[gnb 스타일 PR](https://github.com/Wanted-Pre-Onboarding-Frontend-2/wanted-pre-onboarding-fe-refactor/pull/18)

<br />

#### 라우팅 및 리다이렉션을 처리하는 routes 컴포넌트 구현

[상세설명](https://user-images.githubusercontent.com/69149030/177479628-98207727-b7f7-4759-a5b8-fa0b6905438f.mp4)

[routes PR](https://github.com/Wanted-Pre-Onboarding-Frontend-2/wanted-pre-onboarding-fe-refactor/pull/21)

#### 사용자 auth 처리 로직을 useAuth 훅으로 분리 및 회원가입 구현

[상세 설명](https://github.com/Wanted-Pre-Onboarding-Frontend-2/wanted-pre-onboarding-fe-refactor/pull/26)

https://user-images.githubusercontent.com/69149030/177487714-22d25719-4c46-403c-852c-1ce739fc6621.mp4
