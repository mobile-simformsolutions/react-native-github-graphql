# SimformRN

##  Project Desctiption
A react-native graphql sample project to fetch the top forked repositories of the user.

----------------------------------------
<img src="/app/assets/images/sample.png" width="400">

## Prerequisites

**iOS** : XCode(11.2) onwards

**Android** : Android Studio(3.5) with gradle(6.2) onwards

**Editor** : Visual Studio Code

## How to Setup Project

**Step 1:** Clone this repository.

**Step 2:** Go to the cloned repo and open it in termianl.

**Step 3:** Install the dependencies with `$ yarn`

**Step 4:** Run the yarn script to install the cocoapods `$ yarn podinstall`

## How to Run the Project

1. Open the project directory in to terminal
2. Run and build for either OS
    * Run iOS app
        ```bash 
        yarn ios
        ```
    * Run Android app
      ```bash 
      yarn android
      ```
    * Note: This yarn scripts will lint your code first. If there are no lint errors, then it will run the ios or android app. Otherwise it will show the lint errors in the terminal.

## Note

- **Make sure to use the valid Github Access Token  before you run this project**
    1. Open app/config/ApolloConfig file
    2. Update authorization as 'Bearer [Github Access Token Here]'

-----------------------------------------------------------------------------------------------------