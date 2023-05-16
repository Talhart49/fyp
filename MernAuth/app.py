from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import pandas as pd
import ast
import nltk
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import csv
from pymongo import MongoClient


app = Flask(__name__)
CORS(app)  

client = MongoClient("mongodb://localhost:27017")
database = client["test"]
collection = database["usertemplates"]

documents = collection.find()
csv_file_path = "output.csv"

with open(csv_file_path, 'w', newline="") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["id", "authorName", "authorEmail", "templateName", "templateDescription", 'templateStatus', 'Count', 'image', 'dateCreated'])

    for document in documents:
        id = document["_id"]
        authorName = document["authorName"]
        authorEmail = document["authorEmail"]
        templateName = document["templateName"]
        templateDescription = document["templateDescription"]
        templateStatus = document["templateStatus"]
        Count = document["Count"]
        image = document["image"]
        dateCreated = document["dateCreated"]

        writer.writerow([id, authorName, authorEmail, templateName, templateDescription, templateStatus, Count, image, dateCreated])







# Load the website_classification.csv dataset
webs = pd.read_csv('output.csv')
print(webs.head())

webs = webs[["id", "authorName", "authorEmail", "templateName", "templateDescription", 'templateStatus', 'Count', 'image', 'dateCreated']]
# webs['templateName'] = webs['Category'] + " " + webs['cleaned_website_text']
# webs = webs.drop(columns=['cleaned_website_text'])
webs['templateDescription'] = webs['templateDescription'].apply(lambda x: x.lower())

# Stem the words
ps = PorterStemmer()
def stem(text):
    y = []
    for i in text.split():
        y.append(ps.stem(i))
    return " ".join(y)
webs['templateDescription'] = webs['templateDescription'].apply(stem)

# Create the vector for the tags
cv = CountVectorizer(max_features=5000, stop_words='english')
vector = cv.fit_transform(webs['templateDescription']).toarray()

# Calculate the similarity matrix
similarity = cosine_similarity(vector)

# Define the recommend function
def recommend(web):
    index = webs[webs['templateDescription'] == web].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommendations = []
    for i in distances[1:6]:
        recommendations.append(webs.iloc[i[0]].id)
    return recommendations

# Define the API route for recommendations
@app.route('/recommend', methods=['POST'])
def get_recommendations():
    data = request.get_json(force=True)
    category = data['category']
    recommendations = recommend(category)
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True,host='localhost', port=5000)
