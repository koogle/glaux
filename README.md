# glaux
An OSS deep research server that can run locally and works with email

hello world

## Docker usage

### Backend image

Build the backend image:

```bash
docker build -f Dockerfile.backend -t glaux-backend .
```

Run the backend:

```bash
docker run -p 3000:3000 glaux-backend
```

### Frontend image

Build the frontend image:

```bash
docker build -f Dockerfile.frontend -t glaux-frontend .
```

Run the frontend:

```bash
docker run -p 8080:80 glaux-frontend
```

Visit the frontend at `http://localhost:8080`.
