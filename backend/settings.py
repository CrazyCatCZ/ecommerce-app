import os
import dj_database_url 
from pathlib import Path

from backend.settings_files.basic import *
from backend.settings_files.development import *
from backend.settings_files.graphene import *
from backend.settings_files.production_variables import *

BASE_DIR = Path(__file__).resolve().parent.parent
DEBUG = os.environ.get('ECOMMERCE_APP_DEBUG')

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

production_db  =  dj_database_url.config(conn_max_age=600, ssl_require=True)
DATABASES['default'].update(production_db)

'''
Connect frontend on backend
'''

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR / 'build'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
        'APP_DIRS': True,
    },
]

STATIC_ROOT = os.path.join(BASE_DIR / 'staticfiles')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR / 'build' / 'static'),
]