#  <a name="top"></a> Content Build System
 A Gulp powered task-runner enabling local development using pug, sass, and es6 files that compile in real-time to optimized and browser friendly css with browsersync!

<br>

## Contents
* [Code Languages](#code-languages)
* [Installation](#installation)
<!-- * [Opening A Project](#open-project)
* [UNCSS Optimization](#uncss)
* [PUG Mixins](#pug-mixins)
* [Sass Framework](#sass-framework)
* [Folder Structure](#folder-structure)
* [Archived Projects](#archived-projects) -->

<br>

---

<br>

### <a name="code-languages"></a> Primer
This section contains links to additional documentation for technologies used in this build system:

##### PUG
PUG is a template engine offering a wealth of features including:
* shorthand html syntax.
* interpolation through variables, includes, & layouts.
* conditional statements2
* mixins
* and more...

[See Pug Documentation](https://pugjs.org).

##### SASS
SASS offers two syntax formats, identifiable by the file extension used (`.scss` or `.sass`). This framework uses the `.scss` format.

[See Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html).

<br>
<br>

*[Back to Top](#top)*

<br>

---

<br>

## <a name="installation"></a> Installation (First-Time Only)

<br>

### Prerequisites

##### 1. Insure you have [Node.js](http://nodejs.org/) installed
Open terminal, type `node -v`, and press enter. If a version number is given, you have node.js already installed and may proceed to next step. If you see an error message, proceed to [http://nodejs.org/](http://nodejs.org/), download and install node.js on your machine.

##### 2. Insure you have Xcode installed
Download [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) directly from the app store.

##### 3. Insure you have [Git](https://github.com/) installed
Open terminal, type `git`, and press enter. If a list of common Git commands is given, you have Git already installed and may proceed to next step. If you see an error message, proceed to [Git install guide on Github](https://help.github.com/articles/set-up-git/).

##### 4. Clone the `Menswearhouse/tb-digital-dev` repository locally on your machine
See [Github Help Documentation](https://help.github.com/articles/cloning-a-repository/) for help on this step.


##### 7. Install content-build-system dependencies with npm
Using terminal and the `cd` command to navigate to root directory of content-build-system. For example:
```
cd path/on/your/computer/content-build-system/
```
Once inside the content-build-system folder, run `npm install` command to install all packages listed in the package.json file contained in this directory.

<br>

### Troubleshooting

##### Access permissions
If you encounter access permissions, in terminal try `sudo npm install`.
##### Missing packages
If you encounter errors related to specific packages not installing, investigate the error messages to determine which packages still need to be installed and attempt to install them individually in terminal using `npm install name-of-package --save-dev`.
##### Node Sass Doesn't Support My Environment
If you receive the error `Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (57)`: rebuild sass with `npm rebuild node-sass`

<br>
<br>

*[Back to Top](#top)*

<br>

---


## <a name="installation"></a> Workflow
Coming Soon! This section TBD as this project is a work in progress and not complete just yet.
