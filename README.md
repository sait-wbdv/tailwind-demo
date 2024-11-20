# Readme

## Phase 1: Setup

1. Install Express
2. Create a server file
3. import express and the path modules
4. Serve a simple message and set up a listener
5. clean up and optimize

## Phase 2: Serve Files

1. serve the index.html file with `res.sendFile()`
2. implement `path.join()` to set the absolute path with `__dirname`
3. serve the css files with `app.use()` [docs](https://expressjs.com/en/starter/static-files.html)
4. verify that it works

## Phase 3: Error handling and optimization

1. Add error handling to your routes

## ES Module Specifics

- switching to es modules will make `__dirname` not work. Review [this post by Flaviocopes](https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/) on the fix used in this code.
