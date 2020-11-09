/**************************** INSIASI MODUL PROGRAM **************************
JS 250920 Rev5: menambahkan keterangan program
1. Mengaktifkan modul Serial Monitor dan GSM dengan baudrate tertentu
2. Mengkatifkan modul I2C : RTC, LCD, ADC
3. Mengkatifkan modul SPI : SDCard
******************************************************************************/
void allBegin(int BAUD){
  Serial.begin(BAUD);

  if (!SD.begin(53)) {
    Serial.println("initialization failed!");
    while (1);
  }

  delay(1000);
}

/************************* TANDAI AWAL PENULISAN FILE ************************
JS 250920 Rev5: menambahkan keterangan program
1. Membuka file csv, dan menandai awal dari iterasi penulisan file baru
******************************************************************************/
void printDummyHeader(){
  myFile = SD.open(FILE_NAME, FILE_WRITE);

  if(myFile){
    myFile.println("--ITERASI BARU--");
    myFile.close();
    //Serial.print("Sukses!");
  }
  else{
    //Serial.print("Error membuka file");
  }
}

/**************************** CIPTAKAN DATA RANDOM ***************************
JS 250920 Rev5: menambahkan keterangan program
1. Membuka file csv, dan menandai awal dari iterasi penulisan file baru
******************************************************************************/
void generateRandomData(){
  data_buffer[0] = String(i);
  for(int indeks=1;indeks<DATA_LENGTH;indeks++) data_buffer[indeks] = String(random(8,12));
}

/************************** TULIS DATA KE CSV SDCARD *************************
JS 250920 Rev5: menambahkan keterangan akses DI
JS 250920 Rev5: menambahkan keterangan program
1. Menulis data V dan I saat ini ke SD Card
******************************************************************************/
void saveDummyToSD(){
  // JS : tulis baris tersebut ke SD Card
  myFile = SD.open(FILE_NAME, FILE_WRITE);
  
  if(myFile){
    //Serial.print("Sukses!");
    for(int iter=0; iter<DATA_LENGTH; iter++){
      myFile.print(data_buffer[iter]);
      if(iter<(DATA_LENGTH-1)) myFile.print(',');
      else myFile.print('\n');
    }
    myFile.close();
  }
  else{
    //Serial.print("Error membuka file");
  }
}
/****************************** KIRIM DATA SERIAL ****************************
JS 250920 Rev5: menambahkan keterangan program
1. Jika ada permintaan data dari webserver, maka balas dengan Array berisi
   data.
2. Data float (misal 12.34) dibagi 2 (bagian bulat dan desimal), dan dikirim
   sebagai integer
******************************************************************************/
void sendSerial(){
  if(Serial.available()>0){
    /*
    while(Serial.readBytes((byte *) buffer,1)){
      data_array[query_id] = buffer[0];
      query_id = query_id+1;
      Serial.setTimeout(10);
    }
    
    switch (data_array[0]){
    */

    receivedChar = Serial.read();
    
    switch (receivedChar){
      case REQUEST_RANDOM:
        for(byte bufferIter = 0; bufferIter < BUFFER_LENGTH; bufferIter++){
          int theRandomNumber = int(random(800,1500));
          data_array[2*bufferIter] = (theRandomNumber&0x00FF)>>0;
          data_array[2*bufferIter+1] = (theRandomNumber&0xFF00)>>8;
          
          Serial.write(data_array[2*bufferIter]);
          Serial.write(data_array[2*bufferIter+1]);
        }
        /*
        for(bufferIter = 0; bufferIter < BUFFER_LENGTH*2; bufferIter++){
          Serial.write(data_array[bufferIter]);
        }
        */
      break;

      case READ_SD:
        myFile = SD.open(FILE_NAME);
    
        if(myFile){
          while (myFile.available()) {
            // JS : Kirim data ke pihak lain, di sini.
            Serial.write(myFile.read());
          }
          Serial.write(0x24);
        }
        else{
          //Serial.print("Error membuka file");
        }
        myFile.close();
      break;

      case WRITE_CONFIG:
        recordingData = !recordingData;

        if((recordingData == false) && receivedChars){
          // JS : kalau ada file nya, delete
          if(SD.exists(CONFIG_NAME)){
            SD.remove(CONFIG_NAME);
          }

          // JS : ada atau tidak sebelumnya, tetap lakukan write
          myFile = SD.open(CONFIG_NAME,FILE_WRITE);
          if(myFile){  
            for(int panjang=0;panjang<msgLength;panjang++){
              Serial.write(receivedChars[panjang]);
              myFile.print(receivedChars[panjang]);
            }
            myFile.close();
          }
          msgLength=0;
        }
        
      break;

      case READ_CONFIG:
        myFile = SD.open(CONFIG_NAME);
    
        if(myFile){
          while (myFile.available()) {
            // JS : Kirim data ke pihak lain, di sini.
            Serial.write(myFile.read());
          }
          //Serial.write(0x24);
        }
        else{
          //Serial.print("Error membuka file");
        }
        myFile.close();
      break;
      
      default: 
        if(recordingData == true){
          receivedChars[msgLength] = receivedChar;
          msgLength++;
        }
      break;
    }
  }
  /*
  for(int ulang=0; ulang<DATA_LENGTH; ulang++){
    Serial.print(data_buffer[ulang]);
    if(ulang<(DATA_LENGTH-1)) Serial.print(',');
    else Serial.print('\n');
  }
  */
  //Serial.println("Baca dari SD Card!");
}
