# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

- None

## [4.0.0] - 2020-05-02

### Changed

- **BREAKING**: Constrain Knockout peer dependency versions to ^3.5.0
- Remove @types/knockout dependency
- Update TypeScript declarations to use new Knockout types

## [3.0.2] - 2019-02-08

### Fixed

- Fix package vulnerabilities that GitHub alerted us to

## [3.0.1] - 2017-12-06

### Fixed

- Include TypeScript declaration file with package contents.

## [3.0.0] - 2017-12-06

### Added

- TypeScript declaration file.

### Changed

- `connect` throws an error if `mapStateToParams` or `mergeParams` are not `null` or a function.
- If `mapStateToParams` or `mergeParams` are `null`, the respective default will be used.
- Calling the result of `connect()` without a function (view model) will throw an `Error` instead of a `TypeError`.

## [2.0.0] - 2017-09-20

### Removed

- CommonJS export (covered by UMD export)

### Changed

- pkg.module now exports transpiled code

## [1.0.2] - 2017-05-05

### Fixed

- README.md links

## [1.0.1] - 2017-05-05

### Changed

- Update README.md with a link to the wiki

## [1.0.0] - 2017-05-03

### Added

- Initial files
- API: `connect`, `getState`, and `setState`

[unreleased]: https://github.com/Spreetail/knockout-store/compare/v4.0.0...HEAD
[4.0.0]: https://github.com/Spreetail/knockout-store/compare/v3.0.2...v4.0.0
[3.0.2]: https://github.com/Spreetail/knockout-store/compare/v3.0.1...v3.0.2
[3.0.1]: https://github.com/Spreetail/knockout-store/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/Spreetail/knockout-store/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/Spreetail/knockout-store/compare/v1.0.2...v2.0.0
[1.0.2]: https://github.com/Spreetail/knockout-store/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/Spreetail/knockout-store/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Spreetail/knockout-store/releases/tag/v1.0.0
