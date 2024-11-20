# Readme

## Phase 1: Setup

1. Install Express
2. Create a server file
3. import express and the path modules
4. Serve a simple message and set up a listener
5. clean up and optimize (remove unnecessary comments, add variables for ports etc)

## Phase 2: Serve Files

1. serve the index.html file with `res.sendFile()`
2. implement `path.join()` to set the absolute path with `__dirname`. this ensures the paths are correct
3. serve the css files with `app.use()` [docs](https://expressjs.com/en/starter/static-files.html)
4. verify that it works
5. optimize: create a public/ folder for static files and refactor

## Phase 3: Error handling

1. Add error handling for 500 error
2. Add error handling for 404 error (you can send a file)
3. Use try/catch in the route code to pass any errors up to the error middleware
