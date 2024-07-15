import { registerApplication, start } from 'single-spa';

registerApplication<object>({
  name: '@test-monorepo/mfe1',
  app: () => System.import('@test-monorepo/mfe1'),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication<object>({
  name: '@test-monorepo/mfe2-lib',
  app: () => System.import('@test-monorepo/mfe2-lib'),
  activeWhen: (location) => location.pathname === '/mfe2-lib',
});

start();
