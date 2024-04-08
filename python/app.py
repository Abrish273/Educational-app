from flask import Flask, jsonify, request
# from dotenv import load_dotenv
# import os
import google.generativeai as palm
from monsterapi import client
from flask_cors import CORS 


app = Flask(__name__)
CORS(app, resources={r"/generate_image": {"origins": "http://localhost:3000"}})

palm_api_key = "AIzaSyBwNE8B-VFMDtUDyn1S8Qu0_yXHgDZdHR8"

palm.configure(api_key=palm_api_key)
models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
if models:
    model = models[0].name
else:
    model = None

@app.route('/', methods=['POST'])
def education_question():
    try:
        input_data = request.get_json()

        if not input_data:
            return jsonify({"error": "No input data provided"}), 400

        question = input_data.get('question', '')

        education_prompt = f"""
        You are SatAI, an education assistant providing support in math and physics.
        You will be given a question below, and you are only allowed to answer questions related to educational topics.
        Do not answer questions non maths and non physics.
        If the question is a greeting, you are allowed to respond appropriately.
        If you are asked who you are or what you say, tell the user that you are SatAI, an education assistant.
        If the question is related to math and physics, provide a response.
        Otherwise, apologize and mention that you can only answer educational questions.
        The question: {question}
    """


        # Assuming 'palm' is properly configured and available
        response = palm.generate_text(
            model=model,
            prompt=education_prompt,
            max_output_tokens=800,
        ).result

        # Store the response in the previous chats dictionary
        # previous_chats[question.lower()] = response

        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjRjNjY5YWM0NGI2NGVlNTM2NTJlY2E4YzAwMDNiNmJjIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDEtMDJUMTQ6NTg6NDkuNjUxMDk4In0.tzMS7Omuka26q3bjt9FFvlC_7HAKtfW3kJLMwzPpyio'
monster_client = client(api_key)
model = 'txt2img'  # Replace with the desired model name

@app.route('/generate_image', methods=['POST'])
def generate_image():
    try:
        # Parse JSON data from the request
        data = request.get_json()

        # Extract prompt from the JSON data
        prompt = data.get("prompt")
        negprompts = data.get("negprompts", [])
        # Define input data for the Monster API
        input_data = {
            'prompt': prompt,
            'negprompt': ', '.join(negprompts),
            'samples': 4,
            'steps': 50,
            'aspect_ratio': 'square',
            'guidance_scale': 7.5,
            'seed': 2414,
        }

        # Call the Monster API to generate the image
        result = monster_client.generate(model, input_data)

        # Return the result to the frontend
        return jsonify({"success": True, "result": result['output']})

    except Exception as e:
        return jsonify({"success": False, "error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
