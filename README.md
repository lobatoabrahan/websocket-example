# WebSocket Example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Server

The server is implemented with FastAPI. First, install the dependencies:

```
pip install fastapi uvicorn
```

And then, run it:

```
uvicorn run:app 
```

A server in the `localhost:8000` must be created.

## Client

The client is implemented usign React and Recharts. 

Go to the frontend directory:

```
cd vite-project
```

Install the dependencies:

```
npm install
```

And run it:

``` 
npm run dev
```

Open the browser in `localhost:3000` and you must see a chart being updated every second.
