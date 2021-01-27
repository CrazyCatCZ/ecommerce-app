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