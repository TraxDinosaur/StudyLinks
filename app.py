import os
import random
import string
from urllib.parse import urlparse
from flask import Flask, render_template, request, jsonify, redirect, url_for, flash
import validators
from pymongo import MongoClient

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key-change-in-production")

# MongoDB Configuration
MONGO_URI = ""
client = MongoClient(MONGO_URI)
db = client.get_database("StudyLinks")
url_collection = db.url_mappings

def generate_code(length=6):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

def is_valid_url(url):
    try:
        if not url.startswith(('http://', 'https://')):
            url = 'https://' + url
        return validators.url(url) and url
    except:
        return False

def get_or_create_code(url):
    existing = url_collection.find_one({'url': url})
    if existing:
        return existing['code']

    attempts = 0
    while attempts < 100:
        code = generate_code()
        if not url_collection.find_one({'code': code}):
            break
        attempts += 1

    if attempts >= 100:
        return None

    url_collection.insert_one({'code': code, 'url': url})
    return code

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/shorten', methods=['POST'])
def shorten_url():
    url = request.form.get('url', '').strip()

    if not url:
        flash('Please enter a URL', 'error')
        return redirect(url_for('index'))

    validated_url = is_valid_url(url)
    if not validated_url:
        flash('Please enter a valid URL', 'error')
        return redirect(url_for('index'))

    code = get_or_create_code(validated_url)

    if not code:
        flash('Unable to generate unique code. Please try again.', 'error')
        return redirect(url_for('index'))

    flash(f'Your code is: #{code}', 'success')
    return redirect(url_for('index'))

@app.route('/retrieve', methods=['POST'])
def retrieve_url():
    code = request.form.get('code', '').strip()

    if code.startswith('#'):
        code = code[1:]

    if not code:
        flash('Please enter a code', 'error')
        return redirect(url_for('index'))

    mapping = url_collection.find_one({'code': code})
    if mapping:
        flash(f'Found URL: {mapping["url"]}', 'success')
        return redirect(url_for('index'))
    else:
        flash('Code not found. Please check and try again.', 'error')
        return redirect(url_for('index'))

@app.route('/go/<code>')
def redirect_to_url(code):
    mapping = url_collection.find_one({'code': code})
    if mapping:
        return redirect(mapping['url'])
    else:
        flash('Code not found', 'error')
        return redirect(url_for('index'))

@app.route('/api/stats')
def api_stats():
    total = url_collection.count_documents({})
    return jsonify({
        'total_urls': total,
        'total_codes': total
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
