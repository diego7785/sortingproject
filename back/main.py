from flask import jsonify
from app import create_app

initialization = create_app()
app = initialization['app']


@app.route('/')
def index():
	return jsonify({'main': True})
	

if __name__ == '__main__':
	app.run(debug = True)