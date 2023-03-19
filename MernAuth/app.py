from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import pandas as pd
import ast
import nltk
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)  

# Load the website_classification.csv dataset
webs = pd.read_csv('website_classification.csv')
webs = webs[['website_url', 'cleaned_website_text', 'Category']]
webs['tags'] = webs['Category'] + " " + webs['cleaned_website_text']
webs = webs.drop(columns=['cleaned_website_text'])
webs['tags'] = webs['tags'].apply(lambda x: x.lower())

# Stem the words
ps = PorterStemmer()
def stem(text):
    y = []
    for i in text.split():
        y.append(ps.stem(i))
    return " ".join(y)
webs['tags'] = webs['tags'].apply(stem)

# Create the vector for the tags
cv = CountVectorizer(max_features=5000, stop_words='english')
vector = cv.fit_transform(webs['tags']).toarray()

# Calculate the similarity matrix
similarity = cosine_similarity(vector)

# Define the recommend function
def recommend(web):
    index = webs[webs['Category'] == web].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommendations = []
    for i in distances[1:6]:
        recommendations.append(webs.iloc[i[0]].website_url)
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
