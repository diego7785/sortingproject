try:
	from main import app,initialization
	import unittest
	import json

except Exception as e:
	print("Some module error")

class FlaskTest(unittest.TestCase):

	def test_idex(self):

		tester = app.test_client(self)
		response = tester.get("/")
		statuscode = response.status_code
		self.assertEqual(statuscode,200)

	def test_routeMerge(self):

		tester = app.test_client(self)
		response = tester.post("/algorithms/merge",
			data=json.dumps(dict(array='2,10,11,23')), 
			content_type='application/json')
		statuscode = response.status_code
		self.assertEqual(statuscode,200)

	def test_routeMergeError(self):

		tester = app.test_client(self)
		response = tester.post("/algorithms/merge",
			data=json.dumps(dict(array='[2,10,11,23]')), 
			content_type='application/json')
		statuscode = response.status_code
		self.assertEqual(statuscode,200)

	def test_routeQuick(self):

		tester = app.test_client(self)
		response = tester.post("/algorithms/quick",
			data=json.dumps(dict(array='11,100,23,43,2')), 
			content_type='application/json')
		statuscode = response.status_code
		self.assertEqual(statuscode,200)

	def test_routeQuickError(self):

		tester = app.test_client(self)
		response = tester.post("/algorithms/quick",
			data=json.dumps(dict(array='[11,100,23,43,,2]')), 
			content_type='application/json')
		statuscode = response.status_code
		self.assertEqual(statuscode,200)

	def test_routeBubble(self):

		tester = app.test_client(self)
		response = tester.post("/algorithms/quick",
			data=json.dumps(dict(array='0,2,1,5,2,1,2,4')), 
			content_type='application/json')
		statuscode = response.status_code
		self.assertEqual(statuscode,200)

	def test_routeBubbleError(self):

		tester = app.test_client(self)
		response = tester.post("/algorithms/quick",
			data=json.dumps(dict(array='')), 
			content_type='application/json')
		statuscode = response.status_code
		self.assertEqual(statuscode,200)

if __name__ == "__main__":
	unittest.main()