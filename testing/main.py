from flask import Flask, render_template
import logging
import os

# Configure logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev_secret_key")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    # This would handle the contact form submission
    # For now, we'll just redirect back to the main page
    return redirect('/#contact')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
