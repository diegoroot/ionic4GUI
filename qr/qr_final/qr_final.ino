#include "SPI.h"
#include "Adafruit_GFX.h"
#include "Adafruit_ILI9341.h"
#include "qrcode.h"
QRCode qrcode;
// For the Adafruit shield, these are the default.
#define TFT_DC 9
#define TFT_CS 10

// Use hardware SPI (on Uno, #13, #12, #11) and the above for CS/DC
Adafruit_ILI9341 tft = Adafruit_ILI9341(TFT_CS, TFT_DC);
// If using the breakout, change pins as desired
//Adafruit_ILI9341 tft = Adafruit_ILI9341(TFT_CS, TFT_DC, TFT_MOSI, TFT_CLK, TFT_RST, TFT_MISO);
String men2 = "hola";
void setup() {
  Serial.begin(9600);
  Serial.println("ILI9341 Test!"); 
 
  tft.begin();

  // read diagnostics (optional but can help debug problems)
  uint8_t x = tft.readcommand8(ILI9341_RDMODE);
  Serial.print("Display Power Mode: 0x"); Serial.println(x, HEX);
  x = tft.readcommand8(ILI9341_RDMADCTL);
  Serial.print("MADCTL Mode: 0x"); Serial.println(x, HEX);
  x = tft.readcommand8(ILI9341_RDPIXFMT);
  Serial.print("Pixel Format: 0x"); Serial.println(x, HEX);
  x = tft.readcommand8(ILI9341_RDIMGFMT);
  Serial.print("Image Format: 0x"); Serial.println(x, HEX);
  x = tft.readcommand8(ILI9341_RDSELFDIAG);
  Serial.print("Self Diagnostic: 0x"); Serial.println(x, HEX);

   
  
  Serial.println(F("Benchmark                Time (microseconds)"));
  delay(10);
  cambiar();
  Serial.println(F("Done!"));

}

void cambiar(){
        tft.fillScreen(ILI9341_WHITE);
        tft.setRotation(0);
        tft.setCursor(80, 5);
        tft.setTextColor(ILI9341_BLACK);
        tft.setTextSize(3);
        tft.println("UCEVA");
        tft.setTextSize(2);
        tft.setCursor(10, 55);
        tft.println("Sala A");
        tft.setCursor(10, 85);
        tft.println("08:12:49 P.M");
        //TFTscreen.fillScreen(BLACK);
        
        char str_array[men2.length()+1];
        men2.toCharArray(str_array, men2.length()+1);
        uint8_t qrcodeData[qrcode_getBufferSize(5)];
        
        
        qrcode_initText(&qrcode, qrcodeData, 5, 0,  str_array); // your text in last parameter, e.g. "Hello World"
        for (uint8_t y = 0; y < qrcode.size; y++) {
            // Each horizontal module
            for (uint8_t x = 0; x < qrcode.size; x++) {
                if(qrcode_getModule(&qrcode, x, y)) {
                    tft.fillRect(45+(x*4), 150+(y*4), 4, 4,ILI9341_BLACK);
                }
            }
        }

        delay(9990);
        // Rotate the screen
        tft.setRotation(0);
        // clear the screen with a white background
        tft.fillScreen(ILI9341_WHITE);
        tft.setCursor(80, 5);
        tft.setTextColor(ILI9341_BLACK);
        tft.setTextSize(3);
        tft.println("UCEVA");
        tft.setTextSize(2);
        tft.setCursor(10, 55);
        tft.println("Sala A");
        tft.setCursor(10, 85);
        tft.println("09:12:49 P.M");
        
        men2 = "holaaa";
        str_array[men2.length()+1];
        men2.toCharArray(str_array, men2.length()+1);
        
        qrcode_initText(&qrcode, qrcodeData, 5, 0, str_array); // your text in last parameter, e.g. "Hello World"
        for (uint8_t y = 0; y < qrcode.size; y++) {
            // Each horizontal module
            for (uint8_t x = 0; x < qrcode.size; x++) {
                if(qrcode_getModule(&qrcode, x, y)) {
                    tft.fillRect(45+(x*4), 150+(y*4), 4, 4,ILI9341_BLACK);
                }
            }
        }

        delay(9990);
}


void loop(void) {
}
