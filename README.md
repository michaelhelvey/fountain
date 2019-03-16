# Fountain

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

This project, currently in development. aims to provide first-class support for writing and rendering screenplays according to the [Fountain](https://fountain.io/) spec. The descriptions of the packages below specify their aims and goals once completed.

## [@fountain/renderer](https://github.com/michaelhelvey/fountain-renderer/tree/master/packages/renderer)

This foundational package parses strings of text into a JSON AST, which is then used to provide support for rendering Fountain spec-compliant files into PDFs, HTML, and more.

## [@fountain/cli](https://github.com/michaelhelvey/fountain-renderer/tree/master/packages/cli)

This packages utilizes the basic functionality of `@fountain/renderer` to render fountain packages into various formats from the command line.

Example: `fountain -i test.fountain -o test.pdf --format "pdf"`

## [@fountain/editor](https://github.com/michaelhelvey/fountain-renderer/tree/master/packages/editor)

A web application built with ReactJS, capable of being deployed to the web, or embedded in an Electron app for distribution on desktop platforms, with the goal of providing a clean editing experience for opening, editing, and exporting Fountain files.

### Authors

- Michael Helvey
- Cooper White

### License

MIT
