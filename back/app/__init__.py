from flask import Flask
from .algorithms import algorithms
from flask_cors import CORS

def create_app():
	app = Flask(__name__)

	CORS(app)
	# Blueprints register
	app.register_blueprint(algorithms)


	return {'app': app}