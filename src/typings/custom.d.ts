declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PROD_BASE_URL: string;
  readonly VITE_DEV_BASE_URL: string;
  readonly MODE: string;
  readonly VITE_KAKAO_REDIRECT_URI_DEV: string;
  readonly VITE_KAKAO_REDIRECT_URI_PROD: string;
  readonly VITE_KAKAO_CLIENT_ID: string;

  // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
