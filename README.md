# Bionic Reader (Bionic Enhance Reader)
![Large](https://user-images.githubusercontent.com/46472696/169700815-af3bac43-62ad-4d03-b7b4-c7305465eddc.png)

## Description

A Chrome Extension Used to Assist Your Reading Experience. Potentially increase your reading speed drastically by **bolding** certain charaters in a word.

![image](https://user-images.githubusercontent.com/46472696/169659988-f24b94a3-a556-4eb1-9127-17337bd76f60.png)

## Installation
Currently, this package is published but is still under review, so using Chrome Development Features is required

### Steps
1. Click the Green "Code" Button, and then click the "Download ZIP" Button. Save the ZIP to your computer. ![image](https://user-images.githubusercontent.com/46472696/169659694-a26c2df1-53a6-44d4-b2a7-834d45db1bf9.png)

3. Locate the ZIP file, and extract it. You should end up having something like this: ![image](https://user-images.githubusercontent.com/46472696/169659798-db0ada46-1ce2-4261-82f2-4173754dc8c6.png)

4. Open Chrome, Edge, or any browser that supports chrome plugin.

5. Navigate to your Extension Bar, Find the "Manage Extension Button" and click it. ![Screenshot (260)](https://user-images.githubusercontent.com/46472696/169659530-4330ab65-83d8-4510-9175-9e37274a38db.jpg)

6. Once you're in the Extensions Section, on the top-right corner, turn on "Developer Mode" ![image](https://user-images.githubusercontent.com/46472696/169659582-419f5479-d22d-47e1-89b8-bd4790686492.png)

7. On the top-left corner, click "Load unpacked" ![image](https://user-images.githubusercontent.com/46472696/169659916-d60b0f6a-bea3-4892-9d41-9f65421218ff.png)
8. Select the entire *FOLDER*, and then click "Select Folder" ![image](https://user-images.githubusercontent.com/46472696/169659974-663f1ce8-2da7-47c0-88a0-b2e3c8d1d0c6.png)

9. DONE!! Now any webpage should look like this: ![image](https://user-images.githubusercontent.com/46472696/169660006-c683e1f5-cb2c-4571-b564-aed98eb4b838.png)



## Adding support for safari 

 ![image](/safari/img/safarexample.png)



## Compile the extension yourself
 ## Compiling extension for safari 
Having xcode installed is required for this.

### Steps
1. Change the manifest so it can compile in safari 

```bash

{
    "manifest_version": 2,
    "name": "Bionic Enhance Reader",
    "version": "0.0.1",
    "description": "Assist your reading with Bionic Enhance Reader",
    "icons": {
        "16": "img/icon16.png",
        "48": "img/icon48.png",
        "128":"img/icon128.png"
    },
    "content_scripts": [
        {
            "matches": ["https://*/*", "http://*/*"],
            "js": ["js/content.js"]
        }
    ]
}

```


2. Run the following command in your terminal:

```bash

sudo xcode-select -s /Applications/Xcode.app
xcrun /Applications/Xcode.app/Contents/Developer/usr/bin/safari-web-extension-converter
/path to the extension/Bionic-Enhance-Reader-main

```


3. Compile the xcode project 
4. go to safari preference and in advanced settings click the "show develop menu in bar" checkbox.
 ![image](/safari/img/devsettings.png)

5. Now you should see the develop menu in the safari toolbar. Go and check the "Allow Unsigned Extensions" option
 ![image](/safari/img/unsignedAllow.png)

6. Check in extensions tab in preference to see that the instalation was succesfull. 
 ![image](/safari/img/installationsuccesfull.png)




## Add support for Safari Ipad / Iphone. 

1. Connect your device via to the MAC via USB and select the target option to your device 
 ![image](/safari/img/BuildSetting.png)
2. Now go to the Signing and capabilities Tab and add your developer account. (In this way you don't need to pay for an apple developer account)
![image](/safari/img/TeamSigning.png)
3. Build the project for your device. 
4. Go to your device VPN Settings and allow the extension 
5. Then go to safari extensions and Enable the extension. 
6. Enjoy!