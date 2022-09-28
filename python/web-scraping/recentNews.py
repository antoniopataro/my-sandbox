import requests
from bs4 import BeautifulSoup

url = "https://g1.globo.com/"

response = requests.get(url)
content = response.content
soup = BeautifulSoup(content, 'html.parser')

output = soup.find_all('a', class_="feed-post-link")

# print(soup)

for element in output:
    print(element.text)
    print(element.get('href'))