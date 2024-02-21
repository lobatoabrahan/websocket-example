from fastapi import FastAPI, WebSocket
import random
import asyncio

# Create application
app = FastAPI(title='WebSocket Example')

# Keep track of all active websockets
active_connections = []

# Initialize the counter
count = 0

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    global count
    await websocket.accept()
    # Add the websocket connection to the list of active connections
    active_connections.append(websocket)
    try:
        while True:
            # Wait for any message from the client
            data = await websocket.receive_text()
            if data == "increment":
                count += 1
                for connection in active_connections:
                    await connection.send_text(str(count))
    except Exception as e:
        # Remove the websocket connection from the list of active connections
        active_connections.remove(websocket)
        print('error:', e)