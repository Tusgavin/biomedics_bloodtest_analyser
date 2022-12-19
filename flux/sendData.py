import sys
import requests

url = 'https://gerenciamento-exame-de-sangue.onrender.com/save'

args = sys.argv
body = {}

for i in range (1, len(args), 2):
  body[args[i]] = args[i+1]     

x = requests.post(url, json = body)
  
plugin_output = ""\
+ "<Activity>\n"\
+ "  <attributes class=\"linked-list\">\n"\
+ "    <String xpdlId=\"url\">\n"\
+ "      <value>{value}</value>\n"\
+ "    </String>\n"\
+ "  </attributes>\n"\
+ "</Activity>"

print plugin_output.format(value = "Dados cadastrados com sucesso. Verifique nosso website.")