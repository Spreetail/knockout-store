# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 3.0.1 - 2017-12-06
### Fixed
 - Include TypeScript declaration file with package contents.

## 3.0.0 - 2017-12-06
### Added
 - TypeScript declaration file.

### Changed
 - `connect` throws an error if `mapStateToParams` or `mergeParams` are not `null` or a function.
 - If `mapStateToParams` or `mergeParams` are `null`, the respective default will be used.
 - Calling the result of `connect()` without a function (view model) will throw an `Error` instead of a `TypeError`.

## 2.0.0 - 2017-09-20
### Removed
 - CommonJS export (covered by UMD export)

### Changed
 - pkg.module now exports transpiled code

## 1.0.2 - 2017-05-05
### Fixed
- README.md links

## 1.0.1 - 2017-05-05
### Changed
- Update README.md with a link to the wiki

## 1.0.0 - 2017-05-03
### Added
- Initial files
- API: `connect`, `getState`, and `setState`
