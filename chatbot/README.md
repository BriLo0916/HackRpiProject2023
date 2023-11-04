# Welcome to MedMind! 🚀🧠🤖

Hey there! Welcome to MedMind, a chatbot that helps your mental health by providing you with a safe space to talk about your feelings and emotions.

MedMind is well-informed on a number of topics by reading books on each topic.

## Installation

1. Clone this repository to your local machine.
```
git clone git@github.com:BriLo0916/HackRpiProject2023.git
cd chatbot
```

2. Create a virtual environment and activate it (optional, but recommended).
```
python -m venv venv
source venv/bin/activate
```

3. Install the required packages.
```
pip install -r requirements.txt
```

## Rebuild the Vector Database
1. Create a new directory called `data` in the folder `chatbot`.
2. Store .pdf files in the `data` directory that you want to use to build the vector database.
  - NOTE: The `DATA_PATH` variable in `ingest.py` looks for the `data` directory and the `DB_FAISS_PATH` variable shows where the database will be stored.
4. Run the following command to build the vector database.
```
python ingest.py
```

## Run the Chatbot
1. Run the following command to start the chatbot locally.
```
chainlit run model.py -w
```

2. Follow instructions in the terminal to interact with the chatbot.

## Dependencies
- pypdf
- langchain
- torch
- accelerate
- bitsandbytes
- transformers
- sentence_transformers
- faiss_gpu
- chainlit
- huggingface_hub
- ctransformers

For reference see `frozen_requirements.txt`, it includes the exact versions of the dependencies used in this project. If you are having trouble installing the dependencies, try installing the exact versions listed in `frozen_requirements.txt`. It was built on Python 3.10.13 with CUDA 11.4.

## Data Sources
1. Self-love: "Loving Bravely" by Alexandra H. Solomon.
2. Trauma: "The Body Keeps the Score" by Dr. Bessel van der Kolk.
3. Recovering from addiction: "The Unexpected Joy of Being Sober" by Catherine Gray.
4. Advice for highly-sensitive people: "The Highly Sensitive Person" by Elaine N. Aron.
5. Burnout: "Burnout: The Secret to Unlocking the Stress Cycle" by Emily Nagoski and Amelia Nagoski.
6. Advice for people healing from emotional pain: "Emotional First Aid" by Guy Winch.
7. Advice for understanding family trauma: "It Didn’t Start with You: How Inherited Family Trauma Shapes Who We Are and How to End the Cycle" by Mark Wolynn.

## Example Prompts
### Self-love
```
What are some practical steps I can take to start loving myself more?
How can I improve my self-esteem and self-confidence?
What are the signs of low self-esteem, and how can I work on overcoming them?
Can you suggest daily affirmations or self-love exercises I can incorporate into my routine?
How do I identify and challenge negative self-talk and self-criticism?
```
### Trauma
```
How can I begin the process of healing from trauma and building resilience?
How can I re-establish a sense of safety and trust in my life after experiencing trauma?
How can I address any feelings of guilt, shame, or self-blame that may be linked to my traumatic experiences?
What is the role of religion, spirituality, and mindfulness in healing from trauma, and how can I integrate these practices into my life?
Are there specific therapeutic approaches that have been effective in trauma recovery?
```
### Recovering from addiction
```
What are the initial steps to take when seeking recovery from addiction?
How can I find and access professional help or treatment for addiction?
What is the importance of support systems in addiction recovery, and how can I build or strengthen mine?
Can you suggest strategies for coping with cravings and triggers during the recovery process?
What are the common obstacles and challenges people face in addiction recovery, and how can they be overcome?
```
### Advice for highly-sensitive people
```
What are the key characteristics of highly sensitive people, and how can I determine if I am one?
Can you provide strategies for managing and coping with sensory overload and overstimulation as a highly-sensitive person?
How can I communicate my needs and sensitivities to others without feeling misunderstood or overwhelmed?
What strategies can help highly sensitive people navigate social situations and conflicts effectively?
How can I set boundaries in relationships and at work to protect my emotional well-being as a highly-sensitive person?
```
### Burnout
```
What are the common signs and symptoms of burnout, and how can I recognize them in myself?
Can you suggest strategies for preventing burnout in the first place?
How can I communicate my burnout to my employer, colleagues, or loved ones and seek support?
How can I set realistic goals and boundaries to prevent overextending myself and experiencing burnout?
How can I set realistic goals and boundaries to prevent overextending myself and experiencing burnout?
```
### Advice for people healing from emotional pain
```
What are some common causes of emotional pain, and how can I identify the source of my own pain?
Can you suggest strategies for coping with and processing difficult emotions during the healing process?
How can I create a safe and nurturing environment for myself as I work through emotional pain?
Are there specific self-help exercises or practices that can facilitate emotional healing?
How can I build a support network of friends, family, or professionals to aid in my healing journey?
```
### Advice for understanding family trauma
```
How can I identify and acknowledge the presence of family trauma in my life and family history?
Can you explain the concept of intergenerational trauma and how it affects families?
What are the common signs and consequences of family trauma, and how can I recognize them within my family?
What role does professional therapy or counseling play in addressing family trauma, and how can I find a suitable therapist?
Can you provide guidance on setting boundaries and managing relationships with family members who may have contributed to the trauma?
```

## License
This project is licensed under the MIT License.
