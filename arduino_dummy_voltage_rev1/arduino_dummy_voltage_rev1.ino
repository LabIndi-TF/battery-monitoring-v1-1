/****************************** CSV READ-WRITE *******************************
 * Nama     : Rio Alfriza Faiz, Jeremy Setiawan
 * Tanggal  : 9 November
 * Versi 2
 * 
 * JS 051120 Rev0 : Menyusun algoritma tahap 1 : menyedot CSV dari SDCard
 *                  module di Arduino
 * JS 061120 Rev1 : - Merapikan program
 *                  - Menyusun algoritma tahap 2 : menimpa CSV dari node ke 
 *                    SDCard di arduino
 * JS 091120 Rev2 : Menyiapkan generator 255 data random untuk webserver
 *                  Battery Monitoring
 *****************************************************************************/
/*Library yang digunakan pada program*/
#include <avr/io.h>
#include "library_dummy_voltage.h"

/*********************************** SETUP ************************************
 * JS 230920 Rev5 : menambahkan keterangan setup
 * 1. Fungsi setup hanya dieksekusi sekali di awal
 * 2. Setup berfungsi memulai modul dan menyatakan input-output pada modul
 * 3. Argumen dari fungsi allBegin adalah BAUD_RATE, untuk menyamakan baud 
 *    rate dari pustaka-pustaka yang melibatkan penulisan data serial
 *****************************************************************************/

void setup() {
  allBegin(9600);
  //printDummyHeader();
}

/****************************** MAIN PROGRAM **********************************
 * DN 031219 Rev0
 * JS 230920 Rev5: menambahkan keterangan, memperbaiki nama proses
 * CW 060120 Rev2: memisahkan input dan output pada sub program read dan write
 * Program Utama Akuisisi Data
 * Secara umum alur program adalah sebagai berikut:
 *  1. Mengakses I/O port
 *  2. Mengolah atau melakukan algoritma input maupun output
 *****************************************************************************/
void loop() {
  delay(DELAY_TIME);

  // JS : generate data random
  randomgen_cnt++;
  if(!(randomgen_cnt%RANDOMGEN_COUNTER)){
    i += 1;
    generateRandomData();
  }
  
  // JS : tulis baris tersebut ke SD Card
  if(!(recording_cnt%RANDOMGEN_COUNTER)){
    //saveDummyToSD();
  }
  
  // JS : Send Serial, untuk melakukan pengiriman data ke Webserver
  sendSerial();
}
