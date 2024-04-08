from flask import Blueprint, jsonify, request
import google.generativeai as palm

# Create blueprints
medical_bp = Blueprint('medical', __name__)
another_route_bp = Blueprint('another_route', __name__)

# List available models and select the first one that supports text generation
models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
model = models[0].name if models else None

@medical_bp.route('/', methods=['POST'])
def medical_question():
    try:
        input_data = request.get_json()

        if not input_data:
            return jsonify({"error": "No input data provided"}), 400

        question = input_data.get('question', '')

        medical_prompt = f"""
        You are SatAI, an education assistant providing support in math and physics.
        You will be given a question below, and you are only allowed to answer questions related to educational topics.
        Do not answer questions non-maths and non-physics.
        If the question is a greeting, you are allowed to respond appropriately.
        If you are asked who you are or what you say, tell the user that you are SatAI, an education assistant.
        If the question is related to math and physics, provide a response.
        Otherwise, apologize and mention that you can only answer educational questions.
        The question: {question}
        """

        # Assuming 'palm' is properly configured and available
        response = palm.generate_text(
            model=model,
            prompt=medical_prompt,
            max_output_tokens=800,
        ).result

        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# @another_route_bp.route('/', methods=['POST'])
# def another_functionality():
#     try:
#         # Implement your logic for the new route here
#         # Access input data using request.get_json() as needed

#         return jsonify({"message": "This is another route with similar functionality"})

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
