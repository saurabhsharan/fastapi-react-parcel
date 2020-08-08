from fastapi import FastAPI, Request

app = FastAPI()

@app.get('/api/hello')
async def root(request: Request):
  return {'message': "Hello world!"}
