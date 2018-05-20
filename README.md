# ES6 Node package boilerplate

[![Build Status](https://travis-ci.org/YoungLionsGroup/node-pkg-boilerplate.svg?branch=master)](https://travis-ci.org/YoungLionsGroup/node-pkg-boilerplate)
[![Inline docs](https://inch-ci.org/github/YoungLionsGroup/node-pkg-boilerplate.svg?branch=master)](https://inch-ci.org/github/YoungLionsGroup/node-pkg-boilerplate.svg?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/45289ebac56581f15998/maintainability)](https://codeclimate.com/github/YoungLionsGroup/node-pkg-boilerplate/maintainability)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/YoungLionsGroup/node-pkg-boilerplate/issues)
[![HitCount](http://hits.dwyl.io/YoungLionsGroup/node-pkg-boilerplate.svg)](http://hits.dwyl.io/YoungLionsGroup/node-pkg-boilerplate)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

<p align="center">
    <a href="https://younglions.pl/yl-qualityassurance/" target="_blank">
        <img src="https://younglions.pl/wp-content/uploads/2018/05/qa_active.png" width="40" alt="Young Lions Quality Assuranc - Active" />
    </a>
    <span style="margin-left: 15px;">YoungLions QA - <strong style="color: #add33b">Active</strong><br/></span>
    <a href="https://younglions.pl/yl-qualityassurance/" target="_blank" target="_blank">Read more</a>
</p>  

> This is a simple updated boilerplate for node packages written in ES6 - 
based on an article *[How to build and publish ES6 npm modules today with babel](https://github.com/bookercodes/articles/blob/master/how-to-build-and-publish-es6-npm-modules-today-with-babel.md)* written by [Alex Booker](https://github.com/bookercodes) (Feb 2, 2016).

<p align="center">
    <img src="https://younglions.pl/wp-content/uploads/2018/05/npm-boilerplate.png" alt="Package structure" width="100" />
</p>

**Main target of this package**: easy to use and no dependencies

The main changes:
- **extended the main sample** - instead the exported function a class is exported 
(which consists only of one sample - the same funtions as found in the above article)
- **updated babel presets** (to *babel-preset-env*)
- **updated devDependencies versions**
- **added sample tests** (using *chai* + *mocha*)
- **added linting** (esLint - google)
- **added additional files usually found in packages** - *.travis.yml*, *CONTRIBUTING.md*, *LICENSE*


## Getting Started

```Bash
git clone https://github.com/YoungLionsGroup/node-pkg-boilerplate.git
```


### Installing

```Bash
cd node-pkg-boilerplate
npm install
```

Eventually, you would want to change the package name, root directory and source classes & functions to your own 
names.

## Running the tests

1. `npm run build` - a */dist* folder will be created
2. `npm test`

## Deployment

If your finished with creating you package, you can publish it on NPM - [Read more](https://docs.npmjs.com/getting-started/publishing-npm-packages).

## Contributing

Please read [CONTRIBUTING.md](https://github.com/YoungLionsGroup/node-pkg-boilerplate/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

On this project, no versioning is being conducted. To learn more about versioning please visit [SemVer](http://semver.org/). 

## Authors

* **[Jan Pedryc](https://younglions.pl/jan-pedryc/)** - [Young Lions Group](https://younglions.pl)

See also the list of [contributors](https://github.com/YoungLionsGroup/node-pkg-boilerplate/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* *[How to build and publish ES6 npm modules today with babel](https://github.com/bookercodes/articles/blob/master/how-to-build-and-publish-es6-npm-modules-today-with-babel.md)* - [Alex Booker](https://github.com/bookercodes) (Feb 2, 2016)
* *[Misunderstanding ES6 Modules, Upgrading Babel, Tears, and a Solution](https://blog.kentcdodds.com/misunderstanding-es6-modules-upgrading-babel-tears-and-a-solution-ad2d5ab93ce0)* - [Kent C. Dodds](https://blog.kentcdodds.com/@kentcdodds)
* Read more about the *[babel-preset-env](https://babeljs.io/docs/plugins/preset-env)*
* Read more about the *[export default](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_the_default_export)*
* Is **babel** still needed? - *[stackoverflow question](https://stackoverflow.com/a/48486739/6696949)*
* [ECMAScript compatibility tables](http://kangax.github.io/compat-table/es6/)
