import os
from pathlib import Path
from backend.settings_files.basic import *
from backend.settings_files.development import *
from backend.settings_files.graphene import *

BASE_DIR = Path(__file__).resolve().parent.parent

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

'''
Connect frontend on backend
'''

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR / 'frontend' / 'build'),
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

STATICFILES_DIRS = [
    os.path.join(BASE_DIR / 'frontend' / 'build' / 'static'),
]