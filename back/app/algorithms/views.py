from flask import jsonify
from . import algorithms
from . import mergesort as mergeSort

def parseInt(myString):
	return int(myString)

@algorithms.route('/', methods=['GET'])
def main():
	return jsonify({'response': 'algorithms index'})

@algorithms.route('/merge/<array>', methods=['GET'])
def merge(array):
	try:
		myarr = list(map(parseInt,array.replace(' ','').split(',')))
	except: return jsonify({'response': 'error'})
	print(myarr)
	return jsonify({'given array' : array,
		'answer': mergeSort.sort(myarr),
		'sort': 'Merge Sort'})

@algorithms.route('/quick', methods=['GET'])
def quick():
	return jsonify({'answer': [1,2,3,4,5],
		'sort': 'Quick Sort'})

@algorithms.route('/bubble', methods=['GET'])
def bubble():
	return jsonify({'answer': [1,2,3,4,5],
		'sort': 'bubble'})

@algorithms.route('/selection', methods=['GET'])
def selection():
	return jsonify({'answer': [1,2,3,4,5],
		'sort': 'selection'})