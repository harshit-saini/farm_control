// including necessary libraries
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h> 

// wifi name and password
const char* ssid = "SKYNET 24G";
const char* password = "#mynet@skynet24";

// server URL
const char* host = "http://94c6c172eb72.ngrok.io";       // here i have to put the URL

// id of the deevice
const char* id = "60b625201a2c8506a6bef906";

int moisture_sensor_pin = 0;
int moisture_value = 0;
int moisture_percentage = 0;





void setup() {

 Serial.begin(9600);
 // We start by connecting to a WiFi network

 Serial.println();
 Serial.println();
 Serial.print("Connecting to ");
 Serial.println(ssid);

 WiFi.begin(ssid, password);

 while (WiFi.status() != WL_CONNECTED) {
 delay(500);
 Serial.print(".");
 }

 Serial.println("");
 Serial.println("WiFi connected");
 Serial.println("IP address: ");
 Serial.println(WiFi.localIP());

  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);

}



void loop() {


  // reading the moisture data
  moisture_value = analogRead(0);
  moisture_percentage = map(moisture_value, 0,1023,190,0);


 // We now create a URL for the request
 String url = "/device/data";
 String key = "?id=";
 String data1 = "&moisture=";

 HTTPClient http;
 http.begin(host + url + key + id + data1 + moisture_percentage);
 int httpCode = http.GET();
 if(httpCode > 0 ){
 // change the status of pump
      String payload = http.getString();   //Get the request response payload
      Serial.println(payload);                     //Print the response payload 


      StaticJsonBuffer<300> jsonBuffer;        //Static memory allocation to JSONbuffer 
      JsonObject& root = jsonBuffer.parseObject(payload);    //Parsing JSON object. {"pump":"value"}

      if (!root.success()){
          //Serial.println("parseObject() failed");
          return;
      }

      int toggle= root["pump"];       // Storing the value of pump in integer

      if(toggle == 1){
        digitalWrite(LED_BUILTIN, LOW);   // turn the LED on (HIGH is the voltage level)
      }else if(toggle == 0){
         digitalWrite(LED_BUILTIN, HIGH);    // turn the LED off by making the voltage LOW
      }

      
      
 }
 http.end();

 delay(3000);
}