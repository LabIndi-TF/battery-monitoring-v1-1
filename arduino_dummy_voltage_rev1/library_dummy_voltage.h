#ifndef library_dummy_voltage_h
#define library_dummy_voltage_h

/******************************* INISIALISASI *********************************
JS 230920 Rev5: Menambahkan penjelasan inisialisasi
1. Inisialisasi berisi deklarasi variabel I/O, variabel buffer I/O, variabel 
buffer untuk algoritma dan setup
******************************************************************************/

/******************************************************************************
Pustaka Terkait*/
#include <SD.h>
#include <SPI.h>

/******************************************************************************
Deklarasi Variabel*/

#define REQUEST_RANDOM 0x11
#define READ_SD 0x14
#define WRITE_CONFIG 0x15
#define READ_CONFIG 0x16
//----------------------- TIMER AND COUNTER --------------------
#define DELAY_TIME 10
#define RECORDING_COUNTER (5000/DELAY_TIME)                  // RF : 5 detik
#define RANDOMGEN_COUNTER (1000/DELAY_TIME)                  // RF : 1 detik

//----------------------- NAMA FILE SD CARD --------------------
#define FILE_NAME "201105.csv"
#define CONFIG_NAME "config.csv"
#define DATA_LENGTH 5

//----------------------- DATA BUFFER BATMON --------------------
#define BUFFER_LENGTH 256

//----------------------- CLASS --------------------
File myFile;

//----------------------- STRUCT AND VARIABLES --------------------
byte buffer[100];
byte data_array[2*BUFFER_LENGTH];
int query_id;

int i = 0;
String data_buffer[DATA_LENGTH];
char receivedChar;

unsigned long randomgen_cnt;
unsigned long recording_cnt;

// JS : Untuk menulis data dari Node ke SD
const byte numChars = 100;
char receivedChars[numChars];
char blankChars[numChars];
char msgLength=0;

boolean newData = false;
boolean recordingData = false;

//----------------------- FUNCTION AND PROCEDURE --------------------
void allBegin(int BAUD);
void printDummyHeader();
void generateRandomData();
void saveDummyToSD();
void sendSerial();

#endif
