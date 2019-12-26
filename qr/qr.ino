#include <SPFD5408_Adafruit_GFX.h>
#include <SPFD5408_Adafruit_TFTLCD.h>
#include <SPFD5408_TouchScreen.h>
#include "qrcode.h"

QRCode qrcode;

#define LCD_CS A3
#define LCD_CD A2
#define LCD_WR A1
#define LCD_RD A0
#define LCD_RESET A4

#define  BLACK   0x0000
#define BLUE    0x001F
#define RED     0xF800
#define GREEN   0x07E0
#define CYAN    0x07FF
#define MAGENTA 0xF81F
#define YELLOW  0xFFE0
#define WHITE   0xFFFF
Adafruit_TFTLCD TFTscreen(LCD_CS, LCD_CD, LCD_WR, LCD_RD, LCD_RESET);

void setup() {
    Serial.begin(9600);

    /**********************
    | SCREEN              |
    **********************/
        TFTscreen.reset();
        TFTscreen.begin(0x9341);
        // Rotate the screen
        TFTscreen.setRotation(0);
        // clear the screen with a white background
        TFTscreen.fillScreen(WHITE);
        TFTscreen.setTextSize(2);
        TFTscreen.fillScreen(BLACK);

    /**********************
    | QR Code             |
    **********************/
        // Print First Time
        uint8_t qrcodeData[qrcode_getBufferSize(3)];
        qrcode_initText(&qrcode, qrcodeData, 3, 0, "hola"); // your text in last parameter, e.g. "Hello World"
        for (uint8_t y = 0; y < qrcode.size; y++) {
            // Each horizontal module
            for (uint8_t x = 0; x < qrcode.size; x++) {
                if(qrcode_getModule(&qrcode, x, y)) {
                    TFTscreen.fillRect(5+(x*4), 40+(y*4), 4, 4,WHITE);
                }
            }
        }
}

void loop(){
  
}
