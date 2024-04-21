interface ImportMetaEnv {
    SSR: any;
    readonly VITE_APP_VERSION: string;
    // 添加你的环境变量
  }
   
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }