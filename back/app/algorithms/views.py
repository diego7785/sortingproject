from flask import jsonify,request
from . import algorithms
from . import mergesort as mergeSort
from . import quicksort as quickSort
from . import bubblesort as bubbleSort
from . import selectionsort as selectionSort

def parseInt(myString):
	return int(myString)

@algorithms.route('/', methods=['GET'])
def main():
	return jsonify({'response': 'algorithms index'})

@algorithms.route('/merge', methods=['POST'])
def merge():
	array = request.json.get("array")
	try:
		myarr = list(map(parseInt,array.replace(' ','').split(',')))
	except: return jsonify({'response': 'error'})
	print(myarr)
	return jsonify({'given array' : array,
		'answer': mergeSort.sort(myarr),
		'sort': 'Merge Sort'})

@algorithms.route('/quick', methods=['POST'])
def quick():
	array = request.json.get("array")
	try:
		myarr = list(map(parseInt,array.replace(' ','').split(',')))
	except: return jsonify({'response': 'error'})
	print(myarr)
	return jsonify({'given array' : array,
		'answer': quickSort.sort(myarr),
		'sort': 'Quick Sort'})

@algorithms.route('/bubble', methods=['POST'])
def bubble():
	array = request.json.get("array")
	try:
		myarr = list(map(parseInt,array.replace(' ','').split(',')))
	except: return jsonify({'response': 'error'})
	print(myarr)
	return jsonify({'given array' : array,
		'answer': bubbleSort.sort(myarr),
		'sort': 'Bubble Sort'})

@algorithms.route('/selection', methods=['POST'])
def selection():
	array = request.json.get("array")
	try:
		myarr = list(map(parseInt,array.replace(' ','').split(',')))
	except: return jsonify({'response': 'error'})
	print(myarr)
	return jsonify({'given array' : array,
		'answer': selectionSort.sort(myarr),
		'sort': 'Selection Sort'})