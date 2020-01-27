from flask import Flask, jsonify
import paho.mqtt.client as mqtt
import mysql.connector
broker_address="192.168.0.21"
client = mqtt.Client()
client.connect(broker_address)
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="",
  database = "reservas"
)
mycursor = mydb.cursor()

app = Flask(__name__)
@app.route('/home/<int:token>/<string:user>')
def pintar(token, user):
    consulta = "SELECT reserva.token,profesor.prof_nombre, profesor.prof_apellidos FROM `reserva` INNER JOIN profesor  WHERE profesor.prof_id = reserva.res_id_prof AND reserva.token = "+str(token)
    mycursor.execute(consulta)
    myresult = mycursor.fetchall()
    print('rows = '+ str(mycursor.rowcount))
    for x in myresult:
        print(x)
    print('ya'+str(myresult[0][1]))
    if(mycursor.rowcount>0 and user == myresult[0][1]):
        client.publish("node", "abrir puerta11")
        return 'correcto'
    else:
        return 'error'


if __name__ == '__main__':
    app.run(debug=True, port=5000)
