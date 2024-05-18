-   Environment versions

Node: v20.13.1
TypeScript 5.4.5

<!-- Got from https://www.youtube.com/watch?v=d56mG7DezGs -->

Commands

Having NodeJS, install typescript globally

-   `npm i -g typescript`

Get TS version: -`tsc -v`

Create TS config:

-   `tsc --init`

Compile all .ts files within project

-   `tsc`

<!-- Debugging -->

To enable debugging for TS in VSCode:

1. set config `sourceMap` to true
2. implement breakpoints
3. Click the "Run and Debug" panel
4. Click on "create launch.json file"
5. On the dropdown, click "NodeJS"
6. `launch.json` should be created with the debug specs
7. In `launch.json`, add `"preLaunchTask": "tsc: build - tsconfig.json`\*

-   This tells VSCode to use TS compiler to build the app using the specified config

8. Debug now using "Launch Program" (or F5)
9. Use `variables` and `watch` section, as appropriate
