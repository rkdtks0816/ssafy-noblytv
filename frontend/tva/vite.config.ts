// TVA 설정
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// ESM 환경에서 __dirname을 구현합니다.
// import.meta.url을 사용하여 현재 파일의 URL을 가져오고, 이를 파일 경로로 변환합니다.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3010, // 개발 서버의 포트를 설정
    host: '0.0.0.0', // 호스트를 설정하여 모든 네트워크 인터페이스에서 접근 가능
  },
  plugins: [react()],
  resolve: {
    // "@"를 사용하여 "src" 디렉토리를 참조할 수 있도록 변경.
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.mp4'],
});
