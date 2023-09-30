export interface IWork {
  name: string;
  color: string;
  logo?: string;
  img: string[];
  git: string;
  url: string;
  skill: string[];
  des: string;
  imgList?: string[];
}

export const workList = [
  {
    name: 'Momentum',
    color: '#0E6439',
    img: [
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271180277-862ccf45-9991-43d4-9b36-40d29df15950.png',
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271180444-17ca152e-2277-43ba-9a0d-3dc2ecdbfc69.png',
    ],
    git: 'https://github.com/eee0930/momentum_clone',
    url: 'https://eee0930.github.io/momentum_clone/',
    skill: ['JavaScript', 'HTML', 'CSS'],
    des: '아름다운 배경과 함께 명언, 현재 날씨를 제공해주며, 스케쥴을 정리할 수 있는 앱입니다. 배경과 명언은 랜덤으로 제공됩니다.',
  },
  {
    name: 'Cheese Book',
    color: '#F9CC73',
    logo: 'https://user-images.githubusercontent.com/37135523/270388422-a8153880-9cad-417b-9086-3bafa3f3131b.png',
    img: [
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271179446-e60b586f-ef41-4a0f-9995-28a667e8c38e.png',
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271179578-d6a9068b-f88e-41ad-901a-fa7f9b672850.png',
    ],
    git: 'https://github.com/eee0930/cheese_book',
    url: 'https://eee0930.github.io/cheese_book',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'StyledComponents',
      'FramerMotion',
    ],
    des: "서점가기 귀찮아하는 게으름뱅이들을 위해 오로지 '책' 정보만 귀엽고 active하게 보여주는 SPA 사이트입니다. \n 내 성격유형에 맞는 책을 골라주며, 책 미리보기 기능, 베스트 셀러와 신작 정보 제공, 검색 기능까지 있을 건 다 있는 도서 사이트입니다.",
    imgList: [
      'https://user-images.githubusercontent.com/37135523/270398312-ab40bfda-fcf5-4dfe-9920-7e1f0e144fea.gif',
      'https://user-images.githubusercontent.com/37135523/270401407-e97bb335-d77a-409d-aa72-35955cfc37b9.gif',
      'https://user-images.githubusercontent.com/37135523/270403280-50ef5119-b5bf-4530-9173-50ec1b097872.gif',
      'https://user-images.githubusercontent.com/37135523/270541791-0f60a28a-06d2-496c-9b9f-d9b71a877624.gif',
      'https://user-images.githubusercontent.com/37135523/270535546-eff8b490-605a-4608-903b-c9639d97c756.gif',
      'https://user-images.githubusercontent.com/37135523/270539376-f1897617-845d-4354-95ef-d835e48de07f.gif',
      'https://user-images.githubusercontent.com/37135523/270534201-3857757e-1ea9-4ae5-92c1-18fd903e3692.gif',
      'https://user-images.githubusercontent.com/37135523/270533552-e9b73505-9e56-4b43-a854-d301b34841ec.gif',
    ],
  },
  {
    name: 'Movie Booth',
    color: '#af3435',
    img: [
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271179658-09ca930a-8c27-4da0-8cc6-85ac6a146b13.png',
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271179759-0e67efb1-1f01-43f4-9366-f3f4740aeb3d.png',
    ],
    git: 'https://github.com/eee0930/netflix_clone',
    url: 'https://eee0930.github.io/netflix_clone',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'ReactHookForm',
      'StyledComponents',
      'FramerMotion',
    ],
    des: '최신 영화와 tv 프로그램, 인물 정보들을 제공하며 검색기능이 있는 SPA 사이트입니다. 상세정보에선 영화나 tv 프로 방영 정보와, 등장인물 정보, 관련 프로그램, 트레일러 영상까지 볼 수 있습니다. ',
    imgList: [
      'https://user-images.githubusercontent.com/37135523/249112063-914f9562-b038-4b06-a5ad-4596fc825a2e.gif',
      'https://user-images.githubusercontent.com/37135523/249112232-0b5e0e36-6a0a-4cd9-9981-4f830ed6ce92.gif',
      'https://user-images.githubusercontent.com/37135523/249112337-28e99ab8-0ed1-4573-8844-3441f565f9b4.gif',
      'https://user-images.githubusercontent.com/37135523/249112462-060ddc04-c14a-4b83-9d04-80fb0d986330.gif',
    ],
  },
  {
    name: 'Crypto Tracker',
    color: '#2F3640',
    img: [
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271179853-1b168f6f-ad29-4e46-ab15-13921f9f635c.png',
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271179901-250761c9-cd05-4e91-a9a8-9fa00a3beb48.png',
    ],
    git: 'https://github.com/eee0930/crypto_tracker',
    url: 'https://eee0930.github.io/crypto_tracker/',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'StyledComponents',
    ],
    des: '다양한 종류의 코인과 코인의 현재 시세를 차트로 제공하는 사이트입니다. ',
  },
  {
    name: 'Org Issue App',
    color: '#2A9885',
    img: [
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271179946-a65aecc1-5f3d-4c62-8e1c-3be04467b9ea.png',
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271179997-8efb9b6a-ff8d-403e-aa72-666d9cfd419f.png',
    ],
    git: 'https://github.com/eee0930/org_issue_app',
    url: 'https://eee0930.github.io/org_issue_app/',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'StyledComponents',
    ],
    des: '관심있는 라이브러리의 github issue들을 comment 수 순서대로 한번에 볼 수 있는 앱입니다.',
  },
  {
    name: 'MeowMeow Album',
    color: '#63C4F0',
    img: [
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271180073-7c2a685f-e334-4ad1-b6c1-e8cfd27d2a48.png',
      'https://github-production-user-asset-6210df.s3.amazonaws.com/37135523/271180116-147d3335-7e5f-4fdb-a1ab-ab830a17b365.png',
    ],
    git: 'https://github.com/eee0930/meowmeow_album',
    url: 'https://eee0930.github.io/meowmeow_album/',
    skill: ['JavaScript', 'HTML', 'CSS'],
    des: '폴더별로 정리한 고양이 앨범을 볼 수 있는 앱입니다. Vanilla JS Class Component 방식으로 개발하였습니다.',
  },
];

export const COLORS = ['rgb(216, 220, 241)', 'rgb(37, 39, 57)'];
