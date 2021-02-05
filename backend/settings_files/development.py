import os

SECRET_KEY = os.environ.get('ECOMMERCE_APP_SECRET_KEY')
DEBUG = True

ALLOWED_HOSTS = [
    '127.0.0.1',
    'awesome-todoapp.herokuapp.com',
    'www.awesome-todoapp.herokuapp.com'
]

# Corsheaders
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOWED_ORIGINS = [
    'http://127.0.0.1:8000',
    'http://localhost:3000',
    'https://awesome-todoapp.herokuapp.com',
]

# Files definition
ROOT_URLCONF = 'backend.urls'
WSGI_APPLICATION = 'backend.wsgi.application'

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

