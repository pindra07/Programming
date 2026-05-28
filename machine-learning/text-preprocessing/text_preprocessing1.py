
import nltk
nltk.download('punkt_tab')
from nltk.tokenize import sent_tokenize

corpus = """Hello, Welcome to my website. Please do watch teh entire series, to become expert in NLP"""

print(sent_tokenize(corpus))

for n in dir(nltk):
    print(n)



