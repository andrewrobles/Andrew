# FyrePage

The project consists of both the `frontend` React app and the `backend` Django REST API 

---

## The Backend

### Setup

1. Navigate to backend
```bash
cd backend
```

2. Create a virtual environment
```bash
python3 -m venv venv
```

3. Activate virtual environment
```bash
source venv/bin/activate
```

4. Install dependencies
```bash
pip3 install -r requirements.txt
```

5. Run migrations
```bash
python manage.py migrate
```

6. Create admin user
```bash
python manage.py createsuperuser
```

### Running tests and starting the server

1. Navigate to backend if you have not already done so
```bash
cd backend
```

2. Activate virtual environment if you have not already done so
```bash
source venv/bin/activate
```

3. Run tests 
```bash
python manage.py test
```

4. Start the server
```bash
python manage.py runserver
```

5. Open `http://localhost:8000/` in the browser