# Football Finder
> Find where the football is, and join the discussion!

## Installation
$ `npm install`

## Getting Started
1. Update the API `apiKey` entry in `config.json`. This requires a (demo) account on [FastestLiveScores](http://fastestlivescores.com/live-scores-api-feed/).
2. Update the Twitter consumer key and secret in `twitter.config.json`. This requires you to have an [app on Twitter](https://dev.twitter.com).
3. For production builds, ensure to have the Twitter proxy (see [Usage](#Usage)) configured properly in `config.json`.

## Usage
$ `npm start` - Runs the app in development mode.
$ `npm test` - Runs the test watcher in an interactive mode.
$ `npm run build` - Builds the app for production to the `build` folder.
$ `npm run proxy` - Runs the Twitter proxy.

## Background


## Changelog
See the [CHANGELOG.md](./CHANGELOG.md) for a list of changes.

## License
    The MIT License (MIT)

    Copyright (c) 2016 Mark van Seventer

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.