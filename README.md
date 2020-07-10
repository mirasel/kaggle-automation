# "Are you there?" problem - Kaggle automation
#### 

We often run some machine learning program in **Kaggle** that takes a long time to train. So we just 'Run all' the kernel and left it to complete. But **Kaggle** has an algorithm in its system which is called **60 minutes idle time**. What it does is, if you are inactive in your kernel editor for 60 minutes, **Kaggle** will automatically stop your session. This is very annoying when some kernel takes 5/6 hours to train. I made a program that will automate your **Kaggle** kernel. It will keep your kernel active every minute and after completion, it will automatically save your kernel version with 'Quick Save' option.

##### N.B : It won't work if your kernel takes more than 9 hours. Because Kaggle gives 9 hours continuous run time.

## How to use this
Before use it make sure your code is error free and your kernel session started completely. And now your are ready to click 'Run all'. But instead of clicking 'Run all' follow the following steps-
1. Open your browser console by selecting inspect/Developer tool or using shortcut `Ctrl+Shift+I`(Chrome) or `CMD+Option+I`(Mac) or `Ctrl+Shift+C`(others) or `F12` key .
2. Copy the code from `kagge-automation.js` file and paste it into your browser console.
3. Press `Enter`.

That's it. Your kernel will start running automatically. Now you left it as it is and do other works. 
##### If your console shows any error then copy and paste the code again. It will work fine. 
Do not 'cancel run' your kernel. If you do , then it will click the save version option automatically and will try to save it until you cancel it and stops the program. If you find any other errorEnjoy!!
