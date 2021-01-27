import os

SECRET_KEY = os.environ.get('ECOMMERCE_APP_SECRET_KEY')
DEBUG = True

ALLOWED_HOSTS = []

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
