from flask import jsonify
from . import algorithms

@algorithms.route('/', methods=['GET'])
def main():
	return jsonify({'db': 'games'})

@algorithms.route('/merge', methods=['GET'])
def merge():
	return jsonify({'answer': [1,2,3,4,5],
		'sort': 'merge'})

@algorithms.route('/quick', methods=['GET'])
def quick():
	return jsonify({'answer': [1,2,3,4,5],
		'sort': 'quick'})

@algorithms.route('/bubble', methods=['GET'])
def bubble():
	return jsonify({'answer': [1,2,3,4,5],
		'sort': 'bubble'})

@algorithms.route('/selection', methods=['GET'])
def selection():
	return jsonify({'answer': [1,2,3,4,5],
		'sort': 'selection'})