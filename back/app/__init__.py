from flask import Flask
from .algorithms import algorithms
def create_app():
	app = Flask(__name__)

	# Blueprints register
	app.register_blueprint(algorithms)


	return {'app': app}