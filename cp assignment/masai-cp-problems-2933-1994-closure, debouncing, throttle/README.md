# JS-Debounce-Throttle-API
### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm install --engine-strict
```
## Start only Frontend server
```
npm run start
```
# Important files
```
├── index.html
├── scripts
│   ├── index.js
└── styles
    └── index.css
```
## Maximum Marks - 10

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces; for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics
```
✅ able to submit the app - 1 mark ( minimum score )

### Test cases for index page

✅ default should work correctly- 1 mark
✅ debouncing should work correctly with the delay - 1 mark
✅ throttling should work correctly with the delay - 1 mark
✅ check default fetch request - 2 marks
✅ check debounce fetch request - 2 marks
✅ check throttle fetch request - 2 marks
```
### You haven't been taught Cypress to run the test cases locally; you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code, please read the problem statement very carefully.
- <span style=" color: red">Don't change the already given IDs or classes.</span>
- If you don't follow these rules, you might not get any marks even if you do everything correctly.

## Problem statements

<h4 style="color:#215dc8">
 debouncing and throttle should work correctly with the delay
</h4>

- input tag with `input#query` is already created.
- span tags for default, debounce, and throttle are also provided in the template.
- your task is to apply to debounce and throttle to the input tag, and its value must be displed as per below

- use a delay of `500 ms` in debounce and of `500 ms` in the throttle.

- **default value** of delay in debounce and throttle must be `500 ms`.

<figure>
<img src="https://i.imgur.com/mVU0cyt.gif"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>debounce-throttle</b></figcaption>
</figure>

### <h1 style="color:#215dc8">debounce-throttle API fetch functionality</h1>

- URL for fetch users data - `https://jsonplaceholder.typicode.com/users`
   - param - `name_like={search input query}`
- The `div#container` has three tables for 
  1. default 
  2. debounce 
  3. throttle

1. default table 
 - table having `tbody#DefaulttableRow` is created 
 - when we type the query in input catch the query make a fetch request and show users `id`, `name`, and `username` 
 - use fetch for the API request 
 - when using backspace we removed the query and the input box got empty the tbody also got empty 

2. debounce table 
 - table having `tbody#DebouncetableRow` is created 
 - when we type the query in input catch the query, use debounce of 500ms, and then make a fetch request and show users `id`, `name`, and `username` 
 - use fetch for the API request 
 - when using backspace we removed the query and the input box got empty the tbody also got empty 

3. throttle table 
 - table having `tbody#ThrotteltableRow` is created 
 - when we type the query in input catch the query, use throttle of 500ms, and then make a fetch request and show users `id`, `name`, and `username` 
 - use fetch for the API request 
 - when using backspace we removed the query and the input box got empty the tbody also got empty 


### Problem is tested on CP 
<figure>
<img src="https://i.imgur.com/wSrtDUF.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Cp test logs</b></figcaption>
</figure>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
