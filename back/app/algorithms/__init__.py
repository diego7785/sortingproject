from flask import Blueprint

algorithms = Blueprint('algorithms', __name__, url_prefix="/algorithms")

from . import views