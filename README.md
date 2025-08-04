# 1fe Sample Widget Base Config

A shared configuration package providing base settings and environment configurations for 1fe widgets. This package standardizes widget development configurations across the 1fe ecosystem.

## What's in this repository

This configuration package provides:

- **Environment configurations** for integration and production
- **Dynamic config URLs** for live configuration management
- **Library version management** for consistent dependencies
- **Widget version configurations** for deployment coordination
- **Base CLI configurations** for 1fe widget builds
- **Shared TypeScript settings** for widget development

## Prerequisites

- **Node.js** `>= 22`
- **Yarn** (package manager)

## Getting Started

### Installation

```bash
# Install as a dependency in your widget project
yarn add @1fe/sample-widget-base-config

# Or install for development
yarn install
```

### Usage in Widget Projects

```typescript
import { getBaseConfig } from '@1fe/sample-widget-base-config';

const configuration: OneFeConfiguration = {
  baseConfig: getBaseConfig,
};
```

## Configuration Structure

### Environment URLs

The package provides configuration URLs for:

```typescript
const dynamicConfigUrls = {
  integration: 'https://1fe-a.akamaihd.net/integration/configs/live.json',
  production: 'https://1fe-a.akamaihd.net/production/configs/live.json',
};

const libraryVersionsUrl = {
  integration:
    'https://1fe-a.akamaihd.net/integration/configs/lib-versions.json',
  production: 'https://1fe-a.akamaihd.net/production/configs/lib-versions.json',
};
```

### Widget Versions

Manages widget version configurations for deployment coordination:

```typescript
const widgetVersionsUrl = {
  integration:
    'https://1fe-a.akamaihd.net/integration/configs/widget-versions.json',
  production:
    'https://1fe-a.akamaihd.net/production/configs/widget-versions.json',
};
```

## Development Commands

```bash
# Build TypeScript configuration
yarn build

# Clean and rebuild
yarn build --clean
```

## Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes to `src/index.ts`
4. Build and test (`yarn build`)
5. Commit your changes (`git commit -m 'Add feature'`)
6. Push to your branch (`git push origin feature/your-feature`)
7. Open a Pull Request

## Troubleshooting

### Common Issues

- **Build failures**: Ensure TypeScript is properly configured
- **Import errors**: Check that the package is properly installed
- **Configuration errors**: Verify environment URLs are accessible

## Getting Help

- **[1fe Documentation](https://1fe.com/getting-started/installation/)** - Complete platform documentation
- **[GitHub Issues](https://github.com/docusign/1fe-sample-widget-base-config/issues)** - Report bugs or request features
- **[GitHub Discussions](https://github.com/docusign/1fe-sample-widget-base-config/discussions)** - Ask questions and share ideas

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
