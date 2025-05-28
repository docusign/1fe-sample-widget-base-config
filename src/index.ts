import { OneFeDynamicConfig, OneFeBaseConfigurationObject, OneFeEnvironmentObject } from '@1fe/cli';

import ky from 'ky';

const environments = ['integration', 'production'] as const;

export type Environments = (typeof environments)[number];

const dynamicConfigUrls: Record<Environments, string> = {
  integration:
    'https://1fe-a.akamaihd.net/integration/configs/live.json',
  production:
    'https://1fe-a.akamaihd.net/production/configs/live.json',
};

const libraryVersionsUrl: Record<Environments, string> = {
  integration:
    'https://1fe-a.akamaihd.net/integration/configs/lib-versions.json',
  production:
    'https://1fe-a.akamaihd.net/production/configs/lib-versions.json',
};

function getDynamicConfig(env: Environments) {
  return ky.get(dynamicConfigUrls[env]).json<OneFeDynamicConfig>();
}

function getLibraryVersions(env: Environments) {
  return ky.get(libraryVersionsUrl[env]).json<OneFeEnvironmentObject['libraryVersions']>();
}

export async function getBaseConfig(): Promise<OneFeBaseConfigurationObject> {
  const baseConfig: OneFeBaseConfigurationObject = {
    environments: {},
    bathtubUrl: 'http://localhost:3001/bathtub',
  };

  for (const env of environments) {
    baseConfig.environments[env] = {
      dynamicConfig: await getDynamicConfig(env),
      libraryVersions: await getLibraryVersions(env),
      shellBaseUrl: 'http://localhost:3001',
      serverBaseUrl: 'http://localhost:3001',
    };
  }

  return baseConfig;
}
