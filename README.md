# Discord Clone

## 개발 환경 실행

이 프로젝트는 Docker만 있어도 개발 서버를 실행할 수 있으며,  
pnpm이 있는 환경에서는 pnpm 스크립트로도 실행할 수 있습니다.  
두 방법 모두 3000 포트에서 접근합니다.

### 1) Docker만 있는 환경 (권장, 호스트에 pnpm 불필요)

```bash
sh ./scripts/docker-dev.sh
```

### 2) pnpm 스크립트로 실행 (호스트에 pnpm 설치 필요)

```bash
pnpm dev:docker
```
