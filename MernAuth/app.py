from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import csv
from pymongo import MongoClient
import Levenshtein



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
# def recommend(web):
#     index = webs[webs['templateName'] == web].index[0]
#     distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
#     recommendations = []
#     for i in distances[:6]:
#         recommendations.append(webs.iloc[i[0]].id)
#     return recommendations

# def recommend(web):
#     distances = []
#     for i, template in webs.iterrows():
#         template_name = template['templateDescription']
#         similarity_score = Levenshtein.distance(web, template_name)
#         distances.append((i, similarity_score))
#     distances = sorted(distances, key=lambda x: x[1])
#     recommendations = [webs.iloc[i]['id'] for i, _ in distances[:6]]
#     return recommendations

# def recommend(web):
#     distances = []
#     for i, template in webs.iterrows():
#         templateDescription = template['templateDescription']
#         similarity_score = 1 - (Levenshtein.distance(web, templateDescription) / max(len(web), len(templateDescription)))
#         distances.append((i, similarity_score))
#     distances = sorted(distances, key=lambda x: x[1], reverse=True)
#     recommendations = [webs.iloc[i]['id'] for i, _ in distances[:6]]
#     return recommendations

def recommend(web):
    distances = []
    input_words = set(web.split())  # Split input category into individual words

    for i, template in webs.iterrows():
        templateDescription = template['templateDescription']
        template_words = set(templateDescription.split())  # Split template name into individual words
        matched_words = input_words.intersection(template_words)  # Find common words

        if len(matched_words) > 0:
            similarity_score = len(matched_words) / len(input_words)
        else:
            similarity_score = 0

        distances.append((i, similarity_score))

    distances = sorted(distances, key=lambda x: x[1], reverse=True)
    recommendations = [webs.iloc[i]['id'] for i, _ in distances[:6]]
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
