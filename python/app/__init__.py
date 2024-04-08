from flask import Flask
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

# Create Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Adjust origins as needed

# Retrieve the API key from environment variables
palm_api_key = os.getenv("PALM_API_KEY")

# Configure the Palm library with the API key
# palm.configure(api_key=palm_api_key)

from routes import medical_bp, another_route_bp

# Register blueprints
app.register_blueprint(medical_bp, url_prefix='/medical')
app.register_blueprint(another_route_bp, url_prefix='/another_route')
