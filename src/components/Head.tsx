import { Helmet } from 'react-helmet-async';

const DEFAULT_DES = '송화연 프론트엔드 포트폴리오';
function Head() {
  return (
    <>
      <Helmet>
        <title>HwaYeon</title>
        <meta name="description" content={DEFAULT_DES} />
        <meta property="og:title" content="HwaYeon" />
        <meta property="og:site_name" content="HwaYeon" />
        <meta property="og:description" content={DEFAULT_DES} />
      </Helmet>
    </>
  );
}

export default Head;
